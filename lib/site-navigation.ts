export type NavLinkItem = {
  label: string
  href: string
}

/** Canonical service labels used in navbar dropdown and HTML sitemap. */
export const SERVICE_NAV_ITEMS: NavLinkItem[] = [
  {
    label: "Core Engineering & Application Architecture",
    href: "/services/core-engineering-application-architecture",
  },
  {
    label: "Agentic AI & Intelligent Automation",
    href: "/services/agentic-ai-intelligent-automation",
  },
  {
    label: "Enterprise & Startup Tech Strategy",
    href: "/services/enterprise-startup-tech-strategy",
  },
  {
    label: "Cloud & Platform Engineering",
    href: "/services/cloud-platform-engineering",
  },
  {
    label: "Cyber Resilience & Threat Intelligence",
    href: "/services/cyber-resilience-threat-intelligence",
  },
  {
    label: "Digital Products & Experience Engineering",
    href: "/services/digital-products-experience-engineering",
  },
  {
    label: "Strategic IT Governance & Managed Services",
    href: "/services/strategic-it-governance-managed-services",
  },
  {
    label: "Workforce Technology & Human Capital Advisory",
    href: "/services/workforce-technology-human-capital-advisory",
  },
]

export const HTML_SITEMAP_SECTIONS = [
  {
    title: "HOME",
    links: [{ label: "Home", href: "/" }],
  },
  {
    title: "COMPANY",
    links: [{ label: "Company", href: "/company" }],
  },
  {
    title: "SERVICES",
    links: SERVICE_NAV_ITEMS,
  },
  {
    title: "INDUSTRIES",
    links: [{ label: "Industries Overview", href: "/industries" }],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Insights", href: "/blog" },
      { label: "Use Cases", href: "/use-cases" },
    ],
  },
  {
    title: "CONTACT",
    links: [{ label: "Contact Us", href: "/contact" }],
  },
] as const
