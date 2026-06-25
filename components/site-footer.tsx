import { Globe, Mail, Phone, MapPin } from "lucide-react"

const columns = [
  {
    title: "Company",
    links: ["Home", "Services", "Industries", "Company", "Careers", "Sitemap"],
  },
  {
    title: "Services",
    links: [
      "Core Engineering",
      "Agentic AI",
      "Enterprise Strategy",
      "Cloud & Platforms",
      "CyberResilience",
      "Digital Products",
    ],
  },
  {
    title: "Industries",
    links: [
      "Fintech",
      "Healthcare",
      "Information Technology",
      "EdTech",
      "E-commerce",
      "Telecom",
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#072448] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/assets/whitelogo.svg" />
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Engineering Excellence in AI &amp; Technology. Transforming
              businesses since 2008.
            </p>
            <div className="flex gap-3">
              {[Globe, Mail, Phone, MapPin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10 transition-colors hover:bg-button"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© 2026 Beno Support. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-primary-foreground">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
