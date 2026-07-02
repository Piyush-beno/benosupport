import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "What services does Beno Support offer?",
    a: "We offer end-to-end technology services including core engineering, Agentic AI, Cloud Platform engineering, cybersecurity, digital experience design, and strategic tech governance.",
  },
  {
    q: "Which industries do you specialize in?",
    a: "We serve Fintech, Healthcare, IT SaaS, Government, Travel, Hospitality, E-commerce, Telecom, Insurance, Gaming, and more.",
  },
  {
    q: "How can you help with AI consulting?",
    a: "We design and deploy enterprise AI agents, LLM-powered workflows, and intelligent automation systems tailored to your operational goals.",
  },
  {
    q: "Do you provide cloud modernization services?",
    a: "Yes. We migrate, optimize, and manage cloud infrastructure across AWS, Azure, and Google Cloud with a focus on cost efficiency and scalability.",
  },
  {
    q: "How do you ensure SaaS scalability?",
    a: "We build on top-tier cloud systems with distributed architecture, automated testing, and continuous monitoring to ensure reliable scaling.",
  },
  {
    q: "What is your approach to Cybersecurity?",
    a: "Our risk management is aligned to global benchmarks including CMMI Dev Level 5, ISO 27001, and ISO 9001, with proactive monitoring built into every practice.",
  },
  {
    q: "Do you offer Managed IT services?",
    a: "Yes, we provide flexible managed services including Time & Materials, Fixed Cost, Distributed Squads, and Fully Outsourced models.",
  },
  {
    q: "Where is Beno Support located?",
    a: "We operate state-of-the-art delivery hubs across India and serve clients in the USA, Europe, Middle East, SE Asia, and Australia.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="type-label font-semibold section-label-light">
            Frequently Asked Questions
          </span>
          <h2 className="mt-2 text-balance type-heading font-bold text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="type-body text-secondary">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
