"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ChevronDown,
  AlertTriangle, TrendingDown, ShieldAlert, Layers, BarChart2, Users2,
  Code2, Bot, ShieldCheck, Cloud, Database, Monitor, Boxes, Cpu,
  Briefcase, Heart, Building2, ShoppingCart, GraduationCap, Plane,
  Factory, Landmark, Globe, Truck, Zap, Film,
  Star, ArrowRight,
} from "lucide-react"
import UseCasesSection from "./component/useCase"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import IndustriesHero from "./component/hero"
import BusinessOutcomes, { OutcomeMetricsSection } from "./component/outcomeMetrix"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────



const challengesData = {
  sectionLabel: "Industry Challenges",
  title: "Business & Technology Challenges Across Industries",
  subtitle:
    "Every industry faces unique operational, compliance, security, and scalability challenges. As technology evolves, organizations must balance innovation with efficiency while meeting growing customer expectations.",
  cards: [
    { icon: Code2,         title: "Legacy Systems & Technical Debt",          desc: "Outdated architectures slow agility, inflate maintenance costs, and block cloud adoption." },
    { icon: TrendingDown,  title: "Rising Operational Costs",                 desc: "Manual workflows and siloed tooling eat margins; automation is the fastest lever to pull." },
    { icon: ShieldAlert,   title: "Cybersecurity & Compliance Risks",         desc: "Evolving threat landscapes and tightening regulations require always-on, adaptive security." },
    { icon: Layers,        title: "Scalability Challenges",                   desc: "Monolithic systems buckle under growth; modern distributed architecture removes that ceiling." },
    { icon: BarChart2,     title: "Data Silos & Limited Visibility",          desc: "Fragmented data stacks make real-time decisions impossible — unified pipelines fix that." },
    { icon: Users2,        title: "Customer Experience Expectations",         desc: "Hyper-personalised, always-on digital experiences are now table stakes, not differentiators." },
  ],
}

const solutionsData = {
  sectionLabel: "How beno Support Helps",
  title: "Solving Industry Challenges with Intelligent Technology",
  subtitle:
    "Beno Support combines domain expertise, AI innovation, cloud-native engineering, cybersecurity capabilities, and product-focused delivery to solve complex business challenges across industries.",
  cards: [
    { icon: Code2,        title: "Application Modernisation",        desc: "Migrate monoliths to microservices, rebuild legacy stacks, and modernise entire application portfolios." },
    { icon: Bot,          title: "AI Process Automation",            desc: "Automate repetitive tasks across finance, HR, ops, and support to dramatically reduce manual costs." },
    { icon: ShieldCheck,  title: "Cybersecurity Services",           desc: "Protect critical systems, data, and digital assets with pen-testing, SOC, and compliance tooling." },
    { icon: Cloud,        title: "Cloud Transformation",             desc: "Build cloud-native infrastructure on AWS, Azure, or GCP — multi-region, IaC-managed, FinOps-tuned." },
    { icon: Database,     title: "Data Engineering & Analytics",     desc: "Design real-time data pipelines, warehouses, and BI layers that surface actionable intelligence." },
    { icon: Monitor,      title: "Managed IT Services",              desc: "24/7 monitoring, incident response, patching, and SLA-backed infrastructure management." },
    { icon: Boxes,        title: "Digital Experience Platforms",     desc: "Omni-channel commerce, CMS, and portal solutions with best-in-class UX engineering." },
    { icon: Cpu,          title: "Agile Product Engineering",        desc: "End-to-end product squads — discovery, design, engineering, QA, and launch — in rapid sprints." },
  ],
}

const industriesData = [
  { icon: Briefcase,   label: "Finance" },
  { icon: Heart,       label: "Health" },
  { icon: Building2,   label: "Real Estate" },
  { icon: ShoppingCart,label: "E-commerce" },
  { icon: GraduationCap,label:"Education" },
  { icon: Plane,       label: "Aviation" },
  { icon: Factory,     label: "Manufacturing" },
  { icon: Landmark,    label: "Government" },
  { icon: Globe,       label: "Hospitality" },
  { icon: Truck,       label: "Logistics" },
  { icon: Zap,         label: "Energy" },
  { icon: Film,        label: "Media" },
]

const useCaseTabs = ["Fintech", "IT Services", "Healthcare", "EdTech", "Government"]

