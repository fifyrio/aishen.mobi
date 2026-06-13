import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleBody } from "@/components/article-body"
import { BlogCard } from "@/components/blog-card"
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
  CATEGORY_ACCENT,
} from "@/lib/blog"
import { accentClasses } from "@/lib/accent"
import { SITE } from "@/lib/products"

interface PageParams {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: "Article Not Found" }

  const url = `${SITE.url}/blog/${article.slug}`
  const imageUrl = `${SITE.url}${article.image}`

  return {
    title: `${article.title} | ${SITE.brand}`,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      siteName: SITE.brand,
      publishedTime: article.publishedAt,
      images: [{ url: imageUrl, width: 1344, height: 768, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [imageUrl],
    },
  }
}

const DATE_FMT: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
}

export default async function ArticlePage({ params }: PageParams) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const a = accentClasses[CATEGORY_ACCENT[article.category]]
  const related = getRelatedArticles(article)
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    DATE_FMT,
  )

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${SITE.url}${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: article.category,
    author: { "@type": "Organization", name: SITE.brand, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.brand,
      url: SITE.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${article.slug}`,
    },
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Skincare Guide",
        item: `${SITE.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE.url}/blog/${article.slug}`,
      },
    ],
  }

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <article className="mx-auto max-w-3xl px-5 pb-16 pt-12 md:pt-16">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 font-mono text-[0.7rem] tracking-[0.18em] text-[var(--color-dim)]"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-cyan)]"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.4} />
              SKINCARE GUIDE
            </Link>
          </nav>

          {/* Header */}
          <header>
            <span
              className={`inline-flex rounded-full border px-3 py-1 font-mono text-[0.6rem] tracking-[0.2em] ${a.chipBorder} ${a.chipBg} ${a.chipText}`}
            >
              {article.category.toUpperCase()}
            </span>
            <h1
              className={`mt-5 font-display text-3xl font-black leading-tight tracking-[0.02em] md:text-4xl ${a.neonText}`}
            >
              {article.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 font-mono text-[0.7rem] tracking-[0.16em] text-[var(--color-dim)]">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" strokeWidth={2.2} />
                {formattedDate}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" strokeWidth={2.2} />
                {article.readTime} MIN READ
              </span>
            </div>
          </header>

          {/* Hero image */}
          <div
            className={`panel ${a.glow} mt-8 overflow-hidden rounded-xl`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt={article.title}
              width={1344}
              height={768}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          {/* Body */}
          <div className="mt-10">
            <ArticleBody body={article.body} />
          </div>

          {/* Product callout */}
          {article.productCallout && (
            <aside
              className={`panel ${a.glow} mt-12 rounded-xl p-6`}
            >
              <p className="font-mono text-[0.6rem] tracking-[0.24em] text-[var(--color-dim)]">
                // RECOMMENDED
              </p>
              <h3
                className={`mt-3 font-display text-lg font-bold tracking-[0.03em] ${a.neonText}`}
              >
                {article.productCallout.name}
              </h3>
              <p className="mt-2 font-mono text-[0.8rem] text-[var(--color-muted)]">
                {article.productCallout.description}
              </p>
            </aside>
          )}

          {/* Glowria CTA */}
          <aside className="panel glow-border-cyan mt-8 rounded-xl p-7 text-center">
            <h3 className="font-display text-lg font-bold tracking-[0.03em] neon-text-green">
              Get Your Personal Skin Analysis
            </h3>
            <p className="mx-auto mt-3 max-w-md font-mono text-[0.8rem] leading-relaxed text-[var(--color-muted)]">
              Glowria scans your face for an instant Skin Health Score and builds a
              personalized routine — putting these guides into practice.
            </p>
            <a
              href="https://apps.apple.com/us/app/glowria-skincare-routine/id6762101631"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon btn-magenta mt-6 inline-flex rounded-md px-6 py-3 text-[0.7rem]"
            >
              Try Glowria
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.6} />
            </a>
          </aside>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="mx-auto max-w-6xl border-t border-[var(--color-border)] px-5 py-16">
            <h2 className="font-mono text-[0.7rem] tracking-[0.24em] text-[var(--color-cyan)]">
              // KEEP READING
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <BlogCard key={r.slug} article={r} />
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
