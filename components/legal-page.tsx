import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export type LegalSection = {
  title: string
  paragraphs: string[]
}

type LegalPageProps = {
  title: string
  effectiveDate: string
  intro?: string
  sections: LegalSection[]
  closing: string
}

export function LegalPage({
  title,
  effectiveDate,
  intro,
  sections,
  closing,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <SiteHeader />
      <main className="pb-20 pt-28 lg:pt-32">
        <article className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="type-label font-semibold section-label-light">
            Beno Support
          </p>
          <h1 className="mt-4 text-balance text-[2rem] font-extrabold leading-tight tracking-[-0.02em] text-[#0a1628] sm:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-3 text-sm text-[#64748b]">
            Effective Date: {effectiveDate}
          </p>

          <div className="mt-10 space-y-10 text-[15px] leading-7 text-[#334155]">
            {intro ? <p>{intro}</p> : null}

            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-bold tracking-tight text-[#0a1628]">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <p>{closing}</p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
