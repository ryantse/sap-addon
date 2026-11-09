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
                   style="width:100%;box-sizing:border-box;padding:7px 9px;border:1px solid #d0d7de;border-radius:6px;font-size:14px;">
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
            <button id="sap-addon-show-banners" style="width:100%;padding:8px;border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa;cursor:pointer;font-size:13px;">
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
