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
    />
  )
}
