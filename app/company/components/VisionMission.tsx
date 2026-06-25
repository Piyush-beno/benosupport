"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function VisionMission() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.querySelectorAll("[data-fade]"),
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: ref.current, start: "top 78%" },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-[#f7f9fc] py-20 lg:py-24">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="mb-3">
          <span data-fade className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#3b67ff]">
            Our Vision &amp; Mission
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision — white card */}
          <div data-fade className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef2ff]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5z" stroke="#3b67ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="#3b67ff" strokeWidth="1.8"/>
              </svg>
            </div>
            <h3 className="text-[20px] font-extrabold text-[#0a1628] mb-3">Our Vision</h3>
            <p className="text-[14px] leading-[1.75] text-[#4b5a72]">
              To become a globally trusted engineering and technology transformation partner helping
              organizations innovate, scale, and thrive in the digital economy.
            </p>
          </div>

          {/* Mission — dark card */}
          <div data-fade className="rounded-2xl bg-[#072448] p-8 shadow-[0_2px_16px_rgba(7,36,72,0.18)]">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[20px] font-extrabold text-white mb-3">Our Mission</h3>
            <p className="text-[14px] leading-[1.75] text-[#8aa4c8]">
              To empower businesses through scalable software engineering, AI innovation, cloud
              transformation, cybersecurity resilience, and customer-focused digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
