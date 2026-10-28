import type { Metadata } from "next";
import { withSocial } from "@/app/seo";
import Link from "next/link";

import { LegalPage, Points, type LegalSection } from "@/components/legal-page";
import { PRICING } from "@/content/features";
import { LEGAL } from "@/content/legal";

export const metadata: Metadata = withSocial({
  title: "Refund and cancellation policy",
  description: "How cancellations, refunds, failed payments and message credits work for Vetanly plans, and how the service is delivered.",
  alternates: { canonical: "/refund-policy" },
});

const link = "font-medium text-accent underline";
const contact = LEGAL.grievanceEmail ? (
  <a href={`mailto:${LEGAL.grievanceEmail}`} className={link}>{LEGAL.grievanceEmail}</a>
) : (
  <Link href="/contact" className={link}>our contact page</Link>
);

const sections: LegalSection[] = [
  {
    id: "trial",
    title: "Free trial",
    body: (
      <p>
        Every organization starts with a {PRICING.trialDays}-day free trial with all features on. No payment is taken for the trial, so there is nothing
        to cancel or refund. If you do not choose a plan, your workspace gets a short grace period and then becomes read-only. Nothing is deleted.
      </p>
    ),
  },
  {
    id: "cancellation",
    title: "Cancelling a plan",
    body: (
      <Points
        items={[
          "You can cancel at any time by contacting us from the organization owner's email or phone number. Cancellation stops the plan from renewing; it does not end the period you have already paid for.",
          "You keep full access until the end of the paid month or year. After that the workspace gets a 7-day grace period and then becomes read-only, so you can still view and export your data.",
          "To remove your data completely, the owner can delete the organization. It is erased after a 30-day window in which the deletion can be cancelled.",
        ]}
      />
    ),
  },
  {
    id: "refunds",
    title: "Refunds on plan fees",
    body: (
      <>
        <p>Because you can try every feature free before paying, plan fees are generally not refundable. This means:</p>
        <Points
          items={[
            "no refund for a partly used month or year after cancelling;",
            "no refund if fewer employees use Vetanly during a period than were billed; the lower count applies from your next invoice.",
          ]}
        />
        <p>We do refund in full:</p>
        <Points
          items={[
            "duplicate payments for the same invoice;",
            "payments taken in error, such as a wrong amount or a charge after you cancelled before the renewal date;",
            "payments where the money left your account but the payment failed and the plan was not activated.",
          ]}
        />
        <p>If we discontinue the service, or end it for you for a reason other than a breach of our terms, we refund the unused part of any prepaid period in proportion to the days remaining.</p>
      </>
    ),
  },
  {
    id: "credits",
    title: "Message credits",
    body: (
      <Points
        items={[
          "WhatsApp and email delivery is an add-on paid from a prepaid balance. Each message is charged when it is sent.",
          "Messages that fail to send are credited back to your balance automatically.",
          "Unused balance stays available while your organization is active. It cannot be withdrawn as cash, except that if we discontinue the add-on we refund the unused balance.",
        ]}
      />
    ),
  },
  {
    id: "process",
    title: "How to request a refund",
    body: (
      <>
        <p>
          Write to {contact} within 30 days of the payment, with your organization name, the invoice number and what went wrong. We confirm eligibility
          within 3 working days.
        </p>
        <p>
          Approved refunds are made to the original payment method within 5 to 7 working days. Your bank or card issuer may take a few more days to show
          it. Refunds include the GST that was charged, and we issue a credit note for them.
        </p>
      </>
    ),
  },
  {
    id: "delivery",
    title: "Delivery of the service",
    body: (
      <>
        <p>
          Vetanly is an online software service; nothing is shipped. Your workspace is available as soon as you sign up. A paid plan is activated
          immediately after an online payment succeeds, or within 1 working day after we receive a bank transfer.
        </p>
        <p>
          The kiosk app runs on an Android tablet or phone that you provide; we do not sell or ship devices. If a payment succeeded but your plan is not
          active, contact us and we will activate it or refund the payment.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about billing, cancellations or refunds: {contact}. This policy is part of our <Link href="/terms" className={link}>terms and conditions</Link>.
      </p>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Refund and cancellation policy"
      intro="How cancelling a plan works, when we refund, and how the service is delivered."
      sections={sections}
    />
  );
}
