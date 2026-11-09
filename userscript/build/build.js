#!/usr/bin/env node
/* ==========================================================================
 * SAP Addon userscript build
 * --------------------------------------------------------------------------
 * Concatenates the shim + per-site feature modules into one .user.js with a
 * Tampermonkey metadata header.
 *
 * Feature source files from the original extension are reused as-is; each is
 * wrapped in its own block scope (an IIFE) so that the many `let options`,
 * `let config`, and `function main()` declarations across sites don't collide
 * when combined into a single userscript file. A hostname dispatch at the top
 * of each wrapper ensures only the relevant site's module actually runs.
 * ======================================================================== */
const fs = require("fs");
const path = require("path");

const REPO = path.resolve(__dirname, "..", "..");
const SRC = path.resolve(__dirname, "..", "src");
const OUT = path.resolve(__dirname, "..", "dist", "sap-addon.user.js");

const version = JSON.parse(fs.readFileSync(path.join(REPO, "manifest-chrome.json"), "utf8")).version;

function read(...p) {
    return fs.readFileSync(path.join(...p), "utf8");
}

/* --- @icon: embed the extension's icon as a data: URI so the single-file
 * userscript is self-contained (no dependency on a hosted raw URL). We use the
 * 48px icon to keep the header small (~2.5KB base64). ---------------------- */
const iconDataUri =
    "data:image/png;base64," + fs.readFileSync(path.join(REPO, "icons", "icon48.png")).toString("base64");

/* --- @connect hosts: every origin the GitHub username fetch may hit -------- */
const connectHosts = ["github.wdf.sap.corp", "github.tools.sap", "github.concur.com"];

/* --- @match patterns: union of all content-script match patterns ---------- */
const matches = [
    "*://github.wdf.sap.corp/*",
    "*://github.tools.sap/*",
    "*://github.concur.com/*",
    "*://sap-my.sharepoint.com/*",
    "*://login.microsoftonline.com/*",
    "*://sap.stackenterprise.co/*",
    "*://app.mural.co/*",
    "*://jira.tools.sap/*",
    "*://app.pluralsight.com/*",
    "*://common.repositories.cloud.sap/*",
    "*://int.repositories.cloud.sap/*",
    "*://eng-srv.accounts.ondemand.com/*",
    "*://eng-srv.accounts400.ondemand.com/*",
    "*://dashboard.dwc.tools.sap/*",
];

/* --- feature modules -------------------------------------------------------
 * Each entry: the hostname(s) it applies to (for the dispatch guard) and the
 * list of original source files that make up the module. The GitHub module
 * must NOT be guarded away for github.concur.com etc. — list every host.
 * ------------------------------------------------------------------------- */
const cs = (f) => read(REPO, "content_scripts", f);
const ghDir = (f) => read(REPO, "content_scripts", "github", f);

const modules = [
    {
        name: "github",
        hosts: ["github.wdf.sap.corp", "github.tools.sap", "github.concur.com"],
        files: [
            ["content_scripts/github/config.js", ghDir("config.js")],
            ["content_scripts/github/sign-in.js", ghDir("sign-in.js")],
            ["content_scripts/github/hide-notice-box.js", ghDir("hide-notice-box.js")],
            ["content_scripts/github/username.js", ghDir("username.js")],
            ["content_scripts/github/project-issue-relative-link-rewrite.js", ghDir("project-issue-relative-link-rewrite.js")],
            ["content_scripts/github/main.js", ghDir("main.js")],
        ],
    },
    {
        name: "sharepoint",
        hosts: ["sap-my.sharepoint.com", "login.microsoftonline.com"],
        files: [["content_scripts/sharepoint.js", cs("sharepoint.js")]],
    },
    {
        name: "stackenterprise",
        hosts: ["sap.stackenterprise.co"],
        files: [["content_scripts/stackenterprise.js", cs("stackenterprise.js")]],
    },
    {
        name: "mural",
        hosts: ["app.mural.co"],
        files: [["content_scripts/mural.js", cs("mural.js")]],
    },
    {
        name: "jira",
        hosts: ["jira.tools.sap"],
        files: [["content_scripts/jira.js", cs("jira.js")]],
    },
    {
        name: "pluralsight",
        hosts: ["app.pluralsight.com"],
        files: [["content_scripts/pluralsight.js", cs("pluralsight.js")]],
    },
    {
        name: "artifactory",
        hosts: ["common.repositories.cloud.sap", "int.repositories.cloud.sap"],
        files: [["content_scripts/artifactory.js", cs("artifactory.js")]],
    },
    {
        name: "artifactory-engsrv",
        hosts: ["eng-srv.accounts.ondemand.com", "eng-srv.accounts400.ondemand.com"],
        files: [["content_scripts/artifactory-login-engsrvaccounts.js", cs("artifactory-login-engsrvaccounts.js")]],
    },
    {
        name: "dwc",
        hosts: ["dashboard.dwc.tools.sap"],
        files: [["content_scripts/dwc.js", cs("dwc.js")]],
    },
];

