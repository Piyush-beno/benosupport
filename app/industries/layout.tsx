import type { Metadata } from "next"
import { toAbsoluteUrl } from "@/lib/site-url"

const title = "Industry-Focused AI, Cloud & Software Engineering Solutions"
const description =
  "Beno Support delivers AI, cloud, cybersecurity, and software engineering solutions for BFSI, healthcare, retail, SaaS, manufacturing, logistics, and more."
const canonical = toAbsoluteUrl("/industries")

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

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
