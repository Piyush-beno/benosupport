"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function OurStory() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            <span data-fade className="type-label section-label-dark">
              Our Story
            </span>
            <h2 data-fade className="type-heading mb-6 mt-4 text-white">
              Our Story
            </h2>
            <div data-fade className="type-body space-y-5 text-[#8aa4c8]">
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

          {/* Image — RIGHT */}
          <div className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src="/assets/company/our_story.png"
              alt="Beno Support Team"
              width={1280}
              height={1024}
              quality={100}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
