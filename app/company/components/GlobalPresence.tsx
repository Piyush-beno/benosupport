"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function GlobalPresence() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.querySelectorAll("[data-fade]"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.13,
          scrollTrigger: { trigger: ref.current, start: "top 78%" },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="overflow-hidden bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Map — LEFT */}
          <div data-fade className="w-full">
            <Image
              src="/assets/company/global_presence.png"
              alt="Beno Support global presence map"
              width={1280}
              height={638}
              quality={100}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="h-auto w-full"
            />
          </div>

          {/* Text — RIGHT */}
          <div>
            <h2
              data-fade
              className="type-heading mb-5 text-[#0B2345] lg:mb-6"
            >
              Global Presence
            </h2>
            <div
              data-fade
              className="type-body space-y-4 leading-relaxed text-[#0B2345]"
            >
              <p>
                Beno Support supports clients across India, North America,<br /> the Middle East, Europe, and APAC through distributed <br /> delivery capabilities and remote-first engineering operations.
              </p>
              <p>
                We work with startups, SMBs, enterprises, and public sector <br />
                organizations looking to accelerate innovation and modernize <br />
                technology ecosystems globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
