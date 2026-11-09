// ==UserScript==
// @name         SAP Addon
// @namespace    https://github.com/nikolockenvitz/sap-addon
// @version      1.26.1
// @description  Userscript port of the SAP Addon browser extension: auto login (GitHub, SharePoint, Stack@SAP, Mural, Jira, Pluralsight, Artifactory, DwC) and GitHub full-name replacement.
// @author       Niko Lockenvitz (extension) / userscript port
// @license      MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TiqJVB4uIOGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxcnRSdJES/5cUWsR4cNyPd/ced+8AoV5mqhmYAFTNMpKxqJjJroqdr/CjB4PoQ0Biph5PLabhOb7u4ePrXYRneZ/7c/QqOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZojiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfzDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpebPtjFOjcBRo12/4+tu3GCeB/Bq60lr9SB2Y/Sa+1tPAR0L8NXFy3NHkPuNwBhp50yZAcyU9TyOeB9zP6piwwcAt0r7m9Nfdx+gCkqavlG+DgEBgrUPa6x7u72nv790yzvx8RXHKAoIN1kgAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+QDCxYOE9M2vXcAAAV+SURBVGje7ZhrbJNVGMd/57Rvu61rV3ahWyeMq6CDoQg6EZRABI2XhERRUBTjvuE1aCKamGlMDB+IStSYmPB6Sfxk8IsyvCQqF1GCCBvgmCgXx7ZurLu3Xfue9/VDZ7tuhQkTE+L7T94P5/ac33POc55zWrBly5YtW7Zs2fr/SlDX/fsVS2+xzSkNc9oVSq+bPxe+7hSGeSWuvK7qi2qoFaZTKHVlsQtLVw2BGmqFCZCxA4EcyV1BN1V+jWK3pCdhcmpAcSCcYG9HgrhpZRi7sUijyq+lys0Rxc7WwVS5NEdyd3nOKIgBwyIUUxzuMuiMX1QE6EZjaQo+5YAAXpzr5fnKfHIdIuvInoTJlmP9bD7Sn6rbOt/H/MK0A91xk4rtIWIq6ejMPCfvLvCdl0ZZ8E3rIC8c7OFYjzFWutHjvwUz4AGkVIpNlR5ervKeFx6gQJO09RtIpZBKUeWTGfAAfpfknqAr1UeoC6+uQ8DKoJvvVxYzzydT47J8WeEB5AQHbKryDTsfsONMlC31vXz0Wz/14TgAB8/F+aSpD2GYCMNk3dS8rFAPTc1L9RnpQCiq2H4ywt7QIIlh4ejTJK9dX5AeN+yThqnHTk7KCg/gvK5AwyXTK7+3Ncb9O9syOs0pdKEssBLJcHNKwYPTPVkduL08h4AmaI8qhMo8Mw2dcdZ9HQLgmgkudq8KkutMzr00mIPbtEacM6FHWqecFx5AOq3MtlvKcnhrUSHTPRJhKIShONoepbEjmiqvDLqZmOtIjfmpLZZeESlYPS0PYSgYGUKmlbLR2BHl16HdBXBJQbFGql0k1JjwAPLA2Qj9wzKBAGrmFHBobQVf3Btk/SwvHixkcjuRhsnDs7wZRjZ+mz64AGuv9ib7jnBAWGk7ZS7JTH/mGeqPGEPtSh84N2NMeAA5EDF45ps2Ruw2UsBtV+Xx9vIAhx+dygMz8xGGSbEmuGNKOnyOnhukoTXKrjMDqbp5JW4q/dqoEJrhd/HqzUVsXTqRPWsm43XJdHh1xIhEDWTC1Pu6Zv0j+KE0qvj0SBfNXYO8tqyUBWW5ozqVepy8f2cQaVr43RLXsGz1eVMvwlDsaOplxdT8VP2a2V7qTvRl2Kko0HhmYVGWixU27+lAGIbeE53zj+GTaXRoS/ef7meFfoKVH/7OtoOddEVH39AvLS5h7Rx/Rt2XjT1Iw+Sr470MX+/V1xagWdaYADHD5PmdLdQd675oeABR+MqhrLO4HYKNtwbYuCRwQQODyuJ01yDlPheeYSEBsGV3KGN8OGrQ0BpFWXBuwOCXlgifHe2mY8DQw9a8i4ZPhpBSFOY52bSsjHd+aOdUOPkUiCvYf6oPxnDA7RBcXZyTtW313AkZ5UNnI6z++MSo50FYzr8k+GTWM0w2VJfw2MIS1i8o4Xh7lD+74+Rqkhsr8sf18Jrkd43IQiCHv34Feoe24JLhAZxFbsHj1ROT9gTMDuQyO5A75sC23jiPfNBEZTCPIo9Gb8zg17Yob9w3jRklOed5SibvgaF0rYfybhoXPIBTDSre+66Fh6oDlBW4ss1J3ZEwAZ/GDRXp/F/XEKb+dB/1pzMzzY76Tp5aXn4BB0wQQg95q8cNDyDKntpj/Z33K8vzqZrkocTnwiEFzeEY+070cqYzRvV0H5ozfUibWiOEeuOjDBZ7Na4JZn9mdA0kaGju19sKF/8r8AAiuGGXxX8nvaVkSQ21wgw896XHYXkntWxZ1Dgeg1Ko5Kvxsn+GmYIvfPJHn0jkP2Epa2HZsz+sGtcZGHndX66fgWeDu2qoXWoC5DrUNCVotyzhs1Dd43TA/OMy83/VPHn3BmprUzF/9s1Fh0uf3leFsEICR8j+d8uWLVu2bNmyZevS9BfPr68VmEH1DAAAAABJRU5ErkJggg==
// @match        *://github.wdf.sap.corp/*
// @match        *://github.tools.sap/*
// @match        *://github.concur.com/*
// @match        *://sap-my.sharepoint.com/*
// @match        *://login.microsoftonline.com/*
// @match        *://sap.stackenterprise.co/*
// @match        *://app.mural.co/*
// @match        *://jira.tools.sap/*
// @match        *://app.pluralsight.com/*
// @match        *://common.repositories.cloud.sap/*
// @match        *://int.repositories.cloud.sap/*
// @match        *://eng-srv.accounts.ondemand.com/*
// @match        *://eng-srv.accounts400.ondemand.com/*
// @match        *://dashboard.dwc.tools.sap/*
// @connect      github.wdf.sap.corp
// @connect      github.tools.sap
// @connect      github.concur.com
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @noframes
// ==/UserScript==


(function () {


/* ==========================================================================
 * SAP Addon — Userscript platform shim
 * --------------------------------------------------------------------------
 * Re-implements the browser-extension APIs that the original content scripts
 * depend on, backed by Tampermonkey/Violentmonkey GM_* APIs instead.
 *
 * Original source                      -> userscript equivalent
 *   browser.storage.local.{get,set}    -> GM_getValue / GM_setValue (sync)
 *   background fetch + sendMessage      -> GM_xmlhttpRequest (+ @connect)
 *   runtime.onConnect (re-run on focus) -> visibilitychange listener
 *   optional per-site permissions       -> always @match + per-site toggle
 *
 * Everything below intentionally keeps the SAME names/signatures the feature
 * scripts already call (execAsync, url, loadFromStorage, saveToStorage,
 * isEnabled, executeFunctionAfterPageLoaded, DOMObserver/domObserver) so the
 * ported feature files need (almost) no changes.
 * ======================================================================== */

/* globals GM_getValue, GM_setValue, GM_deleteValue, GM_xmlhttpRequest,
   GM_registerMenuCommand, GM, unsafeWindow */

const SAP_ADDON_USERSCRIPT = true;

/* `browser` is the API object the ported feature files reference by bare name
 * (browser.runtime.*, browser.storage.local.*). In a real page the userscript
 * manager makes window.browser === browser; we declare it here so the bare
 * reference resolves inside our wrapping IIFE too. It is populated by
 * 10-github-fetch.js. */
var browser;

/* --- GM API compatibility (TM classic GM_* vs. GM.* promise API) ---------- */
const _gm = (function () {
    const hasClassic = typeof GM_getValue === "function";
    return {
        getValue(key, def) {
            if (hasClassic) return GM_getValue(key, def);
            // GM.getValue is async; we avoid it by keeping a sync mirror (below)
            return def;
        },
        setValue(key, val) {
            if (hasClassic) return GM_setValue(key, val);
            if (typeof GM !== "undefined" && GM.setValue) return GM.setValue(key, val);
        },
        deleteValue(key) {
            if (hasClassic && typeof GM_deleteValue === "function") return GM_deleteValue(key);
            if (typeof GM !== "undefined" && GM.deleteValue) return GM.deleteValue(key);
        },
        xhr(opts) {
            if (hasClassic && typeof GM_xmlhttpRequest === "function") return GM_xmlhttpRequest(opts);
            if (typeof GM !== "undefined" && GM.xmlHttpRequest) return GM.xmlHttpRequest(opts);
            throw new Error("SAP Addon: GM_xmlhttpRequest is not available");
        },
        xhrAvailable() {
            return (
                (hasClassic && typeof GM_xmlhttpRequest === "function") ||
                (typeof GM !== "undefined" && !!GM.xmlHttpRequest)
            );
        },
        registerMenu(label, fn) {
            if (typeof GM_registerMenuCommand === "function") return GM_registerMenuCommand(label, fn);
            if (typeof GM !== "undefined" && GM.registerMenuCommand) return GM.registerMenuCommand(label, fn);
        },
    };
})();

/* --- async helper (kept identical to utils/browser-setup.js) -------------- */
const usePromisesForAsync = true;
function execAsync(asyncFunction, args, callback) {
    if (!Array.isArray(args)) args = [args];
    const r = asyncFunction(...args);
    if (r && typeof r.then === "function") {
        r.then(callback);
    } else {
        callback(r);
    }
}

const url = new URL(window.location.href);

/* --- storage: GM values are synchronous; wrap as Promises so the existing
 * `await loadFromStorage(...)` call sites keep working unchanged. ---------- */
function loadFromStorage(name, defaultValue = {}) {
    return new Promise(function (resolve) {
        let value = _gm.getValue(name, undefined);
        if (value === undefined || value === null) {
            resolve(defaultValue);
            return;
        }
        if (typeof value === "string") {
            // older TM stores JSON as string; parse defensively
            try {
                value = JSON.parse(value);
            } catch (e) {
                /* leave as-is */
            }
        }
        resolve(value);
    });
}

function saveToStorage(name, value) {
    return new Promise(function (resolve) {
        _gm.setValue(name, value);
        resolve();
    });
}

function removeFromStorage(name) {
    return new Promise(function (resolve) {
        _gm.deleteValue(name);
        resolve();
    });
}

/* Legacy cache key used to live under "usernameCache"; keep the cleanup. */
function deleteLegacyUsernameCache() {
    return removeFromStorage("usernameCache");
}

/* --- option gate ----------------------------------------------------------
 * Each feature module redefines isEnabled() in its own scope (see build.js)
 * so it closes over that module's `options`. This outer definition is only a
 * safe fallback for any call made from the shared/global scope.
 * ------------------------------------------------------------------------- */
function isEnabled(optionName) {
    return true; // default-enabled; modules override with option-aware version
}

/* --- DOM load helper (kept identical to utils/dom-helper.js) -------------- */
function executeFunctionAfterPageLoaded(func, args = []) {
    window.addEventListener("load", () => func(...args));
    if (document.readyState === "complete") func(...args);
}

/* --- DOM observer (kept identical to utils/dom-observer.js) ---------------- */
class DOMObserver {
    constructor(target) {
        this.observerCallbacks = {};
        const that = this;
        this.observer = new MutationObserver(function (mutation, _observer) {
            for (const id in that.observerCallbacks) {
                that.observerCallbacks[id](mutation, _observer);
            }
        });
        this.observer.observe(target || document, {
            childList: true,
            characterData: true,
            subtree: true,
        });
    }
    disconnect() {
        this.observer.disconnect();
    }
    registerCallbackFunction(id, callback) {
        if (!this.observerCallbacks[id]) {
            this.observerCallbacks[id] = callback;
        }
    }
    unregisterCallbackFunction(id) {
        delete this.observerCallbacks[id];
    }
}
const domObserver = new DOMObserver();

/* --- re-run hook -----------------------------------------------------------
 * The extension re-ran each content script's main() when its tab became
 * active (background did tabs.connect -> onConnect). A userscript only runs in
 * the active tab's page context, so we approximate that by re-running main()
 * whenever the tab becomes visible again or the settings panel saves changes.
 * Feature files register their main() via registerMainFunction().
 * ------------------------------------------------------------------------- */
const _sapMainFunctions = [];
function registerMainFunction(fn) {
    _sapMainFunctions.push(fn);
    return fn;
}
function rerunMainFunctions() {
    for (const fn of _sapMainFunctions) {
        try {
            fn();
        } catch (e) {
            console.error("SAP Addon - error re-running main()", e);
        }
    }
}
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") rerunMainFunctions();
});
// settings panel dispatches this after it mutates options/config in storage
window.addEventListener("sap-addon-settings-changed", rerunMainFunctions);


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


