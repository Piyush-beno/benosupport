"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
  </svg>
)

const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
  </svg>
)
const FBIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const IGIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)
const LIIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const YTIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
)
const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ─── Helpers ──────────────────────────────────────────────────────────────────

function splitWords(el: HTMLElement) {
  const words = el.innerText.split(" ")
  el.innerHTML = words
    .map((w) => `<span class="word-wrap" style="display:inline-block;overflow:hidden;"><span class="word" style="display:inline-block;">${w}&nbsp;</span></span>`)
    .join("")
  return el.querySelectorAll<HTMLElement>(".word")
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactUsPage() {
  const heroRef    = useRef<HTMLElement>(null)
  const h1Ref      = useRef<HTMLHeadingElement>(null)
  const subtitleRef= useRef<HTMLParagraphElement>(null)
  const heroBtnsRef= useRef<HTMLDivElement>(null)
  const imageRef   = useRef<HTMLDivElement>(null)
  const socialRef  = useRef<HTMLDivElement>(null)

  const formSectionRef = useRef<HTMLElement>(null)
  const formHeadRef    = useRef<HTMLDivElement>(null)
  const formBoxRef     = useRef<HTMLDivElement>(null)
  const infoCardsRef   = useRef<HTMLDivElement>(null)

  const officesRef     = useRef<HTMLElement>(null)
  const officeHeadRef  = useRef<HTMLDivElement>(null)
  const officeCardsRef = useRef<HTMLDivElement>(null)

  const ctaRef         = useRef<HTMLElement>(null)
  const ctaCardsRef    = useRef<HTMLDivElement>(null)

  const [formState, setFormState] = useState({
    name: "", email: "", company: "", phone: "", country: "", service: "", message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  // ── GSAP Animations ──────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Hero h1 word reveal
      if (h1Ref.current) {
        const words = splitWords(h1Ref.current)
        gsap.fromTo(words,
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.9, ease: "expo.out", stagger: 0.06, delay: 0.2 }
        )
      }
      // Hero subtitle blur
      if (subtitleRef.current) {
        gsap.fromTo(subtitleRef.current,
          { opacity: 0, filter: "blur(8px)", y: 16 },
          { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.8, ease: "power3.out", delay: 0.7 }
        )
      }
      // Hero buttons
      if (heroBtnsRef.current) {
        gsap.fromTo(heroBtnsRef.current.children,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.4)", stagger: 0.12, delay: 1.0 }
        )
      }
      // Hero image panel
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { opacity: 0, x: 60, scale: 0.97 },
          { opacity: 1, x: 0, scale: 1, duration: 1.0, ease: "expo.out", delay: 0.3 }
        )
      }
      // Social icons pop
      if (socialRef.current) {
        gsap.fromTo(socialRef.current.children,
          { opacity: 0, scale: 0, rotate: -90 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.5, ease: "back.out(1.7)", stagger: 0.08, delay: 1.1 }
        )
      }

      // Form section heading
      if (formHeadRef.current) {
        gsap.fromTo(formHeadRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: formHeadRef.current, start: "top 85%" } }
        )
      }
      // Form box
      if (formBoxRef.current) {
        gsap.fromTo(formBoxRef.current,
          { opacity: 0, y: 50, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: "power3.out",
            scrollTrigger: { trigger: formBoxRef.current, start: "top 85%" } }
        )
      }
      // Info cards stagger
      if (infoCardsRef.current) {
        gsap.fromTo(infoCardsRef.current.children,
          { opacity: 0, y: 40, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.4)", stagger: 0.12,
            scrollTrigger: { trigger: infoCardsRef.current, start: "top 85%" } }
        )
      }

      // Office heading
      if (officeHeadRef.current) {
        gsap.fromTo(officeHeadRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: officeHeadRef.current, start: "top 85%" } }
        )
      }
      // Office cards stagger
      if (officeCardsRef.current) {
        gsap.fromTo(officeCardsRef.current.children,
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "back.out(1.3)", stagger: 0.1,
            scrollTrigger: { trigger: officeCardsRef.current, start: "top 85%" } }
        )
      }

      // CTA cards
      if (ctaCardsRef.current) {
        gsap.fromTo(ctaCardsRef.current.children,
          { opacity: 0, y: 40, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "back.out(1.4)", stagger: 0.15,
            scrollTrigger: { trigger: ctaCardsRef.current, start: "top 85%" } }
        )
      }

    })
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <SiteHeader />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex min-h-[480px] overflow-hidden"
        style={{ background: "#072448" }}
      >
        {/* Left content */}
        <div className="relative z-10 flex flex-col justify-center pl-8 pr-6 lg:pl-16 lg:pr-0 pt-20 pb-16 w-full lg:w-[52%]">

          {/* Subtle grid bg */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,103,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(59,103,255,0.6) 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative max-w-[480px]">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#7fa8e8] mb-5">
              Contact Us
            </span>
            <h1
              ref={h1Ref}
              className="text-4xl lg:text-[48px] font-extrabold text-white leading-[1.1] tracking-tight mb-5"
            >
              Let's Build What's Next Together
            </h1>
            <p
              ref={subtitleRef}
              className="text-[15px] leading-relaxed text-[#8eaacc] mb-10 max-w-[420px]"
            >
              Whether you're looking to modernize operations, accelerate digital transformation,
              strengthen cybersecurity, scale your workforce, or explore AI-driven innovation,
              our experts are ready to help.
            </p>
            <div ref={heroBtnsRef} className="flex gap-3 flex-wrap">
              <a
                href="#contact-form"
                className="px-6 py-3 rounded-lg bg-[#0A3A73] text-white text-[13.5px] font-semibold hover:bg-[#2a52e0] transition-colors shadow-lg shadow-[#3b67ff]/25"
              >
                Schedule a Consultation
              </a>
              <a
                href="#contact-form"
                className="px-6 py-3 rounded-lg border border-white/25 text-white text-[13.5px] font-semibold hover:bg-white/10 transition-colors"
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>

        {/* Right image panel — diagonal clip */}
        <div
          ref={imageRef}
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%]"
          style={{
            clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
            background: "#0a1e3c",
          }}
        >
          {/* World map dots overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(59,103,255,0.8) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          {/* Gradient fade on left edge */}
          <div
            className="absolute inset-y-0 left-0 w-32 z-10"
            style={{ background: "linear-gradient(to right, #072448, transparent)" }}
          />
          {/* Placeholder for customer service image */}
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
            <div
              className="w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('/contact-hero.png')",
                backgroundPosition: "center top",
              }}
            />
            {/* Overlay for image absent state */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
                <PhoneIcon />
              </div>
              <p className="text-white/40 text-sm">Customer Support Image</p>
            </div>
          </div>
        </div>

        {/* Social sidebar moved to global SocialSidebar component in layout */}
      </section>

      {/* ── FORM + INFO CARDS ──────────────────────────────────────────────── */}
      <section
        id="contact-form"
        ref={formSectionRef}
        className="bg-[#f0f3f7] py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12">

          {/* Heading */}
          <div ref={formHeadRef} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0a1628]">Get in Touch</h2>
            <p className="mt-2 text-[14.5px] text-[#5a6a84]">
              Have a project in mind or a business challenge to solve?
            </p>
            <p className="text-[14.5px] text-[#5a6a84]">
              Fill out the form and our team will connect with you within 24 business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">

            {/* ── Form box ── */}
            <div
              ref={formBoxRef}
              className="rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(7,36,72,0.10)] relative"
              style={{ background: "#072448" }}
            >
              {/* World map dots */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(59,103,255,0.9) 1.5px, transparent 1.5px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative p-7 lg:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#3b67ff]/20 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b67ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                    <p className="text-[#8eaacc] text-sm text-center max-w-xs">
                      Thanks for reaching out. We'll get back to you within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name*"
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[13.5px] text-white placeholder:text-[#6a86a8] focus:outline-none focus:border-[#3b67ff] focus:bg-white/8 transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Business Email*"
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[13.5px] text-white placeholder:text-[#6a86a8] focus:outline-none focus:border-[#3b67ff] transition-colors"
                      />
                    </div>
                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Company Name*"
                        value={formState.company}
                        onChange={(e) => setFormState((s) => ({ ...s, company: e.target.value }))}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[13.5px] text-white placeholder:text-[#6a86a8] focus:outline-none focus:border-[#3b67ff] transition-colors"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[13.5px] text-white placeholder:text-[#6a86a8] focus:outline-none focus:border-[#3b67ff] transition-colors"
                      />
                    </div>
                    {/* Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Country"
                        value={formState.country}
                        onChange={(e) => setFormState((s) => ({ ...s, country: e.target.value }))}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[13.5px] text-white placeholder:text-[#6a86a8] focus:outline-none focus:border-[#3b67ff] transition-colors"
                      />
                      <div className="relative">
                        <select
                          value={formState.service}
                          onChange={(e) => setFormState((s) => ({ ...s, service: e.target.value }))}
                          className="w-full rounded-lg border border-white/10 bg-[#0a2048] px-4 py-3 text-[13.5px] text-[#6a86a8] focus:outline-none focus:border-[#3b67ff] transition-colors appearance-none pr-10"
                        >
                          <option value="" disabled>Service Interested In</option>
                          <option>Core Engineering</option>
                          <option>Agentic AI</option>
                          <option>Enterprise Strategy</option>
                          <option>Cloud & Platform</option>
                          <option>Cyber Resilience</option>
                          <option>Digital Product</option>
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6a86a8] pointer-events-none">
                          <ChevronDown />
                        </span>
                      </div>
                    </div>
                    {/* Textarea */}
                    <textarea
                      rows={5}
                      placeholder="Your brief message..."
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[13.5px] text-white placeholder:text-[#6a86a8] focus:outline-none focus:border-[#3b67ff] transition-colors resize-none"
                    />
                    {/* Submit */}
                    <div>
                      <button
                        onClick={handleSubmit}
                        className="px-8 py-3 rounded-lg bg-[#3b67ff] text-white text-[13.5px] font-semibold hover:bg-[#2a52e0] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#3b67ff]/25"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── Info cards ── */}
            <div ref={infoCardsRef} className="flex flex-col gap-4">
              {/* Call Us */}
              <div
                className="rounded-xl p-5 flex gap-4 items-start shadow-[0_2px_16px_rgba(7,36,72,0.10)] relative overflow-hidden"
                style={{ background: "#072448" }}
              >
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(59,103,255,0.9) 1.5px, transparent 1.5px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative shrink-0 w-10 h-10 rounded-full bg-[#3b67ff]/20 flex items-center justify-center text-[#3b67ff]">
                  <PhoneIcon />
                </div>
                <div className="relative">
                  <p className="text-[15px] font-bold text-white mb-1">Call Us</p>
                  <p className="text-[13px] text-[#8eaacc]">+91 892-988-4560</p>
                  <p className="text-[13px] text-[#8eaacc]">+91 120 423 4429</p>
                </div>
              </div>

              {/* Email Us */}
              <div
                className="rounded-xl p-5 flex gap-4 items-start shadow-[0_2px_16px_rgba(7,36,72,0.10)] relative overflow-hidden"
                style={{ background: "#072448" }}
              >
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(59,103,255,0.9) 1.5px, transparent 1.5px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative shrink-0 w-10 h-10 rounded-full bg-[#3b67ff]/20 flex items-center justify-center text-[#3b67ff]">
                  <MailIcon />
                </div>
                <div className="relative">
                  <p className="text-[15px] font-bold text-white mb-1">Email Us</p>
                  <p className="text-[13px] text-[#8eaacc]">info@benosupport.com</p>
                </div>
              </div>

              {/* Corporate Office */}
              <div
                className="rounded-xl p-5 flex gap-4 items-start shadow-[0_2px_16px_rgba(7,36,72,0.10)] relative overflow-hidden"
                style={{ background: "#072448" }}
              >
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(59,103,255,0.9) 1.5px, transparent 1.5px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative shrink-0 w-10 h-10 rounded-full bg-[#3b67ff]/20 flex items-center justify-center text-[#3b67ff]">
                  <BuildingIcon />
                </div>
                <div className="relative">
                  <p className="text-[15px] font-bold text-white mb-1">Corporate Office (India)</p>
                  <p className="text-[13px] text-[#8eaacc]">Noida, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICE LOCATIONS ──────────────────────────────────────────────── */}
      <section
        ref={officesRef}
        className="py-16 lg:py-20"
        style={{ background: "#072448" }}
      >
        {/* World map dots bg */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(59,103,255,0.9) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-[1300px] px-6 lg:px-12">

          <div ref={officeHeadRef} className="text-center mb-10">
            <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#7fa8e8]">
              Our Presence
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-white">Get in Touch</h2>
            <p className="mt-2 text-[14.5px] text-[#7a9ac0]">
              Have a project in mind or a business challenge to solve?
            </p>
          </div>

          {/* Cards grid */}
          <div
            ref={officeCardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              {
                label: "CORPORATE OFFICE",
                addr: "B-23/C1, Block B, Sector 62, Noida, Uttar Pradesh 201309",
              },
              {
                label: "REGISTERED OFFICE",
                addr: "DISTRICT CENTRE, Roots Tower, 706, PLOT NO. 7, Laxmi Nagar, New Delhi, Delhi 11009",
              },
              {
                label: "U.S OFFICE",
                addr: "6919 W. Broward Blvd, Plantation, FL 33317",
              },
              {
                label: "ADDITIONAL DELIVERY LOCATIONS",
                addr: "Lucknow | Bihar | Mumbai | Ahmedabad | Bengaluru",
              },
            ].map((office) => (
              <div
                key={office.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 flex gap-4 hover:bg-white/8 hover:border-[#3b67ff]/40 transition-all duration-300 group"
              >
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#3b67ff]/15 flex items-center justify-center text-[#3b67ff] group-hover:bg-[#3b67ff]/25 transition-colors">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#7fa8e8] mb-1.5">
                    {office.label}
                  </p>
                  <p className="text-[12.5px] text-[#8eaacc] leading-relaxed">{office.addr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL / EMAIL CTA ──────────────────────────────────────────────── */}
      <section ref={ctaRef} className="bg-white py-16 lg:py-20 border-t border-[#edf1f6]">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0a1628]">Get in Touch</h2>
            <p className="mt-2 text-[14.5px] text-[#5a6a84]">
              Have a project in mind or a business challenge to solve?
            </p>
          </div>

          <div ref={ctaCardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[860px] mx-auto">
            {/* Call */}
            <a
              href="tel:+918929884560"
              className="rounded-2xl p-7 flex gap-5 items-center group relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{ background: "#072448" }}
            >
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(59,103,255,0.9) 1.5px, transparent 1.5px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative shrink-0 w-14 h-14 rounded-full bg-[#3b67ff]/20 flex items-center justify-center text-[#3b67ff] group-hover:bg-[#3b67ff]/35 transition-colors">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="relative">
                <p className="text-[18px] font-extrabold text-white mb-1">Call Us</p>
                <p className="text-[13.5px] text-[#8eaacc]">+91 892-988-4560, +91 120 423 4429</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@benosupport.com"
              className="rounded-2xl p-7 flex gap-5 items-center group relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{ background: "#072448" }}
            >
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(59,103,255,0.9) 1.5px, transparent 1.5px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative shrink-0 w-14 h-14 rounded-full bg-[#3b67ff]/20 flex items-center justify-center text-[#3b67ff] group-hover:bg-[#3b67ff]/35 transition-colors">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div className="relative">
                <p className="text-[18px] font-extrabold text-white mb-1">Email Us</p>
                <p className="text-[13.5px] text-[#8eaacc]">info@benosupport.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}