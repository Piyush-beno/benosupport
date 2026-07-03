import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Beno Support | AI, IT & Business Solutions Company",
  description:
    "Get in touch with Beno Support for AI, enterprise software, cloud, cybersecurity, and digital transformation services tailored to your business needs.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
