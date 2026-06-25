"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { Code2, Bot, Sparkles } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    icon: Code2,
    title: "Core Engineering & Application Architecture",
    description:
      "Build scalable SaaS platforms, enterprise applications, APIs, mobile apps, and distributed systems with clean-code software engineering expertise.",
  },
  {
    icon: Bot,
    title: "Agentic AI & Intelligent Automation",
    description:
      "Deploy enterprise AI agents, intelligent automation systems, and LLM-powered workflows that improve efficiency, customer experience, and operational intelligence.",
  },
  {
    icon: Sparkles,
    title: "Digital Products & Experience Engineering",
    description:
      "Design user-centric digital experiences through UX research, UI engineering, product strategy, and conversion optimization.",
  },
  // Add more pillars here and the carousel will handle them automatically
]

// How many cards to show at once (responsive: 1 on mobile, 2 on tablet, 3 on desktop)
const VISIBLE = 3

export function ServicePillars() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const dragDeltaX = useRef(0)

  const totalDots = Math.ceil(pillars.length / VISIBLE)

  // ── slide to index ───────────────────────────────────────────────
  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, totalDots - 1))
    setActiveIndex(clamped)

    const track = trackRef.current
    if (!track) return

    // Each "page" shifts by 100% of the track viewport
    gsap.to(track, {
      x: `-${clamped * 100}%`,
      duration: 0.55,
      ease: "power3.out",
    })
  }, [totalDots])

  // ── entrance animation ──────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
      })

      // label chip
      const label = headingRef.current?.querySelector(".label-chip")
      if (label)
        tl.fromTo(
          label,
          { opacity: 0, y: 16, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)" },
          0
        )

      // h2 word reveal
      const heading = headingRef.current?.querySelector("h2")
      if (heading) {
        const words = heading.textContent?.split(" ") ?? []
        heading.innerHTML = words
          .map(
            (w) =>
              `<span class="word-span" style="display:inline-block;overflow:hidden;vertical-align:bottom"><span style="display:inline-block">${w}</span></span>`
          )
          .join(" ")
        tl.fromTo(
          heading.querySelectorAll(".word-span > span"),
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.7, stagger: 0.055, ease: "expo.out" },
          0.12
        )
      }

      // subtitle blur-in
      const sub = headingRef.current?.querySelector("p")
      if (sub)
        tl.fromTo(
          sub,
          { opacity: 0, y: 20, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
          0.4
        )

      // button fade
      const btn = headingRef.current?.querySelector(".header-btn")
      if (btn)
        tl.fromTo(
          btn,
          { opacity: 0, x: 16 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
          0.45
        )

      // cards stagger — animate visible cards only on load
      const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".pillar-card")
      if (cards?.length) {
        gsap.set(cards, { opacity: 0, y: 70, scale: 0.94 })
        tl.to(
          Array.from(cards).slice(0, VISIBLE),
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: { each: 0.1, from: "start" },
            ease: "power3.out",
          },
          0.5
        )

        // icon spin-in for first page
        Array.from(cards).slice(0, VISIBLE).forEach((card, i) => {
          const iconWrap = card.querySelector<HTMLElement>(".icon-wrap")
          if (!iconWrap) return
          tl.fromTo(
            iconWrap,
            { scale: 0, rotate: -90, opacity: 0 },
            { scale: 1, rotate: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
            0.5 + i * 0.1 + 0.28
          )
        })

        // remaining cards just set visible (off-screen)
        gsap.set(Array.from(cards).slice(VISIBLE), { opacity: 1, y: 0, scale: 1 })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // ── hover animations ────────────────────────────────────────────
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".pillar-card") ?? []
    const cleanups: (() => void)[] = []

    cards.forEach((card) => {
      const iconWrap = card.querySelector<HTMLElement>(".icon-wrap")
      const arrow = card.querySelector<HTMLElement>(".cta-arrow")

      const onEnter = () => {
        gsap.to(card, {
          y: -8,
          boxShadow: "0 24px 64px rgba(7,36,72,0.14)",
          duration: 0.35,
          ease: "power2.out",
        })
        if (iconWrap)
          gsap.to(iconWrap, {
            scale: 1.12,
            backgroundColor: "#0d2550",
            duration: 0.35,
            ease: "back.out(2)",
          })
        if (arrow)
          gsap.to(arrow, { x: 5, opacity: 1, duration: 0.3, ease: "power2.out" })
      }

      const onLeave = () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 2px 12px rgba(7,36,72,0.06)",
          duration: 0.45,
          ease: "power2.out",
        })
        if (iconWrap)
          gsap.to(iconWrap, {
            scale: 1,
            backgroundColor: "#072348",
            duration: 0.4,
            ease: "power2.out",
          })
        if (arrow)
          gsap.to(arrow, { x: 0, opacity: 0.6, duration: 0.3, ease: "power2.out" })
      }

      card.addEventListener("mouseenter", onEnter)
      card.addEventListener("mouseleave", onLeave)
      cleanups.push(() => {
        card.removeEventListener("mouseenter", onEnter)
        card.removeEventListener("mouseleave", onLeave)
      })
    })

    return () => cleanups.forEach((fn) => fn())
  }, [])

  // ── drag / swipe handlers ───────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    dragStartX.current = e.clientX
    dragDeltaX.current = 0
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return
    dragDeltaX.current = e.clientX - dragStartX.current
    // live drag feel
    const base = -activeIndex * 100
    const pct = (dragDeltaX.current / (trackRef.current?.offsetWidth ?? window.innerWidth)) * 100
    gsap.set(trackRef.current, { x: `${base + pct}%` })
  }

  const onPointerUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    const threshold = 60 // px
    if (dragDeltaX.current < -threshold) {
      goTo(activeIndex + 1)
    } else if (dragDeltaX.current > threshold) {
      goTo(activeIndex - 1)
    } else {
      goTo(activeIndex) // snap back
    }
  }

  return (
    <section ref={sectionRef} className="bg-[#f7f9fc] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div
          ref={headingRef}
          className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <span className="label-chip text-xs font-semibold uppercase tracking-wider text-[#3b67ff]">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1628] sm:text-4xl lg:text-5xl">
              Our Core Service Pillars
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5a72] sm:text-lg">
              Our technology services help startups, SMBs, and enterprises
              accelerate innovation, optimize operations, modernize
              infrastructure, and build scalable digital ecosystems for
              long-term growth.
            </p>
          </div>

          <button
            className="header-btn shrink-0 rounded-lg border border-[#072348] px-6 py-3 text-sm font-semibold text-[#072348] transition hover:bg-[#072348] hover:text-white"
            style={{ opacity: 0 }}
          >
            View All
          </button>
        </div>

        {/* ── Carousel ─────────────────────────────────────────── */}
        <div
          className="overflow-hidden"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {/*
            Track: width = (pillars.length / VISIBLE) × 100%
            Each card gets width = (100 / pillars.length)% of track = (1/VISIBLE)% of viewport
          */}
          <div
            ref={trackRef}
            style={{
              display: "flex",
              width: `${(pillars.length / VISIBLE) * 100}%`,
              willChange: "transform",
              userSelect: "none",
            }}
          >
            <div
              ref={cardsRef}
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${pillars.length}, 1fr)`,
                gap: "1.5rem",
                width: "100%",
                // account for the gap inside the scaled track
                padding: "0 0 4px 0", // tiny bottom pad so card box-shadow isn't clipped
              }}
            >
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <article
                    key={pillar.title}
                    className="pillar-card flex flex-col rounded-2xl border border-[#e2e8f0] bg-white p-8"
                    style={{
                      boxShadow: "0 2px 12px rgba(7,36,72,0.06)",
                      transition: "none",
                      minWidth: 0, // prevent grid blowout
                    }}
                  >
                    <div
                      className="icon-wrap mb-6 flex size-12 items-center justify-center rounded-xl bg-[#072348] text-white"
                      style={{ transition: "none" }}
                    >
                      <Icon className="size-6" />
                    </div>

                    <h3 className="text-lg font-bold leading-snug text-[#0a1628]">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4b5a72]">
                      {pillar.description}
                    </p>

                    <div className="mt-7 flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-[#072348]">
                        Request A Proposal
                      </span>
                      <span
                        className="cta-arrow text-sm font-bold text-[#3b67ff]"
                        style={{ opacity: 0.6 }}
                      >
                        →
                      </span>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Dot indicators ───────────────────────────────────── */}
        {totalDots > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: activeIndex === i ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: activeIndex === i ? "#072348" : "#c5d0e0",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "width 0.3s ease, background-color 0.3s ease",
                }}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}