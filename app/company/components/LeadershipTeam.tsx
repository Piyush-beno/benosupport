"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const leaders = [
  {
    name: "Pawan Sengar",
    role: "Group CEO",
    img: "/assets/ceo.svg",
    bio: "Pawan leads Beno Support's global strategy, engineering vision, and enterprise partnerships. With deep expertise in AI, cloud, and digital transformation, he drives innovation across industries.",
  },
  {
    name: "Abhinesh Pratap Singh",
    role: "Managing Director",
    img: "/assets/md.svg",
    bio: "Abhinesh oversees operations, delivery excellence, and client success. His leadership spans enterprise software programs, P&L management, and building high-performance global delivery teams.",
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
    <section ref={ref} className="bg-[#f7f9fc] py-20 lg:py-24">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="mb-3">
          <span
            data-fade
            className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#3b67ff]"
          >
            Leadership Team
          </span>
        </div>

        <h2
          data-fade
          className="mb-10 text-3xl font-extrabold text-[#0a1628] lg:text-[36px]"
        >
          Leadership Team
        </h2>

        {/* Full-width cards */}
    {/* Cards */}
<div className="grid gap-6 lg:grid-cols-2">
  {leaders.map((l, index) => (
    <div
      key={l.name}
      data-fade
      className={`flex gap-7 rounded-[24px] bg-white p-7 transition-all duration-300
     `}
    >
      {/* Image */}
      <div className="relative h-[180px] w-[180px] shrink-0 overflow-hidden rounded-xl">
        <Image
          src={l.img}
          alt={l.name}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <h3 className="text-[22px] font-bold text-[#111827]">
          {l.name}
        </h3>

        <p className="mb-5 text-[15px] font-bold text-[#0b2c5f]">
          {l.role}
        </p>

        <p className="text-[15px] leading-[1.8] text-[#5b6473]">
          {l.bio}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}