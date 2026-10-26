import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, LegalSection } from "@/components/legal-page"
import { SITE } from "@/lib/products"

export const metadata: Metadata = {
  title: "Support — Capydoku: Cute Capybara Sudoku",
  description:
    "Get help, report a problem, or share feedback about Capydoku: Cute Capybara Sudoku.",
}

export default function CapydokuSupportPage() {
  return (
    <LegalPage
      eyebrow="CAPYDOKU: CUTE CAPYBARA SUDOKU"
      title="Support"
      subtitle="How can we help?"
    >
      <LegalSection title="Contact Us">
        <p>
          Need help with Capydoku: Cute Capybara Sudoku? For questions, technical
          issues, or feedback, email us at{" "}
          <a
            href={`mailto:${SITE.email}?subject=Capydoku%20Support`}
            className="neon-text-cyan underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Report a Problem">
        <p>
          To help us investigate, please include the following details in your
          email:
        </p>
        <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--color-magenta)]">
          <li>Your device model and operating system version</li>
          <li>The version of Capydoku you are using</li>
          <li>A description of the issue and the steps to reproduce it</li>
          <li>A screenshot, if it helps explain the problem</li>
        </ul>
      </LegalSection>

      <LegalSection title="Feedback & Suggestions">
        <p>
          Have an idea for Capydoku or want to share your experience? We welcome
          your feedback at the email address above.
        </p>
      </LegalSection>

      <LegalSection title="Privacy & Terms">
        <p>
          Learn more about how we handle your information in our{" "}
          <Link
            href="/capydoku/privacy-policy"
            className="neon-text-cyan underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and review our{" "}
          <Link
            href="/capydoku/terms-of-service"
            className="neon-text-cyan underline-offset-4 hover:underline"
          >
            Terms of Service
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
