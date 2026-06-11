import Link from "next/link"
import { Hexagon } from "lucide-react"
import { products, SITE } from "@/lib/products"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[rgba(8,8,13,0.6)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md border border-[rgba(168,85,247,0.5)] bg-[rgba(168,85,247,0.08)] shadow-[0_0_18px_-4px_rgba(168,85,247,0.7)]">
              <Hexagon className="h-4 w-4 text-[var(--color-purple)]" strokeWidth={2.4} />
            </span>
            <span className="font-display text-sm font-bold tracking-[0.18em] text-glow-white">
              {SITE.brand}
            </span>
          </Link>
          <p className="mt-4 max-w-xs font-mono text-xs leading-relaxed text-[var(--color-dim)]">
            Awaken the value sealed by time with AI. Professional-grade
            identification tools for the curious.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] tracking-[0.22em] text-[var(--color-cyan)]">
            // PRODUCTS
          </h4>
          <ul className="mt-4 space-y-2.5">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={p.privacyUrl}
                  className="font-mono text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] tracking-[0.22em] text-[var(--color-magenta)]">
            // LEGAL
          </h4>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/curio-snap/privacy-policy"
                className="font-mono text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/vido-ai/terms-of-service"
                className="font-mono text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="font-mono text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 font-mono text-[0.7rem] tracking-[0.14em] text-[var(--color-dim)] md:flex-row">
          <span>
            © {new Date().getFullYear()} {SITE.brand}. ALL RIGHTS RESERVED.
          </span>
          <span className="text-[var(--color-dim)]">
            BUILT WITH <span className="neon-text-magenta">AI</span> · POWERED BY{" "}
            <span className="neon-text-cyan">VISION</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
