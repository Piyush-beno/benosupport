import React from 'react'

export default function Hero(heroRef: React.RefObject<HTMLElement>, h1Ref: React.RefObject<HTMLHeadingElement>, subtitleRef: React.RefObject<HTMLParagraphElement>, heroBtnsRef: React.RefObject<HTMLDivElement>, imageRef: React.RefObject<HTMLDivElement>, socialRef: React.RefObject<HTMLDivElement>) {
  return (
     <section
        ref={heroRef}
        className="relative flex min-h-[480px] overflow-hidden"
        style={{ background: "#072448" }}
      >
        {/* Left content */}
        <div className="relative z-10 flex flex-col justify-center pl-8 pr-6 lg:pl-16 lg:pr-0 pt-20 pb-16 w-full lg:w-[52%]">

          {/* Subtle grid bg */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,103,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(59,103,255,0.6) 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative max-w-[480px]">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#7fa8e8] mb-5">
              Contact Us
            </span>
            <h1
              ref={h1Ref}
              className="text-4xl lg:text-[48px] font-extrabold text-white leading-[1.1] tracking-tight mb-5"
            >
              Let's Build What's Next Together
            </h1>
            <p
              ref={subtitleRef}
              className="text-[15px] leading-relaxed text-[#8eaacc] mb-10 max-w-[420px]"
            >
              Whether you're looking to modernize operations, accelerate digital transformation,
              strengthen cybersecurity, scale your workforce, or explore AI-driven innovation,
              our experts are ready to help.
            </p>
            <div ref={heroBtnsRef} className="flex gap-3 flex-wrap">
              <a
                href="#contact-form"
                className="px-6 py-3 rounded-lg bg-[#3b67ff] text-white text-[13.5px] font-semibold hover:bg-[#2a52e0] transition-colors shadow-lg shadow-[#3b67ff]/25"
              >
                Schedule a Consultation
              </a>
              <a
                href="#contact-form"
                className="px-6 py-3 rounded-lg border border-white/25 text-white text-[13.5px] font-semibold hover:bg-white/10 transition-colors"
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>

        {/* Right image panel — diagonal clip */}
        <div
          ref={imageRef}
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%]"
          style={{
            clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
            background: "#0a1e3c",
          }}
        >
          {/* World map dots overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(59,103,255,0.8) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          {/* Gradient fade on left edge */}
          <div
            className="absolute inset-y-0 left-0 w-32 z-10"
            style={{ background: "linear-gradient(to right, #072448, transparent)" }}
          />
          {/* Placeholder for customer service image */}
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
            <div
              className="w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('/contact-hero.png')",
                backgroundPosition: "center top",
              }}
            />
            {/* Overlay for image absent state */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
                <PhoneIcon />
              </div>
              <p className="text-white/40 text-sm">Customer Support Image</p>
            </div>
          </div>
        </div>

        {/* Social sidebar */}
        <div
          ref={socialRef}
          className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5 hidden lg:flex"
        >
          {[
            { icon: <XIcon />, href: "#" },
            { icon: <FBIcon />, href: "#" },
            { icon: <IGIcon />, href: "#" },
            { icon: <LIIcon />, href: "#" },
            { icon: <YTIcon />, href: "#" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="w-8 h-8 rounded-full bg-[#0d2550] border border-white/10 flex items-center justify-center text-[#7fa8e8] hover:bg-[#3b67ff] hover:text-white hover:border-[#3b67ff] transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </section>
  )
}
