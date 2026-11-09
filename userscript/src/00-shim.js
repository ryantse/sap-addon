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
