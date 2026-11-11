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
      effectiveDate="November 11, 2026"
      thirdPartyServices={[
        "Cloudflare (hosts the service that delivers the daily prompts)",
        "Google AdMob (advertising)",
        "Google Analytics for Firebase and Firebase Remote Config (usage statistics and settings)",
        "RevenueCat (subscription management; Apple processes all payments)",
      ]}
      extraSections={[
        {
          title: "Your Game Data",
          body: (
            <p>
              Your answers, scores, streak and settings are stored only on your device.
              The Application has no account or sign-in. To deliver each day&rsquo;s prompts, it
              downloads them from our server, which receives your IP address like any
              web request.
            </p>
          ),
        },
        {
          title: "Advertising",
          body: (
            <>
              <p>
                The free version of the Application shows ads through Google AdMob:
                an optional rewarded video that unlocks one item, and an occasional
                full-screen ad after a dive result. Subscribers to Krillia Plus do
                not see these ads.
              </p>
              <p>
                To show and measure ads, Google and its partners may collect your
                device&rsquo;s advertising identifier (IDFA), IP address, and
                information about your device and how you interact with ads. On iOS
                the identifier is used for ads only if you allow tracking when the
                Application asks. If you decline, you still see ads, but they are
                not personalised. In the European Economic Area, the United Kingdom
                and Switzerland, and in US states that require it, you are asked for
                your choice before ads load, and you can change it later in the
                Application&rsquo;s Settings. You can also reset or limit the
                advertising identifier in your device settings. See{" "}
                <a href="https://policies.google.com/technologies/partner-sites">
                  how Google uses data from apps that use its services
                </a>
                .
              </p>
            </>
          ),
        },
        {
          title: "Usage Statistics and Purchases",
          body: (
            <p>
              We use Google Analytics for Firebase to count anonymous events such as
              completing a dive or opening the paywall, and Firebase Remote Config to
              deliver settings. If you subscribe, RevenueCat checks your purchase
              status with Apple; we never see your payment details. None of this
              identifies you by name.
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
