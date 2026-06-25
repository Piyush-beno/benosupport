import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { servicesData } from "@/lib/services-data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicePageContent } from "@/components/service-page-content"

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData[slug]
  if (!service) return { title: "Service Not Found | Beno Support" }
  return {
    title: service.meta.title,
    description: service.meta.description,
    alternates: {
      canonical: `https://www.benosupport.com/services/${slug}`,
    },
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      url: `https://www.benosupport.com/services/${slug}`,
      type: "website",
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]
  if (!service) notFound()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <ServicePageContent service={service} slug={slug} />
      </main>
      <SiteFooter />
    </div>
  )
}
