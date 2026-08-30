import type { Metadata } from "next"
import { AppTermsOfService } from "@/components/app-terms-of-service"

export const metadata: Metadata = {
  title: "Terms of Service & EULA — Vido AI: Photo to Video",
  description:
    "End User License Agreement and Terms of Service for Vido AI: Photo to Video.",
}

export default function VidoAiTermsPage() {
  return (
    <AppTermsOfService
      appName="Vido AI: Photo to Video"
      eyebrow="VIDO AI: PHOTO TO VIDEO"
      effectiveDate="January 28, 2026"
      effectiveDateIso="2026-01-28"
      subscription={{
        productName: "Vido AI Basic",
        plans: [
          { name: "Basic Weekly", price: "$7.99 / week", note: "140 credits every week" },
          { name: "Basic Yearly", price: "$39.99 / year", note: "60 credits every month" },
        ],
        creditPacks: [
          { name: "150 Credits", price: "$4.99" },
          { name: "320 Credits", price: "$9.99" },
          { name: "700 Credits", price: "$19.99", note: "Best value" },
        ],
        privacyUrl: "/vido-ai/privacy-policy",
        termsUrl: "/vido-ai/terms-of-service",
      }}
    />
  )
}
