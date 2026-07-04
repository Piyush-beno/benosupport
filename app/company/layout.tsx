import type { Metadata } from "next"
import { toAbsoluteUrl } from "@/lib/site-url"

const title = "About Beno Support | AI, Cloud & Software Engineering Company"
const description =
  "Learn about Beno Support, a global AI engineering, cloud, cybersecurity, and software development company helping startups, SMBs, and enterprises accelerate digital transformation."
const canonical = toAbsoluteUrl("/company")

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
  },
}

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
