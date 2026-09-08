import type { Metadata } from "next"
import { AppTermsOfService } from "@/components/app-terms-of-service"

export const metadata: Metadata = {
  title: "Terms of Service & EULA — Outfit Finder: Find Clothes",
  description:
    "End User License Agreement and Terms of Service for Outfit Finder: Find Clothes.",
}

export default function OutfitFinderTermsPage() {
  return (
    <AppTermsOfService
      appName="Outfit Finder: Find Clothes"
      eyebrow="OUTFIT FINDER: FIND CLOTHES"
      effectiveDate="September 8, 2026"
      effectiveDateIso="2026-09-08"
      subscription={{
        productName: "Outfit Finder PRO",
        plans: [
          { name: "Monthly", price: "$4.99 / month" },
          { name: "Yearly", price: "$29.99 / year" },
        ],
        privacyUrl: "/outfitfinder/privacy-policy",
        termsUrl: "/outfitfinder/terms-of-service",
      }}
    />
  )
}
