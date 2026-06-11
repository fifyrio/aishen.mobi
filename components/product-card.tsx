import Link from "next/link"
import { Check, ArrowUpRight } from "lucide-react"
import type { Product, Accent } from "@/lib/products"

const accentMap: Record<
  Accent,
  { glow: string; text: string; dot: string; check: string }
> = {
  cyan: {
    glow: "glow-border-cyan",
    text: "neon-text-cyan",
    dot: "bg-[var(--color-cyan)] shadow-[0_0_10px_var(--color-cyan)]",
    check: "text-[var(--color-cyan)]",
  },
  magenta: {
    glow: "glow-border-magenta",
    text: "neon-text-magenta",
    dot: "bg-[var(--color-magenta)] shadow-[0_0_10px_var(--color-magenta)]",
    check: "text-[var(--color-magenta)]",
  },
  orange: {
    glow: "glow-border-orange",
    text: "neon-text-orange",
    dot: "bg-[var(--color-orange)] shadow-[0_0_10px_var(--color-orange)]",
    check: "text-[var(--color-orange)]",
  },
  purple: {
    glow: "glow-border-purple",
    text: "neon-text-purple",
    dot: "bg-[var(--color-purple)] shadow-[0_0_10px_var(--color-purple)]",
    check: "text-[var(--color-purple)]",
  },
  green: {
    glow: "glow-border-cyan",
    text: "neon-text-green",
    dot: "bg-[var(--color-green)] shadow-[0_0_10px_var(--color-green)]",
    check: "text-[var(--color-green)]",
  },
}

export function ProductCard({ product }: { product: Product }) {
  const a = accentMap[product.accent]

  return (
    <article
      className={`panel ${a.glow} group flex flex-col rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1`}
    >
      {/* window bar */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="dot bg-[#ff5f56]" />
          <span className="dot bg-[#ffbd2e]" />
          <span className="dot bg-[#27c93f]" />
        </div>
        <span className="font-mono text-[0.6rem] tracking-[0.2em] text-[var(--color-dim)]">
          SHEN_PROD.APP
        </span>
      </div>

      <h3 className={`font-display text-lg font-bold tracking-[0.04em] ${a.text}`}>
        {product.name}
      </h3>
      <p className="mt-2 font-mono text-[0.7rem] tracking-[0.18em] text-[var(--color-dim)]">
        {product.tag}
      </p>

      <p className="mt-4 font-mono text-[0.8rem] leading-relaxed text-[var(--color-muted)]">
        {product.description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span className={`mt-0.5 ${a.check}`}>
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            <span className="font-mono text-[0.78rem] text-[var(--color-text)]">
              {f}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
        <a
          href={product.appStoreUrl}
          className="btn-neon btn-magenta rounded-md px-4 py-2 text-[0.7rem]"
        >
          App Store
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.6} />
        </a>
        <Link
          href={product.privacyUrl}
          className="font-mono text-[0.7rem] tracking-[0.18em] text-[var(--color-muted)] underline-offset-4 transition-colors hover:text-[var(--color-cyan)] hover:underline"
        >
          PRIVACY POLICY
        </Link>
      </div>
    </article>
  )
}
