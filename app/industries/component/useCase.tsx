"use client"

import { useRef, useState } from "react"
import gsap from "gsap"
// import { useSectionEntrance } from "@/hooks/useSectionEntrance"

// ─── Data ────────────────────────────────────────────────────────────────────

interface CaseCard {
  title: string
  desc: string
}

interface IndustryTab {
  label: string
  cards: CaseCard[]
}

const industries: IndustryTab[] = [
  {
    label: "FinTech",
    cards: [
      {
        title: "AI-Powered Fraud Detection & Prevention",
        desc: "Real-time ML models detecting fraudulent transactions with sub-50ms latency across card, ACH, and digital wallet channels.",
      },
      {
        title: "Enterprise AI Agentic Implementation",
        desc: "Reducing operational costs by 40% through custom AI workflow automation and intelligent agent orchestration.",
      },
    ],
  },
  {
    label: "IT Services",
    cards: [
      {
        title: "Autonomous IT Helpdesk Automation",
        desc: "Autonomous agents handling L1 IT tickets, procurement approvals, and compliance checks end-to-end without human handoff.",
      },
      {
        title: "Zero-Trust Security Infrastructure",
        desc: "Deploying micro-segmented, zero-trust network architecture reducing breach surface by 70% across enterprise endpoints.",
      },
    ],
  },
  {
    label: "Healthcare",
    cards: [
      {
        title: "Predictive Patient Risk Stratification",
        desc: "Clinical NLP and ML pipeline surfacing high-risk patients 72 hours before deterioration across 40+ vitals and notes.",
      },
      {
        title: "AI-Assisted Radiology Diagnostics",
        desc: "Deep learning models flagging anomalies in CT and MRI scans with 97.4% sensitivity, reducing radiologist review time by 35%.",
      },
    ],
  },
  {
    label: "EdTech",
    cards: [
      {
        title: "Adaptive Learning Path Engine",
        desc: "LLM-driven curriculum personalisation adjusting content difficulty and format in real time based on engagement signals.",
      },
      {
        title: "AI Tutoring & Assessment Platform",
        desc: "Conversational AI tutor delivering personalised feedback loops, improving average assessment scores by 28% within one semester.",
      },
    ],
  },
  {
    label: "Government",
    cards: [
      {
        title: "Smart City Operations Dashboard",
        desc: "Unified IoT data platform ingesting 2M+ events/day from traffic, energy, and public safety sensors with live anomaly alerts.",
      },
      {
        title: "Citizen Services AI Portal",
        desc: "Multilingual AI assistant handling 85% of citizen queries end-to-end, cutting average resolution time from 4 days to 6 hours.",
      },
    ],
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)
  // useSectionEntrance(sectionRef)

  const handleTab = (i: number) => {
    if (i === activeTab) return
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.16,
        ease: "power2.in",
        onComplete: () => {
          setActiveTab(i)
          gsap.fromTo(
            gridRef.current,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.34, ease: "power3.out" }
          )
        },
      })
    } else {
      setActiveTab(i)
    }
  }

  const active = industries[activeTab]

  return (
    <section ref={sectionRef} className="bg-[#e8ecf0] py-20 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">

        {/* Header */}
        <div className="mb-8 max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a3a6e]">
            Industry Use Cases
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0a1628] sm:text-4xl lg:text-[40px]">
            Real-World Use Cases Across Industries
          </h2>
        </div>

        {/* White outer container */}
        <div className="rounded-2xl bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)] overflow-hidden">

          {/* Underline tab bar */}
          <div className="border-b border-[#e2e8f0]">
            <div className="flex">
              {industries.map((ind, i) => (
                <button
                  key={ind.label}
                  onClick={() => handleTab(i)}
                  className={[
                    "relative flex-1 py-5 text-[14px] font-semibold transition-colors duration-200",
                    i === activeTab
                      ? "text-[#1a3a6e]"
                      : "text-[#6b7a99] hover:text-[#0a1628]",
                  ].join(" ")}
                >
                  {ind.label}
                  {/* active underline */}
                  {i === activeTab && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-[#1a3a6e]" />
                  )}
                  {/* separator between tabs */}
                  {i < industries.length - 1 && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-px bg-[#e2e8f0]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="p-6 lg:p-8">
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {active.cards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                >
                  {/* Dark navy image zone */}
                  <div
                    className="h-[160px] w-full shrink-0 relative overflow-hidden"
                    style={{ background: "#0d2550" }}
                  >
                    {/* subtle grid overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.10]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(59,103,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,103,255,0.5) 1px,transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-[16px] font-extrabold text-[#0a1628] leading-snug mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-[#5a6a84] flex-1">
                      {card.desc}
                    </p>
                    <a
                      href="#"
                      className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1a3a6e] hover:text-[#3b67ff] transition-colors"
                    >
                      Explore Use Cases →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}