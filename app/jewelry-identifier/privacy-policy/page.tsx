import type { Metadata } from "next"
import { AppPrivacyPolicy } from "@/components/app-privacy-policy"

export const metadata: Metadata = {
  title: "Privacy Policy — AI Jewelry Identifier",
  description: "Privacy Policy for AI Jewelry Identifier.",
}

export default function JewelryIdentifierPrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="AI Jewelry Identifier"
      eyebrow="AI JEWELRY IDENTIFIER"
      effectiveDate="January 28, 2026"
      permission={{
        title: "Camera & Photo Access",
        body: "The Application requires access to your device camera and photo library to scan and identify diamonds, gemstones, and precious metals, and to power AR facet analysis. Images you capture or select are processed to provide grading and appraisal results. The Service Provider does not use these images for any purpose other than delivering the identification service, and does not share them with third parties except as required to operate the AI processing service.",
      }}
    />
  )
}
