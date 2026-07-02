"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Hero from "./hero";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const HeadsetIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const BuildingIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M3 5l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Map background ───────────────────────────────────────────────────────────

const MAP_BG_STYLE: React.CSSProperties = {
  backgroundImage: "url('/assets/contact/Map_Background.svg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function MapBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[1.0]"
      style={MAP_BG_STYLE}
      aria-hidden
    />
  );
}

function DarkPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#072448] shadow-[0_4px_24px_rgba(7,36,72,0.10)] ${className}`}
    >
      <MapBackground />
      <div className="relative">{children}</div>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function splitWords(el: HTMLElement) {
  const words = el.innerText.split(" ");
  el.innerHTML = words
    .map(
      (w) =>
        `<span class="text-reveal-word word-wrap"><span class="word text-reveal-inner">${w}&nbsp;</span></span>`,
    )
    .join("");
  return el.querySelectorAll<HTMLElement>(".word");
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactUsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const heroBtnsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const formSectionRef = useRef<HTMLElement>(null);
  const formHeadRef = useRef<HTMLDivElement>(null);
  const formBoxRef = useRef<HTMLDivElement>(null);
  const infoCardsRef = useRef<HTMLDivElement>(null);

  const officesRef = useRef<HTMLElement>(null);
  const officeHeadRef = useRef<HTMLDivElement>(null);
  const officeCardsRef = useRef<HTMLDivElement>(null);

  const ctaRef = useRef<HTMLElement>(null);
  const ctaCardsRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!formState.name.trim() || !formState.email.trim() || !formState.company.trim()) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setSubmitError(
          typeof data.error === "string"
            ? data.error
            : "Failed to send message. Please try again."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Network error. Please try again or email info@benosupport.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero h1 word reveal
      if (h1Ref.current) {
        const words = splitWords(h1Ref.current);
        gsap.fromTo(
          words,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.06,
            delay: 0.2,
          },
        );
      }
      // Hero subtitle blur
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, filter: "blur(8px)", y: 16 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.7,
          },
        );
      }
      // Hero buttons
      if (heroBtnsRef.current) {
        gsap.fromTo(
          heroBtnsRef.current.children,
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
            stagger: 0.12,
            delay: 1.0,
          },
        );
      }
      // Hero image panel
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: 60, scale: 0.97 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.0,
            ease: "expo.out",
            delay: 0.3,
          },
        );
      }
      // Social icons pop
      if (socialRef.current) {
        gsap.fromTo(
          socialRef.current.children,
          { opacity: 0, scale: 0, rotate: -90 },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            stagger: 0.08,
            delay: 1.1,
          },
        );
      }

      // Form section heading
      if (formHeadRef.current) {
        gsap.fromTo(
          formHeadRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: formHeadRef.current, start: "top 85%" },
          },
        );
      }
      // Form box
      if (formBoxRef.current) {
        gsap.fromTo(
          formBoxRef.current,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: formBoxRef.current, start: "top 85%" },
          },
        );
      }
      // Info cards stagger
      if (infoCardsRef.current) {
        gsap.fromTo(
          infoCardsRef.current.children,
          { opacity: 0, y: 40, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
            stagger: 0.12,
            scrollTrigger: { trigger: infoCardsRef.current, start: "top 85%" },
          },
        );
      }

      // Office heading
      if (officeHeadRef.current) {
        gsap.fromTo(
          officeHeadRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: officeHeadRef.current, start: "top 85%" },
          },
        );
      }
      // Office cards stagger
      if (officeCardsRef.current) {
        gsap.fromTo(
          officeCardsRef.current.children,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "back.out(1.3)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: officeCardsRef.current,
              start: "top 85%",
            },
          },
        );
      }

      // CTA cards
      if (ctaCardsRef.current) {
        gsap.fromTo(
          ctaCardsRef.current.children,
          { opacity: 0, y: 40, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "back.out(1.4)",
            stagger: 0.15,
            scrollTrigger: { trigger: ctaCardsRef.current, start: "top 85%" },
          },
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <SiteHeader />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <Hero
        heroRef={heroRef}
        h1Ref={h1Ref}
        subtitleRef={subtitleRef}
        heroBtnsRef={heroBtnsRef}
        imageRef={imageRef}
        socialRef={socialRef}
      />

      {/* ── FORM + INFO CARDS ──────────────────────────────────────────────── */}
      <section
        id="contact-form"
        ref={formSectionRef}
        className="bg-white py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
          {/* Heading */}
          <div ref={formHeadRef} className="text-center mb-10">
            <h2 className="type-heading text-[#0a1628]">
              Get in Touch
            </h2>
            <p className="mt-2 type-body text-[#5a6a84]">
              Have a project in mind or a business challenge to solve?
            </p>
            <p className="type-body text-[#5a6a84]">
              Fill out the form and our team will connect with you within 24
              business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_300px] lg:items-stretch">
            {/* ── Form box ── */}
            <DarkPanel className="h-full">
              <div ref={formBoxRef} className="p-7 lg:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-16">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Message Sent!
                    </h3>
                    <p className="max-w-xs text-center text-sm text-white/70">
                      Thanks for reaching out. We'll get back to you within 24
                      business hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                    noValidate
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Full Name*"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                        className="w-full rounded-[10px] bg-white px-4 py-3.5 text-[13.5px] text-[#0a1628] placeholder:text-[#9aa5b4] focus:outline-none focus:ring-2 focus:ring-[#0A3A73]/25"
                      />
                      <input
                        type="email"
                        placeholder="Business Email*"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                        className="w-full rounded-[10px] bg-white px-4 py-3.5 text-[13.5px] text-[#0a1628] placeholder:text-[#9aa5b4] focus:outline-none focus:ring-2 focus:ring-[#0A3A73]/25"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Company Name*"
                        required
                        value={formState.company}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            company: e.target.value,
                          }))
                        }
                        className="w-full rounded-[10px] bg-white px-4 py-3.5 text-[13.5px] text-[#0a1628] placeholder:text-[#9aa5b4] focus:outline-none focus:ring-2 focus:ring-[#0A3A73]/25"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, phone: e.target.value }))
                        }
                        className="w-full rounded-[10px] bg-white px-4 py-3.5 text-[13.5px] text-[#0a1628] placeholder:text-[#9aa5b4] focus:outline-none focus:ring-2 focus:ring-[#0A3A73]/25"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Country"
                        value={formState.country}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            country: e.target.value,
                          }))
                        }
                        className="w-full rounded-[10px] bg-white px-4 py-3.5 text-[13.5px] text-[#0a1628] placeholder:text-[#9aa5b4] focus:outline-none focus:ring-2 focus:ring-[#0A3A73]/25"
                      />
                      <div className="relative">
                        <select
                          value={formState.service}
                          onChange={(e) =>
                            setFormState((s) => ({
                              ...s,
                              service: e.target.value,
                            }))
                          }
                          className={`w-full appearance-none rounded-[10px] bg-white px-4 py-3.5 pr-10 text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#0A3A73]/25 ${formState.service ? "text-[#0a1628]" : "text-[#9aa5b4]"}`}
                        >
                          <option value="" disabled>
                            Service Interested In
                          </option>
                          <option>Core Engineering</option>
                          <option>Agentic AI</option>
                          <option>Enterprise Strategy</option>
                          <option>Cloud & Platform</option>
                          <option>Cyber Resilience</option>
                          <option>Digital Product</option>
                          <option>IT Governance</option>
                          <option>Workforce Tech</option>
                        </select>
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9aa5b4]">
                          <ChevronDown />
                        </span>
                      </div>
                    </div>
                    <textarea
                      rows={5}
                      placeholder="Your brief message..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      className="w-full resize-none rounded-[10px] bg-white px-4 py-3.5 text-[13.5px] text-[#0a1628] placeholder:text-[#9aa5b4] focus:outline-none focus:ring-2 focus:ring-[#0A3A73]/25"
                    />
                    <div>
                      {submitError ? (
                        <p className="mb-3 text-sm text-red-300" role="alert">
                          {submitError}
                        </p>
                      ) : null}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-[10px] bg-[#0A3A73] px-8 py-3 text-[13.5px] font-semibold text-white transition-all duration-200 hover:bg-[#124e96] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </DarkPanel>

            {/* ── Info cards ── */}
            <div ref={infoCardsRef} className="flex flex-col gap-4">
              {[
                {
                  icon: <HeadsetIcon />,
                  title: "Call Us",
                  lines: ["+91 892-988-4560", "+91 120 423 4429"],
                },
                {
                  icon: <MailIcon />,
                  title: "Email Us",
                  lines: ["info@benosupport.com"],
                },
                {
                  icon: <BuildingIcon />,
                  title: "Corporate Office (India)",
                  lines: ["Noida, Uttar Pradesh"],
                },
              ].map((card) => (
                <DarkPanel key={card.title} className="flex-1">
                  <div className="flex items-start gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#072448]">
                      {card.icon}
                    </div>
                    <div>
                      <p className="type-body mb-1 font-bold text-white">
                        {card.title}
                      </p>
                      {card.lines.map((line) => (
                        <p
                          key={line}
                          className="type-body text-white/90"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </DarkPanel>
              ))}
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
            backgroundImage:
              "radial-gradient(circle, rgba(59,103,255,0.9) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-[1300px] px-6 lg:px-12">
          <div ref={officeHeadRef} className="text-center mb-10">
            <span className="type-label section-label-dark">
              Our Offices
            </span>
            <h2 className="mt-2 type-heading text-white">
              Registered Office
            </h2>
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
                addr: "1325 Main Street, Suite 1404, Katy, TX 77494",
              },
              {
                label: "ADDITIONAL DELIVERY LOCATIONS",
                addr: "Lucknow | Bihar | Mumbai | Ahmedabad | Bengaluru",
              },
            ].map((office) => (
              <div
                key={office.label}
                className="group flex gap-4 rounded-xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0a1628] text-white">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#0a1628]">
                    {office.label}
                  </p>
                  <p className="text-[13px] leading-relaxed text-[#5a6a84]">
                    {office.addr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL / EMAIL CTA ──────────────────────────────────────────────── */}
      <section
        ref={ctaRef}
        className="bg-white py-16 lg:py-20 border-t border-[#edf1f6]"
      >
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="type-heading text-[#0a1628]">
              Contact Information
            </h2>
          </div>

          <div
            ref={ctaCardsRef}
            className="mx-auto grid max-w-[900px] grid-cols-1 gap-5 md:grid-cols-2"
          >
            <a
              href="tel:+918929884560"
              className="group flex flex-col items-start gap-4 rounded-2xl bg-[#072448] p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#072448]">
                <HeadsetIcon />
              </div>
              <p className="text-[18px] font-extrabold text-white">Call Us</p>
              <p className="type-body text-white/90">
                +91 892-988-4560 , +91 120 423 4429
              </p>
            </a>

            <a
              href="mailto:info@benosupport.com"
              className="group flex flex-col items-start gap-4 rounded-2xl bg-[#072448] p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#072448]">
                <MailIcon />
              </div>
              <p className="text-[18px] font-extrabold text-white">Email Us</p>
              <p className="type-body text-white/90">
                info@benosupport.com
              </p>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
