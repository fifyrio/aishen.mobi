import Link from "next/link"
import { ArrowRight, Cpu, Mail } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionHeading } from "@/components/section-heading"
import { ProductCard } from "@/components/product-card"
import { products, SITE } from "@/lib/products"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ---------- HERO ---------- */}
        <section className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 text-center md:pt-28">
          <div className="chip mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
            <Cpu className="h-3.5 w-3.5 text-[var(--color-cyan)]" strokeWidth={2.4} />
            <span className="font-mono text-[0.65rem] tracking-[0.28em] text-[var(--color-cyan)]">
              AI-POWERED IDENTIFICATION
            </span>
          </div>

          <h1 className="font-display text-5xl font-black leading-[1.05] tracking-[0.02em] md:text-7xl">
            <span className="block text-glow-white text-[var(--color-text)]">
              AWAKEN THE VALUE
            </span>
            <span className="mt-2 block gradient-text">HIDDEN BY TIME</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl font-mono text-sm leading-relaxed text-[var(--color-muted)]">
            <span className="neon-text-cyan">&gt;</span> We apply cutting-edge deep
            learning algorithms to high-value verticals, enabling you to uncover the
            history and wealth behind every artifact through your lens.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#products"
              className="btn-neon btn-magenta rounded-md px-7 py-3 text-xs"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
            </Link>
            <Link
              href="#mission"
              className="btn-neon btn-ghost rounded-md px-7 py-3 text-xs"
            >
              Our Mission
            </Link>
          </div>
        </section>

        {/* ---------- PRODUCTS ---------- */}
        <section id="products" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
          <SectionHeading
            title="CORE PRODUCTS"
            subtitle="PROFESSIONAL-GRADE IDENTIFICATION TOOLS"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        {/* ---------- MISSION ---------- */}
        <section id="mission" className="relative scroll-mt-24 py-20">
          <div className="absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(168,85,247,0.16),transparent_70%)]" />
          <div className="mx-auto max-w-4xl px-5">
            <SectionHeading title="OUR MISSION" variant="slash" />
            <div className="panel glow-border-purple mt-10 rounded-xl px-8 py-12 text-center">
              <p className="gradient-text font-display text-xl font-bold leading-snug tracking-[0.02em] md:text-2xl">
                &ldquo;Awaken the value sealed by time with AI.&rdquo;
              </p>
              <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-[var(--color-muted)]">
                We are dedicated to applying cutting-edge deep learning algorithms to
                high-value verticals, enabling ordinary users to gain insight into the
                history and wealth behind every artifact through their camera lens.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section id="contact" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-20 text-center">
          <SectionHeading title="GET IN TOUCH" />
          <p className="mt-6 font-mono text-xs tracking-[0.28em] text-[var(--color-dim)]">
            HAVE QUESTIONS? CONNECT WITH US
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="btn-neon btn-magenta mt-10 inline-flex rounded-md px-8 py-3 text-xs"
          >
            <Mail className="h-4 w-4" strokeWidth={2.4} />
            Contact Us
            <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
