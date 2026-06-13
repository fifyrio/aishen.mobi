import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { BlogArticle } from "@/lib/blog"
import { CATEGORY_ACCENT } from "@/lib/blog"
import { accentClasses } from "@/lib/accent"

export function BlogCard({ article }: { article: BlogArticle }) {
  const a = accentClasses[CATEGORY_ACCENT[article.category]]

  return (
    <article
      className={`panel ${a.glow} group flex flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-1`}
    >
      <Link href={`/blog/${article.slug}`} className="flex flex-1 flex-col">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--color-border)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={`absolute left-3 top-3 inline-flex rounded-full border px-3 py-1 font-mono text-[0.6rem] tracking-[0.2em] ${a.chipBorder} ${a.chipBg} ${a.chipText} backdrop-blur-sm`}
          >
            {article.category.toUpperCase()}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3
            className={`font-display text-base font-bold leading-snug tracking-[0.02em] ${a.neonText}`}
          >
            {article.title}
          </h3>
          <p className="mt-3 line-clamp-3 flex-1 font-mono text-[0.78rem] leading-relaxed text-[var(--color-muted)]">
            {article.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-mono text-[0.65rem] tracking-[0.18em] text-[var(--color-dim)]">
              {article.readTime} MIN READ
            </span>
            <span
              className={`inline-flex items-center gap-1 font-mono text-[0.65rem] tracking-[0.18em] ${a.chipText}`}
            >
              READ
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.6} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
