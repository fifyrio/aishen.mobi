import Image from "next/image"

interface ScreenFrameProps {
  /** Public path to the screenshot, e.g. "/images/glowria/skin-score.png" */
  src: string
  /** Accessible description of the screen */
  alt: string
  /** Glow accent class, e.g. "glow-border-magenta" */
  glow?: string
  /** Render the hero screen with priority loading */
  priority?: boolean
}

/**
 * Wraps a real iPhone screenshot in the neon glow phone frame.
 * Screenshots already include the iOS status bar and dynamic island,
 * so no notch overlay is drawn here.
 */
export function ScreenFrame({
  src,
  alt,
  glow = "glow-border-magenta",
  priority = false,
}: ScreenFrameProps) {
  return (
    <div
      className={`relative mx-auto w-[260px] rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-2.5 ${glow}`}
    >
      <div className="relative aspect-[1179/2556] overflow-hidden rounded-[2rem] bg-[var(--color-bg)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="260px"
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </div>
  )
}
