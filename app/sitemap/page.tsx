import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HTML_SITEMAP_SECTIONS } from "@/lib/site-navigation"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Sitemap | Beno Support",
  description:
    "Browse all important pages on Beno Support — services, industries, company, and contact.",
}

function SitemapCard({
  title,
  links,
  className,
}: {
  title: string
  links: readonly { label: string; href: string }[]
  className?: string
}) {
  return (
    <article
      className={cn(
        "flex h-full min-h-[280px] flex-col rounded-[20px] border border-[#e2e8f0] bg-white px-8 py-10 shadow-[0_1px_2px_rgba(15,23,42,0.04)] md:min-h-[320px]",
        className
      )}
    >
      <h2 className="text-[15px] font-bold tracking-[0.12em] text-[#0a1628]">
        {title}
      </h2>
      <div className="mt-4 border-t border-[#e2e8f0]" />
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex items-start gap-3 text-[15px] leading-snug text-[#334155] transition-colors hover:text-[#072448]"
            >
              <span
                aria-hidden
                className="mt-[7px] h-2 w-2 shrink-0 rounded-[2px] bg-[#7fa8e8]"
              />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function SitemapPage() {
  const [home, company, services, industries, blog, contact] = HTML_SITEMAP_SECTIONS

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <SiteHeader />
      <main className="pb-20 pt-28 lg:pt-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="type-label font-semibold section-label-light">
              HTML SITEMAP
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-balance text-[2rem] font-extrabold leading-tight tracking-[-0.02em] text-[#0a1628] sm:text-[2.5rem] lg:text-[2.75rem]">
              Find all the important pages on Beno Support.
            </h1>
          </div>

          {/* Wireframe layout: 2x2 left blocks + tall services column on the right */}
          <div className="grid gap-6 md:grid-cols-3 md:grid-rows-[repeat(3,minmax(280px,1fr))]">
            <SitemapCard
              title={home.title}
              links={home.links}
              className="order-1 md:col-start-1 md:row-start-1"
            />
            <SitemapCard
              title={company.title}
              links={company.links}
              className="order-2 md:col-start-2 md:row-start-1"
            />
            <SitemapCard
              title={services.title}
              links={services.links}
              className="order-7 md:col-start-3 md:row-start-1 md:row-span-3 md:min-h-[980px]"
            />
            <SitemapCard
              title={industries.title}
              links={industries.links}
              className="order-3 md:col-start-1 md:row-start-2"
            />
            <SitemapCard
              title={blog.title}
              links={blog.links}
              className="order-4 md:col-start-2 md:row-start-2"
            />
            <SitemapCard
              title={contact.title}
              links={contact.links}
              className="order-5 md:col-start-1 md:row-start-3 md:col-span-2"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
