"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import gsap from "gsap"
import { IndustriesSection } from "@/components/industries-section"
import CaseStudiesHero from "./hero"
import CaseStudiesCTA from "./cta"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// ─── Types ────────────────────────────────────────────────────────────────────

interface StatItem {
  value: string
  label: string
}

interface CaseCard {
  tag: string
  title: string
  stats: StatItem[]
}

interface Slide {
  sectionLabel: string
  heading: string
  subtext: string
  cards: [CaseCard, CaseCard]
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const slides: Slide[] = [
  {
    sectionLabel: "Featured Success Stories",
    heading: "Featured Success Stories",
    subtext:
      "From modernising legacy platforms to deploying AI at scale, here is how we drive measurable impact for our clients.",
    cards: [
      {
        tag: "FinTech · AI / ML",
        title: "Modernising Bihar's Digital Tourism Ecosystem",
        stats: [
          { value: "52%", label: "Faster Load" },
          { value: "10K+", label: "Monthly Users" },
          { value: "30%", label: "Drop in Tickets" },
        ],
      },
      {
        tag: "Enterprise · AI Deployment",
        title: "Production-Ready Enterprise AI Deployment",
        stats: [
          { value: "65%", label: "Cost Reduction" },
          { value: "<200ms", label: "Latency" },
          { value: "100%", label: "Uptime SLA" },
        ],
      },
    ],
  },
  {
    sectionLabel: "Modernising Legacy Systems",
    heading: "Modernising Legacy Systems for Scale",
    subtext:
      "Organisations and platforms often rely on decades-old infrastructure. We rebuild them for the modern era.",
    cards: [
      {
        tag: "IT Services · Mobile",
        title: "State-Scale CMS & Mobile Application Development",
        stats: [
          { value: "<50%", label: "Time to Ship" },
          { value: "50K+", label: "Mobile Users" },
          { value: "<30%", label: "Infra Cost" },
        ],
      },
      {
        tag: "Enterprise · ERP",
        title: "Legacy ERP Modernisation & Cloud Migration",
        stats: [
          { value: "-85%", label: "Manual Steps" },
          { value: "5X", label: "Throughput" },
          { value: "0", label: "Downtime Events" },
        ],
      },
    ],
  },
  {
    sectionLabel: "Moving Beyond Automation",
    heading: "Moving Beyond Automation",
    subtext:
      "Intelligent systems that don't just automate tasks — they think, decide, and act on behalf of your organisation.",
    cards: [
      {
        tag: "FinTech · Agentic AI",
        title: "Enterprise AI Workflow Transformation",
        stats: [
          { value: "+63%", label: "Ops Efficiency" },
          { value: "<200ms", label: "Response Time" },
          { value: "100%", label: "Audit Coverage" },
        ],
      },
      {
        tag: "Enterprise · Guardrails",
        title: "Enterprise AI Guardrail Framework",
        stats: [
          { value: "<50ms", label: "Eval Latency" },
          { value: "99.9%", label: "Policy Compliance" },
          { value: "0", label: "Breach Incidents" },
        ],
      },
    ],
  },
  {
    sectionLabel: "Technology That Drives Growth",
    heading: "Technology Decisions That Drive Growth",
    subtext:
      "Architectural and infrastructure choices that compound into long-term competitive advantages.",
    cards: [
      {
        tag: "SaaS · Architecture",
        title: "SaaS Product Architecture & Scaling Strategy",
        stats: [
          { value: "-40%", label: "Infra Spend" },
          { value: "10X", label: "Request Volume" },
          { value: "0", label: "SLA Breaches" },
        ],
      },
      {
        tag: "Enterprise · Cloud",
        title: "Virtual CDI & Infrastructure Optimisation",
        stats: [
          { value: "-40%", label: "Cloud Spend" },
          { value: "150+", label: "Nodes Managed" },
          { value: "0", label: "Outages" },
        ],
      },
    ],
  },
  {
    sectionLabel: "Operational Foundations",
    heading: "Building Strong Operational Foundations",
    subtext:
      "Stability and observability across the entire stack — so your teams can move fast without breaking things.",
    cards: [
      {
        tag: "Enterprise · Platforms",
        title: "Utility Management Platform Transformation",
        stats: [
          { value: "99.9%", label: "Uptime" },
          { value: "<5%", label: "Error Rate" },
          { value: "120%", label: "Capacity Headroom" },
        ],
      },
      {
        tag: "Healthcare · Governance",
        title: "Healthcare Architecture & Governance Framework",
        stats: [
          { value: "100%", label: "HIPAA Compliance" },
          { value: "+75%", label: "Data Reliability" },
          { value: "0", label: "Audit Failures" },
        ],
      },
    ],
  },
  {
    sectionLabel: "Security Across the Enterprise",
    heading: "Strengthening Security Across the Enterprise",
    subtext:
      "From network hardening to incident response — comprehensive security postures built for scale.",
    cards: [
      {
        tag: "FinTech · Security",
        title: "Security Hardening for Financial Infrastructure",
        stats: [
          { value: "100%", label: "Pen-Test Pass" },
          { value: "4X", label: "Detection Speed" },
          { value: "0", label: "Breaches Post-Deploy" },
        ],
      },
      {
        tag: "Enterprise · SOC",
        title: "Managed Security Operations & Incident Response",
        stats: [
          { value: "12 min", label: "MTTD" },
          { value: "104M+", label: "Events/Day" },
          { value: "0", label: "Critical Misses" },
        ],
      },
    ],
  },
  {
    sectionLabel: "Cloud-First Foundations",
    heading: "Building Scalable Cloud-First Foundations",
    subtext:
      "Modern infrastructure patterns that turn cloud costs into competitive leverage.",
    cards: [
      {
        tag: "Enterprise · DevOps",
        title: "Automation Orchestration & Cloud Migration",
        stats: [
          { value: "-70%", label: "Deploy Time" },
          { value: "99.99%", label: "Pipeline Uptime" },
          { value: "+40%", label: "Release Cadence" },
        ],
      },
      {
        tag: "Enterprise · Automation",
        title: "Enterprise CI/CD & DevOps Automation",
        stats: [
          { value: "13X", label: "Deploy Frequency" },
          { value: "0", label: "Rollback Incidents" },
          { value: "<30 min", label: "MTTR" },
        ],
      },
    ],
  },
  {
    sectionLabel: "Experiences That Drive Growth",
    heading: "Creating Experiences That Drive Growth",
    subtext:
      "User-centric design and CX research that turn digital touchpoints into revenue drivers.",
    cards: [
      {
        tag: "Product · UX Research",
        title: "UX Research, UI Prototyping & Conversion Optimisation",
        stats: [
          { value: "+80%", label: "Conversion" },
          { value: "-25%", label: "Bounce Rate" },
          { value: "2X", label: "Session Depth" },
        ],
      },
      {
        tag: "EdTech · Localisation",
        title: "Platform Transformation, Localisation & MarTech Intg.",
        stats: [
          { value: "+40%", label: "Retention" },
          { value: "+35%", label: "Daily Active" },
          { value: "100%", label: "WCAG 2.1 AA" },
        ],
      },
    ],
  },
  {
    sectionLabel: "Empowering the Workforce",
    heading: "Empowering the Modern Workforce",
    subtext:
      "HR tech and workforce intelligence solutions that help organisations attract, retain, and develop talent at scale.",
    cards: [
      {
        tag: "HRMS · Integration",
        title: "HR Platform Integration & Workforce Automation",
        stats: [
          { value: "+85%", label: "Onboarding NPS" },
          { value: "-30%", label: "HR Ops Cost" },
          { value: "2X", label: "Payroll Accuracy" },
        ],
      },
      {
        tag: "Enterprise · Digital",
        title: "AI Workforce Upskilling & Digital Transformation",
        stats: [
          { value: "+55%", label: "Productivity" },
          { value: "+45%", label: "Skill Coverage" },
          { value: "100%", label: "Compliance Rate" },
        ],
      },
    ],
  },
]

const industries = [
  { label: "FinTech", icon: "💳" },
  { label: "Healthcare", icon: "🏥" },
  { label: "EdTech", icon: "🎓" },
  { label: "Government", icon: "🏛️" },
  { label: "IT Services", icon: "💻" },
  { label: "Retail", icon: "🛍️" },
  { label: "Logistics", icon: "🚚" },
  { label: "Manufacturing", icon: "⚙️" },
  { label: "Real Estate", icon: "🏢" },
  { label: "Energy", icon: "⚡" },
]

// ─── Card ─────────────────────────────────────────────────────────────────────

function CaseCard({ card }: { card: CaseCard }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300">
      {/* Dark navy image zone */}
      <div
        className="h-[160px] w-full shrink-0 relative overflow-hidden"
        style={{ background: "#0d2550" }}
      >
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,103,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,103,255,0.5) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Tag chip */}
        <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider text-[#7fa8e8] bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
          {card.tag}
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="type-body mb-4 font-extrabold leading-snug text-[#0a1628]">
          {card.title}
        </h3>

        {/* Stats */}
        <div className="flex gap-6 mb-5">
          {card.stats.map((s) => (
            <div key={s.label}>
              <p className="text-[18px] font-extrabold text-[#0a1628] leading-none">{s.value}</p>
              <p className="type-label text-[#8896aa] mt-0.5 font-normal normal-case tracking-normal">{s.label}</p>
            </div>
          ))}
        </div>

        <span className="mt-auto inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#1a3a6e]">
          View Case Detail →
        </span>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  const [current, setCurrent] = useState(0)
  const gridRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement>(null)

  const animateTo = useCallback((next: number) => {
    if (next === current) return
    const dir = next > current ? 1 : -1
    if (!gridRef.current) { setCurrent(next); return }
    gsap.to(gridRef.current, {
      opacity: 0,
      x: -dir * 40,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => {
        setCurrent(next)
        gsap.fromTo(
          gridRef.current,
          { opacity: 0, x: dir * 40 },
          { opacity: 1, x: 0, duration: 0.32, ease: "power3.out" }
        )
      },
    })
  }, [current])

  const prev = () => animateTo(current === 0 ? slides.length - 1 : current - 1)
  const next = () => animateTo(current === slides.length - 1 ? 0 : current + 1)

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [current])

  const slide = slides[current]

  return (

    <div className="min-h-screen bg-background">
              <SiteHeader />
            <main>
          {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <CaseStudiesHero />

      {/* ── Carousel ─────────────────────────────────────────────────────── */}
      <section className="bg-[#f0f3f7] py-16 lg:py-20">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12">

          {/* Slide header */}
          <div ref={gridRef}>
            <div className="mb-6">
              <span className="type-label section-label-light">
                {slide.sectionLabel}
              </span>
              <h2 className="mt-1.5 type-heading text-[#0a1628] leading-snug">
                {slide.heading}
              </h2>
              <p className="mt-2 type-body text-[#5a6a84] max-w-xl">
                {slide.subtext}
              </p>
            </div>

            {/* White container */}
            <div className="rounded-2xl bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {slide.cards.map((card) => (
                    <CaseCard key={card.title} card={card} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Nav row */}
          <div className="mt-6 flex items-center justify-between">

            {/* Dots */}
            <div ref={dotsRef} className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => animateTo(i)}
                  className={[
                    "rounded-full transition-all duration-300",
                    i === current
                      ? "w-6 h-2 bg-[#1a3a6e]"
                      : "w-2 h-2 bg-[#c5cfd8] hover:bg-[#8fa3bd]",
                  ].join(" ")}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Counter + Arrows */}
            <div className="flex items-center gap-3">
              <span className="text-[12px] text-[#8896aa] font-medium tabular-nums">
                {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-[#d1dae6] flex items-center justify-center text-[#4a5a74] hover:bg-[#1a3a6e] hover:text-white hover:border-[#1a3a6e] transition-all duration-200"
                aria-label="Previous"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-[#d1dae6] flex items-center justify-center text-[#4a5a74] hover:bg-[#1a3a6e] hover:text-white hover:border-[#1a3a6e] transition-all duration-200"
                aria-label="Next"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ───────────────────────────────────────────── */}
      <IndustriesSection />

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <CaseStudiesCTA />
        </main>
              <SiteFooter />
            </div>
    
  )
}