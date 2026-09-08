import type { Metadata } from "next"
import { AppPrivacyPolicy } from "@/components/app-privacy-policy"

export const metadata: Metadata = {
  title: "Privacy Policy — Outfit Finder: Find Clothes",
  description: "Privacy Policy for Outfit Finder: Find Clothes.",
}

export default function OutfitFinderPrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="Outfit Finder: Find Clothes"
      eyebrow="OUTFIT FINDER: FIND CLOTHES"
      effectiveDate="September 8, 2026"
      hasSubscriptions
      permission={{
        title: "Camera & Photo Access",
        body: "The Application requires access to your device camera and photo library so you can capture or select photos of your clothing, outfits, or style inspiration. Uploaded images are processed by third-party AI vision models solely to identify garments, suggest matching outfits, and return styling recommendations. Photos are not used for any other purpose, are not used to train AI models, and are not shared beyond what is required to operate the styling service.",
      }}
    />
  )
}