/* ==========================================================================
 * SAP Addon — Settings panel (replaces the extension popup)
 * --------------------------------------------------------------------------
 * The extension exposed a toolbar popup with: feature toggles (stored under
 * "options"), config fields email / user-id (stored under "config"), and an
 * "Optional Permissions" screen to grant per-site host access.
 *
 * A userscript has no toolbar popup and no per-site permission prompts (all
 * @match hosts are always active). We recreate the same control surface as:
 *   - a Tampermonkey menu command "SAP Addon: Settings" (see 90-menu.js) that
 *     opens an injected in-page modal rendered here;
 *   - the former per-site OPTIONAL PERMISSIONS become per-site ENABLE toggles
 *     (option key `site-<name>`), defaulting OFF for the sites that used to be
 *     optional and ON for the ones granted by default — preserving behaviour;
 *   - the email / user-id config fields;
 *   - a "Show all GitHub banners again" action.
 *
 * Writes go to the same storage keys the feature modules read ("options",
 * "config"), then we dispatch `sap-addon-settings-changed` so every module's
 * main() re-runs live, mirroring the extension's tabs.connect() behaviour.
 * ======================================================================== */

/* Option keys shown as feature toggles, grouped like the original popup. */
const SAP_SETTINGS_SCHEMA = {
    featureToggles: [
        { id: "github-show-names", label: "GitHub: Show Names", def: true },
        { id: "github-hide-notice-overlay", label: "GitHub: Overlay to hide yellow banners", def: true },
        { id: "github-project-rewrite-issue-rel-links", label: "GitHub: Projects — rewrite relative links", def: true },
        { id: "jira-count-tips", label: "SAP Jira: Show count tips", def: true },
    ],
    autoLogin: [
        { id: "github-sign-in", label: "GitHub", def: true },
        { id: "sharepoint-login", label: "Microsoft 365 / SharePoint", def: true },
        { id: "stackenterprise-login", label: "Stack Overflow (Stack@SAP)", def: true },
        { id: "mural-login", label: "Mural", def: true },
        { id: "pluralsight-login", label: "Pluralsight", def: true },
        { id: "artifactory-login", label: "Artifactory (JFrog)", def: true },
        { id: "dwc-login", label: "DwC (Deploy with Confidence)", def: true },
    ],
    config: [
        { id: "config-email", label: "Email address", placeholder: "your.email@sap.com", type: "email" },
        { id: "config-user-id", label: "SAP User ID", placeholder: "ID", type: "text" },
    ],
};