const outcomesData = [
  "Reduce Manual Effort by Up to 60%",
  "Accelerate Process Efficiency",
  "Improve Customer Experience",
  "Increase Operational Visibility",
  "Enhance Security Posture",
  "Reduce Infrastructure Costs",
  "Improve Business Agility",
  "Accelerate Time-to-Market",
]

const techStackData = {
  sectionLabel: "Technology Partners",
  title: "Modern Technologies Powering Digital Transformation",
  filters: ["AI / Machine Learning", "Cloud & DevOps", "Data & Analytics", "Mobile & Frontend", "Security", "Integration"],
  stacks: [
    { name: "OpenAI",       category: "AI / Machine Learning",   initial: "AI" },
    { name: "AWS",          category: "Cloud & DevOps",           initial: "AWS" },
    { name: "Azure",        category: "Cloud & DevOps",           initial: "Az" },
    { name: "GCP",          category: "Cloud & DevOps",           initial: "GCP" },
    { name: "TensorFlow",   category: "AI / Machine Learning",   initial: "TF" },
    { name: "Snowflake",    category: "Data & Analytics",         initial: "SF" },
    { name: "dbt",          category: "Data & Analytics",         initial: "dbt" },
    { name: "React Native", category: "Mobile & Frontend",        initial: "RN" },
    { name: "Flutter",      category: "Mobile & Frontend",        initial: "Fl" },
    { name: "Prisma",       category: "Integration",              initial: "Pr" },
    { name: "Terraform",    category: "Cloud & DevOps",           initial: "TF" },
    { name: "CrowdStrike",  category: "Security",                 initial: "CS" },
  ],
}

const whyData = {
    sectionLabel: "Why Choose Us",
  title: "Why Leading Organizations Choose Beno Support ",
  subtitle:
    "Beno Support combines domain expertise, AI innovation, cloud-native engineering, cybersecurity capabilities, and product-focused delivery to solve complex business challenges across industries.",
    cards:[
  
  { icon: Star,         title: "15+ Years of Engineering Excellence",      desc: "Proven track record delivering enterprise solutions since 2008 across 20+ countries." },
  { icon: TrendingDown, title: "250+ Projects Delivered",     desc: "A portfolio spanning fintech, healthcare, government, and e-commerce at scale." },
  { icon: ShieldCheck,  title: "Certified & Compliance-Driven",            desc: "CMMI Dev L5, ISO 27001, ISO 9001 — audit-ready, always." },
  { icon: Users2,       title: "Flexible Engagement Models",               desc: "T&M, fixed-cost, dedicated squads, or fully outsourced — structured to your workflow." },
  { icon: Bot,          title: "AI-Native Engineering",                    desc: "AI embedded into delivery pipelines for faster, more accurate, smarter outcomes." },
  { icon: Globe,        title: "End-to-End Technology ",        desc: "Strategy → build → operate: one partner across the full technology lifecycle." },
    { icon: Users2,       title: "Global Delivery Capability",               desc: "Scalable delivery teams supporting organizations across multiple regions and time zones." },
  { icon: Bot,          title: "End-to-End Technology",                    desc: "Supporting businesses from strategy and implementation to ongoing optimization and support." },
]
}



const faqData = [
  { question: "Which industries does Beno Support serve?",                          answer: "We work across fintech, healthcare, government, e-commerce, logistics, education, hospitality, manufacturing, energy, and more. Our cross-domain expertise lets us apply proven patterns from one vertical to accelerate delivery in another." },
  { question: "Can you provide industry-specific digital transformation solutions?", answer: "Absolutely. Every engagement starts with a domain discovery sprint — mapping your regulatory context, existing architecture, and business KPIs — before a single line of code is written." },
  { question: "How can we help with AI consulting?",                                answer: "From use-case identification and data readiness assessment to model selection, MLOps pipeline setup, and production deployment, we handle the full AI consulting and engineering lifecycle." },
  { question: "Do you provide cloud transformation services?",                      answer: "Yes. We design and migrate workloads to AWS, Azure, and GCP using infrastructure-as-code, GitOps, and FinOps practices to optimise both resilience and cost." },
  { question: "Can Beno Support integrate with existing enterprise systems?",       answer: "Integration is a core competency. We connect modern stacks to SAP, Salesforce, Oracle, legacy ERPs, and bespoke internal platforms via REST, GraphQL, event streaming, or EDI." },
  { question: "Do you provide an SLA for IT delivery capability?",                  answer: "Yes. All managed-service and dedicated-squad engagements include formally agreed SLAs covering uptime, response times, defect resolution, and reporting cadence." },
  { question: "Can you modernise legacy enterprise systems?",                       answer: "Yes. Our modernisation practice covers everything from strangler-fig API wrappers and incremental re-architecture to full rewrites — always mapped to business risk tolerance." },
]

