import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

import FintechUseCasesGrid from "./components/fintech-use-cases-grid"
import UseCasesCta from "./components/use-cases-cta"
import UseCasesFaq from "./components/use-cases-faq"
import UseCasesHero from "./components/use-cases-hero"
import WhyFintechAi from "./components/why-fintech-ai"

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <UseCasesHero />
        <WhyFintechAi />
        <FintechUseCasesGrid />
        <UseCasesFaq />
        <UseCasesCta />
      </main>
      <SiteFooter />
    </div>
  )
}
