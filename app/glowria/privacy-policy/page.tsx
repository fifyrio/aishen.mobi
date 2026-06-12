import type { Metadata } from "next"
import { AppPrivacyPolicy } from "@/components/app-privacy-policy"

export const metadata: Metadata = {
  title: "Privacy Policy — Glowria: Skincare Routine",
  description: "Privacy Policy for Glowria: Skincare Routine.",
}

export default function GlowriaPrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="Glowria: Skincare Routine"
      eyebrow="GLOWRIA: SKINCARE ROUTINE"
      effectiveDate="January 28, 2026"
      hasSubscriptions
      permission={{
        title: "Camera & Photo Access",
        body: "The Application requires access to your device camera and photo library so you can capture or select facial images for skin analysis and personalized skincare routine recommendations. Images you provide are processed to assess skin conditions and tailor product suggestions. The Service Provider does not use these images for any purpose other than delivering the skincare analysis service, and does not share them with third parties except as required to operate the AI processing service.",
      }}
    />
  )
}
