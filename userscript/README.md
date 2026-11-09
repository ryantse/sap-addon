# SAP Addon — Userscript port

A [Tampermonkey](https://www.tampermonkey.net/) / Violentmonkey userscript port of the
SAP Addon browser extension. It bundles every feature of the extension into a single
`.user.js` file: all auto-logins **and** the GitHub full-name replacement.

## Install

1. Install Tampermonkey (or Violentmonkey) in your browser.
2. Open [`dist/sap-addon.user.js`](dist/sap-addon.user.js) raw and let the manager pick it up,
   or create a new script and paste its contents.
3. Open the script's settings in Tampermonkey and confirm the `@connect` hosts are allowed
   (needed for GitHub name lookups): `github.wdf.sap.corp`, `github.tools.sap`, `github.concur.com`.

## Features (parity with the extension)

| Feature | Sites |
|---|---|
| Auto login | GitHub, Microsoft 365 / SharePoint, Stack@SAP, Mural, Pluralsight, Artifactory (JFrog + eng-srv), DwC |
| GitHub: show full names instead of user IDs | GitHub (incl. document title, tooltips, projects) |
| GitHub: overlay to hide yellow announcement banners | GitHub |
| GitHub: rewrite relative links in Projects issues | GitHub |
| SAP Jira: issue count tips | jira.tools.sap |

## How it maps to a userscript

The extension's browser-API dependencies are replaced 1:1 by a small shim layer so the
original feature code is reused almost verbatim:

| Extension mechanism | Userscript equivalent |
|---|---|
| `browser.storage.local` | `GM_getValue` / `GM_setValue` (see `src/00-shim.js`) |
| background `fetch` + `runtime.sendMessage` (`githubFetchUsername`) | `GM_xmlhttpRequest` + `@connect` (see `src/10-github-fetch.js`) |
| `runtime.onConnect` re-run on tab activation | `visibilitychange` listener + `sap-addon-settings-changed` event |
| Toolbar popup (options / config / permissions) | In-page settings panel opened from the Tampermonkey menu (`src/20-settings.js`, `src/90-menu.js`) |
| Optional per-site **permissions** | All `@match` sites are always active; each site has an **enable toggle** in settings instead |

### What changed in behaviour

- Sites that used to require granting an *optional permission* before they did anything
  (Mural, Stack@SAP, Pluralsight, Jira, Artifactory, DwC) are now **active by default** and
  are turned off via the settings panel toggle rather than by withholding a permission.
- There is no toolbar icon; open **Tampermonkey menu → "SAP Addon: Settings"** on any
  matched page.
- Cross-tab live updates: the extension pushed changes to every open tab. The userscript
  re-applies settings in the current tab on focus and immediately after you change a setting.

## Build

The distributable is generated from `src/` + the original extension's `content_scripts/`:

```bash
npm run build        # -> dist/sap-addon.user.js
npm test             # jsdom smoke test of the built file
```

`build/build.js` wraps each site's original source in its own scope and adds the Tampermonkey
metadata header, so the port stays in sync with the extension's feature code.
