"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const leaders = [
  {
    name: "Abinesh Pratap Singh",
    role: "Managing Director",
    img: "/assets/md.svg",
    bio: "Abinesh Pratap Singh drives operational leadership, delivery excellence, and technology consulting initiatives across AI, cloud engineering, software development, and enterprise modernization services.",
  },
  {
    name: "Pavan Sengar",
    role: "Group CEO",
    img: "/assets/ceo.svg",
    bio: "Pavan Sengar leads Beno Support's long-term vision, business strategy, and enterprise transformation initiatives with a focus on innovation, scalable growth, and engineering excellence.",
  },
]

export default function LeadershipTeam() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.querySelectorAll("[data-fade]"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-white pb-16 lg:pb-20">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="border-t border-[#e2e8f0] pt-12 lg:pt-16">
          <h2
            data-fade
            className="type-heading mb-10 uppercase text-[#0B2345] lg:mb-12"
          >
            Leadership Team
          </h2>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                data-fade
                className="flex flex-col gap-6 rounded-2xl border border-[#e2e8f0] bg-white p-6 sm:flex-row sm:gap-8 sm:p-8"
              >
                <div className="relative mx-auto h-[210px] w-[190px] shrink-0 overflow-hidden rounded-xl sm:mx-0 sm:h-[230px] sm:w-[210px]">
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-[22px] font-bold leading-tight text-[#0B2345] lg:text-[24px]">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-[15px] font-bold text-[#0B2345] lg:text-[16px]">
                    {leader.role}
                  </p>
                  <p className="mt-4 text-[13px] leading-relaxed text-[#5b6473] lg:text-[14px]">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
