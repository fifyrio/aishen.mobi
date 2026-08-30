import { LegalPage, LegalSection } from "@/components/legal-page"
import { SITE } from "@/lib/products"

export interface SubscriptionPlan {
  /** Plan length label, e.g. "Weekly" or "Yearly" */
  name: string
  /** Display price, e.g. "$4.99 / week" */
  price: string
  /** Optional note, e.g. "3-day free trial included" */
  note?: string
}

export interface CreditPack {
  /** Pack label, e.g. "150 Credits" */
  name: string
  /** Display price, e.g. "$4.99" */
  price: string
  /** Optional note, e.g. "Best value" */
  note?: string
}

export interface SubscriptionInfo {
  /** Subscription product title, e.g. "Glowria PRO" */
  productName: string
  /** Auto-renewable plans offered */
  plans: SubscriptionPlan[]
  /** Optional one-time consumable credit packs offered alongside subscriptions */
  creditPacks?: CreditPack[]
  /** Link to the app's privacy policy, e.g. "/glowria/privacy-policy" */
  privacyUrl: string
  /** Link to the app's terms of service, e.g. "/glowria/terms-of-service" */
  termsUrl: string
}

export interface AppTermsOfServiceProps {
  /** App display name, e.g. "Vido AI: Photo to Video" */
  appName: string
  /** Eyebrow line above the title (usually upper-cased app name) */
  eyebrow: string
  /** Human-readable effective date for the header pill, e.g. "January 28, 2026" */
  effectiveDate: string
  /** ISO effective date used in body text, e.g. "2026-01-28" */
  effectiveDateIso: string
  /**
   * Optional auto-renewable subscription disclosure (Apple Guideline 3.1.2).
   * When provided, the app is described as free-to-download with paid plans and
   * a dedicated subscription section is rendered.
   */
  subscription?: SubscriptionInfo
}

/**
 * Standard mobile-app Terms of Service & EULA, shared across every product page.
 * Only the app name and effective dates vary.
 */
