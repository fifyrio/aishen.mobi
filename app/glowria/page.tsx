import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ScanFace,
  ListChecks,
  Flame,
  BookHeart,
  LineChart,
  Check,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionHeading } from "@/components/section-heading"
import {
  ScoreMock,
  RoutineMock,
  StreakMock,
  JournalMock,
  ReportMock,
} from "@/components/glowria/mockups"

export const metadata: Metadata = {
  title: "Glowria — AI Skincare Companion | SHEN'S DESIGN",
  description:
    "Scan your face, get an instant Skin Health Score, build your routine, and track your glow-up. Glowria turns skincare into a game you actually want to play.",
}

/* ------------------------------------------------------------------ */
/* Feature blocks — each pairs copy with a live phone mockup           */
/* ------------------------------------------------------------------ */

interface Feature {
  id: string
  kicker: string
  title: string
  accent: string
  icon: React.ReactNode
  points: string[]
  mock: React.ReactNode
}

const FEATURES: Feature[] = [
  {
    id: "analysis",
    kicker: "AI SKIN ANALYSIS",
    title: "Know Your Skin In Seconds",
    accent: "neon-text-magenta",
    icon: <ScanFace className="h-5 w-5" strokeWidth={2.2} />,
    points: [
      "Take a selfie, get a Skin Health Score (0–100)",
      "5 dimensions: Acne, Pores, Oiliness, Dark Spots, Hydration",
      "Grades from S to D so you always know where you stand",
      "Trend charts show how your score moves over time",
    ],
    mock: <ScoreMock />,
  },
  {
    id: "routine",
    kicker: "BUILD YOUR ROUTINE",
    title: "Your Steps, Your Way",
    accent: "neon-text-cyan",
    icon: <ListChecks className="h-5 w-5" strokeWidth={2.2} />,
    points: [
      "Morning & evening routines set up in minutes",
      "Default flow: Cleanse → Toner → Serum → Moisturizer → Sunscreen",
      "Add steps, reorder, attach product notes",
      "Check off each step with satisfying confetti",
    ],
    mock: <RoutineMock />,
  },
  {
    id: "streak",
    kicker: "NEVER MISS A STEP",
    title: "Build An Unbreakable Glow Streak",
    accent: "neon-text-orange",
    icon: <Flame className="h-5 w-5" strokeWidth={2.2} />,
    points: [
      "Morning & evening push reminders keep you on track",
      "Watch your streak climb day after day",
      "Earn badges: Week Warrior, Glow Getter, Skin Devotee",
      "Weekly calendar shows consistency at a glance",
    ],
    mock: <StreakMock />,
  },
  {
    id: "journal",
    kicker: "YOUR SKIN JOURNAL",
    title: "See What Your Skin Is Telling You",
    accent: "neon-text-purple",
    icon: <BookHeart className="h-5 w-5" strokeWidth={2.2} />,
    points: [
      "Every scan saved with selfie, scores, and notes",
      "Tag entries: Sleep, Diet, Period, Medication, Stress",
      "Spot the link between habits and your skin",
      "A beautiful timeline of your whole journey",
    ],
    mock: <JournalMock />,
  },
  {
    id: "reports",
    kicker: "WEEKLY GLOW REPORTS",
    title: "Insights That Actually Help",
    accent: "neon-text-magenta",
    icon: <LineChart className="h-5 w-5" strokeWidth={2.2} />,
    points: [
      "Weekly summary of score changes & routine completion",
      "See which dimensions improved or declined",
      "AI connects your habits to real skin improvements",
      "Radar charts compare your progress over time",
    ],
    mock: <ReportMock />,
  },
]

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

const FREE_FEATURES = [
  "2 skin scans per week",
  "Full routine tracking & check-ins",
  "7-day trend chart",
  "Basic weekly report",
]

const PRO_FEATURES = [
  "Unlimited skin scans",
  "Detailed 5-dimension analysis",
  "AI-powered skincare advice",
  "Full history & trend charts",
  "Monthly glow reports",
  "Radar chart comparisons",
]