async function sapOpenSettingsPanel() {
    const [options, config] = await Promise.all([loadFromStorage("options"), loadFromStorage("config")]);

    // remove any existing panel
    document.getElementById("sap-addon-settings-overlay")?.remove();

    const overlay = document.createElement("div");
    overlay.id = "sap-addon-settings-overlay";
    Object.assign(overlay.style, {
        position: "fixed",
        inset: "0",
        background: "rgba(0,0,0,0.45)",
        zIndex: "2147483647",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    });
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
    });

    const panel = document.createElement("div");
    Object.assign(panel.style, {
        background: "#fff",
        color: "#1b1f24",
        marginTop: "40px",
        width: "360px",
        maxHeight: "85vh",
        overflowY: "auto",
        borderRadius: "10px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
        padding: "0 0 16px",
    });

    const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

    function sectionHeading(text) {
        return `<div style="font-weight:600;font-size:13px;letter-spacing:.02em;text-transform:uppercase;color:#57606a;padding:14px 18px 6px;">${esc(text)}</div>`;
    }
    function toggleRow(item, checked) {
        return `<label style="display:flex;align-items:center;justify-content:space-between;padding:8px 18px;cursor:pointer;font-size:14px;">
            <span>${esc(item.label)}</span>
            <input type="checkbox" data-opt="${esc(item.id)}" ${checked ? "checked" : ""} style="width:16px;height:16px;">
        </label>`;
    }
    function configRow(item, value) {
        return `<div style="padding:6px 18px;font-size:14px;">
            <div style="color:#57606a;margin-bottom:4px;">${esc(item.label)}</div>
            <input type="${item.type}" data-cfg="${esc(item.id)}" value="${esc(value || "")}" placeholder="${esc(item.placeholder || "")}"
                   style="width:100%;box-sizing:border-box;padding:7px 9px;border:1px solid #d0d7de;border-radius:6px;font-size:14px;background:#fff;color:#1b1f24;">
        </div>`;
    }
    const isOn = (item) => (options[item.id] !== undefined ? options[item.id] !== false : item.def !== false);

    panel.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;background:#0a69da;color:#fff;padding:12px 18px;border-radius:10px 10px 0 0;">
            <strong style="font-size:15px;">SAP Addon — Settings</strong>
            <span id="sap-addon-settings-close" style="cursor:pointer;font-size:20px;line-height:1;">&times;</span>
        </div>
        ${sectionHeading("Auto Login")}
        ${SAP_SETTINGS_SCHEMA.autoLogin.map((i) => toggleRow(i, isOn(i))).join("")}
        ${sectionHeading("Features")}
        ${SAP_SETTINGS_SCHEMA.featureToggles.map((i) => toggleRow(i, isOn(i))).join("")}
        ${sectionHeading("Configuration")}
        ${SAP_SETTINGS_SCHEMA.config.map((i) => configRow(i, config[i.id])).join("")}
        <div style="padding:10px 18px 0;">
            <button id="sap-addon-show-banners" style="width:100%;padding:8px;border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa;color:#1b1f24;cursor:pointer;font-size:13px;">
                Show all GitHub banners again
            </button>
        </div>
        <div style="padding:10px 18px 0;font-size:11px;color:#8c959f;line-height:1.4;">
            All data is stored locally in your userscript manager and is not shared with anyone. Changes apply immediately.
        </div>
    `;

    overlay.appendChild(panel);
    (document.body || document.documentElement).appendChild(overlay);

    panel.querySelector("#sap-addon-settings-close").addEventListener("click", () => overlay.remove());

    // toggles -> options
    panel.querySelectorAll("input[data-opt]").forEach((input) => {
        input.addEventListener("change", async () => {
            options[input.getAttribute("data-opt")] = input.checked;
            await saveToStorage("options", options);
            window.dispatchEvent(new CustomEvent("sap-addon-settings-changed"));
        });
    });
    // config inputs -> config
    panel.querySelectorAll("input[data-cfg]").forEach((input) => {
        input.addEventListener("change", async () => {
            config[input.getAttribute("data-cfg")] = input.value;
            await saveToStorage("config", config);
            window.dispatchEvent(new CustomEvent("sap-addon-settings-changed"));
        });
    });
    // "show all banners again" -> same message the extension sent to content scripts
    panel.querySelector("#sap-addon-show-banners").addEventListener("click", () => {
        if (window.browser?.runtime?.sendMessage) {
            window.browser.runtime.sendMessage({ message: "github-hide-notice-show-all-again" });
        }
        const btn = panel.querySelector("#sap-addon-show-banners");
        btn.textContent = "Done — banners restored";
        setTimeout(() => (btn.textContent = "Show all GitHub banners again"), 1500);
    });
}


/* ======================= module: github ======================= */
(function () {
if (!["github.wdf.sap.corp","github.tools.sap","github.concur.com"].includes(url.hostname)) return;
function isEnabled(optionName) { return !options || options[optionName] !== false; }
/* ---- content_scripts/github/config.js ---- */
// config is handled in each sub-file; this file is only to initialize the object
const github = {};

/* ---- content_scripts/github/sign-in.js ---- */
github.signIn = {
    optionName: "github-sign-in",
    query: "div.auth-form-body > a.btn-primary[href^='/login?'], header a.HeaderMenu-link[href^='/login?']",
    signInOtherTabQuery: ".js-stale-session-flash-signed-in a",
    urlPath: "/login",
};

function signIn() {
    if (url.pathname === github.signIn.urlPath) {
        executeFunctionAfterPageLoaded(function () {
            getSignInButtonAndClick();
        });
    }

    domObserver.registerCallbackFunction(github.signIn.optionName, function (mutations, _observer) {
        for (const { target } of mutations) {
            getSignInButtonAndClick(target);
        }
    });
}
// the handler to click on the button will be invoked a lot (>30) -> setting a flag after the first click prevents this
// but this needs to be time-bound, otherwise there will be no sign in after automatic logout
let alreadyClickedSignButtonAt = 0;
const DELAY_BEFORE_CLICKING_SIGNIN_BUTTON_AGAIN = 15 * 1000;
function getSignInButtonAndClick(element) {
    element = element && element.querySelector ? element : document;
    try {
        const signInBtn = element.querySelector(github.signIn.query);
        if (signInBtn && signInBtn.click && Date.now() - alreadyClickedSignButtonAt > DELAY_BEFORE_CLICKING_SIGNIN_BUTTON_AGAIN) {
            alreadyClickedSignButtonAt = Date.now();
            setTimeout(function () {
                signInBtn.click();
            }, 100); // when click is executed directly, github.tools.sap crashes in chrome
        }

        // there's a redirect during login; in case redirects are blocked by the browser: click link
        const redirectLink = getSignInRedirectLink(element);
        if (redirectLink && redirectLink.click) {
            redirectLink.click();
        }
    } catch {}
}
function getSignInRedirectLink(element) {
    const redirectLink = element.getElementById("redirect");
    return redirectLink && redirectLink.tagName === "A" && redirectLink.textContent === "click here" && url.pathname === "/login"
        ? redirectLink
        : null;
}
function stopAutoSignIn() {
    domObserver.unregisterCallbackFunction(github.signIn.optionName);
}
let signInOtherTabInterval = null;
function listenForSignInOtherTab() {
    /* when also non-active tabs are notified that settings changed and user
     * should get signed in, these tabs will be redirected to
     * github.wdf.sap.corp/saml/consume which throws a 404
     * -> only regularly checking works, maybe can be combined with mutation observer
     */
    if (signInOtherTabInterval) return;
    signInOtherTabInterval = setInterval(async function () {
        options = await loadFromStorage("options");
        if (isEnabled(github.signIn.optionName)) {
            const signInBtn = document.querySelector(github.signIn.signInOtherTabQuery);
            if (signInBtn) {
                const r = signInBtn.getBoundingClientRect();
                if (r.width !== 0 && r.height !== 0) {
                    signInBtn.click();
                }
            }
        }
    }, 2500);
}

/* ---- content_scripts/github/hide-notice-box.js ---- */
github.flashNotice = {
    optionName: "github-hide-notice-overlay",
    query: ".flash.flash-full.js-notice.flash-warn",
};

function hideDismissedNoticeBoxesAndInsertHideOverlayIfEnabled(insertOverlayEnabled = false) {
    function getTextOfNoticeBox(noticeBox) {
        let text = `${url.host} `;
        for (const containers of noticeBox.children) {
            for (const el of containers.children) {
                if (!el.classList.contains("sap-addon-hide-notice-box-overlay")) {
                    text += el.textContent;
                }
            }
        }
        return text;
    }
    function hideIfMessageIsSetToHidden(noticeBox) {
        if (getTextOfNoticeBox(noticeBox) in noticeBoxMessagesToHide) {
            noticeBox.style.display = "none";
        }
    }
    function clearOldNoticeBoxMessages() {
        const _90_DAYS_IN_MS = 90 * 24 * 60 * 60 * 1000;
        const now = getUnixTimestamp();
        for (const message in noticeBoxMessagesToHide) {
            const { dismissedAt } = noticeBoxMessagesToHide[message];
            if (now - dismissedAt > _90_DAYS_IN_MS) {
                delete noticeBoxMessagesToHide[message];
            }
        }
    }
    function insertOverlay(noticeBox) {
        if (!insertOverlayEnabled) return;
        if (noticeBox.hasAttribute("data-sap-addon-notice-box-inserted-overlay")) return;
        noticeBox.setAttribute("data-sap-addon-notice-box-inserted-overlay", "true");
        const container = noticeBox.children[noticeBox.children.length - 1];
        const overlay = document.createElement("p");
        overlay.classList.add("sap-addon-hide-notice-box-overlay");
        overlay.style = "text-align: right; font-size: 90%;";
        overlay.innerHTML = `SAP Addon:
        <a tabindex="0" style="cursor: pointer" data-sap-addon-link="hide-message">Don't show this message again</a> |
        <a tabindex="0" style="cursor: pointer" data-sap-addon-link="hide-once">Hide once</a>
        `;
        for (const link of overlay.querySelectorAll("a[data-sap-addon-link]")) {
            function listener(event) {
                const action = link.getAttribute("data-sap-addon-link");
                if (action === "hide-once") {
                    noticeBox.style.display = "none";
                } else if (action === "hide-message") {
                    noticeBoxMessagesToHide[getTextOfNoticeBox(noticeBox)] = {
                        dismissedAt: getUnixTimestamp(),
                    };
                    clearOldNoticeBoxMessages();
                    saveNoticeBoxMessagesToHideToStorage();
                    noticeBox.style.display = "none";
                }
            }
            link.addEventListener("click", listener);
            link.addEventListener("keyup", (event) => (event.keyCode === 13 ? listener(event) : null));
        }
        container.appendChild(overlay);
    }

    executeFunctionAfterPageLoaded(function () {
        for (const match of document.querySelectorAll(github.flashNotice.query)) {
            hideIfMessageIsSetToHidden(match);
            insertOverlay(match);
        }
    });

    _showElementsByQuery(`[data-sap-addon-notice-box-inserted-overlay] .sap-addon-hide-notice-box-overlay`);

    domObserver.registerCallbackFunction(github.flashNotice.optionName, function (mutations, _observer) {
        for (const { target } of mutations) {
            if (!target.querySelectorAll) continue;
            for (const match of target.querySelectorAll(github.flashNotice.query)) {
                hideIfMessageIsSetToHidden(match);
                insertOverlay(match);
            }
        }
    });
}
function removeHideOverlayInNoticeBoxes() {
    _hideElementsByQuery(`[data-sap-addon-notice-box-inserted-overlay] .sap-addon-hide-notice-box-overlay`);
}
function showAllNoticeBoxesAgain() {
    for (const message in noticeBoxMessagesToHide) {
        delete noticeBoxMessagesToHide[message];
    }
    saveNoticeBoxMessagesToHideToStorage();

    domObserver.unregisterCallbackFunction(github.flashNotice.optionName);
    executeFunctionAfterPageLoaded(function () {
        _showElementsByQuery(github.flashNotice.query);
    });
}

function _hideElementsByQuery(query, baseElement) {
    _setDisplayAttributeForElementsByQuery(query, baseElement, "none");
}

function _showElementsByQuery(query, baseElement) {
    _setDisplayAttributeForElementsByQuery(query, baseElement, "");
}

function _setDisplayAttributeForElementsByQuery(query, baseElement, displayValue) {
    baseElement = baseElement || document;
    try {
        for (const element of baseElement.querySelectorAll(query)) {
            element.style.display = displayValue;
        }
    } catch {}
}

let noticeBoxMessagesToHide = {};
function saveNoticeBoxMessagesToHideToStorage() {
    return saveToStorage("githubNoticeBoxMessagesToHide", noticeBoxMessagesToHide);
}

/* ---- content_scripts/github/username.js ---- */
github.showNames = {
    optionName: "github-show-names",
    // query, href exceptions, and queryTooltips will be filled with values below
    query: ``,
    hrefExceptions: [],
    userMentions: [],
    queryTooltips: ``,
    queryTooltipsAriaDescribedbyRef: ``,
    regexNameOnProfilePage: `<span class="p-name vcard-fullname d-block overflow-hidden" itemprop="name">([^<]*)</span>`,
    userIdFalsePositives: ["edited", "github-actions"],
    documentTitle: {
        optionName: "github-replace-names-in-document-title",
        userIdRegex: "[dDiI]\\d{6}|[cC]\\d{7}",
        rules: [
            { prefix: ` by `, suffix: ` · Pull Request` },
            { prefix: ` · `, suffix: `/` },
            { prefix: "^", prefixReplace: "", suffix: "/" },
            { prefix: "^", prefixReplace: "", suffix: "'s access for" },
        ],
    },
};

function initializeGitHubIdQueries() {
    // commit author, direct mentions
    _addQuery(`.user-mention`, { userMention: true });
    _addQuery(`.commit-author.user-mention`, { hrefException: true });
    _addQuery(`.author[data-test-selector="pr-timeline-events-commit-actor-name"]`, { hrefException: true });
    // commit author (last commit / commit history; older GHE)
    _addQuery(`div[data-testid="author-avatar"] > a[data-testid="avatar-icon-link"] + a[data-hovercard-url^="/users/"]`);
    _addQuery(`div[data-testid="author-link"] > a[data-hovercard-url^="/users/"]`);
    // commit author of last commit not linked to a GH account (single file view, box with info above actual file content; branch view with all files)
    _addQuery(`div[data-testid="latest-commit"] > div > div[data-testid="author-avatar"] > img + div[title] > span`, {
        hrefException: true,
    });
    _addQuery(`div[data-testid="latest-commit"] > div > span[class*="AvatarStack"] ~ div[data-testid="author-link"] > div[title] > span`, {
        hrefException: true,
    });
    // several places where username can be found (hovering opens card with profile info)
    _addQuery(`[data-hovercard-type=user]`);
    _addQuery(`a[data-hovercard-url^="/users/"]`);
    // ???
    _addQuery(`a.text-emphasized.Link--primary`);
    // issue comment authors
    _addQuery(`div[data-testid="issue-body"] a[data-hovercard-url][data-testid="issue-body-header-author"]`);
    _addQuery(`div[data-testid="comment-header"] a[data-hovercard-url][data-testid="avatar-link"]`);
    // repo landing page: contributor list
    _addQuery(`div.Layout-sidebar div > h2 + ul > li > a + span > a.Link--primary > strong`);
    // (pending) reviewers in PR ("xyz was requested for review" / "xyz approved these changes")
    _addQuery(
        `details.js-merge-review-section div.merge-status-item.review-item.js-details-container.Details div.review-status-item strong.text-emphasized`,
        {
            hrefException: (element) => {
                return element?.parentElement?.parentElement?.querySelector("[data-hovercard-type=user]");
            },
        },
    );
    // PR: "xyz requested your review" box
    _addQuery(`div#repo-content-pjax-container div.flash.flash-warn div a.text-emphasized.Link--primary`);
    // PR: "Files changed" > "Conversations"
    _addQuery(`a.js-conversations-menu-item div.d-flex img.avatar + span`);
    // PR hovercard in PR list or when PR is referenced somewhere ("xyz approved, you commented", where xyz might be a list of users)
    _addQuery(
        `div.Popover[data-hovercard-target-url*="/pull/"] > div.Popover-message--large.Box div.p-3 > div.border-top div.hovercard-icon + span.lh-condensed`,
        {
            hrefException: (element) => {
                return (
                    element.textContent.trim().endsWith(" approved, you commented") ||
                    element.textContent.trim().endsWith(" requested changes, you commented")
                );
            },
        },
    );
    // hovercard
    _addQuery(`div.Popover-message section + section a.text-bold.Link--primary`);
    // deployments: "branch is waiting to be deployed" "by", "Deployment protection rules" "requested review", "Review pending deployments" "requested by"
    _addQuery(`div.branch-action div.merge-status-list a.text-bold`);
    _addQuery(`div.actions-fullwidth-module > table td > div > div:has(img.avatar) + div > a.text-bold.Link--primary`);
    _addQuery(`dialog div.Overlay-header h3 div span.text-semibold:first-child`, { hrefException: true });

    // GHA: job latest attempt by
    _addQuery(`ul#attempt-navigation-list > li.ActionListItem span.ActionListItem-description > span > span.text-bold:last-child`);

    // projects (classic): card/issue creator
    _addQuery(`div.project-column div.d-flex small.color-fg-muted a.color-fg-default`);
    _addQuery(`div.d-flex div.js-project-issue-details-container small.color-fg-muted a.color-fg-default`);
    // projects (classic): activity pane
    _addQuery(`div.js-project-activity-pane.Details ul.js-project-activity-container li p a.text-bold`, { userMention: true });

    // projects (v2) meta: places where username appears with avatar (replaces few specific queries below)
    _addQuery(`img[data-testid="github-avatar"] + span`, {
        hrefException: true,
    });
    _addQuery(`span[data-avatar-count]:has(img[data-testid="github-avatar"]) + span`, {
        hrefException: true,
    });

    // projects (v2): item/issue details: creator of this item
    _addQuery(`header div > figure ~ address > span:first-child`, { hrefException: true });
    // projects (v2): item details: most-recent description editor
    if (url.hostname === "github.wdf.sap.corp" || url.hostname === "github.tools.sap") {
        _addQuery(`section article > header address`, { hrefException: true });
    } else {
        _addQuery(`section article > header address[data-testid="author-login"]`, { hrefException: true });
    }
    // projects (v2): issue details: comment author (creator)
    _addQuery(`a[data-testid="issue-body-header-author"]`);
    // projects (v2): issue details: comment author (comments)
    _addQuery(`div[data-testid="comment-header-left-side-items"] a[data-testid="avatar-link"]`);
    // projects (v2): issue details: comment edited by + menu with edits
    if (url.hostname === "github.wdf.sap.corp" || url.hostname === "github.tools.sap") {
        _addQuery(`div[data-testid="issue-body"] a[data-testid="issue-body-header-link"] + span > span > a`);
        _addQuery(
            `div[data-testid="issue-timeline-container"] div[data-testid="comment-header-left-side-items"] span[class*="MarkdownLastEditedBy"] > span > a`,
        );
    } else {
        _addQuery(`div[data-testid="issue-body"] div:has(h3) + div > div > span > a`);
        _addQuery(`div[data-testid="issue-timeline-front"] div[data-testid="comment-header-right-side-items"] span > a`);
    }
    _addQuery(
        `div[class*="Overlay"] > div[class^="prc-ActionMenu"] > ul[role="menu"] > li[role="none"] > ul[role="group"] > li[role="menuitem"] > div > span:has(img[data-testid="github-avatar"]) + [data-component="ActionList.Item--DividerContainer"] > div span[id$="--label"] > span`,
        { hrefException: true },
    );
    // projects (v2): item/issue details: assignees
    /// `section div[data-testid="sidebar-field-Assignees"] img[data-testid="github-avatar"] + span`
    _addQuery(
        `div[data-testid="sidebar-section"] ul > li > a[data-hovercard-url] > span:has(img[data-testid="github-avatar"]) + div[data-component="ActionList.Item--DividerContainer"] > span > div[data-testid="issue-assignees"]`,
    );
    // projects (v2): item details: assignees ("A and B", ..., "A, B, C, and D", ...)
    _addQuery(`section div[data-testid="sidebar-field-Assignees"] div > span[class*="AvatarStack"] + span`, {
        hrefException: true,
    });
    // projects (v2): issue details: timeline events (user mentions, added labels/assignees, etc.)
    if (url.hostname === "github.wdf.sap.corp" || url.hostname === "github.tools.sap") {
        /// covered by `img[data-testid="github-avatar"] > span`
    } else {
        _addQuery(
            `div[data-testid="issue-timeline-front"] > section[aria-label="Events"] div.Timeline-Item a[data-testid="actor-link"][data-hovercard-url^="/users/"]:has(img[data-testid="github-avatar"])`,
        );
    }
    // projects (v2): issue details: timeline events: person that has been assigned
    if (url.hostname === "github.wdf.sap.corp" || url.hostname === "github.tools.sap") {
        _addQuery(
            `div[data-testid="issue-timeline-container"] > section[aria-label="Events"] div.Timeline-Item a[data-hovercard-url^="/users/"][class*="assignees-module__assigneeLink--"]`,
        );
    } else {
        _addQuery(
            `div[data-testid="issue-timeline-front"] > section[aria-label="Events"] div.Timeline-Item a[data-hovercard-url^="/users/"][class*="assignees-module__assigneeLink--"]`,
        );
    }
    // projects (v2): table assignees column / reviewers column (github.wdf)
    /// `div[role="gridcell"] img[data-testid="github-avatar"] + span`
    /// `div[role="gridcell"] span[class*="AvatarStack__AvatarStackWrapper"] + span
    // projects (v2): table assignees column (github.tools)
    /// `div[data-testid^="TableCell"][data-testid$="column: Assignees}"] img[data-testid="github-avatar"] + span`
    /// `div[data-testid^="TableCell"][data-testid$="column: Assignees}"] span[class*="AvatarStack__AvatarStackWrapper"] + span`
    // projects (v2): table reviewers column (github.tools)
    /// `div[data-testid^="TableCell"][data-testid$="column: Reviewers}"] img[data-testid="github-avatar"] + span`
    /// `div[data-testid^="TableCell"][data-testid$="column: Reviewers}"] span[class*="AvatarStack__AvatarStackWrapper"] + span`
    // projects (v2): slice by assignees
    if (url.hostname === "github.wdf.sap.corp" || url.hostname === "github.tools.sap") {
        _addQuery(
            `div[class*="slicer-items-module__SlicerPanel--"] li div[class*="slicer-items-module__leadingContent"]:has(div > img[data-testid="github-avatar"]) + div > div > h3`,
            {
                hrefException: true,
            },
        );
    } else {
        _addQuery(
            `div[data-testid="slicer-panel"] li div.actionlistitem-leadingcontent:has(div > img[data-testid="github-avatar"]) + div > div > h3`,
            {
                hrefException: true,
            },
        );
    }
    // projects (v2): group by assignees
    /// github.wdf `div[role="rowgroup"] > div > div[role="row"] > div[role="cell"] > div > span[class*="AvatarStack__AvatarStackWrapper"] + span`
    /// github.tools `div[data-testid^="group-header"] span[class*="AvatarStack__AvatarStackWrapper"] + span[data-testid="group-name"]`
    // projects (v2): card assignee tooltip
    if (url.hostname === "github.wdf.sap.corp" || url.hostname === "github.tools.sap") {
        _addTooltipQuery(`div[data-board-card-id] figure img[aria-describedby]`, { ariaDescribedbyRef: true });
    } else {
        _addTooltipQuery(`div[data-testid="board-card-header"] figure img[aria-describedby]`, { ariaDescribedbyRef: true });
    }
    // projects (v2): roadmap assignee tooltip
    if (url.hostname === "github.wdf.sap.corp" || url.hostname === "github.tools.sap") {
        _addTooltipQuery(`div.roadmap-table-cell + div[data-date-start] figure img[data-testid="github-avatar"][aria-describedby]`, {
            ariaDescribedbyRef: true,
        });
    } else {
        _addTooltipQuery(
            `div[data-testid="roadmap-view-item-pill-content"] figure[data-testid="roadmap-item-assignees"] img[aria-describedby]`,
            { ariaDescribedbyRef: true },
        );
    }
    // projects (v2): roadmap group name
    /// `div[data-testid="roadmap-items"] span[class*="AvatarStack__AvatarStackWrapper"] + span[data-testid="group-name"]`
    // projects (v2): archived items list item
    if (url.hostname === "github.wdf.sap.corp" || url.hostname === "github.tools.sap") {
        _addQuery(`main ul > li > label + div + div > div + div > relative-time + span`, { hrefException: true });
    } else {
        _addQuery(`main ul[data-testid="archived-item-list"] li div relative-time + span`, { hrefException: true });
    }
    // projects (v2): search for assignee
    _addQuery(`ul#filter-bar-component-results > li > ul > li > div > span:has(img[data-testid="github-avatar"]) + span > span > span`, {
        hrefException: true,
    });

    // wiki revisions history
    _addQuery(`#wiki-wrapper #version-form div > a.Link--muted span.text-bold`);
    // recent activity in dashboard (user commented)
    _addQuery(
        `div.js-recent-activity-container div.Box ul li.Box-row div.dashboard-break-word.lh-condensed.color-text-secondary span.color-text-secondary`,
        {
            hrefException: (element) => {
                return element.textContent.trim().endsWith(" commented") && element.textContent.trim() !== "You commented";
            },
        },
    );
    // issue description/comment edits (edited by)
    _addQuery(`div[data-testid="issue-body"] span[class*="MarkdownLastEditedBy-"] > span + span > a`);
    _addQuery(
        `div[data-testid="comment-header"] div[data-testid="comment-header-left-side-items"] span[class*="MarkdownLastEditedBy-"] > span + span > a`,
    );
    // issue description/comment edits (edits menu)
    _addQuery(
        `div[data-variant="anchored"] > div > ul > li > ul > li > span:has(img[data-testid="github-avatar"]) + div[data-component="ActionList.Item--DividerContainer"] div > span > span`,
        { hrefException: true },
    );
    // comment edit history
    _addQuery(`span.js-comment-edit-history details summary div span`);
    _addQuery(`div.js-suggested-changes-contents span details.dropdown summary.btn-link div span`);
    // dialog with comment edit history
    _addQuery(`details.details-overlay > details-menu.js-comment-edit-history-menu > ul > li img.avatar-user + span.text-bold`, {
        hrefException: true,
    });
    // dashboard: PR comments (white box: xyz commented ... ago)
    _addQuery(`div.issues_comment div.message a.Link--secondary > span.Link--primary.text-bold`);
    // team members in hovercard of a team in dashboard > your teams or in PR reviews
    _addQuery(`div.Popover-message div.d-flex > div.color-fg-muted > span > span.css-truncate-target.text-bold`, {
        hrefException: true,
    });
    // comment resolver in PR reviews (Conversation)
    _addQuery(`form.js-resolvable-timeline-thread-form strong`, { hrefException: true });
    // comment resolver in PR (Files Changed)
    _addQuery(
        `div.js-resolvable-timeline-thread-container div.comment-holder.js-line-comments div.js-resolvable-thread-toggler-container strong`,
        { hrefException: true },
    );
    _addQuery(`div.comment-holder details.review-thread-component.js-comment-container summary.js-toggle-outdated-comments strong`, {
        hrefException: true,
    });
    // member statuses on team's overview page (directly next to icon)
    _addQuery(`div.user-status-container a.Link--primary.text-bold.no-underline[data-hovercard-type="user"]`);
    // last commit authors 3+ people dialog (repo/folder/file view) + git blame dialog with all contributors to file
    _addQuery(`ul[data-testid="contributor-dialog-list"] > li a img[data-testid="github-avatar"] + div[title]`);
    // commit list (Files Changed view of PR)
    _addQuery(`#files_bucket div.pr-toolbar div.diffbar a.select-menu-item div.select-menu-item-text span.description`);
    // chart tooltip (insights > pulse)
    _addQuery(`body > div.svg-tip.n strong ~ strong`);
    // insights > contributors: card title in <repo>/graph/contributors
    _addQuery(
        `div:has(> a[data-hovercard-url] > img[data-testid="github-avatar"]) + div > h2[class*="ChartCardTitleHeading--"] > span > a:not([href^="/github-apps/"])`,
    );
    // user details in organization's admin view (people > specific user)
    _addQuery(`div.table-list-header > span.table-list-heading > strong`, { hrefException: true }); // xyz has access to n repos
    _addQuery(`p.org-user-notice-content > strong:first-child`, { hrefException: true }); // as an owner, xyz has ...
    // search: issues (xyz opened on ...) and commits (xyz committed ...)
    _addQuery(`div.issue-list-item div.text-small a.text-bold:not([data-hovercard-type="repository"])`);
    // release contributors
    _addQuery(`section div.col-md-9 > div.Box > div.Box-footer > div > h3 + ul + div.color-fg-muted`, { hrefException: true });
    // github app developer on app page
    _addQuery(`div.Layout-sidebar li > img.avatar.avatar-user + a`);

    // axis labels for insights charts
    _addQuery(`svg > g.highcharts-axis-labels > text`, { hrefException: true });

    // secret scanning: xyz closed this (or more generally: avatar with name)
    // _addQuery(`img[data-testid="github-avatar"] + span.text-bold`, { hrefException: true });

    // tooltips (reactions)
    _addTooltipQuery(`tool-tip[for^=reactions--reaction_button_component-]`);
    _addTooltipQuery(`div[aria-label="Reactions"] > span[role="tooltip"]`);
    _addTooltipQuery(`button[aria-label="All reactions"] ~ span[role="tooltip"]`);
    // tooltips (PR reviewers)
    _addTooltipQuery(`tool-tip[for^=awaiting-review-]`);
    _addTooltipQuery(`tool-tip[for^=review-status-]`);
    _addTooltipQuery(`tool-tip[for^=codeowner-]`);
    // tooltips: dashboard -> your teams -> popup (team member profile pictures)
    _addTooltipQuery(`div.AvatarStack div.AvatarStack-body.tooltipped`);
    // tooltips of 3+ committers
    _addTooltipQuery(`div.AvatarStack--three-plus + div > span.text-bold:first-child`);
}
function _addQuery(query, options = {}) {
    github.showNames.query += (github.showNames.query === "" ? "" : ",\n") + query;

    if (options?.hrefException) {
        switch (typeof options.hrefException) {
            case "boolean":
                github.showNames.hrefExceptions.push((element) => {
                    return element.matches(query);
                });
                break;

            case "function":
                github.showNames.hrefExceptions.push((element) => {
                    if (!element.matches(query)) return false;
                    return options?.hrefException(element);
                });
                break;

            default:
                console.error("Unexpected hrefException", options.hrefException);
                break;
        }
    }

    if (options?.userMention) {
        github.showNames.userMentions.push(query);
    }
}
function _addTooltipQuery(query, options = {}) {
    if (options.ariaDescribedbyRef) {
        github.showNames.queryTooltipsAriaDescribedbyRef += (github.showNames.queryTooltipsAriaDescribedbyRef === "" ? "" : ",\n") + query;
    } else {
        github.showNames.queryTooltips += (github.showNames.queryTooltips === "" ? "" : ",\n") + query;
    }
}
function initializeFurtherHrefExceptions() {
    github.showNames.hrefExceptions.push(_isInsightsPulseTooltip);
}
initializeGitHubIdQueries();
initializeFurtherHrefExceptions();

