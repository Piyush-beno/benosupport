import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-24 border-b-1 border-b-primary-foreground/10">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Accelerate Digital Innovation?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
          Join the ranks of global leaders who trust Beno Support for
          engineering excellence and strategic growth.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-button p-6 text-button-foreground hover:bg-button-hover"
          >
            Request A Proposal
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 p-6 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Schedule A Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
