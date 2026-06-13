import { Fragment } from "react"

/**
 * Minimal renderer for the controlled article markdown subset used by the blog:
 * blank-line-separated blocks, `## ` headings, and inline `**bold**`.
 * Intentionally not a general markdown engine — the content is authored in-repo.
 */

function renderInline(text: string) {
  // Split on **bold** markers; odd indices are bold segments.
  const parts = text.split(/\*\*/)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-[var(--color-text)]">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

export function ArticleBody({ body }: { body: string }) {
  const blocks = body.split(/\n\n+/).map((b) => b.trim()).filter(Boolean)

  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="font-display text-xl font-bold tracking-[0.04em] text-[var(--color-text)] text-glow-white md:text-2xl"
            >
              {block.slice(3)}
            </h2>
          )
        }
        return (
          <p
            key={i}
            className="font-mono text-sm leading-relaxed text-[var(--color-muted)] md:text-[0.95rem]"
          >
            {renderInline(block)}
          </p>
        )
      })}
    </div>
  )
}
