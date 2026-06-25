import Link from "next/link"
import { servicesData } from "@/lib/services-data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const items = Object.entries(servicesData).map(([slug, service]) => ({ slug, title: service.meta.title, description: service.meta.description }))

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="py-20">
        <section className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3b67ff]">Our Services</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#0d1e3c]">Solutions for service-led businesses</h1>
            <p className="mt-4 text-base text-[#475569] max-w-2xl mx-auto">Explore our service offerings and select the solution that best fits your business goals.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group block rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_14px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_70px_rgba(15,23,42,0.08)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3b67ff]">Service</p>
                <h2 className="mt-4 text-xl font-semibold text-[#0f172a]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3b67ff]">
                  View service
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