// ─────────────────────────────────────────────────────────────────
// REUSABLE ANIMATION HOOK
// ─────────────────────────────────────────────────────────────────

function useSectionEntrance(
  ref: React.RefObject<HTMLElement | null>,
  headingSelector = "h2",
  labelSelector = ".label-chip"
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 76%", toggleActions: "play none none none" },
      })

      const label = el.querySelector(labelSelector)
      if (label)
        tl.fromTo(label,
          { opacity: 0, y: 14, scale: 0.82 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)" }, 0)

      const h = el.querySelector<HTMLElement>(headingSelector)
      if (h) {
        const words = (h.textContent ?? "").split(" ")
        h.innerHTML = words
          .map(w => `<span style="display:inline-block;overflow:hidden;vertical-align:bottom;margin-right:.2em"><span class="wi" style="display:inline-block">${w}</span></span>`)
          .join("")
        tl.fromTo(h.querySelectorAll(".wi"),
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.75, stagger: 0.05, ease: "expo.out" }, 0.1)
      }

      const sub = el.querySelector("p.section-sub")
      if (sub)
        tl.fromTo(sub,
          { opacity: 0, y: 20, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }, 0.38)
    }, el)
    return () => ctx.revert()
  }, [])
}

// ─────────────────────────────────────────────────────────────────
// SECTION 1 — HERO
// ─────────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────────
// SECTION 2 — CHALLENGES (light)
// ─────────────────────────────────────────────────────────────────

