import type { Metadata } from "next"
import { AppPrivacyPolicy } from "@/components/app-privacy-policy"

export const metadata: Metadata = {
  title: "Privacy Policy — CurioSnap: Antique Identifier",
  description: "Privacy Policy for CurioSnap: Antique Identifier.",
}

export default function CurioSnapPrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="CurioSnap: Antique Identifier"
      eyebrow="CURIOSNAP: ANTIQUE IDENTIFIER"
      effectiveDate="January 28, 2026"
      permission={{
        title: "Camera & Photo Access",
        body: "The Application requires access to your device camera and photo library to scan and identify antiques, ceramics, bronzes, coins, and other artifacts. Images you capture or select are processed to provide identification results. The Service Provider does not use these images for any purpose other than delivering the identification service, and does not share them with third parties except as required to operate the AI processing service.",
      }}
    />
  )
}
