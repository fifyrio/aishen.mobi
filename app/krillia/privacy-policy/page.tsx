import type { Metadata } from "next"
import { AppPrivacyPolicy } from "@/components/app-privacy-policy"

export const metadata: Metadata = {
  title: "Privacy Policy — Krillia: Krillion Trivia Dive",
  description: "Privacy Policy for Krillia: Krillion Trivia Dive.",
}

export default function KrilliaPrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="Krillia: Krillion Trivia Dive"
      eyebrow="KRILLIA: KRILLION TRIVIA DIVE"
      effectiveDate="October 29, 2026"
      thirdPartyServices={[
        "Cloudflare (hosts the service that delivers the daily prompts)",
      ]}
      extraSections={[
        {
          title: "Your Game Data",
          body: (
            <p>
              Your answers, scores, streak and settings are stored only on your device.
              The Application has no account or sign-in, and it does not use
              advertising or analytics tools. To deliver each day&rsquo;s prompts, it
              downloads them from our server, which receives your IP address like any
              web request.
            </p>
          ),
        },
        {
          title: "Notifications",
          body: (
            <p>
              If you turn on the daily reminder, the Application schedules local
              notifications on your device at a time based on when you usually play.
              They are created on your device, not sent from a server, and you can turn
              them off in the Application&rsquo;s Settings or in your device settings.
            </p>
          ),
        },
      ]}
    />
  )
}
