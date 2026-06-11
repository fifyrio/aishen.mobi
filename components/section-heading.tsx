interface SectionHeadingProps {
  title: string
  subtitle?: string
  /** wrapper symbols: "bracket" -> < TITLE />, "slash" -> // TITLE */
  variant?: "bracket" | "slash"
}

export function SectionHeading({
  title,
  subtitle,
  variant = "bracket",
}: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="font-display text-2xl font-bold tracking-[0.12em] text-[var(--color-text)] text-glow-white md:text-3xl">
        {variant === "bracket" ? (
          <>
            <span className="neon-text-cyan">{"< "}</span>
            {title}
            <span className="neon-text-cyan">{" />"}</span>
          </>
        ) : (
          <>
            <span className="neon-text-magenta">{"// "}</span>
            {title}
          </>
        )}
      </h2>
      {subtitle && (
        <p className="mt-3 font-mono text-[0.7rem] tracking-[0.32em] text-[var(--color-dim)]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
