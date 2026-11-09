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
