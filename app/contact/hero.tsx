import React from "react"

interface HeroProps {
  heroRef: React.RefObject<HTMLElement | null>
  h1Ref: React.RefObject<HTMLHeadingElement | null>
  subtitleRef: React.RefObject<HTMLParagraphElement | null>
  heroBtnsRef: React.RefObject<HTMLDivElement | null>
  imageRef: React.RefObject<HTMLDivElement | null>
  socialRef: React.RefObject<HTMLDivElement | null>
}

export default function Hero({
  heroRef,
  h1Ref,
  subtitleRef,
  heroBtnsRef,
  imageRef,
  socialRef,
}: HeroProps) {
  const XIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )

  const FBIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )

  const IGIcon = () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )

  const LIIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )

  const YTIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  )

  return (
    <section
      ref={heroRef}
      className="relative flex h-[80vh] min-h-[650px] overflow-hidden bg-[#072448]"
    >
      {/* Left Content */}
      <div className="relative z-10 flex w-full lg:w-[52%] flex-col justify-center px-8 lg:px-16">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,103,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(59,103,255,0.6) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-[520px]">
          <span className="mb-5 inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#7fa8e8]">
            Contact Us
          </span>

          <h1
            ref={h1Ref}
            className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-[56px]"
          >
            Let's Build What's Next Together
          </h1>

          <p
            ref={subtitleRef}
            className="mb-10 max-w-[450px] text-[15px] leading-relaxed text-[#8eaacc]"
          >
            Whether you're looking to modernize operations, accelerate digital
            transformation, strengthen cybersecurity, scale your workforce, or
            explore AI-driven innovation, our experts are ready to help.
          </p>

          <div ref={heroBtnsRef} className="flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="rounded-lg bg-[#0A3A73] px-6 py-3 text-[13.5px] font-semibold text-white transition hover:bg-[#0A3A73]"
            >
              Schedule a Consultation
            </a>

            <a
              href="#contact-form"
              className="rounded-lg border border-white/25 px-6 py-3 text-[13.5px] font-semibold text-white transition hover:bg-white/10"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div
        ref={imageRef}
        className="absolute right-0 top-0 hidden h-full w-[48%] lg:block"
        style={{
          clipPath: "polygon(8% 0%,100% 0%,100% 100%,0% 100%)",
        }}
      >
        <div
          className="absolute inset-0 z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(59,103,255,0.8) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <img
          src="/assets/contact/heroimg.png"
          alt="Contact Hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* Social Sidebar */}
      <div
        ref={socialRef}
        className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex"
      >
        {[
          <XIcon key="x" />,
          <FBIcon key="fb" />,
          <IGIcon key="ig" />,
          <LIIcon key="li" />,
          <YTIcon key="yt" />,
        ].map((icon, i) => (
          <a
            key={i}
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0d2550] text-[#7fa8e8] transition-all hover:border-[#3b67ff] hover:bg-[#3b67ff] hover:text-white"
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  )
}