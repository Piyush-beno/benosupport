"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  Code2,
  Bot,
  Sparkles,
  Building2,
  Cloud,
  ShieldCheck,
  Settings,
  Users,
} from "lucide-react"

const pillars = [
  {
    slug: "core-engineering-application-architecture",
    icon: Code2,
    title: "Core Engineering & Application Architecture",
    description:
      "Build scalable SaaS platforms, enterprise applications, APIs, mobile apps, and distributed systems.",
  },
  {
    slug: "agentic-ai-intelligent-automation",
    icon: Bot,
    title: "Agentic AI & Intelligent Automation",
    description:
      "Deploy enterprise AI agents, intelligent automation systems, and LLM-powered workflows.",
  },
  {
    slug: "enterprise-startup-tech-strategy",
    icon: Building2,
    title: "Enterprise & Startup Tech Strategy",
    description:
      "Technology consulting, modernization roadmaps, product architecture and transformation.",
  },
  {
    slug: "cloud-platform-engineering",
    icon: Cloud,
    title: "Cloud & Platform Engineering",
    description:
      "Kubernetes, DevOps, cloud adoption, platform engineering and scalable deployments.",
  },
  {
    slug: "cyber-resilience-threat-intelligence",
    icon: ShieldCheck,
    title: "Cyber Resilience & Threat Intelligence",
    description:
      "Cybersecurity, compliance, SOC services, threat intelligence and AI guardrails.",
  },
  {
    slug: "digital-products-experience-engineering",
    icon: Sparkles,
    title: "Digital Products & Experience Engineering",
    description:
      "UX research, UI engineering, product strategy and conversion optimization.",
  },
  {
    slug: "strategic-it-governance-managed-services",
    icon: Settings,
    title: "Strategic IT Governance & Managed Services",
    description:
      "Managed infrastructure, cloud operations, governance and support services.",
  },
  {
    slug: "workforce-technology-human-capital-advisory",
    icon: Users,
    title: "Workforce Technology & Human Capital Advisory",
    description:
      "HR tech integration, workforce productivity and AI upskilling programs.",
  },
]

const groups = [
  pillars.slice(0, 3),
  pillars.slice(3, 6),
  pillars.slice(6, 8),
]

export default function ServicePillars() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % groups.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-[#f7f9fc] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="type-label section-label-light">
              Our Services
            </span>

            <h2 className="type-heading mt-3 text-[#0a1628]">
              Our Core Service Pillars
            </h2>

            <p className="type-body mt-4 max-w-3xl text-slate-600">
              Explore our technology capabilities across engineering,
              AI, cloud, cybersecurity, digital transformation and
              managed services.
            </p>
          </div>

          <Link
            href="/services"
            className="border border-[#072348] px-6 py-3 rounded-lg font-semibold text-[#072348] hover:bg-[#072348] hover:text-white transition"
          >
            View All
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
            }}
          >
            {groups.map((group, idx) => (
              <div
                key={idx}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {group.map((pillar) => {
                  const Icon = pillar.icon

                  return (
                    <Link
                      key={pillar.title}
                      href={`/services/${pillar.slug}`}
                      className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#072348] text-white flex items-center justify-center mb-5">
                        <Icon size={24} />
                      </div>

                      <h3 className="text-lg font-bold text-[#0a1628]">
                        {pillar.title}
                      </h3>

                      <p className="type-body mt-3 text-slate-600">
                        {pillar.description}
                      </p>

                      <div className="mt-6 text-[#3b67ff] font-semibold">
                        View Service →
                      </div>
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* 3 Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {groups.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "w-8 bg-[#072348]"
                  : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}