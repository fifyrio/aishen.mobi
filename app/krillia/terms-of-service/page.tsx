import type { Metadata } from "next"
import { AppTermsOfService } from "@/components/app-terms-of-service"

export const metadata: Metadata = {
  title: "Terms of Service & EULA — Krillia: Krillion Trivia Dive",
  description:
    "End User License Agreement and Terms of Service for Krillia: Krillion Trivia Dive.",
}

export default function KrilliaTermsPage() {
  return (
    <AppTermsOfService
      appName="Krillia: Krillion Trivia Dive"
      eyebrow="KRILLIA: KRILLION TRIVIA DIVE"
      effectiveDate="October 29, 2026"
      effectiveDateIso="2026-10-29"
      usesAi={false}
    />
  )
}
