import type { Metadata } from "next"
import { AppPrivacyPolicy } from "@/components/app-privacy-policy"

export const metadata: Metadata = {
  title: "Privacy Policy — Sipbook: Drink Diary",
  description: "Privacy Policy for Sipbook: Drink Diary.",
}

export default function SipbookPrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="Sipbook: Drink Diary"
      eyebrow="SIPBOOK: DRINK DIARY"
      effectiveDate="August 2, 2026"
      hasSubscriptions
      permission={{
        title: "Camera & Photo Access",
        body: "The Application requires access to your device camera and photo library so you can snap or select photos of your drinks. Drink photos are processed by AI vision models solely to identify the drink, estimate its caffeine content, and generate your diary cards and shareable templates. Photos are not used for any other purpose and are not shared beyond what is required to operate the recognition service.",
      }}
      extraSections={[
        {
          title: "AI Drink Recognition & Caffeine Estimates",
          body: (
            <>
              <p>
                When you scan a drink, the photo is analyzed by AI to identify the
                beverage type (e.g. coffee, matcha, tea, boba) and to estimate its
                caffeine content in milligrams, including a half-life based
                &ldquo;remaining caffeine&rdquo; projection. These estimates are
                approximations for informational purposes only and are not medical
                advice. Recognition results and caffeine estimates may be inaccurate;
                do not rely on them for health, dietary, or medical decisions.
              </p>
              <p>
                Your drink diary entries — including photos, drink names, flavors,
                locations you type in, and streaks — are stored to provide the diary,
                tracking, and share-card features. Share cards are only published to
                social platforms (such as Instagram or TikTok) when you explicitly
                choose to export or share them.
              </p>
            </>
          ),
        },
      ]}
    />
  )
}
