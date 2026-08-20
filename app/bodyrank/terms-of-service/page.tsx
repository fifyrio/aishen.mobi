import type { Metadata } from "next"
import { AppTermsOfService } from "@/components/app-terms-of-service"

export const metadata: Metadata = {
  title: "Terms of Service & EULA — BodyRank: AI Gym & Body Scan",
  description:
    "End User License Agreement and Terms of Service for BodyRank: AI Gym & Body Scan.",
}

export default function BodyRankTermsPage() {
  return (
    <AppTermsOfService
      appName="BodyRank: AI Gym & Body Scan"
      eyebrow="BODYRANK: AI GYM & BODY SCAN"
      effectiveDate="August 20, 2026"
      effectiveDateIso="2026-08-20"
      subscription={{
        productName: "BodyRank PRO",
        plans: [
          { name: "Yearly", price: "$39.99 / year" },
          { name: "Weekly", price: "$9.99 / week" },
          {
            name: "Promotional Yearly",
            price: "$19.99 / year",
            note: "limited-time offer, where available",
          },
        ],
        privacyUrl: "/bodyrank/privacy-policy",
        termsUrl: "/bodyrank/terms-of-service",
      }}
    />
  )
}
