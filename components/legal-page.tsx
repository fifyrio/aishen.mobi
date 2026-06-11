import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface LegalPageProps {
  eyebrow: string
  title: string
  subtitle?: string
  effectiveDate: string
  children: React.ReactNode
}

export function LegalPage({
  eyebrow,
  title,
  subtitle,
  effectiveDate,
  children,
}: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="relative mx-auto max-w-3xl px-5 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-cyan)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.4} />
          BACK TO HOME
        </Link>

        <header className="mt-8 border-b border-[var(--color-border)] pb-8">
          <p className="font-mono text-[0.65rem] tracking-[0.3em] text-[var(--color-cyan)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[0.02em] text-glow-white md:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 font-mono text-sm text-[var(--color-magenta)]">
              {subtitle}
            </p>
          )}
          <p className="mt-5 inline-flex rounded-md border border-[rgba(34,211,238,0.3)] bg-[rgba(34,211,238,0.05)] px-3 py-1.5 font-mono text-[0.7rem] tracking-[0.16em] text-[var(--color-cyan)]">
            EFFECTIVE DATE: {effectiveDate}
          </p>
        </header>

        <div className="legal-body mt-10 space-y-8">{children}</div>
      </main>
      <SiteFooter />
    </>
  )
}

interface LegalSectionProps {
  title: string
  children: React.ReactNode
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="font-display text-lg font-bold tracking-[0.04em] text-[var(--color-text)]">
        <span className="neon-text-magenta">{"// "}</span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 font-mono text-[0.85rem] leading-relaxed text-[var(--color-muted)]">
        {children}
      </div>
    </section>
  )
}
