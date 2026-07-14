import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { USE_CASES_FAQS } from "@/lib/use-cases-data"

export default function UseCasesFaq() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="type-label font-semibold tracking-[0.18em] text-[#94a3b8]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="mt-2 text-balance text-[1.65rem] font-bold tracking-[-0.02em] text-[#072448] sm:text-[2rem]">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion className="w-full">
          {USE_CASES_FAQS.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium text-[#072448]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="type-body text-[#64748b]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