function ChallengesSection() {
  const ref = useRef<HTMLElement>(null)
  useSectionEntrance(ref)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const cards = el.querySelectorAll<HTMLElement>(".challenge-card")
      gsap.set(cards, { opacity: 0, y: 50, scale: 0.94 })
      gsap.to(cards, {
        opacity: 1, y: 0, scale: 1, duration: 0.75,
        stagger: { each: 0.08, grid: [2, 3], from: "start" },
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 72%" },
      })

      cards.forEach(card => {
        const iconBox = card.querySelector<HTMLElement>(".ch-icon")
        card.addEventListener("mouseenter", () => {
          gsap.to(card,    { y: -6, boxShadow: "0 16px 48px rgba(7,36,72,0.12)", duration: 0.3, ease: "power2.out" })
          if (iconBox) gsap.to(iconBox, { scale: 1.12, backgroundColor: "#072348", duration: 0.3, ease: "back.out(2)" })
        })
        card.addEventListener("mouseleave", () => {
          gsap.to(card,    { y: 0, boxShadow: "0 2px 8px rgba(7,36,72,0.05)", duration: 0.4, ease: "power2.out" })
          if (iconBox) gsap.to(iconBox, { scale: 1, backgroundColor: "#eef2ff", duration: 0.35, ease: "power2.out" })
        })
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-[#f7f9fc] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 max-w-7xl">
          <span className="label-chip text-xs font-semibold uppercase tracking-wider text-[#072448]">
            {challengesData.sectionLabel}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0a1628] sm:text-4xl lg:text-5xl">
            {challengesData.title}
          </h2>
          <p className="section-sub mt-4 text-base leading-relaxed text-[#4b5a72] sm:text-lg" style={{ opacity: 0 }}>
            {challengesData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {challengesData.cards.map((c) => {
            const Icon = c.icon
            return (
              <div
  key={c.title}
  className="challenge-card group rounded-2xl border border-[#e2e8f0] bg-white p-7 cursor-default"
  style={{ boxShadow: "0 2px 8px rgba(7,36,72,0.05)", transition: "none" }}
>
  <div className="ch-icon mb-5 flex size-11 items-center justify-center rounded-xl bg-[#eef2ff]">
    <Icon className="size-5 text-[#072448] transition-colors duration-300 group-hover:text-white" />
  </div>
  <h3 className="mb-2 text-[15px] font-bold text-[#0a1628]">{c.title}</h3>
                <p className="text-[13px] leading-relaxed text-[#4b5a72]">{c.desc}</p>
</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


// ─────────────────────────────────────────────────────────────────
// SECTION 3 — SOLUTIONS (dark)
// ─────────────────────────────────────────────────────────────────

function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState<typeof solutionsData.cards[number] | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%", toggleActions: "play none none none" },
      })

      const label = headingRef.current?.querySelector(".label-chip")
      if (label) tl.fromTo(label, { opacity: 0, y: 14, scale: 0.82 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)" }, 0)

      const h2 = headingRef.current?.querySelector("h2")
      if (h2) {
        const words = (h2.textContent ?? "").split(" ")
        h2.innerHTML = words.map(w => `<span style="overflow:hidden;vertical-align:bottom;margin-right:.2em"><span class="wi" style="display:inline-block">${w}</span></span>`).join("")
        tl.fromTo(h2.querySelectorAll(".wi"), { y: "115%", opacity: 0 }, { y: "0%", opacity: 1, duration: 0.75, stagger: 0.05, ease: "expo.out" }, 0.1)
      }

      const sub = headingRef.current?.querySelector("p")
      if (sub) tl.fromTo(sub, { opacity: 0, y: 20, filter: "blur(8px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }, 0.38)

      const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".sol-card")
      if (cards?.length) {
        gsap.set(cards, { opacity: 0, y: 60, scale: 0.93 })
        tl.to(cards, {
          opacity: 1, y: 0, scale: 1, duration: 0.85,
          stagger: { each: 0.08, grid: [2, 4], from: "start" },
          ease: "power3.out",
        }, 0.45)

        cards.forEach((card, i) => {
          const iconWrap = card.querySelector<HTMLElement>(".icon-wrap")
          if (iconWrap) tl.fromTo(iconWrap, { scale: 0, rotate: -90, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: 0.55, ease: "back.out(1.7)" }, 0.45 + i * 0.08 + 0.22)

          card.addEventListener("mouseenter", () => {
            gsap.to(card, { y: -6, backgroundColor: "#3b5b82", duration: 0.32, ease: "power2.out" })
            if (iconWrap) gsap.to(iconWrap, { scale: 1.12, duration: 0.3, ease: "back.out(2)" })
          })
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { y: 0, backgroundColor: "transparent", duration: 0.42, ease: "power2.out" })
            if (iconWrap) gsap.to(iconWrap, { scale: 1, duration: 0.35, ease: "power2.out" })
          })
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-[#072348] py-20 lg:py-28">
      <div ref={sectionRef} className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div ref={headingRef} className="mb-12 max-w-7xl">
          <span className="label-chip text-xs font-semibold uppercase tracking-wider text-[#9db4d4]">
            {solutionsData.sectionLabel}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-3xl lg:text-5xl">
            {solutionsData.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
            {solutionsData.subtitle}
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {solutionsData.cards.map((card, index) => {
            const Icon = card.icon
            const cols = 4
            const isFirstInRow = index % cols === 0
            const isFirstRow = index < cols
            const borderCls = [
              "border-white/10",
              index > 0 ? "border-t" : "",
              !isFirstInRow ? "sm:border-l" : "sm:border-l-0",
              isFirstRow ? "sm:border-t-0" : "sm:border-t",
            ].join(" ")
            return (
              <div key={card.title}
                className={`sol-card flex flex-col gap-3 p-7 cursor-default ${borderCls}`}
                style={{ backgroundColor: "transparent", transition: "none" }}>
                <div className="icon-wrap flex size-10 items-center justify-center rounded-xl bg-[#1e3a6e] text-white"
                  style={{ transition: "none" }}>
                  <Icon className="size-5" />
                </div>
                <h3 className="text-[15px] font-bold text-white leading-snug">{card.title}</h3>
                <p className="text-[13px] leading-relaxed text-white/60">{card.desc}</p>
                  <button
                    type="button"
                    onClick={() => setActiveSolution(card)}
                    className="mt-auto inline-flex items-center gap-1.5 rounded-full text-white px-3 py-2 text-[12px] font-semibold text-[#072448] transition-all duration-200 hover:gap-3 "
                  >
                    Learn More <ArrowRight className="size-3.5" />
                  </button>
              </div>
            )
          })}
        </div>
      </div>
      {activeSolution ? (
        <div className="fixed top-4 inset-0 z-50">
          {/* backdrop - clicking it closes the modal */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveSolution(null)}
          />

          {/* centered modal container; stop clicks from bubbling to backdrop */}
          <div className="relative z-50 flex mt-40 items-center justify-center px-4 py-6">
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl backdrop-blur-xl text-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3b67ff] text-white">
                    <activeSolution.icon className="size-5" />
                  </div>
                  <h3 className="text-2xl font-semibold">{activeSolution.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveSolution(null)}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Close
                </button>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{activeSolution.desc}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">What this includes</p>
                  <p className="mt-2 text-sm text-white/90">A focused strategy, implementation roadmap, and delivery support built around the selected capability.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Why it matters</p>
                  <p className="mt-2 text-sm text-white/90">Helps your business accelerate digital transformation while lowering risk and improving operational resilience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────
// SECTION 4 — INDUSTRIES GRID (existing pattern)
// ─────────────────────────────────────────────────────────────────

function IndustriesGrid() {
  const ref = useRef<HTMLElement>(null)
  useSectionEntrance(ref)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const cards = el.querySelectorAll<HTMLElement>(".industry-card")
      gsap.fromTo(cards,
        { opacity: 0, y: 24, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out",
          stagger: { each: 0.05, grid: [2, 6], from: "start" },
          scrollTrigger: { trigger: el, start: "top 85%" } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="mb-10 max-w-3xl">
          <span className="label-chip text-xs font-semibold uppercase tracking-wider text-[#072448]">Industries</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0a1628] sm:text-4xl lg:text-5xl">
            Industries We Serve
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industriesData.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label}
                className="industry-card flex flex-col items-center gap-3 rounded-2xl border border-[#eceff3] bg-[#f7f9fc] px-4 py-8 text-center transition duration-300 hover:-translate-y-1 hover:border-[#072448]/30 hover:shadow-md cursor-default">
                <Icon className="size-7 text-[#072348]" />
                <span className="text-sm font-semibold text-[#072348]">{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────
// SECTION 5 — USE CASES TABS (light)
// ─────────────────────────────────────────────────────────────────

// function UseCasesSection() {
//   const [activeTab, setActiveTab] = useState(0)
//   const ref       = useRef<HTMLElement>(null)
//   const cardRef   = useRef<HTMLDivElement>(null)
//   useSectionEntrance(ref)

//   const handleTab = (i: number) => {
//     if (i === activeTab) return
//     if (cardRef.current) {
//       gsap.to(cardRef.current, {
//         opacity: 0, y: 12, duration: 0.18, ease: "power2.in",
//         onComplete: () => {
//           setActiveTab(i)
//           gsap.fromTo(cardRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.38, ease: "power3.out" })
//         },
//       })
//     } else setActiveTab(i)
//   }

//   const cases = [
//     { title: "AI-Powered Fraud Detection & Prevention", desc: "Real-time ML models detecting fraudulent transactions with sub-50ms latency across card, ACH, and digital wallet channels.", tag: "Fintech" },
//     { title: "Enterprise AI Agentic Implementation", desc: "Autonomous agents handling L1 IT tickets, procurement approvals, and compliance checks end-to-end without human handoff.", tag: "IT Services" },
//     { title: "Predictive Patient Risk Stratification", desc: "Clinical NLP and ML pipeline surfacing high-risk patients 72 hours before deterioration across 40+ vitals and notes.", tag: "Healthcare" },
//     { title: "Adaptive Learning Path Engine", desc: "LLM-driven curriculum personalisation adjusting content difficulty and format in real time based on engagement signals.", tag: "EdTech" },
//     { title: "Smart City Operations Dashboard", desc: "Unified IoT data platform ingesting 2M+ events/day from traffic, energy, and public safety sensors with live anomaly alerts.", tag: "Government" },
//   ]
//   const active = cases[activeTab]

//   return (
//     <section ref={ref} className="bg-[#f7f9fc] py-20 lg:py-28">
//       <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
//         <div className="mb-10 max-w-2xl">
//           <span className="label-chip text-xs font-semibold uppercase tracking-wider text-[#072448]">Case Studies</span>
//           <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0a1628] sm:text-4xl lg:text-5xl">
//             Real-World Use Cases Across Industries
//           </h2>
//           <p className="section-sub mt-4 text-base leading-relaxed text-[#4b5a72]" style={{ opacity: 0 }}>
//             Explore how we've delivered measurable outcomes across verticals.
//           </p>
//         </div>

//         {/* tabs */}
//         <div className="flex gap-3 flex-wrap mb-6">
//           {useCaseTabs.map((tab, i) => (
//             <button key={tab} onClick={() => handleTab(i)}
//               className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-200 ${i === activeTab
//                 ? "bg-[#072448] text-white shadow-[0_6px_20px_rgba(7,36,72,0.25)]"
//                 : "bg-white border border-[#d1d9e6] text-[#4b5a72] hover:border-[#072448]/40"}`}>
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* card */}
//         <div ref={cardRef} className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
//           <div className="p-8 lg:p-10 flex flex-col justify-between">
//             <div>
//               <span className="inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#072448] mb-4">{active.tag}</span>
//               <h3 className="text-[20px] font-extrabold text-[#0a1628] leading-snug mb-3">{active.title}</h3>
//               <p className="text-[14px] leading-[1.7] text-[#4b5a72]">{active.desc}</p>
//             </div>
//             <button className="mt-8 flex items-center gap-2 text-[13px] font-bold text-[#072448] hover:text-[#072448] transition-colors">
//               Explore Case Study <ArrowRight className="size-4" />
//             </button>
//           </div>
//           <div className="hidden lg:flex items-center justify-center min-h-[280px] relative overflow-hidden"
//             style={{ background: "linear-gradient(135deg, #0d2550 0%, #1a3a6e 100%)" }}>
//             <div className="absolute inset-0 opacity-10"
//               style={{ backgroundImage: "linear-gradient(rgba(59,103,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(59,103,255,0.6) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
//             <div className="relative z-10 text-center px-8">
//               <p className="text-[48px] font-extrabold text-white/20 leading-none">{activeTab + 1}</p>
//               <p className="text-[13px] font-semibold text-white/50 mt-2 uppercase tracking-widest">{active.tag}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// ─────────────────────────────────────────────────────────────────
// SECTION 6 — OUTCOME METRICS (dark, circular)
// ─────────────────────────────────────────────────────────────────

function OutcomeMetrics() {
  const ref = useRef<HTMLElement>(null)
  useSectionEntrance(ref)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const items = el.querySelectorAll<HTMLElement>(".outcome-item")
      const center = el.querySelector<HTMLElement>(".outcome-center")
      gsap.fromTo(items,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.07, ease: "back.out(1.8)",
          scrollTrigger: { trigger: el, start: "top 78%" } })
      if (center) gsap.fromTo(center,
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 0.9, ease: "back.out(2)",
          scrollTrigger: { trigger: el, start: "top 78%", delay: 0.3 } })
    }, el)
    return () => ctx.revert()
  }, [])

  // arrange 8 items in a circle
  const radius = 220
  const cx = 300; const cy = 300

  return (
    <section ref={ref} className="bg-[#072348] py-20 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="label-chip text-xs font-semibold uppercase tracking-wider text-[#9db4d4]">Business Success</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Measurable Business Impact
          </h2>
          <p className="section-sub mt-4 text-base leading-relaxed text-white/60">
            Quantified outcomes our clients consistently achieve after digital transformation.
          </p>
        </div>

        {/* desktop radial layout */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative" style={{ width: 600, height: 600 }}>
            {/* center */}
            <div className="outcome-center absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center size-[160px] rounded-full bg-[#072448] text-center shadow-[0_0_60px_rgba(59,103,255,0.5)]">
                <p className="text-[13px] font-extrabold text-white leading-tight">Outcome<br/>Metrics</p>
              </div>
            </div>
            {/* orbit ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-[480px] rounded-full border border-white/8" />
            </div>
            {/* items */}
            {outcomesData.map((label, i) => {
              const angle = (i / outcomesData.length) * 2 * Math.PI - Math.PI / 2
              const x = cx + radius * Math.cos(angle) - 300
              const y = cy + radius * Math.sin(angle) - 300
              return (
                <div key={label}
                  className="outcome-item absolute flex items-center justify-center text-center cursor-default"
                  style={{ left: "50%", top: "50%", transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`, width: 130, opacity: 0 }}>
                  <div className="rounded-xl border border-white/12 bg-white/6 px-3 py-2.5 backdrop-blur-sm text-[12px] font-semibold text-white/85 leading-snug hover:border-[#072448]/50 hover:bg-[#072448]/12 transition-all duration-300">
                    {label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* mobile grid */}
        <div className="lg:hidden grid grid-cols-2 gap-3">
          {outcomesData.map((label) => (
            <div key={label}
              className="outcome-item rounded-xl border border-white/12 bg-white/6 px-4 py-4 text-[13px] font-semibold text-white/85 text-center leading-snug">
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────
// SECTION 7 — TECH STACK (dark + filter tabs)
// ─────────────────────────────────────────────────────────────────

function TechStackSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const ref      = useRef<HTMLElement>(null)
  const gridRef  = useRef<HTMLDivElement>(null)
  useSectionEntrance(ref)

  const allFilters = ["All", ...techStackData.filters]
  const filtered = activeFilter === "All"
    ? techStackData.stacks
    : techStackData.stacks.filter(s => s.category === activeFilter)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".tech-card")
    if (!cards?.length) return
    gsap.fromTo(cards,
      { opacity: 0, y: 28, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: "power3.out" })
  }, [activeFilter])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const cards = el.querySelectorAll<HTMLElement>(".tech-card")
      gsap.fromTo(cards,
        { opacity: 0, y: 28, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-[#072448] py-20 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="label-chip text-xs font-semibold uppercase tracking-wider text-white">
            {techStackData.sectionLabel}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {techStackData.title}
          </h2>
        </div>

        {/* filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allFilters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`rounded-full px-4 py-2 text-[12px] font-semibold transition-all duration-200 ${f === activeFilter
                ? "bg-[#072448] text-white shadow-[0_4px_16px_rgba(59,103,255,0.4)]"
                : "border border-white/15 text-white hover:border-white/35 hover:text-white/80"}`}>
              {f}
            </button>
          ))}
        </div>

        {/* tech cards */}
        <div ref={gridRef} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {filtered.map((s) => (
            <div key={s.name}
              className="tech-card flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur-sm cursor-default transition-all duration-300 hover:border-white/30">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#1e3a6e] text-[13px] font-extrabold text-white">
                {s.initial}
              </div>
              <span className="text-[12px] font-semibold text-white/70">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────
// SECTION 8 — WHY CHOOSE (light)
// ─────────────────────────────────────────────────────────────────

function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%", toggleActions: "play none none none" },
      })

      const label = headingRef.current?.querySelector(".label-chip")
      if (label) tl.fromTo(label, { opacity: 0, y: 14, scale: 0.82 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)" }, 0)

      const h2 = headingRef.current?.querySelector("h2")
      if (h2) {
        const words = (h2.textContent ?? "").split(" ")
        h2.innerHTML = words.map(w => `<span style="display:inline-block;overflow:hidden;vertical-align:bottom;margin-right:.2em"><span class="wi" style="display:inline-block">${w}</span></span>`).join("")
        tl.fromTo(h2.querySelectorAll(".wi"), { y: "115%", opacity: 0 }, { y: "0%", opacity: 1, duration: 0.75, stagger: 0.05, ease: "expo.out" }, 0.1)
      }

      const sub = headingRef.current?.querySelector("p")
      if (sub) tl.fromTo(sub, { opacity: 0, y: 20, filter: "blur(8px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }, 0.38)

      const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".sol-card")
      if (cards?.length) {
        gsap.set(cards, { opacity: 0, y: 60, scale: 0.93 })
        tl.to(cards, {
          opacity: 1, y: 0, scale: 1, duration: 0.85,
          stagger: { each: 0.08, grid: [2, 4], from: "start" },
          ease: "power3.out",
        }, 0.45)

        cards.forEach((card, i) => {
          const iconWrap = card.querySelector<HTMLElement>(".icon-wrap")
          if (iconWrap) tl.fromTo(iconWrap, { scale: 0, rotate: -90, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: 0.55, ease: "back.out(1.7)" }, 0.45 + i * 0.08 + 0.22)

          card.addEventListener("mouseenter", () => {
            gsap.to(card, { y: -6, backgroundColor: "#3b5b82", duration: 0.32, ease: "power2.out" })
            if (iconWrap) gsap.to(iconWrap, { scale: 1.12, duration: 0.3, ease: "back.out(2)" })
          })
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { y: 0, backgroundColor: "transparent", duration: 0.42, ease: "power2.out" })
            if (iconWrap) gsap.to(iconWrap, { scale: 1, duration: 0.35, ease: "power2.out" })
          })
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-[#072348] py-20 lg:py-28">
      <div ref={sectionRef} className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div ref={headingRef} className="mb-12 max-w-6xl">
          <span className="label-chip text-xs font-semibold uppercase tracking-wider text-[#9db4d4]">
            {whyData.sectionLabel}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-3xl lg:text-5xl">
            {whyData.title}
          </h2>
          {/* <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
            {solutionsData.subtitle}
          </p> */}
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {whyData.cards.map((card, index) => {
            const Icon = card.icon
            const cols = 4
            const isFirstInRow = index % cols === 0
            const isFirstRow = index < cols
            const borderCls = [
              "border-white/10",
              index > 0 ? "border" : "",
              !isFirstInRow ? "sm:border-l" : "sm:border-l-0",
              isFirstRow ? "sm:border-t-0" : "sm:border-t",
            ].join(" ")
            return (
              <div key={card.title}
                className={`sol-card flex flex-col gap-3 p-7 cursor-default ${borderCls}`}
                style={{ backgroundColor: "transparent", transition: "none" }}>
                <div className="icon-wrap flex size-10 items-center justify-center rounded-xl bg-[#1e3a6e] text-white"
                  style={{ transition: "none" }}>
                  <Icon className="size-5" />
                </div>
                <h3 className="text-[15px] font-bold text-white leading-snug">{card.title}</h3>
                <p className="text-[13px] leading-relaxed text-white/60">{card.desc}</p>
                {/* <button className="mt-auto flex items-center gap-1.5 text-[12px] font-semibold text-[#072448] hover:gap-3 transition-all duration-200">
                  Learn More <ArrowRight className="size-3.5" />
                </button> */}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────
// SECTION 9 — FAQ (animated accordion)
// ─────────────────────────────────────────────────────────────────

function IndustriesFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const ref = useRef<HTMLElement>(null)
  const answersRef = useRef<Map<number, HTMLDivElement>>(new Map())

  useSectionEntrance(ref)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const rows = el.querySelectorAll<HTMLElement>(".faq-row")
      gsap.fromTo(rows,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" } })
    }, el)
    return () => ctx.revert()
  }, [])

  const toggle = (idx: number) => {
    const isOpen = openIdx === idx
    const el = answersRef.current.get(idx)

    if (el) {
      if (isOpen) {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in",
          onComplete: () => setOpenIdx(null) })
      } else {
        setOpenIdx(idx)
        requestAnimationFrame(() => {
          const target = answersRef.current.get(idx)
          if (target) {
            gsap.fromTo(target,
              { height: 0, opacity: 0 },
              { height: "auto", opacity: 1, duration: 0.38, ease: "power3.out" })
          }
        })
      }
    } else {
      setOpenIdx(isOpen ? null : idx)
    }
  }

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="label-chip text-xs font-semibold uppercase tracking-wider text-[#072448]">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-bold  text-[#0a1628] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="section-sub mt-4 text-base leading-relaxed text-[#4b5a72]" style={{ opacity: 0 }}>
            Common questions about our industry solutions and engagement models.
          </p>
        </div>

        <div className="divide-y divide-[#e5e9f0]">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx
            return (
              <div key={item.question} className="faq-row" style={{ opacity: 0 }}>
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-[#072448]" : "text-[#0a1628]"}`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-[#4b5a72] transition-transform duration-300 ${isOpen ? "rotate-180 text-[#072448]" : ""}`}
                  />
                </button>
                <div
                  ref={(el) => { if (el) answersRef.current.set(idx, el) }}
                  style={{ height: isOpen ? "auto" : 0, overflow: "hidden", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="pb-5 text-[14px] leading-[1.75] text-[#4b5a72]">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────
// SECTION 10 — CTA BANNER
// ─────────────────────────────────────────────────────────────────

function IndustriesCTA() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 82%" } })
      const children = el.querySelectorAll<HTMLElement>(".cta-el")
      tl.fromTo(children,
        { opacity: 0, y: 28, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.1, ease: "power3.out" })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-[#072348] py-20 lg:py-28 ">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12 text-center">
        {/* <span className="cta-el label-chip inline-block rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white/60" style={{ opacity: 0 }}>
          Get Started
        </span> */}
        <h2 className="cta-el mx-auto mt-5 max-w-7xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl" style={{ opacity: 0 }}>
          Ready to Transform Your Industry Operations?
        </h2>
        <p className="cta-el mx-auto mt-5 max-w-5xl text-base leading-relaxed text-white/60" style={{ opacity: 0 }}>
          Partner with Beno Support to modernize operations, deploy scalable digital platforms, and accelerate
AI-powered transformation tailored to your industry's unique challenges.
        </p>
       <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-button p-6 text-button-foreground hover:bg-button-hover"
          >
            Request A Proposal
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 p-6 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Schedule A Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────
// PAGE ASSEMBLY
// ─────────────────────────────────────────────────────────────────

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
          <SiteHeader />
          <main>
      <IndustriesHero />
      <ChallengesSection />
      <SolutionsSection />
      <IndustriesGrid />
      <UseCasesSection />
      <BusinessOutcomes />
      <TechStackSection />
      <WhyChooseSection />
      <IndustriesFAQ />
      <IndustriesCTA />
          </main>
          <SiteFooter />
        </div>
    
  )
}
