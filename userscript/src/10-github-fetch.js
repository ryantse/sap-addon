/* ==========================================================================
 * SAP Addon — GitHub username fetch (replaces background page)
 * --------------------------------------------------------------------------
 * In the extension, content scripts asked the background page to fetch a
 * GitHub profile page via:
 *     browser.runtime.sendMessage({ contentScriptQuery: "githubFetchUsername",
 *                                   args: [userId, url.host, regex] })
 *
 * Crucially the host is ALWAYS url.host — the page you are currently on. The
 * addon never looks a user up on a different GitHub host, so the fetch is
 * always same-origin with the current page. We therefore use the page's own
 * fetch() with credentials:"include", which uses the browser's real cookie jar
 * on every platform (Chrome, Firefox, and Safari).
 *
 * This matters on Safari: Tampermonkey's GM_xmlhttpRequest there runs in a
 * context that does NOT share the browser cookie jar, so cross-origin GHE
 * requests come back as the anonymous sign-in page. A same-origin page fetch
 * sidesteps that entirely. GM_xmlhttpRequest is kept only as a last-resort
 * fallback for the (currently nonexistent) cross-origin case.
 * ======================================================================== */

/* Fetch a GHE profile page and scrape the configured full-name span. */
function fetchUsername(userId, hostnameGithub, regexNameOnProfilePageGithub) {
    const fetchURL = "https://" + hostnameGithub + "/" + userId;

    // Turn fetched HTML into a resolved name (or null), with a clear log when
    // GHE handed back its sign-in page.
    function parse(html, resolve) {
        try {
            html = html || "";
            const searchRegex = new RegExp(regexNameOnProfilePageGithub);
            const result = searchRegex.exec(html);
            if (!result) {
                if (_looksLikeLoginPage(html)) {
                    logFetchError(
                        userId,
                        fetchURL,
                        "received sign-in page (not authenticated — are you logged in to " + hostnameGithub + "?)"
                    );
                }
                resolve(null);
                return;
            }
            resolve((result[1] || "").trim());
        } catch (error) {
            logFetchError(userId, fetchURL, error);
            resolve(null);
        }
    }

    return new Promise(function (resolve) {
        const sameOrigin = hostnameGithub === window.location.hostname;

        // Primary path (always taken in practice): same-origin page fetch, which
        // carries the browser's session cookie reliably on all platforms.
        if (sameOrigin && typeof window.fetch === "function") {
            window
                .fetch(fetchURL, { credentials: "include", redirect: "follow" })
                .then((r) => r.text())
                .then((html) => parse(html, resolve))
                .catch((error) => {
                    logFetchError(userId, fetchURL, error);
                    resolve(null);
                });
            return;
        }

        // Last-resort fallback for a cross-origin GitHub host. Note: on Safari
        // this may return the logged-out page because GM_xmlhttpRequest does not
        // share the cookie jar — but the addon never actually hits this path
        // (lookups always use the current page's host).
        if (_gm.xhrAvailable()) {
            _gm.xhr({
                method: "GET",
                url: fetchURL,
                withCredentials: true,
                anonymous: false,
                onload: (response) => parse(response && response.responseText, resolve),
                onerror: (error) => {
                    logFetchError(userId, fetchURL, error);
                    resolve(null);
                },
                ontimeout: () => {
                    logFetchError(userId, fetchURL, "timeout");
                    resolve(null);
                },
            });
            return;
        }

        resolve(null);
    });
}

function _looksLikeLoginPage(html) {
    return (
        /\/login/.test(html) &&
        (/Sign in to GitHub/i.test(html) || /name="commit" value="Sign in"/i.test(html) || /<title>GitHub · Enterprise<\/title>/i.test(html))
    );
}

function logFetchError(userId, fetchUrl, error) {
    if (new RegExp(`[di]\\d{6}|c\\d{7}`, "i").exec(userId)) {
        // only logs error when it looks like a correct userId
        // either d/D/i/I + 6 numbers or c/C + 7 numbers
        console.log("SAP Addon - Error when fetching", fetchUrl, error);
    }
}

/* --- browser.runtime shim --------------------------------------------------
 * username.js calls browser.runtime.sendMessage(...) with a callback and also
 * registers browser.runtime.onConnect / onMessage listeners. Provide a minimal
 * surface that satisfies all of those without a real extension runtime.
 * ------------------------------------------------------------------------- */
const _onMessageListeners = [];
browser = {
    runtime: {
        // sendMessage(msg, callback): only githubFetchUsername is used by the
        // content scripts; resolve it locally via GM_xmlhttpRequest.
        sendMessage(message, callback) {
            if (message && message.contentScriptQuery === "githubFetchUsername") {
                const p = fetchUsername(...message.args);
                if (typeof callback === "function") p.then(callback);
                return p;
            }
            // other messages (e.g. local page->page) are delivered to listeners
            for (const l of _onMessageListeners) {
                try {
                    l(message, {}, () => {});
                } catch (e) {
                    /* ignore */
                }
            }
            if (typeof callback === "function") callback(undefined);
            return Promise.resolve(undefined);
        },
        onMessage: {
            addListener(fn) {
                _onMessageListeners.push(fn);
            },
            removeListener(fn) {
                const i = _onMessageListeners.indexOf(fn);
                if (i >= 0) _onMessageListeners.splice(i, 1);
            },
        },
        // onConnect drove the "re-run main() on tab activation" behaviour; we
        // handle that via visibilitychange in the shim, so this is a no-op sink
        // that still lets the feature files call addListener() safely.
        onConnect: {
            addListener() {},
            removeListener() {},
        },
    },
    // storage.local.remove is referenced by username.js (legacy cache cleanup)
    storage: {
        local: {
            remove(name, cb) {
                const p = removeFromStorage(name);
                if (typeof cb === "function") p.then(cb);
                return p;
            },
            get(name, cb) {
                const p = loadFromStorage(name, undefined).then((v) => ({ [name]: v }));
                if (typeof cb === "function") p.then(cb);
                return p;
            },
            set(obj, cb) {
                const name = Object.keys(obj)[0];
                const p = saveToStorage(name, obj[name]);
                if (typeof cb === "function") p.then(cb);
                return p;
            },
        },
    },
};
// also expose on window so any page-context code / settings panel can reach it
try {
    window.browser = browser;
} catch (e) {
    /* some managers run in a sandbox where window is read-protected; ignore */
}
