"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ParallaxImageBreakProps {
  src?: string
  alt?: string
  /** Text block pinned left or right of the image */
  side?: "left" | "right"
  label?: string
  heading: string
  body: React.ReactNode
  /** Background of the section wrapper */
  bg?: string
}

export default function ParallaxImageBreak({
  src = "/hero.png",
  alt = "Section image",
  side = "left",
  label,
  heading,
  body,
  bg = "#ffffff",
}: ParallaxImageBreakProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const imgWrapRef = useRef<HTMLDivElement>(null)
  const innerRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on the inner image
      gsap.to(innerRef.current, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Entrance fade for text
      gsap.fromTo(
        sectionRef.current!.querySelectorAll("[data-fade]"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.13,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const imageCol = (
    <div
      ref={imgWrapRef}
      className="relative lg:h-[560px] rounded-2xl overflow-hidden"
    >
      <div ref={innerRef} className="absolute inset-[-10%] will-change-transform">
        <Image src={src} alt={alt} fill className="object-cover object-center" />
      </div>
      {/* Subtle blue corner accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#072448]/40 to-transparent" />
    </div>
  )

  const textCol = (
    <div className="flex flex-col justify-center">
      {label && (
        <span
          data-fade
          className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#3b67ff] mb-3"
        >
          {label}
        </span>
      )}
      <h2 data-fade className="text-3xl font-extrabold text-[#0a1628] lg:text-[36px] leading-tight mb-5">
        {heading}
      </h2>
      <div data-fade className="text-[14.5px] leading-[1.8] text-[#4b5a72] space-y-4">
        {body}
      </div>
    </div>
  )

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 overflow-hidden" style={{ background: bg }}>
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {side === "left" ? (
            <>
              {imageCol}
              {textCol}
            </>
          ) : (
            <>
              {textCol}
              {imageCol}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
