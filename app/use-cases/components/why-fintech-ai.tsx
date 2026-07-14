import { Database } from "lucide-react"

import { WHY_INVEST_CARDS } from "@/lib/use-cases-data"

export default function WhyFintechAi() {
  return (
    <section className="bg-[#f4f6f9] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-balance text-[1.65rem] font-bold tracking-[-0.02em] text-[#072448] sm:text-[2rem]">
          Why FinTech Companies are Investing in AI
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {WHY_INVEST_CARDS.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(7,36,72,0.06)] sm:p-7"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-[#072448] text-white">
                <Database className="size-5" strokeWidth={1.8} aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#072448]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#64748b]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
