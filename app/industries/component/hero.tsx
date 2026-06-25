import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

export default function IndustriesHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const btnsRef = useRef<HTMLDivElement>(null)

  const heroData = {
  eyebrow: "AI-Powered Industry Solutions",
  title: "AI-Powered Digital Transformation Solutions Across Industries",
  subtitle:
    "Helping industries modernize operations, automate workflows, improve customer experiences, and scale securely with AI, Cloud, Data, and Software Solutions.",
  stats: [
    { value: "15+",  label: "15+ Years of Technology Expertise" },
    { value: "Global Delivery",    label: "Global Delivery Model" },
    { value: "Ai-Driven Engineering",   label: "AI-Driven Engineering Solutions" },
    { value: "🔒",   label: "Secure & Scalable Architecture" },
  ],
  cta1: "Request A Proposal",
  cta2: "Talk To Our Experts",
}

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })

      if (h1Ref.current) {
        const words = (h1Ref.current.dataset.text ?? "").split(" ")

        h1Ref.current.innerHTML = words
          .map(
            (w) =>
              `<span style="display:inline-block;overflow:hidden;vertical-align:bottom;margin-right:.2em">
                <span class="wi" style="display:inline-block">${w}</span>
              </span>`
          )
          .join("")

        tl.fromTo(
          h1Ref.current.querySelectorAll(".wi"),
          {
            y: "115%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            duration: 0.95,
            stagger: 0.045,
            ease: "expo.out",
          },
          0
        )
      }

      tl.fromTo(
        subRef.current,
        {
          opacity: 0,
          y: 24,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
        },
        0.55
      )

      const stats = Array.from(statsRef.current?.children ?? [])

      tl.fromTo(
        stats,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        },
        0.5
      )

      const btns = Array.from(btnsRef.current?.children ?? [])

      tl.fromTo(
        btns,
        {
          opacity: 0,
          y: 18,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "back.out(2)",
        },
        0.8
      )

      stats.forEach((el) => {
        el.addEventListener("mouseenter", () =>
          gsap.to(el, {
            y: -5,
            scale: 1.03,
            duration: 0.25,
            ease: "power2.out",
          })
        )

        el.addEventListener("mouseleave", () =>
          gsap.to(el, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#072448] py-28 lg:py-36"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glows */}
      <div className="absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#3B67FF]/20 blur-[180px]" />

      <div className="absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#3B67FF]/10 blur-[120px]" />

      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 text-center lg:px-12">
        {/* Eyebrow */}
        {/* <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70 backdrop-blur-md">
          {heroData.eyebrow}
        </span> */}

        {/* Title */}
        <h1
          ref={h1Ref}
          data-text={heroData.title}
          className="mx-auto mt-8 max-w-7xl text-[3rem] font-extrabold leading-[1.05] tracking-[-2px] text-white sm:text-[4rem] lg:text-[4rem]"
        >
          {heroData.title}
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          style={{ opacity: 0 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/65"
        >
          {heroData.subtitle}
        </p>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-4"
        >
          {heroData.stats.map((s) => (
            <div
              key={s.label}
              style={{
                opacity: 0,
                backgroundColor: "rgba(255,255,255,.05)",
              }}
              className="rounded-2xl border border-white/10 px-8 py-7 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              {/* <div className="text-4xl font-extrabold text-white">
                {s.value}
              </div> */}

              <div className="mt-3 text-sm uppercase tracking-wider text-white/55">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div
          ref={btnsRef}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >
          <button
            style={{ opacity: 0 }}
            className="rounded-xl bg-[#0A3A73] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(7,36,72,.45)] transition hover:bg-[#0a3557]"
          >
            {heroData.cta1}
          </button>

          <button
            style={{ opacity: 0 }}
            className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
          >
            {heroData.cta2}
          </button>
        </div>
      </div>
    </section>
  )
}
