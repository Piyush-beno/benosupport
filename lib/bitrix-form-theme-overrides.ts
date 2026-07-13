const BITRIX_THEME_STYLE_ID = "bitrix-form-theme-overrides"
const BITRIX_CONTACT_SHELL_STYLE_ID = "bitrix-contact-form-shell"

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

/** Contact-page shell: rounds Bitrix white card + kills orange bottom bar. */
export const BITRIX_CONTACT_FORM_SHELL_CSS = `
  .bitrix-contact-form,
  .bitrix-contact-form .b24-form-wrapper,
  .bitrix-contact-form .b24-form,
  .bitrix-contact-form .b24-form > form,
  .bitrix-contact-form .b24-form-inner,
  .bitrix-contact-form .b24-window,
  .bitrix-contact-form .b24-form-scroll,
  .bitrix-contact-form .b24-form-content {
    border-radius: 12px !important;
    overflow: hidden !important;
    box-shadow: none !important;
  }

  .bitrix-contact-form .b24-form-wrapper,
  .bitrix-contact-form .b24-form {
    border: none !important;
    border-top: none !important;
    border-right: none !important;
    border-left: none !important;
    border-bottom: none !important;
    outline: none !important;
  }

  .bitrix-contact-form .b24-form-btn-block,
  .bitrix-contact-form .b24-form-btn-container,
  .bitrix-contact-form .b24-form-footer {
    border: none !important;
    border-bottom: none !important;
    border-top: none !important;
    box-shadow: none !important;
  }

  .bitrix-contact-form .b24-form-wrapper::before,
  .bitrix-contact-form .b24-form-wrapper::after,
  .bitrix-contact-form .b24-form::before,
  .bitrix-contact-form .b24-form::after,
  .bitrix-contact-form .b24-form-btn-block::before,
  .bitrix-contact-form .b24-form-btn-block::after {
    display: none !important;
    content: none !important;
    border: none !important;
    background: none !important;
    height: 0 !important;
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

/** Re-inject shell CSS at end of <head> so it beats Bitrix's late stylesheets. */
export function injectBitrixContactFormShellStyles(): void {
  let style = document.getElementById(
    BITRIX_CONTACT_SHELL_STYLE_ID
  ) as HTMLStyleElement | null

  if (!style) {
    style = document.createElement("style")
    style.id = BITRIX_CONTACT_SHELL_STYLE_ID
  }

  style.textContent = BITRIX_CONTACT_FORM_SHELL_CSS
  // Always move to end of head so we win cascade fights with Bitrix CSS.
  document.head.appendChild(style)
}

/** Inline styles on Bitrix nodes — most reliable against their !important rules. */
export function applyBitrixContactFormShell(root: ParentNode): void {
  const shellSelectors = [
    ".b24-form-wrapper",
    ".b24-form",
    ".b24-form > form",
    ".b24-form-inner",
    ".b24-form-scroll",
    ".b24-form-content",
  ]

  root.querySelectorAll<HTMLElement>(shellSelectors.join(",")).forEach((el) => {
    el.style.setProperty("border-radius", "12px", "important")
    el.style.setProperty("overflow", "hidden", "important")
    el.style.setProperty("box-shadow", "none", "important")
    el.style.setProperty("border", "none", "important")
    el.style.setProperty("border-bottom", "none", "important")
  })

  root
    .querySelectorAll<HTMLElement>(
      ".b24-form-btn-block, .b24-form-btn-container, .b24-form-footer"
    )
    .forEach((el) => {
      el.style.setProperty("border", "none", "important")
      el.style.setProperty("border-bottom", "none", "important")
      el.style.setProperty("border-top", "none", "important")
      el.style.setProperty("box-shadow", "none", "important")
    })
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
