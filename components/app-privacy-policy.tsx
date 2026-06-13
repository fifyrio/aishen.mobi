import { LegalPage, LegalSection } from "@/components/legal-page"
import { SITE } from "@/lib/products"

export interface AppPrivacyPolicyProps {
  /** App display name, e.g. "CurioSnap: Antique Identifier" */
  appName: string
  /** Eyebrow line above the title (usually upper-cased app name) */
  eyebrow: string
  /** ISO-ish effective date string */
  effectiveDate: string
  /** Optional app-specific permission/data section (camera, photos, etc.) */
  permission?: {
    title: string
    body: string
  }
  /**
   * When true, the app offers in-app subscriptions (Apple Guideline 3.1.2).
   * Adjusts the overview wording and adds a subscription/payment data section.
   */
  hasSubscriptions?: boolean
  /**
   * Optional override for the third-party services list (name + purpose).
   * Defaults to the standard analytics/billing stack.
   */
  thirdPartyServices?: string[]
  /**
   * Optional app-specific sections (e.g. AI model disclosure, data collected,
   * medical disclaimer). Rendered after the standard data-handling sections.
   */
  extraSections?: { title: string; body: React.ReactNode }[]
}

const DEFAULT_THIRD_PARTY = ["Google Analytics for Firebase", "RevenueCat"]

/**
 * Standard mobile-app privacy policy, shared across every product page.
 * Only the app name, effective date, and one permission section vary.
 */
export function AppPrivacyPolicy({
  appName,
  eyebrow,
  effectiveDate,
  permission,
  hasSubscriptions,
  thirdPartyServices = DEFAULT_THIRD_PARTY,
  extraSections,
}: AppPrivacyPolicyProps) {
  const email = (
    <a
      href={`mailto:${SITE.email}`}
      className="neon-text-cyan underline-offset-4 hover:underline"
    >
      {SITE.email}
    </a>
  )

  return (
    <LegalPage eyebrow={eyebrow} title="Privacy Policy" effectiveDate={effectiveDate}>
      <LegalSection title="Overview">
        <p>
          This privacy policy applies to the {appName} app (hereby referred to as
          &ldquo;Application&rdquo;) for mobile devices that was created by{" "}
          {SITE.provider} (hereby referred to as &ldquo;Service Provider&rdquo;).
          {hasSubscriptions
            ? " The Application is free to download and offers optional auto-renewable subscriptions for premium features."
            : " The Application is provided as a Free service."}{" "}
          This service is intended for use &ldquo;AS IS&rdquo;.
        </p>
      </LegalSection>

      <LegalSection title="Information Collection and Use">
        <p>
          The Application collects information when you download and use it. This
          information may include information such as:
        </p>
        <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--color-magenta)]">
          <li>Your device&rsquo;s Internet Protocol address (e.g. IP address)</li>
          <li>
            The pages of the Application that you visit, the time and date of your visit,
            the time spent on those pages
          </li>
          <li>The time spent on the Application</li>
          <li>The operating system you use on your mobile device</li>
        </ul>
        <p>
          The Application does not gather precise information about the location of your
          mobile device.
        </p>
        <p>
          The Service Provider may use the information you provided to contact you from
          time to time to provide you with important information, required notices and
          marketing promotions.
        </p>
        <p>
          For a better experience, while using the Application, the Service Provider may
          require you to provide us with certain personally identifiable information. The
          information that the Service Provider request will be retained by them and used
          as described in this privacy policy.
        </p>
      </LegalSection>

      {permission && (
        <LegalSection title={permission.title}>
          <p>{permission.body}</p>
        </LegalSection>
      )}

      <LegalSection title="Third Party Access">
        <p>
          Only aggregated, anonymized data is periodically transmitted to external
          services to aid the Service Provider in improving the Application and their
          service. The Service Provider may share your information with third parties in
          the ways that are described in this privacy statement.
        </p>
        <p>
          Please note that the Application utilizes third-party services that have their
          own Privacy Policy about handling data. Below are the links to the Privacy
          Policy of the third-party service providers used by the Application:
        </p>
        <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--color-magenta)]">
          {thirdPartyServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <p>
          The Service Provider may disclose User Provided and Automatically Collected
          Information:
        </p>
        <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--color-magenta)]">
          <li>
            as required by law, such as to comply with a subpoena, or similar legal
            process;
          </li>
          <li>
            when they believe in good faith that disclosure is necessary to protect their
            rights, protect your safety or the safety of others, investigate fraud, or
            respond to a government request;
          </li>
          <li>
            with their trusted services providers who work on their behalf, do not have an
            independent use of the information we disclose to them, and have agreed to
            adhere to the rules set forth in this privacy statement.
          </li>
        </ul>
      </LegalSection>

      {hasSubscriptions && (
        <LegalSection title="Subscriptions & Payment Information">
          <p>
            The Application offers auto-renewable subscriptions. All payments are
            processed by Apple through your Apple ID; the Service Provider does not
            receive or store your full payment card details. Subscription status,
            entitlements, and anonymized purchase events are managed through RevenueCat
            to deliver and restore your premium features.
          </p>
          <p>
            Payment is charged to your Apple ID at confirmation of purchase, and the
            subscription auto-renews unless canceled at least 24 hours before the end of
            the current period. You can manage or cancel subscriptions at any time in
            Settings &gt; Apple ID &gt; Subscriptions.
          </p>
        </LegalSection>
      )}

      {extraSections?.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          {section.body}
        </LegalSection>
      ))}

      <LegalSection title="Opt-Out Rights">
        <p>
          You can stop all collection of information by the Application easily by
          uninstalling it. You may use the standard uninstall processes as may be
          available as part of your mobile device or via the mobile application
          marketplace or network.
        </p>
      </LegalSection>

      <LegalSection title="Data Retention Policy">
        <p>
          The Service Provider will retain User Provided data for as long as you use the
          Application and for a reasonable time thereafter. If you&rsquo;d like them to
          delete User Provided Data that you have provided via the Application, please
          contact them at {email} and they will respond in a reasonable time.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          The Service Provider does not use the Application to knowingly solicit data
          from or market to children under the age of 13. The Application does not
          address anyone under the age of 13. The Service Provider does not knowingly
          collect personally identifiable information from children under 13 years of
          age. In the case the Service Provider discover that a child under 13 has
          provided personal information, the Service Provider will immediately delete this
          from their servers. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact the Service
          Provider at {SITE.email} so that they will be able to take the necessary
          actions.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          The Service Provider is concerned about safeguarding the confidentiality of
          your information. The Service Provider provides physical, electronic, and
          procedural safeguards to protect information the Service Provider processes and
          maintains.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          This Privacy Policy may be updated from time to time for any reason. The Service
          Provider will notify you of any changes to the Privacy Policy by updating this
          page with the new Privacy Policy. You are advised to consult this Privacy Policy
          regularly for any changes, as continued use is deemed approval of all changes.
        </p>
        <p>This privacy policy is effective as of {effectiveDate}.</p>
      </LegalSection>

      <LegalSection title="Your Consent">
        <p>
          By using the Application, you are consenting to the processing of your
          information as set forth in this Privacy Policy now and as amended by us.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          If you have any questions regarding privacy while using the Application, or have
          questions about the practices, please contact the Service Provider via email at{" "}
          {email}.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
