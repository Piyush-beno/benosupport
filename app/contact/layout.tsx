import type { Metadata } from "next"
import { toAbsoluteUrl } from "@/lib/site-url"

const title = "Contact Beno Support | AI, IT & Business Solutions Company"
const description =
  "Get in touch with Beno Support for AI, enterprise software, cloud, cybersecurity, and digital transformation services tailored to your business needs."
const canonical = toAbsoluteUrl("/contact")

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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
