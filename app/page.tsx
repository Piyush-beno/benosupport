import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"

import { WhyChoose } from "@/components/why-choose"
import { ProcessSection } from "@/components/process-section"
import { TechStack } from "@/components/tech-stack"
import { TechPartners } from "@/components/tech-partners"
import { IndustriesSection } from "@/components/industries-section"
// import { SuccessStories } from "@/components/success-stories"
import { InsightsSection } from "@/components/insights-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import ServicePillars from "@/components/service-pillars"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicePillars />
        <WhyChoose  visibleCount={6}/>
        <ProcessSection />
        <TechStack />
        <TechPartners />
        <IndustriesSection />
        {/* <SuccessStories /> — hidden until feature is ready */}
        {/* <InsightsSection /> */}
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
