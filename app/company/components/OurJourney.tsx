"use client"

import { useRef, useEffect } from "react"
import {
  Rocket,
  Monitor,
  Cloud,
  Cog,
  Brain,
  Globe,
  type LucideIcon,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Milestone {
  year: string
  title: string
  icon: LucideIcon
  iconAbove: boolean
}

const milestones: Milestone[] = [
  {
    year: "2008",
    title: "Company Founded",
    icon: Rocket,
    iconAbove: true,
  },
  {
    year: "2012",
    title: "Expanded into Enterprise Software Development",
    icon: Monitor,
    iconAbove: false,
  },
  {
    year: "2016",
    title: "Entered Cloud & Digital Transformation Services",
    icon: Cloud,
    iconAbove: true,
  },
  {
    year: "2020",
    title: "Enhanced Engineering, DevOps & Cybersecurity Expertise",
    icon: Cog,
    iconAbove: false,
  },
  {
    year: "2023",
    title: "Launched AI Automation & Intelligent Solutions",
    icon: Brain,
    iconAbove: true,
  },
  {
    year: "Present",
    title: "Delivering Global AI, Cloud & Engineering Excellence",
    icon: Globe,
    iconAbove: false,
  },
]

const blockColors = [
  "#0B2345",
  "#143D73",
  "#1F5A99",
  "#2D73BD",
  "#4288D5",
  "#72AFE8",
]

export default function OurJourney() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const desktopRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
      })

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          0
        )
      }

      const segments = barRef.current?.querySelectorAll<HTMLElement>(".journey-bar-segment")
      if (segments?.length) {
        gsap.set(segments, { scaleX: 0, transformOrigin: "left center" })
        tl.to(
          segments,
          {
            scaleX: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.2
        )
      }

      const icons = desktopRef.current?.querySelectorAll<HTMLElement>(".journey-icon")
      if (icons?.length) {
        tl.fromTo(
          icons,
          { opacity: 0, scale: 0.4 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.55,
            stagger: 0.1,
            ease: "back.out(1.8)",
          },
          0.55
        )
      }

      const connectors = desktopRef.current?.querySelectorAll<HTMLElement>(".journey-connector")
      if (connectors?.length) {
        gsap.set(connectors, { scaleY: 0, transformOrigin: "center top" })
        tl.to(
          connectors,
          {
            scaleY: 1,
            duration: 0.35,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.65
        )
      }

      const labels = desktopRef.current?.querySelectorAll<HTMLElement>(".journey-text")
      if (labels?.length) {
        tl.fromTo(
          labels,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          0.7
        )
      }

      const mobileLine = mobileRef.current?.querySelector<HTMLElement>(".journey-mobile-line")
      const mobileItems = mobileRef.current?.querySelectorAll<HTMLElement>(".journey-mobile-item")

      if (mobileLine) {
        gsap.set(mobileLine, { scaleY: 0, transformOrigin: "top center" })
        gsap.to(mobileLine, {
          scaleY: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mobileRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        })
      }

      if (mobileItems?.length) {
        gsap.fromTo(
          mobileItems,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: mobileRef.current,
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white pt-16 pb-12 lg:pt-20 lg:pb-14">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div ref={headingRef} className="mb-12 lg:mb-16">
          <p className="type-label mb-3 section-label-light">OUR JOURNEY TIMELINE</p>
          <h2 className="type-heading text-[#0B2345]">Our Journey</h2>
        </div>

        {/* Desktop timeline */}
        <div ref={desktopRef} className="hidden lg:block">
          <div className="flex min-h-[200px] items-end">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const color = blockColors[index]

              return (
                <div
                  key={milestone.year}
                  className="flex flex-1 flex-col items-center justify-end"
                >
                  {milestone.iconAbove ? (
                    <div className="flex flex-col items-center">
                      <div
                        className="journey-icon flex h-20 w-20 items-center justify-center rounded-full"
                        style={{ backgroundColor: color }}
                      >
                        <Icon color="white" size={34} strokeWidth={1.5} />
                      </div>
                      <div
                        className="journey-connector w-px"
                        style={{ height: 36, backgroundColor: color }}
                      />
                    </div>
                  ) : (
                    <div className="journey-text flex flex-col items-center px-2 pb-4">
                      <p className="type-body max-w-[160px] text-center font-semibold leading-snug text-[#0B2345]">
                        {milestone.title}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div ref={barRef} className="flex overflow-hidden rounded-md">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="journey-bar-segment flex flex-1 items-center justify-center py-5"
                style={{ backgroundColor: blockColors[index] }}
              >
                <span className="text-xl font-extrabold tracking-tight text-white xl:text-[1.75rem]">
                  {milestone.year}
                </span>
              </div>
            ))}
          </div>

          <div className="flex min-h-[200px] items-start">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const color = blockColors[index]

              return (
                <div
                  key={milestone.year}
                  className="flex flex-1 flex-col items-center justify-start"
                >
                  {milestone.iconAbove ? (
                    <div className="journey-text flex flex-col items-center px-2 pt-4">
                      <p className="type-body max-w-[160px] text-center font-semibold leading-snug text-[#0B2345]">
                        {milestone.title}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div
                        className="journey-connector w-px"
                        style={{ height: 36, backgroundColor: color }}
                      />
                      <div
                        className="journey-icon flex h-20 w-20 items-center justify-center rounded-full"
                        style={{ backgroundColor: color }}
                      >
                        <Icon color="white" size={34} strokeWidth={1.5} />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile timeline */}
        <div ref={mobileRef} className="lg:hidden">
          <div className="relative pl-12">
            <div
              className="journey-mobile-line absolute bottom-0 left-5 top-0 w-px"
              style={{ backgroundColor: "#4288D5" }}
            />

            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <div
                  key={milestone.year}
                  className="journey-mobile-item relative mb-8 flex items-start last:mb-0"
                >
                  <div
                    className="absolute -left-7 z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: blockColors[index] }}
                  >
                    <Icon color="white" size={22} strokeWidth={1.5} />
                  </div>
                  <div className="ml-6 pt-1">
                    <span
                      className="mb-1 block text-lg font-extrabold"
                      style={{ color: blockColors[index] }}
                    >
                      {milestone.year}
                    </span>
                    <p className="type-body font-medium leading-snug text-[#334155]">
                      {milestone.title}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
