import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionHeading } from "@/components/section-heading"
import { BlogCard } from "@/components/blog-card"
import { getAllArticles, CATEGORY_ACCENT } from "@/lib/blog"
import { accentClasses } from "@/lib/accent"
import { SITE } from "@/lib/products"

const PAGE_TITLE = "Skincare Guide — Science-Backed Routines & Ingredients"
const PAGE_DESCRIPTION =
  "Expert skincare guides on routines, ingredients, seasonal care, and nutrition. Learn how to layer serums, use retinol, build a routine, and feed your skin."

export const metadata: Metadata = {
  title: `${PAGE_TITLE} | ${SITE.brand}`,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE.url}/blog`,
    siteName: SITE.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
}

export default function BlogIndexPage() {
  const all = getAllArticles()
  const [featured, ...rest] = all
  const fa = accentClasses[CATEGORY_ACCENT[featured.category]]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: SITE.brand,
      url: SITE.url,
    },
    blogPost: all.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      description: a.description,
      datePublished: a.publishedAt,
      url: `${SITE.url}/blog/${a.slug}`,
      image: `${SITE.url}${a.image}`,
    })),
  }

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ---------- HERO ---------- */}
        <section className="mx-auto max-w-6xl px-5 pb-12 pt-20 text-center md:pt-24">
          <div className="chip mx-auto mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
            <span className="font-mono text-[0.65rem] tracking-[0.28em] text-[var(--color-cyan)]">
              SKINCARE KNOWLEDGE BASE
            </span>
          </div>
          <h1 className="font-display text-4xl font-black leading-[1.08] tracking-[0.02em] md:text-6xl">
            <span className="block text-glow-white text-[var(--color-text)]">
              THE GLOW
            </span>
            <span className="mt-2 block gradient-text">GUIDE</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl font-mono text-sm leading-relaxed text-[var(--color-muted)]">
            <span className="neon-text-cyan">&gt;</span> Science-backed skincare —
            routines, ingredients, seasonal care, and nutrition. Everything you need
            to build a routine that actually works.
          </p>
        </section>

        {/* ---------- FEATURED ---------- */}
        <section className="mx-auto max-w-6xl px-5 pb-4">
          <Link
            href={`/blog/${featured.slug}`}
            className={`panel ${fa.glow} group grid overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-1 md:grid-cols-2`}
          >
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              <span
                className={`inline-flex w-fit rounded-full border px-3 py-1 font-mono text-[0.6rem] tracking-[0.2em] ${fa.chipBorder} ${fa.chipBg} ${fa.chipText}`}
              >
                {featured.category.toUpperCase()} · FEATURED
              </span>
              <h2
                className={`mt-5 font-display text-2xl font-bold leading-tight tracking-[0.02em] md:text-3xl ${fa.neonText}`}
              >
                {featured.title}
              </h2>
              <p className="mt-4 font-mono text-sm leading-relaxed text-[var(--color-muted)]">
                {featured.description}
              </p>
              <span
                className={`mt-6 inline-flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.18em] ${fa.chipText}`}
              >
                READ ARTICLE
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.6} />
              </span>
            </div>
          </Link>
        </section>

        {/* ---------- ALL ARTICLES ---------- */}
        <section className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
          <SectionHeading
            title="ALL ARTICLES"
            subtitle="ROUTINES · INGREDIENTS · SEASONAL · NUTRITION"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