// element (CSS query match) -> { originalText, replacedText, textNode }
const sapReplacedElements = new Map();
// elements currently being fetched (deduplication guard)
const sapProcessing = new Set();
// elements that received a mutation while a fetch was in-flight
const sapPendingReprocess = new Set();

function replaceGitHubIdsWithUsername() {
    executeFunctionAfterPageLoaded(function () {
        /* execute once in cases where observer is not registered before
         * elements are changed/created (e.g. gets enabled in options)
         */
        _replaceAllChildsWhichAreUserId(document.body);
    });

    domObserver.registerCallbackFunction(github.showNames.optionName, function (mutations, _observer) {
        for (const { target } of mutations) {
            if (target.nodeName === "#text") {
                const element = target.parentElement;
                if (!element) continue;
                // if we previously replaced this element, re-process it directly without query matching
                // (query may no longer match due to structural changes in surrounding DOM)
                if (sapReplacedElements.has(element)) {
                    _replaceElementIfUserId(element);
                } else {
                    _replaceAllChildsWhichAreUserId(element);
                }
            } else {
                _replaceAllChildsWhichAreUserId(target);
            }
        }
    });
}
function showGitHubIdsAgain() {
    domObserver.unregisterCallbackFunction(github.showNames.optionName);
    for (const [_element, { originalText, textNode }] of sapReplacedElements) {
        textNode.nodeValue = originalText;
    }
    sapReplacedElements.clear();
    // nameToId siblings still use data-attributes (not text nodes we own), keep attribute-based restore for them
    for (const element of document.querySelectorAll("[data-sap-addon-original-content]")) {
        element.textContent = element.getAttribute("data-sap-addon-original-content");
        element.removeAttribute("data-sap-addon-original-content");
    }
    for (const element of document.querySelectorAll("[data-sap-addon-tooltip-original-content]")) {
        const tooltipType = element.getAttribute("data-sap-addon-tooltip-type");
        const originalTooltipContent = element.getAttribute("data-sap-addon-tooltip-original-content");
        if (tooltipType === "element") {
            element.textContent = originalTooltipContent;
        } else if (tooltipType === "aria-label") {
            element.setAttribute("aria-label", originalTooltipContent);
            element.setAttribute("data-visible-text", originalTooltipContent);
        } else if (tooltipType === "title") {
            element.setAttribute("title", originalTooltipContent);
        }
        element.removeAttribute("data-sap-addon-tooltip-original-content");
        element.removeAttribute("data-sap-addon-tooltip-new-content");
        element.removeAttribute("data-sap-addon-tooltip-type");
    }
}
function _replaceAllChildsWhichAreUserId(element) {
    try {
        if (element.matches?.(github.showNames.query)) {
            _replaceElementIfUserId(element);
        } else {
            const ancestor = element.closest?.(github.showNames.query);
            if (ancestor) _replaceElementIfUserId(ancestor);
        }
        for (const queryMatch of element.querySelectorAll(github.showNames.query)) {
            _replaceElementIfUserId(queryMatch);
        }
    } catch {}
    try {
        if (element.matches?.(github.showNames.queryTooltips)) {
            _replaceElementsTooltip(element);
        } else {
            const ancestor = element.closest?.(github.showNames.queryTooltips);
            if (ancestor) _replaceElementsTooltip(ancestor);
        }
        for (const queryMatch of element.querySelectorAll(github.showNames.queryTooltips)) {
            _replaceElementsTooltip(queryMatch);
        }
    } catch {}
    try {
        for (const queryMatch of element.querySelectorAll(github.showNames.queryTooltipsAriaDescribedbyRef)) {
            const tooltipElement = document.getElementById(queryMatch.getAttribute("aria-describedby"));
            if (tooltipElement === null) continue;
            _replaceElementsTooltip(tooltipElement);
        }
    } catch {}

    /**
     * When an element is changed where we previously replaced the user id (e.g. tooltip with reactions),
     * our query for matching this element might start too far up in the DOM tree, while the element
     * that has been changed (and was noticed by the DOM observer) is deep inside our query
     * (e.g. our query is "div#1 div#2 span" where the span holds the user id; if div#2 would change
     * and be checked in this function, the query wouldn't work (since we query from the match,
     * i.e. div#2, and not document.body here))
     * Similary, for tooltips, we might have the element with the tooltip and only a child is noticed
     * by the DOM observer.
     *
     * So far we noticed this only for the latter case (reaction tooltip in project issue).
     * Below's implementation is concretely for this and might need to be generalized later
     * if we also see this in other cases.
     */
    const parentWithUserIdTooltip = getParentWithAlreadyReplacedUserIdTooltip(element);
    if (parentWithUserIdTooltip) {
        _replaceElementsTooltip(parentWithUserIdTooltip);
    }
}
function getParentWithAlreadyReplacedUserIdTooltip(element) {
    let temp = element;
    if (temp.nodeName === "#text") return null;
    while (true) {
        if (!temp) return null;
        if (temp.hasAttribute("data-sap-addon-tooltip-original-content")) {
            return temp;
        }
        temp = temp.parentElement;
    }
}
async function _replaceElementIfUserId(element, maxRetries = 3) {
    if (maxRetries < 0) return;
    const { userId, prefix, suffix } = _getUserIdIfElementIsUserId(element);
    if (userId) {
        if (sapProcessing.has(element)) {
            sapPendingReprocess.add(element);
            return;
        }
        sapProcessing.add(element);
        try {
            let previousWidthInsightPulseTooltip = null;
            if (_isInsightsPulseTooltip(element)) {
                previousWidthInsightPulseTooltip = element.parentElement.getBoundingClientRect().width;
            }

            let username;
            if (isUserIdList({ userId, prefix, suffix })) {
                const usernames = await getUsernamesFromMultipleUserIdsString(userId);
                username = _makeUsernameTextForTooltip(usernames);
            } else {
                username = await _getUsername(userId);
            }
            if (username) {
                // replace userId with username
                const result = getDirectParentOfText(element, prefix + userId + suffix);
                if (result) {
                    const { container: idToNameElement, textNode } = result;
                    const initialText = prefix + userId + suffix;
                    if (textNode.nodeValue?.trim() !== initialText.trim()) {
                        // text changed while we resolved the username -> try again from scratch
                        sapProcessing.delete(element);
                        return _replaceElementIfUserId(element, maxRetries - 1);
                    }
                    const replacedText = prefix + username + suffix;
                    textNode.nodeValue = replacedText;
                    sapReplacedElements.set(element, { originalText: initialText, replacedText, textNode });

                    if (previousWidthInsightPulseTooltip) {
                        const currentWidth = element.parentElement.getBoundingClientRect().width;
                        const offsetLeft = parseFloat(element.parentElement.style.left);
                        element.parentElement.style.left = `${offsetLeft + (previousWidthInsightPulseTooltip - currentWidth) / 2}px`;
                    }
                }
                // replace username with userId
                const nameToIdElement = getNextElementSiblingDeep(result?.container);
                if (nameToIdElement && nameToIdElement.textContent.includes(username)) {
                    if (!nameToIdElement.hasAttribute("data-sap-addon-original-content")) {
                        nameToIdElement.setAttribute("data-sap-addon-original-content", nameToIdElement.textContent);
                        nameToIdElement.textContent = nameToIdElement.textContent.replace(username, userId);
                    }
                }
            }
        } finally {
            sapProcessing.delete(element);
            if (sapPendingReprocess.has(element)) {
                sapPendingReprocess.delete(element);
                _replaceElementIfUserId(element, maxRetries);
            }
        }
    }
}
function _getUserIdIfElementIsUserId(element) {
    const existing = sapReplacedElements.get(element);
    if (existing) {
        if (existing.textNode.nodeValue?.trim() === existing.replacedText.trim()) {
            return { prefix: "", userId: null, suffix: "" };
        }
        sapReplacedElements.delete(element); // React wrote a new value, re-process
    }
    let userId = !element.querySelector("[data-sap-addon-original-content]") ? element.textContent.trim() : null;
    if (userId === "" || !isElementALink(element)) {
        if (!_hrefException(element)) {
            userId = null;
        }
    }
    if (userId) {
        userId = _exceptionForCommitListPRFilesChanged(element, userId);
    }
    if (userId) {
        const trimmed = userId.trim();
        if (trimmed !== userId) {
            const idx = userId.indexOf(trimmed);
            return { prefix: userId.slice(0, idx), userId: trimmed, suffix: userId.slice(idx + trimmed.length) };
        }
    }
    if (userId) {
        for (const possiblePrefixOrSuffix of [
            {
                prefix: "@",
                furtherChecks: () => {
                    return github.showNames.userMentions.findIndex((q) => element.matches(q)) !== -1;
                },
            },
            { prefix: "edited by " },
            { suffix: " approved, you commented" },
            { suffix: " requested changes, you commented" },
            { suffix: " commented" },
        ]) {
            if (
                ((possiblePrefixOrSuffix.prefix && userId.startsWith(possiblePrefixOrSuffix.prefix)) ||
                    (possiblePrefixOrSuffix.suffix && userId.endsWith(possiblePrefixOrSuffix.suffix))) &&
                (!("furtherChecks" in possiblePrefixOrSuffix) || possiblePrefixOrSuffix.furtherChecks())
            ) {
                return {
                    prefix: possiblePrefixOrSuffix.prefix || "",
                    userId: userId.substring(
                        (possiblePrefixOrSuffix.prefix || "").length,
                        userId.length - (possiblePrefixOrSuffix.suffix || "").length,
                    ),
                    suffix: possiblePrefixOrSuffix.suffix || "",
                };
            }
        }
    }
    return { prefix: "", userId, suffix: "" };
}
function _hrefException(element) {
    for (const hrefException of github.showNames.hrefExceptions) {
        if (hrefException(element)) {
            return true;
        }
    }
    return false;
}
function _exceptionForCommitListPRFilesChanged(element, userId) {
    if (element.matches(`a.select-menu-item div.select-menu-item-text span.description`)) {
        if (
            element.childNodes.length === 3 &&
            element.childNodes[1].nodeName === "RELATIVE-TIME" &&
            element.childNodes[2].nodeName === "#text"
        ) {
            if (element.childNodes[0].nodeName !== "#text") {
                // already replaced
                return null;
            }
            if (element.childNodes[0].textContent.endsWith(" commits")) return null;
            return element.childNodes[0].nodeValue ?? element.childNodes[0].textContent;
        } else if (element.childNodes.length === 1) {
            return null;
        }
    }
    return userId;
}
function isUserIdList({ userId }) {
    return userId.includes(" and ");
}

