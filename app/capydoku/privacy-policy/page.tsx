import type { Metadata } from "next"
import { AppPrivacyPolicy } from "@/components/app-privacy-policy"

export const metadata: Metadata = {
  title: "Privacy Policy — Capydoku: Cute Capybara Sudoku",
  description: "Privacy Policy for Capydoku: Cute Capybara Sudoku.",
}

export default function CapydokuPrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="Capydoku: Cute Capybara Sudoku"
      eyebrow="CAPYDOKU: CUTE CAPYBARA SUDOKU"
      effectiveDate="October 26, 2026"
      thirdPartyServices={["Google AdMob", "Google Analytics for Firebase"]}
    />
  )
}