/* --- Each module becomes:
 *   (function () {                         // isolate let options / main()
 *     if (![hosts].includes(host)) return; // hostname dispatch
 *     <original source files concatenated>
 *   })();
 * The original files already call main() and register onConnect; our shim's
 * onConnect is a no-op and visibilitychange drives re-runs, so we also push
 * main into registerMainFunction so settings changes re-run it live.
 * ------------------------------------------------------------------------- */
function wrapModule(mod) {
    const guard = `if (!${JSON.stringify(mod.hosts)}.includes(url.hostname)) return;`;
    // Shadow isEnabled() with one that closes over THIS module's `options`.
    // The original global isEnabled reads a module-scoped `options` that only
    // existed because each content-script group was injected separately; in a
    // single concatenated userscript we recreate that per-module closure here.
    const localIsEnabled = `function isEnabled(optionName) { return !options || options[optionName] !== false; }`;
    const body = mod.files
        .map(([rel, src]) => `/* ---- ${rel} ---- */\n${src.trimEnd()}\n`)
        .join("\n");
    // After the original source runs (it defines + calls main), register main
    // for live re-runs if a function named main exists in this scope.
    const register = `
try { if (typeof main === "function") registerMainFunction(main); } catch (e) {}`;
    return `/* ======================= module: ${mod.name} ======================= */
(function () {
${guard}
${localIsEnabled}
${body}${register}
})();`;
}

const header = `// ==UserScript==
// @name         SAP Addon
// @namespace    https://github.com/nikolockenvitz/sap-addon
// @version      ${version}
// @description  Userscript port of the SAP Addon browser extension: auto login (GitHub, SharePoint, Stack@SAP, Mural, Jira, Pluralsight, Artifactory, DwC) and GitHub full-name replacement.
// @author       Niko Lockenvitz (extension) / userscript port
// @license      MIT
// @icon         ${iconDataUri}
${matches.map((m) => `// @match        ${m}`).join("\n")}
${connectHosts.map((h) => `// @connect      ${h}`).join("\n")}
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @noframes
// ==/UserScript==
`;

const parts = [
    header,
    // NOTE: intentionally NOT "use strict". The extension's content scripts run
    // non-strict, and some upstream code relies on it (e.g. username.js
    // _getNewTooltipText assigns implicit globals: `textAfter = tempSplit... = ""`).
    // Wrapping the reused source in a strict IIFE would turn those into
    // ReferenceErrors. Staying non-strict preserves upstream semantics verbatim.
    `(function () {\n`,
    read(SRC, "00-shim.js"),
    read(SRC, "10-github-fetch.js"),
    read(SRC, "20-settings.js"),
    ...modules.map(wrapModule),
    read(SRC, "90-menu.js"),
    `})();`,
];

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, parts.join("\n\n"));
console.log("Wrote", OUT, "(" + fs.statSync(OUT).size + " bytes), version", version);