async function _replaceElementsTooltip(element) {
    if (element.hasAttribute("data-sap-addon-already-replacing-tooltip")) {
        return; // already being replaced
    }

    // old tooltips use aria-label or even title, new ones use custom html element tool-tip with textContent
    // newest GHE uses span[role="tooltip"] with textContent
    const tooltipType = element.hasAttribute("aria-label")
        ? "aria-label"
        : element.nodeName === "TOOL-TIP" || element.getAttribute("role") === "tooltip"
          ? "element"
          : element.hasAttribute("title")
            ? "title"
            : "";
    const originalTooltipText =
        tooltipType === "element"
            ? element.textContent.trim()
            : tooltipType === "aria-label"
              ? element.getAttribute("aria-label")
              : tooltipType === "title"
                ? element.getAttribute("title")
                : "";
    if (originalTooltipText === element.getAttribute("data-sap-addon-tooltip-new-content")) {
        // value is still what we last set
        return;
        // otherwise, tooltip has been updated and we need to replace again
    }
    element.setAttribute("data-sap-addon-already-replacing-tooltip", "true");
    const replacedTooltipText = await _getNewTooltipText(originalTooltipText);
    element.setAttribute("data-sap-addon-tooltip-original-content", originalTooltipText);
    element.setAttribute("data-sap-addon-tooltip-new-content", replacedTooltipText);
    element.setAttribute("data-sap-addon-tooltip-type", tooltipType);
    if (tooltipType === "element") {
        element.textContent = replacedTooltipText;
    } else if (tooltipType === "aria-label") {
        element.setAttribute("aria-label", replacedTooltipText);
        element.setAttribute("data-visible-text", replacedTooltipText);
    } else if (tooltipType === "title") {
        element.setAttribute("title", replacedTooltipText);
    }
    element.removeAttribute("data-sap-addon-already-replacing-tooltip");
}
async function _getNewTooltipText(originalTooltipText) {
    // currently supports: emoji reactions, project issues cards
    // (A | A and B | A, B, and C) reacted with ... emoji
    // Assigned to (A | A and B | A, B, and C)
    const tooltipTypes = [
        { textAfterUserIds: " reacted with " },
        { textBeforeUserIds: "Assigned to " },
        { textBeforeUserIds: "Awaiting requested review from " },
        { textAfterUserIds: " is a code owner" },
        { textAfterUserIds: " approved these changes" },
        { textAfterUserIds: " requested changes" },
        { textAfterUserIds: " left review comments" },
    ];
    let currentTooltipType;
    for (const tooltipType of tooltipTypes) {
        if (
            (!tooltipType.textBeforeUserIds || originalTooltipText.includes(tooltipType.textBeforeUserIds)) &&
            (!tooltipType.textAfterUserIds || originalTooltipText.includes(tooltipType.textAfterUserIds))
        ) {
            currentTooltipType = tooltipType;
            break;
        }
    }
    if (!currentTooltipType) {
        // maybe only a list of userIds -> continue and see result
        currentTooltipType = {};
    }

    // split tooltip text which has following structure: "<textBefore><textBeforeUserIds><userIds><textAfterUserIds><textAfter>"
    let userIds = originalTooltipText;
    let textBefore = (textAfter = tempSplitResultAtTextBeforeUserIds = "");
    if (currentTooltipType.textBeforeUserIds) {
        [textBefore, tempSplitResultAtTextBeforeUserIds] = originalTooltipText.split(currentTooltipType.textBeforeUserIds);
        userIds = tempSplitResultAtTextBeforeUserIds;
    }
    if (currentTooltipType.textAfterUserIds) {
        [userIds, textAfter] = (tempSplitResultAtTextBeforeUserIds || originalTooltipText).split(currentTooltipType.textAfterUserIds);
    }

    const usernames = await getUsernamesFromMultipleUserIdsString(userIds);
    if (usernames.includes(null)) {
        // probably not a tooltip with usernames -> return original text
        return originalTooltipText;
    }
    return (
        textBefore +
        (currentTooltipType.textBeforeUserIds || "") +
        _makeUsernameTextForTooltip(usernames) +
        (currentTooltipType.textAfterUserIds || "") +
        textAfter
    );
}
async function getUsernamesFromMultipleUserIdsString(userIds) {
    const usernamePromises = [];
    if (userIds.includes(", and ")) {
        // more than two names
        const [firstUserIds, lastUserId] = userIds.split(", and ");
        for (const userId of firstUserIds.split(", ")) {
            usernamePromises.push(_getUsername(userId));
        }
        // lastUserId should not match something like "5 more" (e.g. in A, ..., B, and 5 more) or "2 other contributors" (e.g. in release contributors: A, B, and 2 other contributors)
        if (new RegExp(`^\\d+ (more|other contributors)$`).exec(lastUserId) === null) {
            usernamePromises.push(_getUsername(lastUserId));
        } else {
            usernamePromises.push(Promise.resolve(lastUserId));
        }
    } else if (userIds.includes(" and ")) {
        // two names
        for (const userId of userIds.split(" and ")) {
            usernamePromises.push(_getUsername(userId));
        }
    } else {
        // one name
        usernamePromises.push(_getUsername(userIds));
    }
    const usernames = (await Promise.allSettled(usernamePromises)).map((promiseResult) => promiseResult.value);
    return usernames;
}
function _makeUsernameTextForTooltip(usernames) {
    let usernameText = "";
    for (let i = 0; i < usernames.length; i++) {
        if (i !== 0 && usernames.length !== 2) {
            usernameText += ", ";
        }
        if (i === usernames.length - 1) {
            if (i === 0) {
                // only one username, no "and" needed
            } else if (i === 1) {
                usernameText += " and ";
            } else {
                // if more than two usernames there will already be a ", " (including a space)
                usernameText += "and ";
            }
        }
        usernameText += usernames[i];
    }
    return usernameText;
}

