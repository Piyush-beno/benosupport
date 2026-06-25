"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function OurStory() {
  const ref    = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(innerRef.current, {
        yPercent: -16,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      gsap.fromTo(
        ref.current!.querySelectorAll("[data-fade]"),
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.14,
          scrollTrigger: { trigger: ref.current, start: "top 78%" },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-[#0a1628] py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text — LEFT */}
          <div>
            <span data-fade className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#3b67ff]">
              Our Story
            </span>
            <h2 data-fade className="mt-3 text-3xl font-extrabold text-white lg:text-[36px] leading-tight mb-5">
              Our Story
            </h2>
            <div data-fade className="space-y-4 text-[14.5px] leading-[1.8] text-[#8aa4c8]">
              <p>
                Founded in 2008, Beno Support started as a technology support and digital services
                company focused on helping organizations improve operational efficiency and
                technology adoption.
              </p>
              <p>
                Over the years, we evolved into a full-scale engineering and consulting organization
                delivering enterprise-grade software solutions, cloud transformation services,
                AI-powered automation systems, cybersecurity consulting, and managed technology
                operations.
              </p>
              <p>
                Today, Beno Support works with startups, SMBs, enterprises, and public sector
                organizations across industries including healthcare, BFSI, retail, manufacturing,
                logistics, education, and SaaS.
              </p>
            </div>
          </div>

          {/* Parallax image — RIGHT */}
          <div className="relative h-[340px] lg:h-[460px] rounded-2xl overflow-hidden">
            <div ref={innerRef} className="absolute inset-[-10%] will-change-transform">
              <Image
                src="/hero.png"
                alt="Beno Support Team"
                fill
                className="object-cover object-center"
              />
              {/* Blue tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b67ff]/20 to-[#0a1628]/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
