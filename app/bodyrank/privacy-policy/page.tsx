import type { Metadata } from "next"
import { AppPrivacyPolicy } from "@/components/app-privacy-policy"

export const metadata: Metadata = {
  title: "Privacy Policy — BodyRank: AI Gym & Body Scan",
  description: "Privacy Policy for BodyRank: AI Gym & Body Scan.",
}

export default function BodyRankPrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="BodyRank: AI Gym & Body Scan"
      eyebrow="BODYRANK: AI GYM & BODY SCAN"
      effectiveDate="August 20, 2026"
      hasSubscriptions
      permission={{
        title: "Camera & Photo Access",
        body: "The Application requires access to your device camera and photo library so you can take or select body photos for the AI body scan feature. Body photos are transmitted securely to our servers and processed by third-party AI vision models solely to generate your physique scores across seven metrics (Overall, Potential, Definition, Symmetry, Body Fat, V-Taper, Muscle Mass) and your rank placement. Photos are not used for any other purpose, are not used to train AI models, and are not shared beyond what is required to operate the scan service.",
      }}
      extraSections={[
        {
          title: "Account Information",
          body: (
            <p>
              You may create an account using Sign in with Apple, Google, or email. The
              Service Provider stores your account identifier and email address to
              maintain your profile, scan history, training plan, and rank progress
              across devices. You can request deletion of your account and associated
              data at any time by contacting the Service Provider.
            </p>
          ),
        },
        {
          title: "Fitness & Body Data",
          body: (
            <>
              <p>
                To personalize your training plan and rank placement, the Application
                collects information you provide during onboarding and use, such as
                gender, age range, height, weight, target weight, training experience,
                equipment, training schedule, injury areas, and best lift performances.
                This data is used solely to generate your workout plan, weight
                recommendations, and rank progression.
              </p>
              <p>
                If you enable Apple Health integration, workout data is synced with
                Apple Health only with your explicit permission, and handled in
                accordance with Apple&rsquo;s HealthKit guidelines. Health data is never
                used for advertising or shared with third parties for marketing
                purposes.
              </p>
            </>
          ),
        },
        {
          title: "AI Scores Are Not Medical Advice",
          body: (
            <p>
              Body scan scores, body fat estimates, rank placements, and AI-generated
              training recommendations are approximations for informational and
              motivational purposes only. They are not medical, health, or professional
              fitness advice, and may be inaccurate. Consult a qualified professional
              before starting any exercise program, especially if you have injuries or
              health conditions.
            </p>
          ),
        },
      ]}
    />
  )
}
