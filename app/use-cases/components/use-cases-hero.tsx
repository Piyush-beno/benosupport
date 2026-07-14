"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { withHome } from "@/lib/breadcrumbs"
import { prepareHeadingWordAnimation } from "@/lib/prepare-heading-word-animation"
import { USE_CASES_HERO } from "@/lib/use-cases-data"

export default function UseCasesHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const tagRef = useRef<HTMLSpanElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })

      if (tagRef.current) {
        tl.fromTo(
          tagRef.current,
          { opacity: 0, y: 16, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.8)" },
          0
        )
      }

      if (h1Ref.current) {
        const wordEls = prepareHeadingWordAnimation(h1Ref.current)
        if (wordEls.length) {
          tl.fromTo(
            wordEls,
            { y: "115%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 0.9,
              stagger: 0.04,
              ease: "expo.out",
            },
            0.12
          )
        }
      }

      if (subRef.current) {
        tl.fromTo(
          subRef.current,
          { opacity: 0, y: 20, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
          },
          0.45
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex h-dvh min-h-[640px] items-end overflow-hidden pt-28 pb-16 lg:items-center lg:pb-24 lg:pt-32"
    >
      <Image
        src={USE_CASES_HERO.image}
        alt=""
        fill
        priority
        quality={100}
        className="object-cover object-[72%_center]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#021428]/80 via-[#021428]/35 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#021428]/45 via-transparent to-[#021428]/20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        <PageBreadcrumb
          items={withHome([
            { label: "Resources" },
            { label: "Use Cases" },
          ])}
          variant="dark"
        />

        <span
          ref={tagRef}
          className="mt-2 inline-flex rounded-md bg-white px-3 py-1 text-[13px] font-semibold text-[#0a1628]"
        >
          {USE_CASES_HERO.tag}
        </span>

        <h1
          ref={h1Ref}
          className="mt-5 max-w-3xl text-balance text-[1.85rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.35rem] lg:text-[2.75rem]"
        >
          {USE_CASES_HERO.title}
        </h1>

        <p
          ref={subRef}
          className="mt-5 max-w-2xl text-[15px] leading-7 text-white/85 sm:text-base"
        >
          {USE_CASES_HERO.subtitle}
        </p>
      </div>
    </section>
  )
}
