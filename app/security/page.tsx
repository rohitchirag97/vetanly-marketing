import type { Metadata } from "next";
import { withSocial } from "@/app/seo";

import { Icon } from "@/components/icons";
import { Container, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import type { IconName } from "@/content/features";

export const metadata: Metadata = withSocial({
  title: "Security & privacy",
  description: "How Vetanly protects employee data: role-based and branch access, encrypted bank and PAN details, private files, audit logs and controlled face data.",
  alternates: { canonical: "/security" },
});

const practices: { icon: IconName; title: string; body: string }[] = [
  { icon: "users", title: "Role-based access", body: "Owners, admins, HR, branch managers and employees each see only what their role allows. HR does not see payroll; employees see only their own records." },
  { icon: "pin", title: "Branch-level permissions", body: "Branch managers are limited to the people in their branches, enforced on the server for every request." },
  { icon: "lock", title: "Encrypted sensitive fields", body: "Bank account numbers, PAN and provider API keys are encrypted at rest; only the last digits are ever shown." },
  { icon: "book", title: "Audit log", body: "Every change, from salary edits to approvals and exports, is recorded with who made it and when, and is available to the owner." },
  { icon: "receipt", title: "Private documents", body: "Receipts, proofs and documents are stored privately and opened through short-lived signed links." },
  { icon: "face", title: "Face data under control", body: "Face templates are used only for attendance matching, kept to a bounded set per employee, and can be revoked by an admin at any time." },
  { icon: "phone", title: "One session per account", body: "Signing in elsewhere ends the previous session, and verification codes are rate-limited." },
  { icon: "shield", title: "Kiosk device keys", body: "Every kiosk authenticates with its own key that can be rotated or disabled instantly." },
  { icon: "building", title: "Your data is yours", body: "Organizations can be paused or scheduled for deletion by their owner; on deletion, records and files are erased." },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & privacy"
        title="Employee data deserves care."
        intro="Attendance, salaries and identity documents are some of the most sensitive data a business holds. Here is how Vetanly protects them."
      />
      <section className="py-(--section-gap)">
        <Container>
          <div className="grid gap-x-(--gap-columns) sm:grid-cols-2 lg:grid-cols-3">
            {practices.map((practice) => (
              <div key={practice.title} className="border-t border-ink py-7">
                <h2 className="flex items-center gap-2.5 text-xl text-ink"><Icon name={practice.icon} className="size-5 shrink-0 text-accent" />{practice.title}</h2>
                <p className="mt-3 text-muted">{practice.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-paper-3 py-(--section-gap-s)">
        <Container className="grid gap-x-(--gap-columns) gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeading title="Good practice for your team" /></div>
          <ul className="ruled text-lg text-ink-2 lg:col-span-6 lg:col-start-7">
            <li className="py-4">Ask employees for consent before enrolling their face for attendance, as India&apos;s Digital Personal Data Protection Act expects.</li>
            <li className="py-4">Give HR and branch managers the narrowest role that does the job.</li>
            <li className="py-4">Rotate a kiosk&apos;s key if a device is lost, and switch the kiosk off.</li>
            <li className="py-4">Review the audit log after payroll and settings changes.</li>
          </ul>
        </Container>
      </section>
      <CtaBand title="Questions about security?" intro="We are happy to walk your team through how Vetanly handles data." />
    </>
  );
}
