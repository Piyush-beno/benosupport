"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import type { ServiceData } from "@/lib/services-data"

function ServiceHero({ hero }: { hero: ServiceData["hero"] }) {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.fromTo(".sh-chip",     { opacity: 0, y: 12, scale: 0.85 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)" }, 0)
        .fromTo(".sh-headline", { opacity: 0, y: 50 },               { opacity: 1, y: 0, duration: 0.9 }, 0.1)
        .fromTo(".sh-desc",     { opacity: 0, y: 24 },               { opacity: 1, y: 0, duration: 0.7 }, 0.35)
        .fromTo(".sh-cta",      { opacity: 0, y: 16 },               { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 0.52)
        .fromTo(".sh-image",    { opacity: 0, scale: 1.04 },         { opacity: 1, scale: 1, duration: 1.1, ease: "power2.out" }, 0.15)
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[80%]  overflow-hidden"
      style={{ backgroundColor: "#072348" }}
    >
      {/* ── LEFT: text panel ─────────────────────────────────── */}
      <div className="relative z-10 flex w-full flex-col justify-center px-6 py-24 sm:px-10 lg:w-[55%] lg:px-16 xl:px-20 lg:py-32">

        {/* decorative grid lines — subtle */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* label chip */}
        {/* <span
          className="sh-chip mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#3b67ff]/40 bg-[#3b67ff]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7fa8e8] opacity-0"
        >
          <span className="size-1.5 rounded-full bg-[#0A3A73]" />
          Our Services
        </span> */}

        {/* headline */}
        <h1
          className="sh-headline text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-[3.25rem] xl:text-5xl leading-[1.12] opacity-0"
        >
          {hero.tagline} {hero.tagline2}
         
        </h1>

        {/* divider accent */}
        <div className="sh-desc mt-6 h-[2px] w-12 rounded-full bg-[#3b67ff] opacity-0" />

        {/* description */}
        <p className="sh-desc mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg opacity-0">
          {hero.description}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <button
            className="sh-cta group relative overflow-hidden rounded-xl bg-[#0A3A73] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#3b67ff]/30 transition-all duration-300 hover:shadow-[#3b67ff]/50 hover:brightness-110 opacity-0"
          >
            <span className="relative z-10">{hero.ctaButtons?.[0] ?? "Request A Proposal"}</span>
          </button>
          <button
            className="sh-cta rounded-xl border border-white/25 px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/8 hover:text-white opacity-0"
          >
            {hero.ctaButtons?.[1] ?? "Talk To Our Experts"}
          </button>
        </div>

        {/* trust strip */}
        <div className="sh-cta mt-10 flex items-center gap-6 opacity-0">
          {["ISO Certified", "500+ Projects", "24/7 Support"].map((tag) => (
            <span key={tag} className="flex items-center gap-1.5 text-xs text-white/40">
              <span className="size-1 rounded-full bg-[#3b67ff]" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── RIGHT: full-bleed image ───────────────────────────── */}
      {/* ── RIGHT: full-bleed image ───────────────────────────── */}
<div className="sh-image pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] opacity-0 lg:block">
  <div className="relative h-full w-full overflow-hidden">
    <img
      src={hero.image}
      alt={hero.tagline}
      className="h-full w-full object-cover object-center"
    />

    {/* dark overlay */}
    <div className="absolute inset-0 bg-[#072348]/25" />

    {/* LEFT fade — strong, blends into navy panel */}
    <div
      className="absolute inset-y-0 left-0 w-[12%]"
      style={{
        background: "linear-gradient(to right, #072348 0%, #072348 30%, rgba(7,35,72,0.85) 60%, transparent 100%)",
      }}
    />

    {/* TOP fade */}
    <div
      className="absolute inset-x-0 top-0 h-28"
      style={{ background: "linear-gradient(to bottom, #072348, transparent)" }}
    />

    {/* BOTTOM fade */}
    <div
      className="absolute inset-x-0 bottom-0 h-28"
      style={{ background: "linear-gradient(to top, #072348, transparent)" }}
    />
  </div>
</div>
    </section>
  )
}

export default ServiceHero