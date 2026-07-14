"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ChevronUp, Database } from "lucide-react"

import {
  FINTECH_USE_CASES,
  USE_CASES_INITIAL_VISIBLE,
  type FinTechUseCase,
} from "@/lib/use-cases-data"
import { CONTACT_GET_IN_TOUCH_HREF } from "@/lib/proposal-cta"

function UseCaseCard({ useCase }: { useCase: FinTechUseCase }) {
  const benefitsLabel = useCase.benefitsTitle ?? "Business Benefits"

  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6 sm:p-7">
      <div className="flex size-10 items-center justify-center rounded-lg bg-[#072448] text-white">
        <Database className="size-5" strokeWidth={1.8} aria-hidden />
      </div>

      <h3 className="mt-5 text-lg font-bold leading-snug text-[#072448]">
        {useCase.title}
      </h3>

      {useCase.subtitle ? (
        <p className="mt-2 text-[14px] font-semibold leading-6 text-[#475569]">
          {useCase.subtitle}
        </p>
      ) : null}

      <p className="mt-3 text-[14px] leading-7 text-[#64748b]">
        {useCase.description}
      </p>

      <div className="mt-5">
        <h4 className="text-[15px] font-bold text-[#072448]">{benefitsLabel}</h4>
        <ul className="mt-3 space-y-2">
          {useCase.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex gap-2.5 text-[14px] leading-6 text-[#64748b]"
            >
              <span
                className="mt-2 size-1.5 shrink-0 rounded-full bg-[#072448]"
                aria-hidden
              />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6">
        <Link
          href={CONTACT_GET_IN_TOUCH_HREF}
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0f62fe] transition-colors hover:text-[#072448]"
        >
          Talk To An Expert
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  )
}

export default function FintechUseCasesGrid() {
  const [expanded, setExpanded] = useState(false)

  const visibleCases = FINTECH_USE_CASES.slice(0, USE_CASES_INITIAL_VISIBLE)
  const hiddenCases = FINTECH_USE_CASES.slice(USE_CASES_INITIAL_VISIBLE)
  const hasMore = hiddenCases.length > 0
  const shownCases = expanded ? FINTECH_USE_CASES : visibleCases

  return (
    <section className="bg-[#072448] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <h2 className="text-center text-balance text-[1.65rem] font-bold tracking-[-0.02em] text-white sm:text-[2rem]">
          FinTech AI Use Cases
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {shownCases.map((useCase) => (
            <UseCaseCard key={useCase.title} useCase={useCase} />
          ))}
        </div>

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              aria-expanded={expanded}
            >
              {expanded ? (
                <>
                  Show Less
                  <ChevronUp className="size-4" aria-hidden />
                </>
              ) : (
                <>
                  Explore More
                  <ChevronDown className="size-4" aria-hidden />
                </>
              )}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
