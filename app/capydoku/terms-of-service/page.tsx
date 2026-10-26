import type { Metadata } from "next"
import { AppTermsOfService } from "@/components/app-terms-of-service"

export const metadata: Metadata = {
  title: "Terms of Service & EULA — Capydoku: Cute Capybara Sudoku",
  description:
    "End User License Agreement and Terms of Service for Capydoku: Cute Capybara Sudoku.",
}

export default function CapydokuTermsPage() {
  return (
    <AppTermsOfService
      appName="Capydoku: Cute Capybara Sudoku"
      eyebrow="CAPYDOKU: CUTE CAPYBARA SUDOKU"
      effectiveDate="October 26, 2026"
      effectiveDateIso="2026-10-26"
      usesAi={false}
    />
  )
}
