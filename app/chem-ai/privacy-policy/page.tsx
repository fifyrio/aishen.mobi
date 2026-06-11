import type { Metadata } from "next"
import { AppPrivacyPolicy } from "@/components/app-privacy-policy"

export const metadata: Metadata = {
  title: "Privacy Policy — Periodic Table - Chem AI",
  description: "Privacy Policy for Periodic Table - Chem AI.",
}

export default function ChemAiPrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="Periodic Table - Chem AI"
      eyebrow="PERIODIC TABLE - CHEM AI"
      effectiveDate="January 28, 2026"
      permission={{
        title: "AI Chat Data",
        body: "The Application processes the questions and prompts you submit to its AI chemistry companion in order to generate element explanations and reaction insights. Conversation content is used only to deliver responses and improve the quality of the service, and is not sold or shared with third parties except as required to operate the AI processing service.",
      }}
    />
  )
}
