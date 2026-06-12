import type { Metadata } from "next"
import { AppTermsOfService } from "@/components/app-terms-of-service"

export const metadata: Metadata = {
  title: "Terms of Service & EULA — Glowria: Skincare Routine",
  description:
    "End User License Agreement and Terms of Service for Glowria: Skincare Routine.",
}

export default function GlowriaTermsPage() {
  return (
    <AppTermsOfService
      appName="Glowria: Skincare Routine"
      eyebrow="GLOWRIA: SKINCARE ROUTINE"
      effectiveDate="January 28, 2026"
      effectiveDateIso="2026-01-28"
      subscription={{
        productName: "Glowria PRO",
        plans: [
          { name: "Weekly", price: "$4.99 / week" },
          {
            name: "Yearly",
            price: "$29.99 / year",
            note: "3-day free trial included",
          },
        ],
        privacyUrl: "/glowria/privacy-policy",
        termsUrl: "/glowria/terms-of-service",
      }}
    />
  )
}
