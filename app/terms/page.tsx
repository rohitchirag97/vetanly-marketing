import type { Metadata } from "next";
import { withSocial } from "@/app/seo";
import Link from "next/link";

import { LegalPage, Points, type LegalSection } from "@/components/legal-page";
import { LEGAL } from "@/content/legal";

export const metadata: Metadata = withSocial({
  title: "Terms and conditions",
  description: "The terms that apply when a business uses Vetanly for attendance, HR and payroll.",
  alternates: { canonical: "/terms" },
});

const link = "font-medium text-accent underline";

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "The agreement",
    body: (
      <>
        <p>
          These terms are an agreement between {LEGAL.entity} (&quot;Vetanly&quot;, &quot;we&quot;, &quot;us&quot;) and the business that creates
          a Vetanly organization (&quot;the customer&quot;, &quot;you&quot;). They cover the website, the dashboard, the mobile app and the kiosk app
          (together, &quot;the service&quot;).
        </p>
        <p>
          By creating an organization or using the service, you agree to these terms and to our{" "}
          <Link href="/privacy" className={link}>privacy policy</Link>. If you accept them for a business, you confirm that you are at least 18 and
          authorized to bind that business.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "Accounts and users",
    body: (
      <Points
        items={[
          "You sign in with a one-time code sent to your mobile number or with Google. Keep your phone and Google account secure; anyone who controls them can sign in as you.",
          "The organization owner decides who joins, which role each person has and which branches they can see, and is responsible for what those users do in the service.",
          "Tell us promptly if you believe an account or a kiosk key has been misused. Kiosk keys can be rotated or disabled from the dashboard at any time.",
        ]}
      />
    ),
  },
  {
    id: "service",
    title: "The service",
    body: (
      <>
        <p>
          Vetanly provides face-recognition and other attendance, shifts and rosters, leave, payroll with Indian statutory deductions, payslips,
          reports and related HR features, as described on our website. Features depend on your plan.
        </p>
        <p>
          We improve the service continually and may add, change or remove features. We will not remove a core feature you pay for during a paid
          period without notice.
        </p>
      </>
    ),
  },
  {
    id: "your-responsibilities",
    title: "Your responsibilities",
    body: (
      <>
        <p>You are the employer and the Data Fiduciary for your employees&apos; data. In particular, you agree to:</p>
        <Points
          items={[
            "tell employees how their data is used and obtain any consent the law requires, including explicit consent before enrolling anyone's face and before using GPS check-in;",
            "offer another way to mark attendance to anyone who does not consent to face recognition;",
            "enter accurate data and keep it up to date;",
            "handle your employees' requests about their data, with our help where needed;",
            "use the kiosk app on devices you control, placed and secured appropriately.",
          ]}
        />
        <p>
          <strong>Payroll and compliance.</strong> Vetanly calculates salaries, PF, ESI, professional tax, TDS and other figures from your settings
          and data, and produces registers and files to help you comply. It is not legal, tax or accounting advice. You remain responsible for
          checking the results, for statutory filings and payments, and for paying your employees correctly and on time.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You must not, and must not let anyone else:</p>
        <Points
          items={[
            "use the service unlawfully, or to track or monitor people beyond legitimate attendance and HR purposes;",
            "enroll the face of anyone who is not your employee or worker, or without the consent the law requires;",
            "try to access another organization's data, probe or bypass security, or overload the service;",
            "copy, resell or reverse engineer the service, or use it to build a competing product;",
            "upload malware or content you have no right to share.",
          ]}
        />
        <p>We may suspend access that breaks these rules or puts the service or other customers at risk, and will tell you why when we can.</p>
      </>
    ),
  },
  {
    id: "fees",
    title: "Plans, fees and billing",
    body: (
      <Points
        items={[
          <>Fees are as shown on our <Link href="/pricing" className={link}>pricing page</Link> or agreed with you in writing. Prices exclude GST, which is added to invoices.</>,
          "A free trial, where offered, lasts for the period shown when you start it. At the end of the trial you need a paid plan to keep using paid features.",
          "Invoices are payable by their due date. If an invoice stays unpaid, we may limit or suspend the organization after notice, and restore it once payment is received.",
          "We may change prices for future billing periods with at least 30 days' notice.",
          <>Cancellations and refunds follow our <Link href="/refund-policy" className={link}>refund and cancellation policy</Link>. Apart from the cases it lists, fees already paid are not refundable, except where the law requires it.</>,
          "Optional add-ons, such as message credits for SMS, WhatsApp or email, are charged as described when you buy them.",
        ]}
      />
    ),
  },
  {
    id: "your-data",
    title: "Your data",
    body: (
      <Points
        items={[
          "You own the data you and your users put into Vetanly. You give us permission to store and process it only to provide, secure and support the service, as our privacy policy describes.",
          "You can export your data, such as attendance, payroll registers and reports, from the dashboard at any time while your organization is active.",
          "The owner can delete the organization. It is erased, with its files, after a 30-day window in which the owner can cancel the deletion. Export anything you need to keep first.",
          "If we end the service for you for a reason other than a serious breach of these terms, we will give you reasonable time to export your data.",
        ]}
      />
    ),
  },
  {
    id: "third-parties",
    title: "Third-party services",
    body: (
      <p>
        Some features rely on others, such as SMS and WhatsApp providers, Google sign-in, email delivery and your own messaging provider if you connect
        one. Their availability and terms are outside our control, and messages may occasionally be delayed or not delivered.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Availability and warranties",
    body: (
      <>
        <p>
          We work to keep the service available and your data safe, including regular backups. Kiosks keep recording attendance offline and sync when they
          reconnect. We may need short planned maintenance, which we try to schedule outside working hours.
        </p>
        <p>
          Apart from what these terms state, the service is provided &quot;as is&quot;. Face recognition is highly accurate but not perfect, and we do not
          guarantee that the service will be uninterrupted or error-free. You should review attendance and payroll before relying on them.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          To the extent the law allows, neither party is liable to the other for indirect or consequential losses, such as lost profits, revenue or
          goodwill. Our total liability arising from these terms in any 12 months is limited to the fees you paid us for the service in those 12 months.
        </p>
        <p>Nothing in these terms limits liability that cannot be limited by law, such as liability for fraud.</p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <p>
        You will compensate us for claims by third parties, including your employees and authorities, that arise from data you put into the service
        without the required notice or consent, or from your breach of these terms or the law.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Ending the agreement",
    body: (
      <p>
        You can stop using Vetanly at any time by deleting your organization. We may end or suspend the service for you if you seriously breach these
        terms and do not fix the breach within 15 days of notice, or immediately where the law or the security of the service requires. Sections on
        fees owed, your data, liability, indemnity and governing law continue after the agreement ends.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms and will change the date at the top when we do. For material changes, we will notify organization owners at least 15
        days before they take effect. Continuing to use the service after that means you accept the new terms.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    body: (
      <p>
        These terms are governed by the laws of India. We will first try to resolve any dispute through good-faith discussion. If that fails, the courts
        in India with jurisdiction over our registered office will decide it.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about these terms:{" "}
        {LEGAL.grievanceEmail ? <a href={`mailto:${LEGAL.grievanceEmail}`} className={link}>{LEGAL.grievanceEmail}</a> : <Link href="/contact" className={link}>contact us</Link>}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms and conditions"
      intro="The agreement between Vetanly and the businesses that use it for attendance, HR and payroll."
      sections={sections}
    />
  );
}
