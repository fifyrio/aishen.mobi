import type { Accent } from "./products"

export interface AccentClasses {
  glow: string
  neonText: string
  chipBorder: string
  chipBg: string
  chipText: string
  dot: string
}

export const accentClasses: Record<Accent, AccentClasses> = {
  cyan: {
    glow: "glow-border-cyan",
    neonText: "neon-text-cyan",
    chipBorder: "border-[rgba(34,211,238,0.4)]",
    chipBg: "bg-[rgba(34,211,238,0.08)]",
    chipText: "text-[var(--color-cyan)]",
    dot: "bg-[var(--color-cyan)] shadow-[0_0_10px_var(--color-cyan)]",
  },
  magenta: {
    glow: "glow-border-magenta",
    neonText: "neon-text-magenta",
    chipBorder: "border-[rgba(255,43,214,0.4)]",
    chipBg: "bg-[rgba(255,43,214,0.08)]",
    chipText: "text-[var(--color-magenta)]",
    dot: "bg-[var(--color-magenta)] shadow-[0_0_10px_var(--color-magenta)]",
  },
  orange: {
    glow: "glow-border-orange",
    neonText: "neon-text-orange",
    chipBorder: "border-[rgba(255,138,61,0.4)]",
    chipBg: "bg-[rgba(255,138,61,0.08)]",
    chipText: "text-[var(--color-orange)]",
    dot: "bg-[var(--color-orange)] shadow-[0_0_10px_var(--color-orange)]",
  },
  purple: {
    glow: "glow-border-purple",
    neonText: "neon-text-purple",
    chipBorder: "border-[rgba(168,85,247,0.4)]",
    chipBg: "bg-[rgba(168,85,247,0.08)]",
    chipText: "text-[var(--color-purple)]",
    dot: "bg-[var(--color-purple)] shadow-[0_0_10px_var(--color-purple)]",
  },
  green: {
    glow: "glow-border-cyan",
    neonText: "neon-text-green",
    chipBorder: "border-[rgba(74,222,128,0.4)]",
    chipBg: "bg-[rgba(74,222,128,0.08)]",
    chipText: "text-[var(--color-green)]",
    dot: "bg-[var(--color-green)] shadow-[0_0_10px_var(--color-green)]",
  },
}
