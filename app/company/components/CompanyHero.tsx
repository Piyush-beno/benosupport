"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"

export default function CompanyHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef      = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  /* Parallax on scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      gsap.set(bgRef.current, { y: scrollY * 0.35 })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* Entrance animation */
  useEffect(() => {
    if (!contentRef.current) return
    const els = contentRef.current.querySelectorAll("[data-anim]")
    gsap.fromTo(
      els,
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.12, delay: 0.1 }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a1628]"
    >
      {/* Parallax background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110 will-change-transform"
        style={{ top: "-10%" }}
      >
        {/* <Image
          src="/hero.png"
          alt="Company Background"
          fill
          priority
          className="object-cover object-center"
        /> */}

 <video
        // ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
        src="/bgvedio.mp4"
      />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/65 to-[#0a1628]/90" />
        {/* Blue grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,103,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(59,103,255,0.6) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-[1300px] px-6 lg:px-12 text-center py-24"
      >
        <span
          data-anim
          className="inline-block rounded-full border border-[#3b67ff]/40 bg-[#3b67ff]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a9fff] mb-6"
        >
          About Beno Support
        </span>

        <h1
          data-anim
          className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
        >
          Building Future-Ready Digital&nbsp;
          <span className="text-[#3b67ff]">Enterprises Since 2008</span>
        </h1>

        <p
          data-anim
          className="mt-6 text-[15px] lg:text-[17px] text-[#8aa4c8] max-w-2xl mx-auto leading-relaxed"
        >
          Beno Support is a global technology consulting and engineering company helping startups,
          SMBs, and enterprises modernize operations through AI, cloud, cybersecurity, and software
          engineering solutions.
        </p>

        <div data-anim className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-[#072448] hover:bg-[#072448] transition-colors px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_4px_24px_rgba(59,103,255,0.4)]"
          >
            Talk to Our Experts
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-white/20 hover:border-white/40 transition-colors px-7 py-3.5 text-[14px] font-bold text-white"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Stats bar */}
        <div
          data-anim
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12"
        >
          {[
            { val: "100+",     label: "Global Clients" },
            { val: "15+",      label: "Years Industry Experience" },
            { val: "24/7",     label: "Global Delivery" },
            { val: "AI/Cloud", label: "Enterprise Engineering Expertise" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[32px] lg:text-[32px] font-extrabold text-white leading-none">{s.val}</p>
              <p className="mt-2 text-[12px] font-semibold text-[#8aa4c8] leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue to-transparent" />
    </section>
  )
}