/* The request queue will store an array for each userId that should be retrieved from People/GitHub.
This array is to avoid multiple requests when a userId is requested multiple times (so that only
one request is made in the end). All waiting "observers" will be notified once the first call
received a username. When a username has been retrieved and is stored in the cache this queue is no
longer needed; it's only for the first time when _getUsername is called simultaniously multiple times
and there's no username in the cache yet.
*/
const userIdRequestQueue = {};
const userIdUpdateQueue = {};

const USERNAME_CACHE_IX_NAME = 0;
const USERNAME_CACHE_IX_UPDATED_AT = 1;

const USERNAME_CACHE_MAX_TIME_IN_S = 2_592_000; // 30 days: 30 * 24 * 60 * 60 = 2_592_000

async function _getUsername(userId) {
    if (!userId || github.showNames.userIdFalsePositives.includes(userId)) return null;
    const user = usernameCache[userId];
    const now = getUnixTimestamp(); // seconds/milliseconds don't matter so it's sufficient to get it only once
    if (user && user[USERNAME_CACHE_IX_NAME]) {
        // check if value is older than threshold
        if (now - user[USERNAME_CACHE_IX_UPDATED_AT] > USERNAME_CACHE_MAX_TIME_IN_S && !(userId in userIdUpdateQueue)) {
            // refetch in background; prevent multiple refetches
            // still return old value directly for best performance -> will only be updated when cache is requested the next time
            userIdUpdateQueue[userId] = true;
            (async () => {
                const username = await _fetchUsername(userId);
                if (username) {
                    usernameCache[userId] = [username, now];
                    saveUsernameCacheToStorage();
                }
                delete userIdUpdateQueue[userId];
            })();
        }
        return user[USERNAME_CACHE_IX_NAME] || userId;
    } else if (userId in userIdRequestQueue) {
        return new Promise((resolve) => {
            userIdRequestQueue[userId].push(function (username) {
                resolve(username || userId);
            });
        });
    } else {
        userIdRequestQueue[userId] = [];
        const username = await _fetchUsername(userId);
        if (username) {
            usernameCache[userId] = [username, now];
            saveUsernameCacheToStorage();
        }
        const observers = userIdRequestQueue[userId];
        delete userIdRequestQueue[userId];
        for (const notify of observers) {
            notify(username);
        }
        return username || userId;
    }
}

function _fetchUsername(userId) {
    return new Promise(function (resolve) {
        execAsync(
            browser.runtime.sendMessage.bind(browser.runtime),
            {
                contentScriptQuery: "githubFetchUsername",
                args: [userId, url.host, github.showNames.regexNameOnProfilePage],
            },
            (username) => {
                if (username && username !== "undefined") {
                    const name = decodeHtml(username);
                    resolve(name);
                } else {
                    resolve(null);
                }
            },
        );
    });
}

function decodeHtml(html) {
    // https://stackoverflow.com/a/7394787
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value.trim();
}

const regexPulseTooltipTextContentBefore = new RegExp(`^ commit(|s) authored by $`);
function _isInsightsPulseTooltip(element) {
    // same query string as in github.showNames.query + additionally check for text before
    return (
        element.matches(`body > div.svg-tip.n strong ~ strong`) &&
        regexPulseTooltipTextContentBefore.test(element.parentElement.childNodes[1].textContent)
    );
}

function getUnixTimestamp() {
    return Math.floor(Date.now() / 1000);
}

function isElementALink(element) {
    // check childs
    for (const linkChild of element.querySelectorAll("[href]")) {
        if (linkChild && element.textContent.trim() === linkChild.textContent.trim()) {
            return true;
        }
    }
    // check parents
    while (true) {
        if (!element) return false;
        if (element.hasAttribute("href")) return true;
        if (
            element.classList.contains("btn-link") &&
            (element.tagName.toLowerCase() === "button" ||
                (element.tagName.toLowerCase() === "summary" && element.getAttribute("role") === "button"))
        ) {
            return true;
        }
        element = element.parentElement;
    }
}

function getDirectParentOfText(baseElement, text) {
    if (baseElement.childNodes.length === 1 && baseElement.firstChild.nodeName === "#text" && baseElement.textContent.trim() === text) {
        return { container: baseElement, textNode: baseElement.firstChild };
    } else if (
        baseElement.childNodes.length === 2 &&
        baseElement.childNodes[0].nodeName === "IMG" &&
        baseElement.childNodes[1].nodeName === "#text" &&
        baseElement.childNodes[1].textContent.trim() === text
    ) {
        return { container: baseElement, textNode: baseElement.childNodes[1] };
    } else if (
        baseElement.childNodes.length === 3 &&
        baseElement.childNodes[0].nodeName === "#text" &&
        baseElement.childNodes[1].nodeName === "IMG" &&
        baseElement.childNodes[2].nodeName === "#text" &&
        baseElement.childNodes[2].textContent.trim() === text
    ) {
        return { container: baseElement, textNode: baseElement.childNodes[2] };
    } else {
        for (const child of baseElement.childNodes) {
            if (child.nodeName === "#text" && child.textContent.trim() === text.trim()) {
                return { container: baseElement, textNode: child };
            }
            if (child.childNodes.length > 0) {
                const r = getDirectParentOfText(child, text);
                if (r) {
                    return r;
                }
            }
        }
    }
}
function getNextElementSiblingDeep(element) {
    try {
        let temp = element.nextElementSibling;
        while (true) {
            const firstChild = temp?.children[0];
            if (!firstChild) return temp;
            temp = firstChild;
        }
    } catch (err) {
        return null;
    }
}

let documentTitleUserIdState = {
    intervalId: null,
    oldTitle: null,
    newTitle: null,
};
function replaceGitHubIdsWithUsernameInDocumentTitle() {
    executeFunctionAfterPageLoaded(function () {
        _checkDocumentTitleAndReplaceUserId();
    });
    if (documentTitleUserIdState.intervalId === null) {
        documentTitleUserIdState.intervalId = setInterval(() => {
            _checkDocumentTitleAndReplaceUserId();
        }, 1_000);
    }
}
async function _checkDocumentTitleAndReplaceUserId() {
    const title = document.title;
    if (title === documentTitleUserIdState.newTitle) {
        // document.title matches with what we set the last time (event on our change)
        return;
    }
    // GitHub changed the title -> save it so that we can restore it when feature is disabled
    documentTitleUserIdState.oldTitle = title;
    // check that feature is enabled + loop through all possible replacement rules
    if (!isEnabled(github.showNames.optionName)) return;
    if (github.showNames.documentTitle.rules.length > 1 && !new RegExp(github.showNames.documentTitle.userIdRegex).exec(title)) {
        // if there is more than 1 rule -> check if there could be a username in the title at all so that we do not run too many regexes
        return;
    }
    for (const rule of github.showNames.documentTitle.rules) {
        const regex = new RegExp(`${rule.prefix}(?<userId>${github.showNames.documentTitle.userIdRegex})${rule.suffix}`);
        const regexResult = regex.exec(title);
        if (regexResult) {
            const username = await _getUsername(regexResult.groups.userId);
            if (document.title === title) {
                // make sure title has not changed in the meantime
                const newTitle = title.replace(
                    regex,
                    `${rule.prefixReplace === undefined ? rule.prefix : rule.prefixReplace}${username}${
                        rule.suffixReplace === undefined ? rule.suffix : rule.suffixReplace
                    }`,
                );
                document.title = newTitle;
                documentTitleUserIdState.newTitle = newTitle;
                break;
            }
        }
    }
}
function showGitHubIdsAgainInDocumentTitle() {
    if (documentTitleUserIdState.intervalId !== null) {
        clearInterval(documentTitleUserIdState.intervalId);
        documentTitleUserIdState.intervalId = null;
    }
    if (documentTitleUserIdState.oldTitle) document.title = documentTitleUserIdState.oldTitle;
}

const usernameCacheName = `gh-usernameCache-${url.host}`;
let usernameCache;
let timeoutIdSavingUsernameCache = null;
function saveUsernameCacheToStorage() {
    if (!timeoutIdSavingUsernameCache) {
        timeoutIdSavingUsernameCache = setTimeout(() => {
            timeoutIdSavingUsernameCache = null;
            saveToStorage(usernameCacheName, usernameCache);
        }, 1000);
    }
}
function deleteLegacyUsernameCache() {
    return new Promise(function (resolve) {
        execAsync(browser.storage.local.remove.bind(browser.storage.local), "usernameCache", () => {
            resolve();
        });
    });
}

/* ---- content_scripts/github/project-issue-relative-link-rewrite.js ---- */
github.projectIssueRelativeLinkRewrite = {
    optionName: "github-project-rewrite-issue-rel-links",
    queryCommentBodyLink: '[data-testid="comment-body"] a',
    queryCommentBody: '[data-testid="comment-body"]',
    queryIssueBody: '[data-testid="issue-body"]',
    querySidePanelTitle: '[data-testid="side-panel-title-content"]',
    querySidePanelTitle2: '[data-component="PH_Title"]',
};

function startRewritingRelativeLinksInProjectIssues() {
    executeFunctionAfterPageLoaded(function () {
        replaceApplicableRelativeUrls();
    });
    domObserver.registerCallbackFunction(github.projectIssueRelativeLinkRewrite.optionName, () => {
        replaceApplicableRelativeUrls();
    });
}

function stopRewritingRelativeLinksInProjectIssues() {
    domObserver.unregisterCallbackFunction(github.projectIssueRelativeLinkRewrite.optionName);
}

function replaceApplicableRelativeUrls() {
    // check whether we are on a github projects page
    if (!window.location.href.includes("/projects/")) {
        return;
    }
    // get the base url from the side panel title's anchor element
    const baseUrl = getBaseUrlOfRepo();
    if (null == baseUrl) {
        return;
    }
    // select the comment body of the side panel
    const targetElement =
        document.querySelector(github.projectIssueRelativeLinkRewrite.queryIssueBody) ??
        document.querySelector(github.projectIssueRelativeLinkRewrite.queryCommentBody);
    if (targetElement) {
        const anchors = targetElement.querySelectorAll("a");
        for (const anchor of anchors) {
            // check if the anchor element is a relative link (e.g., "../pull/123")
            // but we need to access the attribute directly (coz anchor.href is full/absolute link as interpreted by browser)
            const href = anchor.getAttribute("href");
            if (href.startsWith("../")) {
                // original issue URL is "<baseUrl>/issues/<#i>"
                // thus, in the repo, "../<x>" would become "<baseUrl>/<x>"
                const x = href.substring(3);
                const newUrl = baseUrl + "/" + x;
                // set the new url to the anchor element
                anchor.setAttribute("href", newUrl);
            }
        }
    }
}

function getBaseUrlOfRepo() {
    let href = null;
    const targetElement =
        document.querySelector(github.projectIssueRelativeLinkRewrite.querySidePanelTitle2) ??
        document.querySelector(github.projectIssueRelativeLinkRewrite.querySidePanelTitle);
    if (targetElement) {
        const anchorElement = targetElement.querySelector("a");
        if (anchorElement) {
            href = anchorElement.href;
        }
    }

    let baseUrl = null;
    if (null != href) {
        baseUrl = href.substring(0, href.indexOf("/issues"));
    }

    return baseUrl;
}

