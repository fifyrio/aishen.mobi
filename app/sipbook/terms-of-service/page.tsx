import type { Metadata } from "next"
import { AppTermsOfService } from "@/components/app-terms-of-service"

export const metadata: Metadata = {
  title: "Terms of Service & EULA — Sipbook: Drink Diary",
  description:
    "End User License Agreement and Terms of Service for Sipbook: Drink Diary.",
}

export default function SipbookTermsPage() {
  return (
    <AppTermsOfService
      appName="Sipbook: Drink Diary"
      eyebrow="SIPBOOK: DRINK DIARY"
      effectiveDate="August 2, 2026"
      effectiveDateIso="2026-08-02"
      subscription={{
        productName: "Sipbook PRO",
        plans: [
          { name: "Monthly", price: "$4.99 / month" },
          { name: "Yearly", price: "$29.99 / year" },
        ],
        privacyUrl: "/sipbook/privacy-policy",
        termsUrl: "/sipbook/terms-of-service",
      }}
    />
  )
}