export default function GlowriaPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ---------- HERO ---------- */}
        <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center md:text-left">
              <div className="chip mx-auto mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 md:mx-0">
                <Sparkles className="h-3.5 w-3.5 text-[var(--color-magenta)]" strokeWidth={2.4} />
                <span className="font-mono text-[0.65rem] tracking-[0.28em] text-[var(--color-magenta)]">
                  AI-POWERED SKINCARE
                </span>
              </div>

              <h1 className="font-display text-5xl font-black leading-[1.05] tracking-[0.02em] md:text-7xl">
                <span className="block text-glow-white text-[var(--color-text)]">GLOWRIA</span>
                <span className="mt-2 block gradient-text">YOUR GLOW-UP GAME</span>
              </h1>

              <p className="mx-auto mt-7 max-w-xl font-mono text-sm leading-relaxed text-[var(--color-muted)] md:mx-0">
                <span className="neon-text-magenta">&gt;</span> Scan your face, get an instant
                skin health score, build your perfect routine, and track your glow-up journey —
                all in one beautifully designed app.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <a
                  href="#"
                  className="btn-neon btn-magenta rounded-md px-7 py-3 text-xs"
                >
                  Download on App Store
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.6} />
                </a>
                <Link href="#features" className="btn-neon btn-ghost rounded-md px-7 py-3 text-xs">
                  See Features
                  <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                </Link>
              </div>

              <p className="mt-6 font-mono text-[0.7rem] tracking-[0.18em] text-[var(--color-dim)]">
                FREE TO DOWNLOAD · 3-DAY PRO TRIAL ON ANNUAL
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,43,214,0.18),transparent_70%)]" />
              <ScoreMock />
            </div>
          </div>
        </section>

        {/* ---------- FEATURES ---------- */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
          <SectionHeading
            title="HOW GLOWRIA WORKS"
            subtitle="FROM FIRST SCAN TO LASTING GLOW"
          />

          <div className="mt-16 space-y-24">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.id}
                className={`grid items-center gap-10 md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Copy */}
                <div>
                  <div className="mb-4 inline-flex items-center gap-2.5">
                    <span className={`${feature.accent}`}>{feature.icon}</span>
                    <span className="font-mono text-[0.65rem] tracking-[0.28em] text-[var(--color-dim)]">
                      {feature.kicker}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold leading-tight tracking-[0.02em] text-glow-white md:text-3xl">
                    {feature.title}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {feature.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className={`mt-0.5 ${feature.accent}`}>
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </span>
                        <span className="font-mono text-[0.82rem] leading-relaxed text-[var(--color-text)]">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mockup */}
                <div className="relative flex justify-center">
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_50%_45%,rgba(168,85,247,0.14),transparent_70%)]" />
                  {feature.mock}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- PERSONAL ---------- */}
        <section className="relative py-20">
          <div className="absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(255,43,214,0.14),transparent_70%)]" />
          <div className="mx-auto max-w-4xl px-5">
            <div className="panel glow-border-magenta rounded-xl px-8 py-12 text-center">
              <p className="font-mono text-[0.65rem] tracking-[0.32em] text-[var(--color-magenta)]">
                SMART & PERSONAL
              </p>
              <p className="gradient-text mt-5 font-display text-xl font-bold leading-snug tracking-[0.02em] md:text-2xl">
                &ldquo;Personalized from day one — recommendations adapt to YOUR skin, not
                generic advice.&rdquo;
              </p>
              <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-[var(--color-muted)]">
                Tell us your skin type, concerns, and routine level. Glowria tailors everything
                from there — with light and dark mode for comfortable use day and night.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- PRICING ---------- */}
        <section id="pricing" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-16">
          <SectionHeading title="GLOWRIA PRO" subtitle="FREE TO START · UPGRADE ANYTIME" />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Free */}
            <div className="panel rounded-xl p-7">
              <h3 className="font-display text-lg font-bold tracking-[0.04em] text-[var(--color-text)]">
                FREE
              </h3>
              <p className="mt-1 font-mono text-[0.7rem] tracking-[0.18em] text-[var(--color-dim)]">
                &gt; GET STARTED
              </p>
              <p className="mt-5 font-display text-3xl font-black text-glow-white">$0</p>
              <ul className="mt-6 space-y-2.5">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-[var(--color-muted)]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="font-mono text-[0.78rem] text-[var(--color-muted)]">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro */}
            <div className="panel glow-border-magenta relative rounded-xl p-7">
              <span className="absolute right-5 top-5 rounded-full border border-[rgba(255,43,214,0.5)] bg-[rgba(255,43,214,0.08)] px-3 py-1 font-mono text-[0.55rem] tracking-[0.2em] text-[var(--color-magenta)]">
                BEST VALUE
              </span>
              <h3 className="font-display text-lg font-bold tracking-[0.04em] neon-text-magenta">
                GLOWRIA PRO
              </h3>
              <p className="mt-1 font-mono text-[0.7rem] tracking-[0.18em] text-[var(--color-dim)]">
                &gt; THE FULL EXPERIENCE
              </p>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-3xl font-black text-glow-white">$29.99</span>
                <span className="mb-1 font-mono text-[0.7rem] text-[var(--color-dim)]">/year</span>
              </div>
              <p className="mt-1 font-mono text-[0.65rem] tracking-[0.12em] text-[var(--color-green)]">
                LESS THAN $0.09/DAY · OR $4.99/WEEK
              </p>
              <ul className="mt-6 space-y-2.5">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 neon-text-magenta">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="font-mono text-[0.78rem] text-[var(--color-text)]">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="btn-neon btn-magenta mt-7 w-full justify-center rounded-md px-6 py-3 text-xs"
              >
                Start 3-Day Free Trial
                <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
              </a>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center font-mono text-[0.65rem] leading-relaxed text-[var(--color-dim)]">
            Payment is charged to your Apple ID at confirmation of purchase. Subscription
            auto-renews unless turned off at least 24 hours before the end of the current period.
            Manage subscriptions in Settings &gt; Apple ID &gt; Subscriptions.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 font-mono text-[0.7rem] tracking-[0.18em]">
            <Link
              href="/glowria/privacy-policy"
              className="text-[var(--color-muted)] underline-offset-4 transition-colors hover:text-[var(--color-magenta)] hover:underline"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/glowria/terms-of-service"
              className="text-[var(--color-muted)] underline-offset-4 transition-colors hover:text-[var(--color-cyan)] hover:underline"
            >
              TERMS OF USE
            </Link>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="mx-auto max-w-4xl px-5 py-20 text-center">
          <h2 className="font-display text-3xl font-black leading-tight tracking-[0.02em] text-glow-white md:text-4xl">
            Start Your <span className="gradient-text">Glow-Up</span> Today
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-mono text-sm leading-relaxed text-[var(--color-muted)]">
            Whether you&apos;re new to skincare or running a 10-step routine, Glowria keeps you
            consistent and shows real results over time.
          </p>
          <a
            href="#"
            className="btn-neon btn-magenta mt-9 inline-flex rounded-md px-8 py-3 text-xs"
          >
            Download on App Store
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.6} />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
