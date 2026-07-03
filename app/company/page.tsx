import CompanyHero    from "./components/CompanyHero"
import WhoWeAre       from "./components/WhoWeAre"
import OurStory       from "./components/OurStory"
import VisionMission  from "./components/VisionMission"
import OurJourney     from "./components/OurJourney"
import LeadershipTeam from "./components/LeadershipTeam"
import Certifications from "./components/Certifications"
import GlobalPresence from "./components/GlobalPresence"
import LifeAtBeno     from "./components/LifeAtBeno"
import CompanyCTA     from "./components/CompanyCTA"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "About Beno Support | AI, Cloud & Software Engineering Company",
  description:
    "Learn about Beno Support, a global AI engineering, cloud, cybersecurity, and software development company helping startups, SMBs, and enterprises accelerate digital transformation.",
  canonicalUrl: "/company",
};

export default function CompanyPage() {
  return (
<div className="min-h-screen bg-background">
          <SiteHeader />
        <main>
      <CompanyHero />
      <WhoWeAre />
      <OurStory />
      <VisionMission />
      <OurJourney />
      <LeadershipTeam />
      <Certifications />
      <GlobalPresence />
      <LifeAtBeno />
      <CompanyCTA />
    </main>
          <SiteFooter />
        </div>

  )
}
