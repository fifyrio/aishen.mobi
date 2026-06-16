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
        body: "The Application requires access to your device camera and photo library so you can capture or select facial images (selfies) for skin analysis and personalized skincare routine recommendations. The images are sent securely to our backend and analyzed by a third-party AI model (Google Gemini) to assess skin conditions and tailor guidance. Your selfies are used solely to deliver the skin analysis, are processed transiently and deleted shortly after processing, and are never used to train any AI models or shared for any other purpose.",
      }}
      thirdPartyServices={[
        "Google Gemini — AI skin analysis and content generation, accessed through our own backend",
        "Cloudflare Workers — backend and API hosting",
        "RevenueCat — subscription and in-app purchase management (on top of Apple In-App Purchase)",
        "Google Analytics for Firebase — anonymized usage analytics",
      ]}
      extraSections={[
        {
          title: "Facial Data Collection & Third-Party AI (At a Glance)",
          body: (
            <>
              <p className="rounded-md border border-[rgba(255,43,214,0.35)] bg-[rgba(255,43,214,0.06)] p-4 text-[var(--color-text)]">
                <strong className="neon-text-magenta">
                  We collect facial data.
                </strong>{" "}
                When you take a skin scan, the Application collects facial images
                (selfies) of your face.{" "}
                <strong className="neon-text-magenta">
                  We send this user content to a third-party AI service.
                </strong>{" "}
                Your facial images are transmitted to Google Gemini (Google&rsquo;s AI
                model) to analyze your facial and skin features.
              </p>
              <p>
                <span className="text-[var(--color-text)]">Why we collect it:</span> the
                facial analysis is used to detect skin features and conditions (such as
                acne, pores, oiliness, dark spots, and hydration), generate your Skin
                Health Score, and produce personalized skincare routine recommendations
                and guidance. We do not use your face for any unrelated purpose, and we do
                not use it for advertising or facial recognition / identity matching.
              </p>
            </>
          ),
        },
        {
          title: "How Face Detection Works — On-Device vs. Server",
          body: (
            <>
              <p>
                The Application uses two clearly separated stages. Understanding the
                difference matters for your privacy:
              </p>
              <p className="rounded-md border border-[rgba(34,211,238,0.35)] bg-[rgba(34,211,238,0.06)] p-4 text-[var(--color-text)]">
                <strong className="neon-text-cyan">
                  1. Real-time face detection (on-device only).
                </strong>{" "}
                While the camera is open, the Application draws a live white face-guide
                overlay (mesh, contours, and landmarks) to help you align your face. This
                runs entirely on your device using{" "}
                <span className="text-[var(--color-text)]">
                  Google ML Kit Face Detection
                </span>
                . It only detects the position and shape of a face to draw the guide.{" "}
                <strong className="neon-text-cyan">
                  It does not upload anything, does not perform identity recognition, and
                  no face data leaves your device at this stage.
                </strong>
              </p>
              <p className="rounded-md border border-[rgba(255,43,214,0.35)] bg-[rgba(255,43,214,0.06)] p-4 text-[var(--color-text)]">
                <strong className="neon-text-magenta">
                  2. Skin analysis (server-side).
                </strong>{" "}
                When you tap to scan, the Application captures a photo (or you pick one
                from your library) and{" "}
                <strong className="neon-text-magenta">
                  uploads that selfie to our server, where it is analyzed by Google
                  Gemini.
                </strong>{" "}
                This upload only happens after you agree to the in-app disclosure. This is
                the stage where your selfie leaves the device.
              </p>
              <p>
                Components involved: Google ML Kit Face Detection (on-device overlay
                only), the device camera and photo library (to capture or select a
                selfie), and Google Gemini on our server (the actual skin analysis). The
                Application does not use Apple&rsquo;s ARKit or Vision frameworks; ML Kit
                is Google&rsquo;s cross-platform on-device library and is used solely for
                the alignment guide.
              </p>
            </>
          ),
        },
        {
          title: "Information We Collect",
          body: (
            <>
              <p>
                To deliver the skincare experience, the Application may collect and store:
              </p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--color-magenta)]">
                <li>
                  <span className="text-[var(--color-text)]">
                    Facial images (selfies)
                  </span>{" "}
                  you capture or select — sent to a third-party AI service for analysis
                  and not retained after processing
                </li>
                <li>
                  Skin analysis results — your Skin Health Score and dimension scores
                  (Acne, Pores, Oiliness, Dark Spots, Hydration)
                </li>
                <li>
                  Routine and progress data — your morning/evening steps, check-ins,
                  streaks, and weekly reports
                </li>
                <li>
                  Skin diary entries and lifestyle tags you choose to log (e.g. Sleep,
                  Water, Stress, Period, Diet) and how your skin feels
                </li>
                <li>
                  Subscription status and anonymized purchase events (via Apple and
                  RevenueCat)
                </li>
                <li>
                  Basic device and usage information (e.g. IP address, operating system,
                  in-app activity)
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "How Your Data Is Used",
          body: (
            <>
              <p>
                Your data is used solely to provide and improve the skincare features of
                the Application:
              </p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--color-magenta)]">
                <li>
                  <span className="text-[var(--color-text)]">Facial images</span> →
                  analyzed by Google Gemini to detect skin features and generate your Skin
                  Health Score and dimension scores
                </li>
                <li>
                  <span className="text-[var(--color-text)]">Skin scores & diary</span> →
                  used to generate personalized skincare routines, weekly glow reports,
                  and AI insights
                </li>
                <li>
                  <span className="text-[var(--color-text)]">Routine & progress</span> →
                  used to track your check-ins, streaks, and improvement over time
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Third-Party Services & Data Protection",
          body: (
            <>
              <p>
                We share data with the third-party providers below only as needed to
                operate the Application. We have reviewed these providers and confirm that{" "}
                <span className="text-[var(--color-text)]">
                  each provides a level of data protection consistent with Apple&rsquo;s
                  App Store Review Guidelines and applicable data-protection requirements.
                </span>
              </p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--color-magenta)]">
                <li>
                  <span className="text-[var(--color-text)]">Google Gemini (Google)</span>{" "}
                  — receives your facial images to perform skin analysis and generate
                  guidance. Governed by Google&rsquo;s privacy and API data-use terms.
                </li>
                <li>
                  <span className="text-[var(--color-text)]">Cloudflare Workers</span> —
                  hosts our backend and securely relays requests between the app and the
                  AI model.
                </li>
                <li>
                  <span className="text-[var(--color-text)]">RevenueCat</span> — manages
                  subscriptions and anonymized in-app purchase events.
                </li>
                <li>
                  <span className="text-[var(--color-text)]">
                    Google Analytics for Firebase
                  </span>{" "}
                  — anonymized usage analytics.
                </li>
              </ul>
              <p>
                We do not sell your personal data, and we do not share your facial images
                with any third party other than the AI service used to perform the
                analysis you requested.
              </p>
            </>
          ),
        },
        {
          title: "Data Storage & Retention",
          body: (
            <>
              <p>
                <span className="text-[var(--color-text)]">Facial data.</span> Your facial
                images are transmitted over an encrypted connection (TLS) and processed
                transiently.{" "}
                <strong className="neon-text-magenta">
                  We do not permanently store your facial images on our servers.
                </strong>{" "}
                Each selfie is deleted immediately after the skin analysis for that scan
                completes and is not retained afterward. Only the resulting numeric scores
                and routine data are kept so you can view your history.
              </p>
              <p>
                <span className="text-[var(--color-text)]">AI data &amp; training.</span>{" "}
                <strong className="neon-text-magenta">
                  Your facial images and personal content are never used to train any AI
                  models
                </strong>{" "}
                — neither ours nor any third party&rsquo;s. They are sent to Google Gemini
                only to return your analysis result for that request and are not used for
                model training, profiling, or advertising.
              </p>
            </>
          ),
        },
        {
          title: "Informational Use Only — Not Medical Advice",
          body: (
            <p>
              The Application provides general skincare and cosmetic guidance for
              informational purposes only. It does not provide medical diagnosis or
              treatment, is not a medical device, and does not operate in a regulated
              medical capacity. All analysis content is generated by our own system using
              Google Gemini. For any medical or dermatological concern, please consult a
              qualified healthcare professional.
            </p>
          ),
        },
      ]}
    />
  )
}
