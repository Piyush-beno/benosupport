"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function LifeAtBeno() {
  const ref = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(
        ref.current!.querySelectorAll("[data-fade]"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.13,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
          },
        }
      )

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      )

      // Parallax effect
      gsap.to("[data-inner]", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="overflow-hidden bg-[#f7f9fc] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <span
              data-fade
              className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#3b67ff]"
            >
              Culture &amp; People
            </span>

            <h2
              data-fade
              className="mt-3 mb-5 text-3xl font-extrabold text-[#0a1628] lg:text-[36px]"
            >
              Life at Beno
            </h2>

            <p
              data-fade
              className="mb-6 text-[14.5px] leading-[1.8] text-[#4b5a72]"
            >
              At Beno Support, we encourage innovation, continuous learning,
              collaboration, and technology-driven problem solving. Our teams
              work on modern digital transformation projects that create real
              business impact across industries.
            </p>

            <ul data-fade className="space-y-3">
              {[
                "Flexible remote-first work culture",
                "Continuous learning & upskilling programs",
                "Diverse, inclusive engineering teams",
                "Impactful projects across global industries",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[13.5px] text-[#4b5a72]"
                >
                  <span className="mt-0.5 shrink-0 text-base leading-none text-[#3b67ff]">
                    •
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div
            ref={imageRef}
            className="relative h-[400px] overflow-hidden rounded-3xl lg:h-[520px]"
          >
            <div data-inner className="absolute inset-[-5%] will-change-transform">
              <Image
                src="/assets/lifeatbeno.svg"
                alt="Life at Beno"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}