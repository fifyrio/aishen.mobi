import Link from "next/link"
import { Hexagon } from "lucide-react"
import { SITE } from "@/lib/products"

const navItems = [
  { label: "PRODUCTS", href: "/#products" },
  { label: "BLOG", href: "/blog" },
  { label: "MISSION", href: "/#mission" },
  { label: "CONTACT", href: "/#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(8,8,13,0.72)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-[rgba(168,85,247,0.5)] bg-[rgba(168,85,247,0.08)] shadow-[0_0_18px_-4px_rgba(168,85,247,0.7)]">
            <Hexagon className="h-4 w-4 text-[var(--color-purple)]" strokeWidth={2.4} />
          </span>
          <span className="font-display text-sm font-bold tracking-[0.18em] text-glow-white">
            {SITE.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-mono text-xs tracking-[0.22em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-cyan)] hover:[text-shadow:0_0_10px_rgba(34,211,238,0.7)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
