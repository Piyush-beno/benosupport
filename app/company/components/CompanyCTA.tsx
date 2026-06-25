"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function CompanyCTA() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.querySelectorAll("[data-fade]"),
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.13,
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-[#072448] py-20 lg:py-24 border-b">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12 text-center">
        <h2 data-fade className="text-3xl font-extrabold text-white lg:text-[40px] max-w-2xl mx-auto leading-tight mb-4">
          Ready to Build the Future with Beno Support?
        </h2>
        <p data-fade className="text-[14.5px] text-[#8aa4c8] max-w-xl mx-auto mb-8 leading-relaxed">
          Let's talk about how Beno Support can help you scale, innovate, and transform. Reach out
          to our experts today.
        </p>
        <div data-fade className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-button transition-colors px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_4px_24px_rgba(59,103,255,0.35)]"
          >
            Request a Proposal
          </Link>
          <Link
            href="/contact#schedule"
            className="rounded-xl border border-white/20 hover:border-white/40 transition-colors px-7 py-3.5 text-[14px] font-bold text-white"
          >
            Schedule a Sales Call
          </Link>
        </div>
      </div>
    </section>
  )
}
