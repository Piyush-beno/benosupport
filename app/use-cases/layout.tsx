import type { Metadata } from "next"
import { toAbsoluteUrl } from "@/lib/site-url"

const title = "FinTech AI Use Cases | Agentic AI for Banking & Finance | Beno Support"
const description =
  "Explore real-world Agentic AI use cases across banking, lending, insurance, payments, fraud detection, compliance, and financial operations."
const canonical = toAbsoluteUrl("/use-cases")

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

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
