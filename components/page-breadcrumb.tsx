import Link from "next/link"
import { cn } from "@/lib/utils"
import type { BreadcrumbItem } from "@/lib/breadcrumbs"

type PageBreadcrumbProps = {
  items: BreadcrumbItem[]
  variant?: "dark" | "light"
  align?: "left" | "center"
  className?: string
}

export function PageBreadcrumb({
  items,
  variant = "light",
  align = "left",
  className,
}: PageBreadcrumbProps) {
  const linkClass =
    variant === "dark"
      ? "text-[#78a9ff] transition-colors hover:text-white hover:underline"
      : "text-[#0f62fe] transition-colors hover:text-[#072448] hover:underline"

  const separatorClass =
    variant === "dark" ? "text-white/40" : "text-[#94a3b8]"

  const currentClass =
    variant === "dark" ? "text-white/70" : "text-[#64748b]"

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "mb-5",
        align === "center" && "flex justify-center",
        className
      )}
    >
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-snug",
          align === "center" && "justify-center"
        )}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center">
              {index > 0 ? (
                <span className={cn("mx-2 select-none", separatorClass)} aria-hidden>
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(isLast && currentClass)}
                  aria-current={isLast ? "page" : undefined}
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
