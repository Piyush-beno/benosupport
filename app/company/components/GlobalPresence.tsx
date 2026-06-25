"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const regions = ["India", "North America", "Middle East", "Europe", "APAC"]

const stats = [
  { val: "5+", label: "Regions" },
  { val: "100+", label: "Global Clients" },
  { val: "24/7", label: "Remote Delivery" },
]

export default function GlobalPresence() {
  const ref    = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax
      gsap.to(innerRef.current, {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      // Fade text
      gsap.fromTo(
        ref.current!.querySelectorAll("[data-fade]"),
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.13,
          scrollTrigger: { trigger: ref.current, start: "top 78%" },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-white py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text — LEFT */}
          <div>
            <span data-fade className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#3b67ff]">
              Where We Operate
            </span>
            <h2 data-fade className="mt-3 text-3xl font-extrabold text-[#0a1628] lg:text-[36px] mb-5">
              Global Presence
            </h2>
            <div data-fade className="space-y-4 text-[14.5px] leading-[1.8] text-[#4b5a72]">
              <p>
                Beno Support supports clients across India, North America, the Middle East, Europe,
                and APAC through distributed delivery capabilities and remote-first engineering
                operations.
              </p>
              <p>
                We work with startups, SMBs, enterprises, and public sector organizations looking
                to accelerate innovation and modernize technology ecosystems globally.
              </p>
            </div>

            {/* Region tags */}
            <div data-fade className="mt-6 flex flex-wrap gap-2">
              {regions.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-[#d1d9e6] bg-[#f7f9fc] px-4 py-1.5 text-[12px] font-semibold text-[#4b5a72]"
                >
                  {r}
                </span>
              ))}
            </div>

            {/* Mini stats */}
            <div data-fade className="mt-8 flex gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-[24px] font-extrabold text-[#0a1628]">{s.val}</p>
                  <p className="text-[12px] text-[#4b5a72] font-semibold mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Parallax image — RIGHT */}
          <div
            ref={imgRef}
            className="relative h-[320px] lg:h-[460px] rounded-2xl overflow-hidden"
          >
            <div ref={innerRef} className="absolute inset-[-10%] will-change-transform">
              <Image
                src="/hero.png"
                alt="Global Presence"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#072448]/30 to-transparent" />
            </div>

            {/* Floating region count badge */}
            <div className="absolute bottom-5 left-5 z-10 rounded-xl bg-white/90 backdrop-blur-sm px-5 py-3 shadow-lg">
              <p className="text-[22px] font-extrabold text-[#0a1628] leading-none">5+</p>
              <p className="text-[12px] text-[#4b5a72] font-semibold mt-0.5">Global Regions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
