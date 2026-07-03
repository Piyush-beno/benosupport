"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  PageCTAOutlineButton,
  PageCTAPrimaryButton,
  PageCTASection,
} from "@/components/page-cta"
import { useProposalModal } from "@/hooks/use-proposal-modal"
import { CONTACT_GET_IN_TOUCH_HREF } from "@/lib/proposal-cta"

gsap.registerPlugin(ScrollTrigger)

export default function CompanyCTA() {
  const { openProposalModal } = useProposalModal()
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
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <PageCTASection ref={ref}>
      <h2
        data-fade
        className="type-heading mx-auto mb-4 max-w-3xl text-white"
      >
        Ready to Build Scalable Digital Products?
      </h2>
      <p
        data-fade
        className="type-body mx-auto mb-10 max-w-2xl text-[#b8c9e0] lg:mb-12"
      >
        Partner with Beno Support to modernize applications, develop scalable
        software platforms, and accelerate digital innovation with
        engineering-led solutions.
      </p>
      <div
        data-fade
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <PageCTAPrimaryButton onClick={openProposalModal}>
          Request a Proposal
        </PageCTAPrimaryButton>
        <PageCTAOutlineButton onClick={openProposalModal}>
          Schedule a Consultation
        </PageCTAOutlineButton>
        <PageCTAOutlineButton href={CONTACT_GET_IN_TOUCH_HREF}>
          Talk to Our Experts
        </PageCTAOutlineButton>
      </div>
    </PageCTASection>
  )
}
