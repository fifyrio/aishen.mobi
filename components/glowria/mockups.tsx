import {
  Check,
  Flame,
  Sun,
  Moon,
  Droplet,
  Camera,
  TrendingUp,
  Star,
  Sparkles,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/* Shared phone frame                                                  */
/* ------------------------------------------------------------------ */

interface PhoneFrameProps {
  children: React.ReactNode
  /** glow accent class, e.g. "glow-border-magenta" */
  glow?: string
}

export function PhoneFrame({ children, glow = "glow-border-magenta" }: PhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto w-[270px] rounded-[2.4rem] border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-3 ${glow}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[var(--color-bg)]" />
      <div className="relative h-[540px] overflow-hidden rounded-[1.9rem] bg-[var(--color-bg)] px-4 pb-5 pt-9">
        {children}
      </div>
    </div>
  )
}

function ScreenTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-4">
      <p className="font-mono text-[0.55rem] tracking-[0.28em] text-[var(--color-dim)]">
        {kicker}
      </p>
      <h4 className="font-display text-base font-bold tracking-[0.04em] text-[var(--color-text)] text-glow-white">
        {title}
      </h4>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 1. AI Skin Analysis — score ring + 5 dimensions                     */
/* ------------------------------------------------------------------ */

const DIMENSIONS: { label: string; value: number; color: string }[] = [
  { label: "Acne", value: 78, color: "var(--color-magenta)" },
  { label: "Pores", value: 71, color: "var(--color-purple)" },
  { label: "Oiliness", value: 84, color: "var(--color-cyan)" },
  { label: "Dark Spots", value: 69, color: "var(--color-orange)" },
  { label: "Hydration", value: 88, color: "var(--color-green)" },
]

export function ScoreMock() {
  const score = 82
  const circumference = 2 * Math.PI * 52
  const dash = (score / 100) * circumference

  return (
    <PhoneFrame glow="glow-border-magenta">
      <ScreenTitle kicker="AI SKIN ANALYSIS" title="Skin Health" />

      {/* Score ring */}
      <div className="relative mx-auto h-[136px] w-[136px]">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="10"
          />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="url(#scoreGrad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
          />
          <defs>
            <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-cyan)" />
              <stop offset="50%" stopColor="var(--color-purple)" />
              <stop offset="100%" stopColor="var(--color-magenta)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-3xl font-black text-glow-white">{score}</span>
          <span className="font-mono text-[0.5rem] tracking-[0.24em] text-[var(--color-dim)]">
            / 100
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-md border border-[rgba(74,222,128,0.5)] bg-[rgba(74,222,128,0.08)] font-display text-sm font-bold text-[var(--color-green)] shadow-[0_0_14px_-4px_var(--color-green)]">
          A
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(74,222,128,0.4)] bg-[rgba(74,222,128,0.06)] px-2 py-0.5 font-mono text-[0.55rem] tracking-[0.12em] text-[var(--color-green)]">
          <TrendingUp className="h-3 w-3" strokeWidth={2.6} />
          +6 THIS WEEK
        </span>
      </div>

      {/* Dimensions */}
      <div className="mt-5 space-y-2.5">
        {DIMENSIONS.map((d) => (
          <div key={d.label}>
            <div className="mb-1 flex items-center justify-between font-mono text-[0.6rem]">
              <span className="text-[var(--color-muted)]">{d.label}</span>
              <span className="text-[var(--color-text)]">{d.value}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-border)]">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${d.value}%`,
                  background: d.color,
                  boxShadow: `0 0 8px ${d.color}`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </PhoneFrame>
  )
}

/* ------------------------------------------------------------------ */
/* 2. Build Your Routine — checklist                                   */
/* ------------------------------------------------------------------ */

const ROUTINE: { label: string; done: boolean }[] = [
  { label: "Cleanse", done: true },
  { label: "Toner", done: true },
  { label: "Serum", done: true },
  { label: "Moisturizer", done: false },
  { label: "Sunscreen", done: false },
]

