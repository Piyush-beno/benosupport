import { SERVICE_NAV_ITEMS } from "@/lib/site-navigation"

export type BreadcrumbItem = {
  label: string
  href?: string
}

export const HOME_CRUMB: BreadcrumbItem = { label: "Home", href: "/" }

export function withHome(items: BreadcrumbItem[]): BreadcrumbItem[] {
  return [HOME_CRUMB, ...items]
}

export function getServiceBreadcrumbLabel(slug: string): string {
  const match = SERVICE_NAV_ITEMS.find((item) => item.href === `/services/${slug}`)
  return match?.label ?? slug
}
