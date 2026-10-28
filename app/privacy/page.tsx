import type { Metadata } from "next";
import { withSocial } from "@/app/seo";
import Link from "next/link";

import { LegalPage, Points, type LegalSection } from "@/components/legal-page";
import { GA_ID } from "@/app/site-config";
import { LEGAL } from "@/content/legal";

export const metadata: Metadata = withSocial({
  title: "Privacy policy",
  description: "What personal data Vetanly collects and why, who processes it, how long it is kept, and your rights under India's DPDP Act.",
  alternates: { canonical: "/privacy" },
});

const contact = LEGAL.grievanceEmail ? (
  <a href={`mailto:${LEGAL.grievanceEmail}`} className="font-medium text-accent underline">{LEGAL.grievanceEmail}</a>
) : (
  <Link href="/contact" className="font-medium text-accent underline">our contact page</Link>
);

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are and our role",
    body: (
      <>
        <p>
          Vetanly is attendance, HR and payroll software for businesses, provided by {LEGAL.entity}
          {LEGAL.address ? `, ${LEGAL.address}` : ""} (&quot;Vetanly&quot;, &quot;we&quot;, &quot;us&quot;). This policy covers the
          Vetanly website, the dashboard, the mobile app and the attendance kiosk app.
        </p>
        <p>We hold personal data in two different roles:</p>
        <Points
          items={[
            <><strong>For our customers&apos; employees</strong>, the employer that uses Vetanly decides what is collected and why. Under India&apos;s Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;) the employer is the <em>Data Fiduciary</em> and we process the data on its behalf and on its instructions. Questions about your employer&apos;s use of your data should go to your employer first; we will help them answer.</>,
            <><strong>For people who sign up, visit our website or contact us</strong>, we are the Data Fiduciary and this policy applies to us directly.</>,
          ]}
        />
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <p><strong>Account details.</strong> Name, mobile number and, if you sign in with Google, the name and verified email address on your Google account.</p>
        <p><strong>Organization details.</strong> Business name, branches and their addresses, GSTIN and billing contacts, plan and invoices.</p>
        <p><strong>Employee records</strong> that an employer enters, depending on the features it uses:</p>
        <Points
          items={[
            "Identity and contact details: name, phone, email, date of birth, gender, blood group, address and emergency contact.",
            "Employment details: employee code, job title, department, branch, shift, joining and exit dates, manager.",
            "Attendance: check-in and check-out times, the kiosk or device used, and, when the employer turns on GPS check-in, the location and its accuracy at the moment of check-in.",
            "Face templates for kiosk attendance (see section 3).",
            "Payroll and statutory details: salary and its components, bank account and IFSC, PAN, UAN, PF and ESI details, tax regime and tax declarations, loans and advances, bonuses and final settlements.",
            "Leave, overtime, regularization requests, expense claims with their receipts, uploaded documents and company assets issued.",
          ]}
        />
        <p><strong>Technical data.</strong> IP address, the date and time of actions in the dashboard (kept in an audit log for the organization), and for kiosks the device model, app version and connection status.</p>
        <p><strong>Messages to us.</strong> Anything you send when you contact us for support or sales.</p>
      </>
    ),
  },
  {
    id: "face-data",
    title: "Face data",
    body: (
      <>
        <p>
          When an employer enrolls an employee on a Vetanly kiosk, the kiosk turns several camera frames into a <em>face template</em>: a list of numbers
          that describes the face. <strong>We do not store face photos.</strong> Templates are stored with the employer&apos;s data and copied to that
          employer&apos;s kiosks so that matching works on the device, including when it is offline.
        </p>
        <Points
          items={[
            "Templates are used only to recognize employees for attendance at their own employer's kiosks. They are never sold, shared with other customers or used to train models.",
            "Each kiosk runs a liveness check so that a photo held up to the camera is not accepted.",
            "An admin can revoke an employee's templates at any time. Revoked templates are no longer used for matching and are removed from the kiosks at their next sync. All templates are erased when the organization is deleted.",
            "The employer is responsible for informing employees and obtaining their consent before enrolling their face, as the DPDP Act requires. An employer should offer another way to mark attendance to anyone who does not consent.",
          ]}
        />
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use personal data",
    body: (
      <>
        <Points
          items={[
            "To provide the service: record attendance, calculate payroll and statutory deductions, produce payslips, reports and registers, and run the other features the employer turns on.",
            "To sign you in and keep accounts secure: sending one-time login codes, limiting repeated attempts and keeping an audit log.",
            "To send service messages, such as login codes, approvals and, when the employer turns them on, payslips and alerts by SMS, WhatsApp or email.",
            "To bill organizations and keep accounting records.",
            "To provide support, fix problems and improve the product.",
            "To comply with the law and respond to lawful requests from authorities.",
          ]}
        />
        <p>We do not sell personal data, and we do not use it for advertising.</p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>Inside an organization, people see data according to their role: employees see their own records, branch managers see their branches, and HR, admins and owners see more. The employer controls these roles.</p>
        <p>We use service providers that process data for us under contract, only to run Vetanly:</p>
        <Points
          items={[
            "Cloud hosting, where the application and database run.",
            "SMS and WhatsApp providers, to deliver login codes and the messages an employer chooses to send.",
            "Google, if you choose to sign in with Google.",
            ...(GA_ID ? ["Google Analytics, only if you accept analytics cookies on our website."] : []),
            "Email delivery and file storage providers, when the related features are in use.",
          ]}
        />
        <p>We may also disclose data when the law requires it, to protect people&apos;s safety, or as part of a merger or sale of our business, in which case this policy continues to apply.</p>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect it",
    body: (
      <>
        <Points
          items={[
            "All traffic is encrypted with HTTPS.",
            "Bank account numbers, PAN and provider API keys are encrypted in the database; only the last digits are shown.",
            "Documents and receipts are private and opened through short-lived signed links.",
            "Access is limited by role and branch on the server, and every change is recorded in the audit log.",
            "Each kiosk has its own key, which can be rotated or disabled immediately.",
          ]}
        />
        <p>No system is perfectly secure. If a breach affects your personal data, we will inform the affected organizations and, as the DPDP Act requires, the Data Protection Board of India.</p>
        <p>See our <Link href="/security" className="font-medium text-accent underline">security page</Link> for more.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <>
        <Points
          items={[
            "An organization's data is kept while its account is active, so that its attendance and payroll history remain available.",
            "When the owner deletes an organization, it is scheduled for deletion and erased, including its files, after a 30-day window in which the owner can change their mind.",
            "In-app notifications are deleted automatically after 90 days.",
            "Backups are overwritten in the normal backup cycle.",
            "Invoices and accounting records may be kept longer where tax law requires it.",
          ]}
        />
        <p>Employers may have their own legal duty to keep payroll and attendance records for several years. They should export what they need before deleting their organization.</p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>Under the DPDP Act you can ask for:</p>
        <Points
          items={[
            "a summary of the personal data held about you and how it is used;",
            "correction, completion or updating of inaccurate data;",
            "erasure of data that is no longer needed, unless the law requires it to be kept;",
            "withdrawal of consent, where processing is based on consent, without affecting what was done before;",
            "nomination of a person to exercise these rights if you die or become unable to;",
            "redressal of a grievance.",
          ]}
        />
        <p>Employees should send requests to their employer, which controls their records; we will help the employer respond. For your own account, contact our Grievance Officer at {contact}. We aim to respond within 30 days. If you are not satisfied, you may complain to the Data Protection Board of India.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and local storage",
    body: (
      <>
        {GA_ID ? (
          <p>
            The website uses Google Analytics cookies only if you accept them in the cookie banner. They tell us how visitors find and use the site, such as
            which pages are viewed and from which country; Google processes this data for us. If you reject them, or never choose, no analytics cookie is set.
            You can change your choice at any time with &quot;Cookie settings&quot; at the bottom of every page. The website uses no advertising cookies.
          </p>
        ) : (
          <p>The website does not use analytics or advertising cookies.</p>
        )}
        <p>
          The dashboard stores your sign-in tokens in your browser&apos;s local storage to keep you signed in, and a cookie that remembers whether the sidebar
          is open. Signing out removes the tokens.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: <p>Vetanly is a workplace tool for adults. We do not knowingly collect data about anyone under 18. An employer that employs minors where the law allows is responsible for obtaining verifiable parental consent before entering their data.</p>,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p>We will update this page when our practices change and change the date at the top. For significant changes, we will also notify organization owners in the dashboard or by message.</p>,
  },
  {
    id: "contact",
    title: "Contact and Grievance Officer",
    body: <p>For questions about this policy or to exercise your rights, contact our Grievance Officer at {contact}.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy"
      intro="What personal data Vetanly holds, why we hold it, who helps us process it and how you can exercise your rights."
      sections={sections}
    />
  );
}