/* ---- content_scripts/github/main.js ---- */
let options;

async function main() {
    deleteLegacyUsernameCache();
    [usernameCache, options, noticeBoxMessagesToHide] = await Promise.all([
        loadFromStorage(usernameCacheName),
        loadFromStorage("options"),
        loadFromStorage("githubNoticeBoxMessagesToHide"),
    ]);

    if (isEnabled(github.signIn.optionName)) {
        signIn();
    } else {
        stopAutoSignIn();
    }
    listenForSignInOtherTab();

    const insertOverlayToHideFlashNoticeEnabled = isEnabled(github.flashNotice.optionName);
    hideDismissedNoticeBoxesAndInsertHideOverlayIfEnabled(insertOverlayToHideFlashNoticeEnabled);
    if (!insertOverlayToHideFlashNoticeEnabled) {
        removeHideOverlayInNoticeBoxes();
    }

    if (isEnabled(github.showNames.optionName)) {
        replaceGitHubIdsWithUsername();
        replaceGitHubIdsWithUsernameInDocumentTitle();
    } else {
        showGitHubIdsAgain();
        showGitHubIdsAgainInDocumentTitle();
    }

    if (isEnabled(github.projectIssueRelativeLinkRewrite.optionName)) {
        startRewritingRelativeLinksInProjectIssues();
    } else {
        // we stop rewriting links (but we don't revert existing rewritten links; user page reload is sufficient)
        stopRewritingRelativeLinksInProjectIssues();
    }
}
main();
browser.runtime.onConnect.addListener(() => {
    main();
});
browser.runtime.onMessage.addListener((message) => {
    if (message.message === "github-hide-notice-show-all-again") {
        showAllNoticeBoxesAgain();
    }
});

try { if (typeof main === "function") registerMainFunction(main); } catch (e) {}
})();

/* ======================= module: sharepoint ======================= */
(function () {
if (!["sap-my.sharepoint.com","login.microsoftonline.com"].includes(url.hostname)) return;
function isEnabled(optionName) { return !options || options[optionName] !== false; }
/* ---- content_scripts/sharepoint.js ---- */
const sharepoint = {
    login: {
        optionName: "sharepoint-login",
        configNameEmailAddress: "config-email",
        sharepointOnlyClickNextBtnQuery: `div.form-input-container input[type=button][name=btnSubmitSignIn][value=Next]#btnSubmitSignIn.form-submit.disable-on-submit`,
        microsoftonlineSelectAccount: `#tilesHolder div.tile-container div.row.tile div.table div.table-row div.table-cell div`,
        sharepointEnterEmailAndClickNextInputQuery: `#TOAAEmailEntryControls div.form-input-container input#txtTOAAEmail[type=email]`,
        sharepointEnterEmailAndClickNextBtnQuery: `#TOAAEmailEntryControls div.form-input-container input#btnSubmitEmail[type=button]`,
        microsoftonlineEnterEmailAndClickNextInputQuery: `div div.row div.form-group div.placeholderContainer input[type=email]`,
        microsoftonlineEnterEmailAndClickNextBtnQuery: `div div.win-button-pin-bottom div.row div div div input[type=submit][value=Next]`,
    },
};

function executeLogin() {
    function login() {
        let emailInput, btn;

        // sap-my.sharepoint.com, only button "Next" to continue
        btn = document.querySelector(sharepoint.login.sharepointOnlyClickNextBtnQuery);
        if (btn) {
            // could also be used to obtain email address: document.querySelector("#SigninControls div.form-message #lblSignInDescription span b").textContent
            _clickButton(btn);
            return stopAutoSignIn();
        }

        // login.microsoftonline.com, only to select first email address to continue
        btn = document.querySelector(sharepoint.login.microsoftonlineSelectAccount);
        if (btn) {
            // could also be used to obtain email address (btn.textContent)
            _clickButton(btn);
            return stopAutoSignIn();
        }

        // sap-my.sharepoint.com, email input + button "Next" to continue
        emailInput = document.querySelector(sharepoint.login.sharepointEnterEmailAndClickNextInputQuery);
        btn = document.querySelector(sharepoint.login.sharepointEnterEmailAndClickNextBtnQuery);
        if (emailInput && btn) {
            _enterEmailAndClickNext(emailInput, btn);
            return stopAutoSignIn();
        }

        // login.microsoftonline.com, email input + button "Next" to continue
        emailInput = document.querySelector(sharepoint.login.microsoftonlineEnterEmailAndClickNextInputQuery);
        btn = document.querySelector(sharepoint.login.microsoftonlineEnterEmailAndClickNextBtnQuery);
        if (emailInput && btn) {
            _enterEmailAndClickNext(emailInput, btn);
            return stopAutoSignIn();
        }
    }

    executeFunctionAfterPageLoaded(login);
    domObserver.registerCallbackFunction(sharepoint.login.optionName, function (mutations, _observer) {
        login();
    });
}
function _enterEmailAndClickNext(emailInput, btn) {
    const configEmail = config[sharepoint.login.configNameEmailAddress];
    if (emailInput.value === "") {
        if (configEmail) {
            emailInput.value = configEmail;
            emailInput.dispatchEvent(new Event("change"));
            emailInput.dispatchEvent(new Event("input"));
            _clickButton(btn);
            stopAutoSignIn();
            return true;
        }
        // TODO: insert/show notice to configure email in addon?
    } else if (emailInput.value === configEmail) {
        _clickButton(btn);
        stopAutoSignIn();
        return true;
    }
    return false;
}
function _clickButton(btn) {
    function click() {
        btn.click();
    }
    if (url.hostname === "login.microsoftonline.com") {
        setTimeout(click, 100);
    } else {
        click();
    }
}

function stopAutoSignIn() {
    domObserver.unregisterCallbackFunction(sharepoint.login.optionName);
}

let options = {};
let config = {};

async function main() {
    [options, config] = await Promise.all([loadFromStorage("options"), loadFromStorage("config")]);

    if (isEnabled(sharepoint.login.optionName)) {
        executeLogin();
    }
}
main();
browser.runtime.onConnect.addListener(() => {
    main();
});

try { if (typeof main === "function") registerMainFunction(main); } catch (e) {}
})();

/* ======================= module: stackenterprise ======================= */
(function () {
if (!["sap.stackenterprise.co"].includes(url.hostname)) return;
function isEnabled(optionName) { return !options || options[optionName] !== false; }
/* ---- content_scripts/stackenterprise.js ---- */
const stackenterprise = {
    login: {
        urlPath: "/users/login",
        optionName: "stackenterprise-login",
        query: "#formContainer > a.s-btn[href^='/users/samlstart?']",
    },
};

function executeLogin() {
    executeFunctionAfterPageLoaded(function () {
        getSignInButtonAndClick();
    });
}
function getSignInButtonAndClick() {
    try {
        const signInBtn = document.querySelector(stackenterprise.login.query);
        if (signInBtn && signInBtn.click) {
            signInBtn.click();
        }
    } catch {}
}

let options = {};

async function main() {
    if (url.pathname === stackenterprise.login.urlPath) {
        options = await loadFromStorage("options");
        if (isEnabled(stackenterprise.login.optionName)) {
            executeLogin();
        }
    }
}
main();
browser.runtime.onConnect.addListener(() => {
    main();
});

try { if (typeof main === "function") registerMainFunction(main); } catch (e) {}
})();

/* ======================= module: mural ======================= */
(function () {
if (!["app.mural.co"].includes(url.hostname)) return;
function isEnabled(optionName) { return !options || options[optionName] !== false; }
/* ---- content_scripts/mural.js ---- */
const mural = {
    login: {
        urlPathsSignIn: ["/signin", "/signin-join-mural"],
        configNameEmailAddress: "config-email",
        optionName: "mural-login",
        queryEmailInput: "input#work-email-input",
        querySignInButton: "#button-signin[type=submit]",

        urlPathNotFound: "/not-found",
        notFoundPageQuerySignInButton: "div.ui-error-page-box-content a",
        notFoundPageSignInButtonTextContent: "Sign in",
    },
};

function executeLogin() {
    function login() {
        const url = new URL(window.location.href);
        if (url.pathname === mural.login.urlPathNotFound) {
            // not found page "Uh-oh, we can't find that page" / "Page not found"
            // -> click on "Sign in" button to get to next screen
            const btn = findSignInButtonOnNotFoundPage();
            if (btn) {
                _clickButton(btn);
            }
        } else if (mural.login.urlPathsSignIn.includes(url.pathname)) {
            // sign in page -> enter email and click on button
            const emailInput = document.querySelector(mural.login.queryEmailInput);
            const btn = document.querySelector(mural.login.querySignInButton);
            if (emailInput && btn) {
                _enterEmailAndClickNext(emailInput, btn);
                stopAutoSignIn();
                return;
            }
        }
    }

    executeFunctionAfterPageLoaded(login);
    domObserver.registerCallbackFunction(mural.login.optionName, function (_mutations, _observer) {
        login();
    });
}

function findSignInButtonOnNotFoundPage() {
    const btns = document.querySelectorAll(mural.login.notFoundPageQuerySignInButton);
    for (const btn of btns) {
        if (btn.textContent === mural.login.notFoundPageSignInButtonTextContent) {
            return btn;
        }
    }
    return null;
}

function _enterEmailAndClickNext(emailInput, btn) {
    const configEmail = config[mural.login.configNameEmailAddress];
    if (emailInput.value === "") {
        if (configEmail) {
            let i = 0;
            const intervalId = setInterval(() => {
                // When setting the input value w/o a timeout, mural/react does not correctly
                // recognize the input value and shows "Please provide a valid email."
                // While Firefox works with 1ms timeout, Chrome takes longer, so we try repeatedly.
                i++;
                _setReactInputValue(emailInput, configEmail);
                _clickButton(btn);
                if (i > 10) clearInterval(intervalId);
            }, 100);
            stopAutoSignIn();
            return true;
        }
        // TODO: insert/show notice to configure email in addon?
    } else if (emailInput.value === configEmail) {
        _clickButton(btn);
        stopAutoSignIn();
        return true;
    }
    return false;
}
function _setReactInputValue(input, value) {
    // uff wtf
    // https://stackoverflow.com/questions/30683628/react-js-setting-value-of-input
    function setNativeValue(element, value) {
        let lastValue = element.value;
        element.value = value;
        let event = new Event("input", { target: element, bubbles: true });
        // React 15
        event.simulated = true;
        // React 16
        let tracker = element._valueTracker;
        if (tracker) {
            tracker.setValue(lastValue);
        }
        element.dispatchEvent(event);
    }
    setNativeValue(input, value);
}
function _clickButton(btn) {
    btn.click();
}

function stopAutoSignIn() {
    domObserver.unregisterCallbackFunction(mural.login.optionName);
}

let options = {};
let config = {};

async function main() {
    [options, config] = await Promise.all([loadFromStorage("options"), loadFromStorage("config")]);

    if (isEnabled(mural.login.optionName)) {
        executeLogin();
        // stop autologin after 15 seconds to not run unnecessarily
        setTimeout(stopAutoSignIn, 15 * 1000);
        // TODO: could also check whether already logged in via document.cookie (murally.jwt)
    }
}
main();
browser.runtime.onConnect.addListener(() => {
    main();
});

try { if (typeof main === "function") registerMainFunction(main); } catch (e) {}
})();

