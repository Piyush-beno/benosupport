"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  applyBitrixFormSuccessTheme,
  injectBitrixFormThemeOverrides,
} from "@/lib/bitrix-form-theme-overrides"

const BITRIX_FORM_ID = "inline/1/g2vuyo"
const BITRIX_LOADER_URL =
  "https://cdn.bitrix24.in/b16910457/crm/form/loader_1.js"

type ProposalFormModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function ProposalFormModal({
  isOpen,
  onClose,
}: ProposalFormModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)
  const scriptInjectedRef = useRef(false)
  const formThemeAppliedRef = useRef(false)

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return

    const container = formContainerRef.current
    if (!container) return

    // Fresh Bitrix embed each time the modal opens (avoids stale filled fields).
    container.innerHTML = ""
    scriptInjectedRef.current = false
    formThemeAppliedRef.current = false

    const script = document.createElement("script")
    script.setAttribute("data-b24-form", BITRIX_FORM_ID)
    script.setAttribute("data-skip-moving", "true")
    script.textContent = `(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'${BITRIX_LOADER_URL}');`
    container.appendChild(script)
    scriptInjectedRef.current = true
  }, [isOpen])

  useEffect(() => {
    const applyFormThemeOnce = () => {
      if (formThemeAppliedRef.current) return
      formThemeAppliedRef.current = true
      injectBitrixFormThemeOverrides()
    }

    const applySuccessTheme = () => {
      injectBitrixFormThemeOverrides()
      const container = formContainerRef.current
      if (container) {
        requestAnimationFrame(() => applyBitrixFormSuccessTheme(container))
      }
    }

    window.addEventListener("b24:form:init", applyFormThemeOnce)
    window.addEventListener("b24:form:send:success", applySuccessTheme)

    const container = formContainerRef.current
    const observer =
      container &&
      new MutationObserver(() => {
        if (container.querySelector(".b24-form")) applyFormThemeOnce()
      })

    if (observer && container) {
      observer.observe(container, { childList: true, subtree: true })
    }

    injectBitrixFormThemeOverrides()

    return () => {
      window.removeEventListener("b24:form:init", applyFormThemeOnce)
      window.removeEventListener("b24:form:send:success", applySuccessTheme)
      observer?.disconnect()
    }
  }, [])

  return (
    <div
      ref={overlayRef}
      className={cn(
        "fixed inset-0 z-[200] items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
        isOpen ? "flex" : "hidden"
      )}
      onClick={(event) => {
        if (event.target === overlayRef.current) onClose()
      }}
      role="dialog"
      aria-modal={isOpen}
      aria-hidden={!isOpen}
      aria-label="Contact form"
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-[#072448]"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div
          ref={formContainerRef}
          className="bitrix-form-theme p-6 pt-12 sm:p-8 sm:pt-14"
        />
      </div>
    </div>
  )
}
