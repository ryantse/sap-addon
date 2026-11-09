/* Smoke test: load the built userscript into a jsdom page that looks like a
 * GitHub (GHE) profile reference and verify the full pipeline runs:
 *   - GM shim storage round-trips
 *   - the browser.runtime shim answers githubFetchUsername via GM_xmlhttpRequest
 *   - username.js actually replaces a user id in the DOM with the fetched name
 *   - the settings panel opens and writes options
 * This is not the real extension environment, but it exercises the ported
 * logic end to end without a browser. */
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const SCRIPT = fs.readFileSync(path.join(__dirname, "..", "dist", "sap-addon.user.js"), "utf8");

let failures = 0;
function assert(cond, msg) {
    if (cond) {
        console.log("  ok  -", msg);
    } else {
        console.error("  FAIL -", msg);
        failures++;
    }
}

function makeEnv(href, { profileHtml } = {}) {
    const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`, {
        url: href,
        runScripts: "outside-only",
        pretendToBeVisual: true,
    });
    const { window } = dom;

    // --- GM mocks -----------------------------------------------------------
    const store = {};
    const gm = {
        GM_getValue: (k, d) => (k in store ? store[k] : d),
        GM_setValue: (k, v) => {
            store[k] = v;
        },
        GM_deleteValue: (k) => {
            delete store[k];
        },
        GM_registerMenuCommand: (label, fn) => {
            (window.__menu = window.__menu || []).push({ label, fn });
        },
        GM_xmlhttpRequest: (opts) => {
            // Cross-origin fallback path.
            setTimeout(() => opts.onload({ responseText: profileHtml || "" }), 0);
        },
    };
    // Same-origin preferred path uses window.fetch with credentials:'include'.
    window.fetch = (u, _opts) => Promise.resolve({ text: () => Promise.resolve(profileHtml || "") });
    return { dom, window, store, gm };
}

(async function run() {
    /* ---- Test 1: GitHub name replacement end to end --------------------- */
    console.log("Test 1: GitHub username replacement");
    {
        const name = "Jane Doe";
        const profileHtml = `<span class="p-name vcard-fullname d-block overflow-hidden" itemprop="name">${name}</span>`;
        const { window, store, gm } = makeEnv("https://github.tools.sap/pull/1", { profileHtml });

        // Seed an element that looks like a user-mention GitHub would render.
        const a = window.document.createElement("a");
        a.className = "user-mention";
        a.setAttribute("href", "/i123456");
        a.setAttribute("data-hovercard-type", "user");
        a.textContent = "i123456";
        window.document.body.appendChild(a);

        // Run the userscript in this window's context.
        const sandbox = Object.assign({ window, document: window.document, console, URL: window.URL,
            MutationObserver: window.MutationObserver, setTimeout: window.setTimeout,
            setInterval: window.setInterval, clearInterval: window.clearInterval,
            Event: window.Event, CustomEvent: window.CustomEvent, Date, RegExp, Math, Promise, JSON, Map, Set }, gm);
        window.eval; // noop
        const vm = require("vm");
        vm.createContext(sandbox);
        vm.runInContext(SCRIPT, sandbox);

        // allow async fetch + replacement microtasks to settle
        await new Promise((r) => window.setTimeout(r, 50));

        assert(a.textContent === name, `user id replaced with full name (got "${a.textContent}")`);
        const cacheKey = `gh-usernameCache-github.tools.sap`;
        // cache save is debounced 1s; wait it out
        await new Promise((r) => window.setTimeout(r, 1100));
        assert(store[cacheKey] && store[cacheKey]["i123456"], "username cached to storage");
    }

    /* ---- Test 2: module dispatch — non-matching host stays inert --------- */
    console.log("Test 2: hostname dispatch isolation");
    {
        const { window, store, gm } = makeEnv("https://app.mural.co/signin");
        const vm = require("vm");
        const sandbox = Object.assign({ window, document: window.document, console, URL: window.URL,
            MutationObserver: window.MutationObserver, setTimeout: window.setTimeout,
            setInterval: window.setInterval, clearInterval: window.clearInterval,
            Event: window.Event, CustomEvent: window.CustomEvent, Date, RegExp, Math, Promise, JSON, Map, Set }, gm);
        vm.createContext(sandbox);
        vm.runInContext(SCRIPT, sandbox);
        await new Promise((r) => window.setTimeout(r, 20));
        // menu commands should still be registered (global), proving script ran
        assert((window.__menu || []).length >= 1, "menu commands registered on mural host");
    }

    /* ---- Test 3: settings panel opens and writes options ---------------- */
    console.log("Test 3: settings panel");
    {
        const { window, store, gm } = makeEnv("https://github.tools.sap/");
        const vm = require("vm");
        const sandbox = Object.assign({ window, document: window.document, console, URL: window.URL,
            MutationObserver: window.MutationObserver, setTimeout: window.setTimeout,
            setInterval: window.setInterval, clearInterval: window.clearInterval,
            Event: window.Event, CustomEvent: window.CustomEvent, Date, RegExp, Math, Promise, JSON, Map, Set }, gm);
        vm.createContext(sandbox);
        vm.runInContext(SCRIPT, sandbox);
        await new Promise((r) => window.setTimeout(r, 20));

        const settingsCmd = (window.__menu || []).find((m) => /Settings/.test(m.label));
        assert(!!settingsCmd, "settings menu command present");
        settingsCmd.fn();
        await new Promise((r) => window.setTimeout(r, 20));
        const overlay = window.document.getElementById("sap-addon-settings-overlay");
        assert(!!overlay, "settings overlay injected");
        const toggle = overlay.querySelector('input[data-opt="github-show-names"]');
        assert(!!toggle, "feature toggle rendered");
        toggle.checked = false;
        toggle.dispatchEvent(new window.Event("change"));
        await new Promise((r) => window.setTimeout(r, 20));
        assert(store.options && store.options["github-show-names"] === false, "toggling writes options to storage");
    }

    /* ---- Test 4: reaction tooltip with user IDs (regression for the
     * implicit-global crash in _getNewTooltipText under strict mode) ------- */
    console.log("Test 4: GitHub reaction tooltip replacement");
    {
        const profiles = {
            i123456: "Jane Doe",
            d654321: "John Smith",
        };
        const { window, store, gm } = makeEnv("https://github.tools.sap/owner/repo/issues/1", {});
        // same-origin path: return the right profile per requested URL
        window.fetch = (u) => {
            const id = String(u).split("/").pop();
            const name = profiles[id] || "";
            const html = `<span class="p-name vcard-fullname d-block overflow-hidden" itemprop="name">${name}</span>`;
            return Promise.resolve({ text: () => Promise.resolve(html) });
        };
        // a reaction tooltip element as GitHub renders it
        const tip = window.document.createElement("tool-tip");
        tip.setAttribute("for", "reactions--reaction_button_component-xyz");
        tip.textContent = "i123456 and d654321 reacted with thumbs up emoji";
        window.document.body.appendChild(tip);

        const vm = require("vm");
        const sandbox = Object.assign({ window, document: window.document, console, URL: window.URL,
            MutationObserver: window.MutationObserver, setTimeout: window.setTimeout,
            setInterval: window.setInterval, clearInterval: window.clearInterval,
            Event: window.Event, CustomEvent: window.CustomEvent, Date, RegExp, Math, Promise, JSON, Map, Set }, gm);
        vm.createContext(sandbox);
        let threw = null;
        const origRejection = process.listeners("unhandledRejection").slice();
        const onRej = (e) => (threw = e);
        process.on("unhandledRejection", onRej);
        vm.runInContext(SCRIPT, sandbox);
        await new Promise((r) => window.setTimeout(r, 80));
        process.removeListener("unhandledRejection", onRej);

        assert(!threw, `no unhandled rejection in tooltip path (got ${threw && threw.message})`);
        assert(
            tip.textContent === "Jane Doe and John Smith reacted with thumbs up emoji",
            `tooltip user IDs replaced with names (got "${tip.textContent}")`
        );
    }

    /* ---- Test 5: profile fetch returns a login page (no name span) --------
     * Regression for: TypeError null is not an object (searchRegex.exec(html)[1])
     * when GHE serves its sign-in page to an unauthenticated request. Must NOT
     * crash and must leave the id in place. ------------------------------- */
    console.log("Test 5: login-page / no-match profile fetch");
    {
        const { window, store, gm } = makeEnv("https://github.tools.sap/owner/repo/pull/2", {});
        const loginHtml = "<!DOCTYPE html><html><head><title>GitHub · Enterprise</title></head>" +
            '<body><a href="/login?return_to=x">Sign in to GitHub</a></body></html>';
        window.fetch = () => Promise.resolve({ text: () => Promise.resolve(loginHtml) });
        const a = window.document.createElement("a");
        a.className = "user-mention";
        a.setAttribute("href", "/i999999");
        a.setAttribute("data-hovercard-type", "user");
        a.textContent = "i999999";
        window.document.body.appendChild(a);

        const vm = require("vm");
        const sandbox = Object.assign({ window, document: window.document, console, URL: window.URL,
            MutationObserver: window.MutationObserver, setTimeout: window.setTimeout,
            setInterval: window.setInterval, clearInterval: window.clearInterval,
            Event: window.Event, CustomEvent: window.CustomEvent, Date, RegExp, Math, Promise, JSON, Map, Set }, gm);
        vm.createContext(sandbox);
        let threw = null;
        const onRej = (e) => (threw = e);
        process.on("unhandledRejection", onRej);
        vm.runInContext(SCRIPT, sandbox);
        await new Promise((r) => window.setTimeout(r, 80));
        process.removeListener("unhandledRejection", onRej);

        assert(!threw, `no crash on login-page response (got ${threw && threw.message})`);
        assert(a.textContent === "i999999", "user id left untouched when name cannot be resolved");
    }

    /* ---- Test 6: cross-origin host uses the GM_xmlhttpRequest fallback ----
     * When the profile host differs from the page host, same-origin fetch is
     * not usable; the fallback must fire and still resolve the name. -------- */
    console.log("Test 6: cross-origin fallback via GM_xmlhttpRequest");
    {
        // page is on github.tools.sap but this id resolves against github.concur.com
        const { window, store, gm } = makeEnv("https://github.tools.sap/owner/repo/pull/3", {});
        let fetchCalled = false;
        let xhrCalled = false;
        window.fetch = () => {
            fetchCalled = true;
            return Promise.reject(new Error("same-origin fetch should not be used for cross-origin host"));
        };
        gm.GM_xmlhttpRequest = (opts) => {
            xhrCalled = true;
            const html = `<span class="p-name vcard-fullname d-block overflow-hidden" itemprop="name">Concur Person</span>`;
            setTimeout(() => opts.onload({ responseText: html }), 0);
        };
        const vm = require("vm");
        const sandbox = Object.assign({ window, document: window.document, console, URL: window.URL,
            MutationObserver: window.MutationObserver, setTimeout: window.setTimeout,
            setInterval: window.setInterval, clearInterval: window.clearInterval,
            Event: window.Event, CustomEvent: window.CustomEvent, Date, RegExp, Math, Promise, JSON, Map, Set }, gm);
        vm.createContext(sandbox);
        vm.runInContext(SCRIPT, sandbox);
        await new Promise((r) => window.setTimeout(r, 20));
        // call the fetch path directly through the shim's message contract,
        // targeting a DIFFERENT host than the page
        const name = await sandbox.window.browser.runtime.sendMessage({
            contentScriptQuery: "githubFetchUsername",
            args: ["i123456", "github.concur.com", `<span class="p-name vcard-fullname d-block overflow-hidden" itemprop="name">([^<]*)</span>`],
        });
        assert(xhrCalled && !fetchCalled, "cross-origin host routed to GM_xmlhttpRequest, not same-origin fetch");
        assert(name === "Concur Person", `fallback resolved the name (got "${name}")`);
    }

    console.log(failures === 0 ? "\nALL PASS" : `\n${failures} FAILURE(S)`);
    process.exit(failures === 0 ? 0 : 1);
})();
