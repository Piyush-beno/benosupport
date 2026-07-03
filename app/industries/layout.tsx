import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industry-Focused AI, Cloud & Software Engineering Solutions",
  description:
    "Beno Support delivers AI, cloud, cybersecurity, and software engineering solutions for BFSI, healthcare, retail, SaaS, manufacturing, logistics, and more.",
  alternates: {
    canonical: "/industries",
  },
}

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
