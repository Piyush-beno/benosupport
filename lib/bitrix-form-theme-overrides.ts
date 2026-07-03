const BITRIX_THEME_STYLE_ID = "bitrix-form-theme-overrides"

const THEME = {
  navy: "#072448",
  button: "#0a3a73",
  buttonHover: "#124e96",
  border: "#b8b8b8",
  successBg: "#f0f4ff",
  white: "#ffffff",
} as const

/** Injected after Bitrix24 form loads so it wins over their late-loaded CSS. */
export const BITRIX_FORM_THEME_CSS = `
  .bitrix-form-theme .b24-form-control-string .b24-form-control,
  .bitrix-form-theme .b24-form-control-text .b24-form-control,
  .bitrix-form-theme .b24-form-field-string .b24-form-control,
  .bitrix-form-theme .b24-form-field-email .b24-form-control {
    border: 1px solid ${THEME.border} !important;
    border-color: ${THEME.border} !important;
    border-radius: 12px !important;
    box-shadow: none !important;
  }

  .bitrix-form-theme .b24-form-control-string .b24-form-control:hover:not([readonly]),
  .bitrix-form-theme .b24-form-control-text .b24-form-control:hover:not([readonly]) {
    border-color: ${THEME.button} !important;
  }

  .bitrix-form-theme .b24-form-control-string .b24-form-control:focus:not([readonly]),
  .bitrix-form-theme .b24-form-control-text .b24-form-control:focus:not([readonly]) {
    border-color: ${THEME.button} !important;
    outline: 3px solid rgba(59, 103, 255, 0.25) !important;
    outline-offset: 2px !important;
    box-shadow: none !important;
  }

  .bitrix-form-theme .b24-form-btn {
    background: ${THEME.button} !important;
    border: 1px solid ${THEME.button} !important;
    border-radius: 12px !important;
    color: ${THEME.white} !important;
  }

  .bitrix-form-theme .b24-form-btn:hover {
    background: ${THEME.buttonHover} !important;
    border-color: ${THEME.buttonHover} !important;
  }

  .bitrix-form-theme .b24-form-state.b24-form-success,
  .bitrix-form-theme .b24-form-success {
    background: ${THEME.successBg} !important;
    background-color: ${THEME.successBg} !important;
  }

  .bitrix-form-theme .b24-form-state-icon,
  .bitrix-form-theme .b24-form-success-icon {
    background-color: ${THEME.button} !important;
    border-color: ${THEME.button} !important;
    color: ${THEME.white} !important;
  }

  .bitrix-form-theme .b24-form-state-text,
  .bitrix-form-theme .b24-form-state-title,
  .bitrix-form-theme .b24-form-state-description,
  .bitrix-form-theme .b24-form-success-text {
    color: ${THEME.navy} !important;
  }
`

export function injectBitrixFormThemeOverrides(): void {
  let style = document.getElementById(
    BITRIX_THEME_STYLE_ID
  ) as HTMLStyleElement | null

  if (!style) {
    style = document.createElement("style")
    style.id = BITRIX_THEME_STYLE_ID
    document.head.appendChild(style)
  }

  style.textContent = BITRIX_FORM_THEME_CSS
}

/** One-shot success screen styling — only call after submit, never during typing. */
export function applyBitrixFormSuccessTheme(root: ParentNode): void {
  root
    .querySelectorAll<HTMLElement>(
      ".b24-form-state.b24-form-success, .b24-form-success"
    )
    .forEach((el) => {
      el.style.setProperty("background", THEME.successBg, "important")
      el.style.setProperty("background-color", THEME.successBg, "important")
    })

  root
    .querySelectorAll<HTMLElement>(
      ".b24-form-state-icon, .b24-form-success-icon"
    )
    .forEach((el) => {
      el.style.setProperty("background-color", THEME.button, "important")
      el.style.setProperty("border-color", THEME.button, "important")
      el.style.setProperty("color", THEME.white, "important")
    })

  root
    .querySelectorAll<HTMLElement>(
      ".b24-form-state-text, .b24-form-state-title, .b24-form-state-description, .b24-form-success-text"
    )
    .forEach((el) => {
      el.style.setProperty("color", THEME.navy, "important")
    })
}