/* ======================= module: jira ======================= */
(function () {
if (!["jira.tools.sap"].includes(url.hostname)) return;
function isEnabled(optionName) { return !options || options[optionName] !== false; }
/* ---- content_scripts/jira.js ---- */
const jira = {
    countTips: {
        optionName: "jira-count-tips",
        containerName: "issue-table-container",
        pathname: "/issues/",
        className: "count-tips",
        lengthData: "data-length",
        unassignedBadge: "unassigned-badge",
    },
};

function _getBadgeElem(priority) {
    const filename = { "Very High": "highest" }[priority] || priority.toLowerCase();
    const title = `${priority} - ${priority}`;
    const imageElem = document.createElement("img");
    imageElem.setAttribute("src", `/images/icons/priorities/${filename}.svg`);
    imageElem.setAttribute("height", 16);
    imageElem.setAttribute("width", 16);
    imageElem.setAttribute("border", 0);
    imageElem.setAttribute("align", "absmiddle");
    imageElem.setAttribute("title", title);
    return imageElem;
}

function _fetchCountTips() {
    const orderedPriorities = {
        "Very High": 0,
        High: 0,
        Medium: 0,
        Low: 0,
    };
    const tickets = Array.from(document.querySelectorAll("tr.issuerow"));
    const countByPriority = tickets.reduce((mem, ticket) => {
        const priorityElement = ticket.querySelector("td.priority");
        if (priorityElement) {
            const priority = priorityElement.getElementsByTagName("img")[0].getAttribute("alt");
            mem[priority] ||= 0;
            mem[priority]++;
        }
        return mem;
    }, orderedPriorities);

    const unassignedTickets = tickets.filter((ticket) => ticket.querySelector("td.assignee").textContent.includes("Unassigned"));
    unassignedTickets.forEach((ticket) => {
        ticket
            .querySelector("td.assignee em")
            .classList.add(jira.countTips.unassignedBadge, "aui-lozenge", "aui-lozenge-moved", "aui-lozenge-subtle");
    });

    const countEndElem = document.querySelector("span.results-count-end");
    countEndElem.replaceChildren();

    countEndElem.append(`${tickets.length} (`);
    Object.keys(countByPriority).forEach((priority) => {
        countEndElem.appendChild(_getBadgeElem(priority));
        countEndElem.append(` ${countByPriority[priority]} `);
    });

    const unassignedEmElem = document.createElement("em");
    unassignedEmElem.classList.add("aui-lozenge", "aui-lozenge-moved", "aui-lozenge-subtle");
    unassignedEmElem.textContent = "Unassigned";
    countEndElem.appendChild(unassignedEmElem);
    countEndElem.append(` ${unassignedTickets.length})`);
    countEndElem.classList.add(jira.countTips.className);
    countEndElem.setAttribute(jira.countTips.lengthData, tickets.length);
}

let updated = false;
let issueTableObserver;
function showCountTips(force = false) {
    if (force) {
        executeFunctionAfterPageLoaded(() => {
            const issueTable = document.querySelector(`.${jira.countTips.containerName}`);
            if (issueTable) {
                _fetchCountTips();
            }
        });
    }

    domObserver.registerCallbackFunction(jira.countTips.optionName, () => {
        executeFunctionAfterPageLoaded(() => {
            const issueTable = document.querySelector(`.${jira.countTips.containerName}`);
            if (issueTable) {
                if (!updated) {
                    updated = true;
                    _fetchCountTips();

                    // the issue table will be replaced and not observed after updating
                    issueTableObserver = new DOMObserver(issueTable);
                    issueTableObserver.registerCallbackFunction(jira.countTips.containerName, () => {
                        updated = false;
                        issueTableObserver.disconnect();
                    });
                }
            } else {
                updated = false;
            }
        });
    });
}

function removeCountTips() {
    domObserver.unregisterCallbackFunction(jira.countTips.optionName);
    updated = false;

    const countTips = document.querySelector(`.${jira.countTips.className}`);
    if (countTips) {
        countTips.replaceChildren();
        countTips.append(countTips.getAttribute(jira.countTips.lengthData));
        countTips.classList.remove(jira.countTips.className);
        countTips.removeAttribute(jira.countTips.lengthData);
        document.querySelectorAll(`.${jira.countTips.unassignedBadge}`).forEach((badge) => {
            badge.removeAttribute("class");
        });
    }
}

let options = {};
let config = {};

async function main(force = false) {
    [options, config] = await Promise.all([loadFromStorage("options"), loadFromStorage("config")]);
    if (isEnabled(jira.countTips.optionName)) {
        showCountTips(force);
    } else {
        removeCountTips();
    }
}

main();
browser.runtime.onConnect.addListener(async () => {
    await main(true);
});

try { if (typeof main === "function") registerMainFunction(main); } catch (e) {}
})();

/* ======================= module: pluralsight ======================= */
(function () {
if (!["app.pluralsight.com"].includes(url.hostname)) return;
function isEnabled(optionName) { return !options || options[optionName] !== false; }
/* ---- content_scripts/pluralsight.js ---- */
const pluralsight = {
    login: {
        mainUrlPath: "/id",
        loginUrlPath: "/id/signin/sso",
        optionName: "pluralsight-login",
        ssoOptionQuery: "form#passwordSignInForm + .links a[href^='/id/signin/sso']",
        inputField: "#Alias",
        signInBtn: ".sso-form form button.psds-button--appearance-primary[type='submit']",
    },
};

function executeRedirect() {
    executeFunctionAfterPageLoaded(function () {
        getSsoOptionButtonAndClick();
    });
}
function getSsoOptionButtonAndClick() {
    try {
        const ssoOption = document.querySelector(pluralsight.login.ssoOptionQuery);
        if (ssoOption && ssoOption.click) {
            ssoOption.click();
        }
    } catch {}
}
function executeLogin() {
    executeFunctionAfterPageLoaded(function () {
        getInputAndFill();
        getSignInButtonAndClick();
    });
}
function getInputAndFill() {
    try {
        const inputField = document.querySelector(pluralsight.login.inputField);
        if (inputField) {
            inputField.value = "sap.com";
        }
    } catch {}
}
function getSignInButtonAndClick() {
    try {
        const signInBtn = document.querySelector(pluralsight.login.signInBtn);
        if (signInBtn && signInBtn.click) {
            signInBtn.click();
        }
    } catch {}
}

let options = {};

async function main() {
    if (url.pathname.startsWith(pluralsight.login.loginUrlPath)) {
        options = await loadFromStorage("options");
        if (isEnabled(pluralsight.login.optionName)) {
            executeLogin();
        }
    } else if (url.pathname.startsWith(pluralsight.login.mainUrlPath)) {
        options = await loadFromStorage("options");
        if (isEnabled(pluralsight.login.optionName)) {
            executeRedirect();
        }
    }
}
main();
browser.runtime.onConnect.addListener(() => {
    main();
});

try { if (typeof main === "function") registerMainFunction(main); } catch (e) {}
})();

/* ======================= module: artifactory ======================= */
(function () {
if (!["common.repositories.cloud.sap","int.repositories.cloud.sap"].includes(url.hostname)) return;
function isEnabled(optionName) { return !options || options[optionName] !== false; }
/* ---- content_scripts/artifactory.js ---- */
const artifactory = {
    login: {
        mainNodeId: "single-spa-application:@jfrog/ui-platform-microfrontend-client",
        urlPaths: ["/ui/login", "/ui/login/"],
        optionName: "artifactory-login",
        samlSsoBtnQuery: "div.additional-signin button.login-provider-button",
        queryDistinctElementAfterLogin: "div.userDropDown",
        // note: for the internal instance, we could also check for div.login-container
    },
};

function executeLogin() {
    executeFunctionAfterPageLoaded(getSamlSsoButtonAndClick);
    domObserver.registerCallbackFunction(artifactory.login.optionName, function (_mutations, _observer) {
        getSamlSsoButtonAndClick();
    });
}
function getSamlSsoButtonAndClick() {
    try {
        const samlSsoBtn = document.querySelector(artifactory.login.samlSsoBtnQuery);
        if (samlSsoBtn && samlSsoBtn.click) {
            samlSsoBtn.click();
            stopAutoSignIn();
        } else if (document.querySelector(artifactory.login.queryDistinctElementAfterLogin) !== null) {
            stopAutoSignIn();
        }
    } catch {}
}

function stopAutoSignIn() {
    domObserver.unregisterCallbackFunction(artifactory.login.optionName);
}

let options = {};

async function main() {
    // note: we cannot check for the URL path easily because the SPA mutates it
    options = await loadFromStorage("options");
    if (isEnabled(artifactory.login.optionName)) {
        executeLogin();
    }
}
main();
browser.runtime.onConnect.addListener(() => {
    main();
});

try { if (typeof main === "function") registerMainFunction(main); } catch (e) {}
})();

/* ======================= module: artifactory-engsrv ======================= */
(function () {
if (!["eng-srv.accounts.ondemand.com","eng-srv.accounts400.ondemand.com"].includes(url.hostname)) return;
function isEnabled(optionName) { return !options || options[optionName] !== false; }
/* ---- content_scripts/artifactory-login-engsrvaccounts.js ---- */
const artifactoryEngSrvAccounts = {
    login: {
        optionName: "artifactory-login",
        configNameUserId: "config-user-id",
        configNameEmailAddress: "config-email",
        urlHostPaths: [
            "eng-srv.accounts.ondemand.com/saml2/idp/sso/eng-srv.accounts.ondemand.com",
            "eng-srv.accounts400.ondemand.com/oauth2/authorize",
        ],
        queryUserIdInput: "input#j_username[placeholder='User ID']",
        queryBtnContinue: "button#logOnFormSubmit",
    },
};

function executeLogin() {
    executeFunctionAfterPageLoaded(function () {
        fillUserIdAndLogIn();
    });
}
function fillUserIdAndLogIn() {
    const configUserId = config[artifactoryEngSrvAccounts.login.configNameUserId];
    const configEmail = config[artifactoryEngSrvAccounts.login.configNameEmailAddress];

    const userId = configUserId || configEmail;
    if (userId) {
        const userIdInput = document.querySelector(artifactoryEngSrvAccounts.login.queryUserIdInput);
        if (userIdInput) {
            userIdInput.value = userId;

            const btnContinue = document.querySelector(artifactoryEngSrvAccounts.login.queryBtnContinue);
            if (btnContinue && btnContinue.click) {
                btnContinue.click();
                return;
            } else {
                console.debug("Auto Login Failed: Didn't find button to log in");
            }
        } else {
            console.debug("Auto Login Failed: Didn't find User ID input");
        }
    } else {
        console.debug("Couldn't perform auto login: No User ID (or email address) configured in SAP Addon");
    }
}

let options = {};
let config = {};

async function main() {
    const urlHostPath = url.host + url.pathname;
    if (artifactoryEngSrvAccounts.login.urlHostPaths.includes(urlHostPath)) {
        [options, config] = await Promise.all([loadFromStorage("options"), loadFromStorage("config")]);

        if (isEnabled(artifactoryEngSrvAccounts.login.optionName)) {
            executeLogin();
        }
    }
}
main();
browser.runtime.onConnect.addListener(() => {
    main();
});

try { if (typeof main === "function") registerMainFunction(main); } catch (e) {}
})();

/* ======================= module: dwc ======================= */
(function () {
if (!["dashboard.dwc.tools.sap"].includes(url.hostname)) return;
function isEnabled(optionName) { return !options || options[optionName] !== false; }
/* ---- content_scripts/dwc.js ---- */
const dwc = {
    login: {
        urlPath: "/login",
        optionName: "dwc-login",
        query: "#amalthea-login-button",
    },
};

function executeLogin() {
    executeFunctionAfterPageLoaded(function () {
        domObserver.registerCallbackFunction(dwc.login.optionName, function (_mutations, _observer) {
            getSignInButtonAndClick();
        });
        getSignInButtonAndClick();
    });
}
function getSignInButtonAndClick() {
    try {
        const signInBtn = document.querySelector(dwc.login.query);
        if (signInBtn && signInBtn.click) {
            signInBtn.click();
            stopAutoSignIn();
        }
    } catch {}
}

function stopAutoSignIn() {
    domObserver.unregisterCallbackFunction(dwc.login.optionName);
}

let options = {};

async function main() {
    if (url.pathname === dwc.login.urlPath) {
        options = await loadFromStorage("options");
        if (isEnabled(dwc.login.optionName)) {
            executeLogin();
        }
    }
}
main();
browser.runtime.onConnect.addListener(() => {
    main();
});

try { if (typeof main === "function") registerMainFunction(main); } catch (e) {}
})();

/* ==========================================================================
 * SAP Addon — Tampermonkey menu commands (replaces the toolbar icon)
 * --------------------------------------------------------------------------
 * The extension opened its UI from the browser toolbar icon. A userscript
 * manager exposes commands in its per-page menu instead; we register one to
 * open the settings panel and one shortcut to restore GitHub banners.
 * ======================================================================== */
_gm.registerMenu("SAP Addon: Settings", function () {
    sapOpenSettingsPanel();
});

_gm.registerMenu("SAP Addon: Show all GitHub banners again", function () {
    if (window.browser?.runtime?.sendMessage) {
        window.browser.runtime.sendMessage({ message: "github-hide-notice-show-all-again" });
    }
});


})();