export function AppTermsOfService({
  appName,
  eyebrow,
  effectiveDate,
  effectiveDateIso,
  subscription,
}: AppTermsOfServiceProps) {
  return (
    <LegalPage
      eyebrow={eyebrow}
      title="Terms of Service & EULA"
      subtitle="End User License Agreement"
      effectiveDate={effectiveDate}
    >
      <LegalSection title="End User License Agreement (EULA)">
        <p>
          This End User License Agreement (&ldquo;EULA&rdquo;) is a legal agreement
          between you and {SITE.provider} (&ldquo;Service Provider&rdquo;) for the use of{" "}
          {appName} (&ldquo;Application&rdquo;).
        </p>
        <p>By using this Application, you agree to:</p>
        <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--color-magenta)]">
          <li>Be bound by the terms and conditions outlined in this agreement</li>
          <li>
            Use the Application only for lawful purposes and in accordance with this
            EULA
          </li>
          <li>
            Not copy, modify, distribute, or reverse engineer any part of the
            Application
          </li>
          <li>
            Accept that the Service Provider retains all intellectual property rights
          </li>
          <li>Acknowledge that AI technology is used to provide services</li>
        </ul>
      </LegalSection>

      <LegalSection title="Agreement Overview">
        <p>
          These terms and conditions apply to the {appName} app (hereby referred to as
          &ldquo;Application&rdquo;) for mobile devices that was created by{" "}
          {SITE.provider} (hereby referred to as &ldquo;Service Provider&rdquo;)
          {subscription
            ? ", which is free to download and offers optional auto-renewable subscriptions."
            : " as a Free service."}
        </p>
        <p>
          Upon downloading or utilizing the Application, you are automatically agreeing
          to the following terms. It is strongly advised that you thoroughly read and
          understand these terms prior to using the Application.
        </p>
      </LegalSection>

      {subscription && (
        <LegalSection title="Subscriptions, Auto-Renewal & Cancellation">
          <p>
            {appName} is free to download. {subscription.productName} is an
            auto-renewable subscription that unlocks the full set of premium features.
            The following plans are offered:
          </p>
          <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--color-magenta)]">
            {subscription.plans.map((plan) => (
              <li key={plan.name}>
                <span className="text-[var(--color-text)]">{plan.name}</span> —{" "}
                {plan.price}
                {plan.note ? ` (${plan.note})` : ""}
              </li>
            ))}
          </ul>
          {subscription.creditPacks && subscription.creditPacks.length > 0 && (
            <>
              <p>
                In addition to subscriptions, {appName} offers one-time credit packs
                (consumable in-app purchases) that add credits to your balance and do not
                automatically renew:
              </p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--color-magenta)]">
                {subscription.creditPacks.map((pack) => (
                  <li key={pack.name}>
                    <span className="text-[var(--color-text)]">{pack.name}</span> —{" "}
                    {pack.price}
                    {pack.note ? ` (${pack.note})` : ""}
                  </li>
                ))}
              </ul>
            </>
          )}
          <p>
            Payment will be charged to your Apple ID account at the confirmation of
            purchase. The subscription automatically renews unless it is canceled at
            least 24 hours before the end of the current period. Your account will be
            charged for renewal within 24 hours prior to the end of the current period,
            at the price of the selected plan.
          </p>
          <p>
            You can manage and cancel your subscriptions by going to your account
            settings on the App Store (Settings &gt; Apple ID &gt; Subscriptions) after
            purchase. Any unused portion of a free trial period, if offered, will be
            forfeited when you purchase a subscription to that publication, where
            applicable.
          </p>
          <p>
            For full details on how subscription and purchase data is handled, please
            review our{" "}
            <a
              href={subscription.privacyUrl}
              className="neon-text-cyan underline-offset-4 hover:underline"
            >
              Privacy Policy
            </a>{" "}
            and these{" "}
            <a
              href={subscription.termsUrl}
              className="neon-text-cyan underline-offset-4 hover:underline"
            >
              Terms of Use (EULA)
            </a>
            .
          </p>
        </LegalSection>
      )}

      <LegalSection title="License Grant">
        <p>
          Subject to your compliance with this EULA, the Service Provider grants you a
          limited, non-exclusive, non-transferable, revocable license to:
        </p>
        <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--color-magenta)]">
          <li>Download and install the Application on a device that you own or control</li>
          <li>Access and use the Application for your personal, non-commercial purposes</li>
        </ul>
        <p>
          This license does not allow you to use the Application on any device that you
          do not own or control, and you may not distribute or make the Application
          available over a network where it could be used by multiple devices at the
          same time.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property Rights">
        <p>
          Unauthorized copying, modification of the Application, any part of the
          Application, or our trademarks is strictly prohibited. Any attempts to extract
          the source code of the Application, translate the Application into other
          languages, or create derivative versions are not permitted. All trademarks,
          copyrights, database rights, and other intellectual property rights related to
          the Application remain the property of the Service Provider.
        </p>
      </LegalSection>

      <LegalSection title="Application Modifications">
        <p>
          The Service Provider is dedicated to ensuring that the Application is as
          beneficial and efficient as possible. As such, they reserve the right to
          modify the Application or charge for their services at any time and for any
          reason. The Service Provider assures you that any charges for the Application
          or its services will be clearly communicated to you.
        </p>
      </LegalSection>

      <LegalSection title="Data Security & Device Requirements">
        <p>
          The Application stores and processes personal data that you have provided to
          the Service Provider in order to provide the Service. It is your
          responsibility to maintain the security of your phone and access to the
          Application. The Service Provider strongly advise against jailbreaking or
          rooting your phone, which involves removing software restrictions and
          limitations imposed by the official operating system of your device. Such
          actions could expose your phone to malware, viruses, malicious programs,
          compromise your phone&rsquo;s security features, and may result in the
          Application not functioning correctly or at all.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <p>
          Please note that the Application utilizes third-party services that have their
          own Terms and Conditions. Below are the links to the Terms and Conditions of
          the third-party service providers used by the Application:
        </p>
        <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--color-magenta)]">
          <li>Google Analytics for Firebase</li>
          <li>RevenueCat</li>
        </ul>
      </LegalSection>

      <LegalSection title="Internet Connectivity & Charges">
        <p>
          Please be aware that the Service Provider does not assume responsibility for
          certain aspects. Some functions of the Application require an active internet
          connection, which can be Wi-Fi or provided by your mobile network provider.
          The Service Provider cannot be held responsible if the Application does not
          function at full capacity due to lack of access to Wi-Fi or if you have
          exhausted your data allowance.
        </p>
        <p>
          If you are using the application outside of a Wi-Fi area, please be aware that
          your mobile network provider&rsquo;s agreement terms still apply. Consequently,
          you may incur charges from your mobile provider for data usage during the
          connection to the application, or other third-party charges. By using the
          application, you accept responsibility for any such charges, including roaming
          data charges if you use the application outside of your home territory (i.e.,
          region or country) without disabling data roaming. If you are not the bill
          payer for the device on which you are using the application, they assume that
          you have obtained permission from the bill payer.
        </p>
      </LegalSection>

      <LegalSection title="User Responsibility">
        <p>
          Similarly, the Service Provider cannot always assume responsibility for your
          usage of the application. For instance, it is your responsibility to ensure
          that your device remains charged. If your device runs out of battery and you
          are unable to access the Service, the Service Provider cannot be held
          responsible.
        </p>
        <p>
          In terms of the Service Provider&rsquo;s responsibility for your use of the
          application, it is important to note that while they strive to ensure that it
          is updated and accurate at all times, they do rely on third parties to provide
          information to them so that they can make it available to you. The Service
          Provider accepts no liability for any loss, direct or indirect, that you
          experience as a result of relying entirely on this functionality of the
          application.
        </p>
      </LegalSection>

      <LegalSection title="AI Technology Usage">
        <p>
          The Application incorporates Artificial Intelligence (AI) technologies to
          provide certain features or services. By using the Application, you
          acknowledge and agree that AI may be used to process data and deliver
          functionalities. The Service Provider ensures that all AI usage complies with
          applicable laws and is designed to benefit the user experience.
        </p>
      </LegalSection>

      <LegalSection title="Updates & Termination">
        <p>
          The Service Provider may wish to update the application at some point. The
          application is currently available as per the requirements for the operating
          system (and for any additional systems they decide to extend the availability
          of the application to) may change, and you will need to download the updates if
          you want to continue using the application. The Service Provider does not
          guarantee that it will always update the application so that it is relevant to
          you and/or compatible with the particular operating system version installed on
          your device. However, you agree to always accept updates to the application
          when offered to you.
        </p>
        <p>
          The Service Provider may also wish to cease providing the application and may
          terminate its use at any time without providing termination notice to you.
          Unless they inform you otherwise, upon any termination, (a) the rights and
          licenses granted to you in these terms will end; (b) you must cease using the
          application, and (if necessary) delete it from your device.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms and Conditions">
        <p>
          The Service Provider may periodically update their Terms and Conditions.
          Therefore, you are advised to review this page regularly for any changes. The
          Service Provider will notify you of any changes by posting the new Terms and
          Conditions on this page.
        </p>
        <p>These terms and conditions are effective as of {effectiveDateIso}.</p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          If you have any questions or suggestions about the Terms and Conditions,
          please do not hesitate to contact the Service Provider at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="neon-text-cyan underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