export function RoutineMock() {
  return (
    <PhoneFrame glow="glow-border-cyan">
      <div className="mb-4 flex items-center justify-between">
        <ScreenTitle kicker="DAILY ROUTINE" title="Evening" />
        <Moon className="h-5 w-5 text-[var(--color-purple)]" strokeWidth={2.2} />
      </div>

      <div className="mb-4 flex items-center gap-2 rounded-lg border border-[rgba(255,43,214,0.3)] bg-[rgba(255,43,214,0.05)] px-3 py-2">
        <Sparkles className="h-4 w-4 text-[var(--color-magenta)]" strokeWidth={2.4} />
        <span className="font-mono text-[0.6rem] tracking-[0.1em] text-[var(--color-muted)]">
          3 of 5 steps · keep going
        </span>
      </div>

      <ul className="space-y-2.5">
        {ROUTINE.map((step, i) => (
          <li
            key={step.label}
            className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${
              step.done
                ? "border-[rgba(34,211,238,0.35)] bg-[rgba(34,211,238,0.05)]"
                : "border-[var(--color-border)] bg-[var(--color-panel)]"
            }`}
          >
            <span
              className={`grid h-5 w-5 place-items-center rounded-full border ${
                step.done
                  ? "border-[var(--color-cyan)] bg-[var(--color-cyan)] text-[#0a0a0f] shadow-[0_0_10px_var(--color-cyan)]"
                  : "border-[var(--color-dim)] text-transparent"
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={3.5} />
            </span>
            <span className="font-mono text-[0.55rem] text-[var(--color-dim)]">
              0{i + 1}
            </span>
            <span
              className={`font-mono text-[0.78rem] ${
                step.done
                  ? "text-[var(--color-text)] line-through decoration-[var(--color-cyan)]/50"
                  : "text-[var(--color-muted)]"
              }`}
            >
              {step.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-center gap-1.5 font-mono text-[0.55rem] tracking-[0.18em] text-[var(--color-dim)]">
        <Sun className="h-3.5 w-3.5 text-[var(--color-orange)]" strokeWidth={2.4} />
        MORNING ROUTINE SYNCED
      </div>
    </PhoneFrame>
  )
}

/* ------------------------------------------------------------------ */
/* 3. Never Miss a Step — streak + badges                              */
/* ------------------------------------------------------------------ */

const WEEK = [
  { d: "M", on: true },
  { d: "T", on: true },
  { d: "W", on: true },
  { d: "T", on: true },
  { d: "F", on: true },
  { d: "S", on: true },
  { d: "S", on: false },
]

const BADGES: { label: string; days: string; unlocked: boolean }[] = [
  { label: "Week Warrior", days: "7d", unlocked: true },
  { label: "Glow Getter", days: "14d", unlocked: true },
  { label: "Skin Devotee", days: "30d", unlocked: false },
]

export function StreakMock() {
  return (
    <PhoneFrame glow="glow-border-orange">
      <ScreenTitle kicker="GLOW STREAK" title="Consistency" />

      <div className="rounded-2xl border border-[rgba(255,138,61,0.35)] bg-[rgba(255,138,61,0.06)] py-6 text-center shadow-[inset_0_0_40px_-28px_var(--color-orange)]">
        <Flame
          className="mx-auto h-8 w-8 text-[var(--color-orange)]"
          strokeWidth={2.2}
          fill="rgba(255,138,61,0.25)"
        />
        <p className="mt-1 font-display text-4xl font-black text-glow-white">14</p>
        <p className="font-mono text-[0.55rem] tracking-[0.24em] text-[var(--color-orange)]">
          DAY STREAK
        </p>
      </div>

      {/* Week calendar */}
      <div className="mt-5 flex items-center justify-between">
        {WEEK.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <span className="font-mono text-[0.5rem] text-[var(--color-dim)]">{day.d}</span>
            <span
              className={`grid h-7 w-7 place-items-center rounded-full text-[0.6rem] ${
                day.on
                  ? "bg-[var(--color-orange)] text-[#0a0a0f] shadow-[0_0_10px_var(--color-orange)]"
                  : "border border-[var(--color-border)] text-[var(--color-dim)]"
              }`}
            >
              {day.on ? <Check className="h-3 w-3" strokeWidth={3.5} /> : "·"}
            </span>
          </div>
        ))}
      </div>

      {/* Badges */}
      <p className="mt-6 font-mono text-[0.55rem] tracking-[0.24em] text-[var(--color-dim)]">
        MILESTONE BADGES
      </p>
      <div className="mt-3 space-y-2">
        {BADGES.map((b) => (
          <div
            key={b.label}
            className={`flex items-center gap-3 rounded-lg border px-3 py-2 ${
              b.unlocked
                ? "border-[rgba(168,85,247,0.4)] bg-[rgba(168,85,247,0.06)]"
                : "border-[var(--color-border)] bg-[var(--color-panel)] opacity-55"
            }`}
          >
            <Star
              className={`h-4 w-4 ${
                b.unlocked ? "text-[var(--color-purple)]" : "text-[var(--color-dim)]"
              }`}
              strokeWidth={2.2}
              fill={b.unlocked ? "rgba(168,85,247,0.4)" : "none"}
            />
            <span className="flex-1 font-mono text-[0.72rem] text-[var(--color-text)]">
              {b.label}
            </span>
            <span className="font-mono text-[0.55rem] tracking-[0.12em] text-[var(--color-dim)]">
              {b.days}
            </span>
          </div>
        ))}
      </div>
    </PhoneFrame>
  )
}

/* ------------------------------------------------------------------ */
/* 4. Skin Journal — timeline                                          */
/* ------------------------------------------------------------------ */

const JOURNAL: {
  date: string
  score: number
  tags: string[]
  accent: string
}[] = [
  { date: "JUN 11", score: 82, tags: ["Sleep", "Diet"], accent: "var(--color-green)" },
  { date: "JUN 08", score: 79, tags: ["Stress"], accent: "var(--color-cyan)" },
  { date: "JUN 04", score: 76, tags: ["Period", "Sleep"], accent: "var(--color-magenta)" },
]

export function JournalMock() {
  return (
    <PhoneFrame glow="glow-border-purple">
      <ScreenTitle kicker="SKIN JOURNAL" title="Your Timeline" />

      <div className="space-y-3">
        {JOURNAL.map((entry) => (
          <div
            key={entry.date}
            className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] p-3"
          >
            {/* selfie placeholder */}
            <div
              className="grid h-12 w-12 shrink-0 place-items-center rounded-lg"
              style={{
                background: `radial-gradient(circle at 35% 30%, ${entry.accent}, var(--color-bg-soft))`,
                boxShadow: `0 0 16px -6px ${entry.accent}`,
              }}
            >
              <Camera className="h-4 w-4 text-[#0a0a0f]" strokeWidth={2.4} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.55rem] tracking-[0.18em] text-[var(--color-dim)]">
                  {entry.date}
                </span>
                <span
                  className="font-display text-sm font-bold"
                  style={{ color: entry.accent }}
                >
                  {entry.score}
                </span>
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-0.5 font-mono text-[0.5rem] tracking-[0.1em] text-[var(--color-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg border border-[rgba(168,85,247,0.3)] bg-[rgba(168,85,247,0.05)] px-3 py-2.5">
        <Droplet className="h-4 w-4 shrink-0 text-[var(--color-purple)]" strokeWidth={2.2} />
        <span className="font-mono text-[0.58rem] leading-relaxed text-[var(--color-muted)]">
          Better sleep linked to +6 hydration
        </span>
      </div>
    </PhoneFrame>
  )
}

/* ------------------------------------------------------------------ */
/* 5. Weekly Glow Report                                               */
/* ------------------------------------------------------------------ */

const REPORT_DELTAS: { label: string; delta: string; up: boolean }[] = [
  { label: "Hydration", delta: "+8", up: true },
  { label: "Pores", delta: "+3", up: true },
  { label: "Oiliness", delta: "-2", up: false },
]

export function ReportMock() {
  return (
    <PhoneFrame glow="glow-border-magenta">
      <ScreenTitle kicker="WEEKLY REPORT" title="Glow Summary" />

      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-xl border border-[rgba(34,211,238,0.35)] bg-[rgba(34,211,238,0.05)] p-3 text-center">
          <p className="font-display text-2xl font-black text-[var(--color-cyan)]">+6</p>
          <p className="font-mono text-[0.5rem] tracking-[0.18em] text-[var(--color-dim)]">
            SCORE CHANGE
          </p>
        </div>
        <div className="rounded-xl border border-[rgba(74,222,128,0.35)] bg-[rgba(74,222,128,0.05)] p-3 text-center">
          <p className="font-display text-2xl font-black text-[var(--color-green)]">86%</p>
          <p className="font-mono text-[0.5rem] tracking-[0.18em] text-[var(--color-dim)]">
            ROUTINE DONE
          </p>
        </div>
      </div>

      <p className="mt-5 font-mono text-[0.55rem] tracking-[0.24em] text-[var(--color-dim)]">
        DIMENSION SHIFTS
      </p>
      <div className="mt-3 space-y-2">
        {REPORT_DELTAS.map((d) => (
          <div
            key={d.label}
            className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] px-3 py-2"
          >
            <span className="font-mono text-[0.72rem] text-[var(--color-text)]">{d.label}</span>
            <span
              className={`inline-flex items-center gap-1 font-mono text-[0.68rem] ${
                d.up ? "text-[var(--color-green)]" : "text-[var(--color-orange)]"
              }`}
            >
              <TrendingUp
                className={`h-3.5 w-3.5 ${d.up ? "" : "rotate-180"}`}
                strokeWidth={2.6}
              />
              {d.delta}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-[rgba(255,43,214,0.3)] bg-[rgba(255,43,214,0.05)] p-3">
        <div className="mb-1 flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-[var(--color-magenta)]" strokeWidth={2.4} />
          <span className="font-mono text-[0.5rem] tracking-[0.22em] text-[var(--color-magenta)]">
            AI INSIGHT
          </span>
        </div>
        <p className="font-mono text-[0.6rem] leading-relaxed text-[var(--color-muted)]">
          You kept your streak for 7 days — your hydration improved 8 points.
        </p>
      </div>
    </PhoneFrame>
  )
}
