import type { Metadata } from "next"
import { AppPrivacyPolicy } from "@/components/app-privacy-policy"

export const metadata: Metadata = {
  title: "Privacy Policy — Vido AI: Photo to Video",
  description: "Privacy Policy for Vido AI: Photo to Video.",
}

export default function VidoAiPrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="Vido AI: Photo to Video"
      eyebrow="VIDO AI: PHOTO TO VIDEO"
      effectiveDate="January 28, 2026"
      permission={{
        title: "Camera & Photo Access",
        body: "The Application requires access to your device camera and photo library so you can select or capture the images you want to transform into AI-generated videos. Uploaded images are processed by third-party AI models (including Google Veo and Sora 2) solely to generate your video output, and are not used for any other purpose or shared beyond what is required to operate the generation service.",
      }}
    />
  )
}
