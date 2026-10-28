import type { Metadata } from "next";
import { JsonLd, faqJsonLd, withSocial } from "@/app/seo";
import Link from "next/link";

import { Checklist, Container, CtaBand, Faqs, PageHero, PrimaryButton, SecondaryButton, SectionHeading } from "@/components/ui";
import { FEATURES, PRICING } from "@/content/features";

export const metadata: Metadata = withSocial({
  title: "Attendance & Payroll Software Pricing",
  description: `Vetanly costs ₹${PRICING.monthly} per active employee per month, or ₹${PRICING.annual} per year. Every feature included, ${PRICING.trialDays}-day free trial. GST extra.`,
  alternates: { canonical: "/pricing" },
});

const included = [
  "Face recognition kiosks",
  "GPS check-in",
  "Shifts, rotations & rosters",
  "Leave & holidays",
  "Payroll & salary slips",
  "PF, ESI, PT & TDS",
  "Tax declarations & Form 16",
  "Loans & expense claims",
  "Bonus, gratuity & full and final",
  "Employee records & documents",
  "Branches & branch managers",
  "Asset tracking",
  "HR insights & reports",
  "Tally / Zoho / QuickBooks export",
  "Audit log",
];

const pricingFaqs = [
  { q: "Who counts as an employee?", a: "Every active member of your organization on Vetanly. The owner is not counted unless they are on payroll themselves." },
  { q: "What happens after the free trial?", a: `Your trial runs for ${PRICING.trialDays} days with everything on. Choose a plan any time; if the trial ends first, you get a short grace period before the workspace becomes read-only. Nothing is deleted.` },
  { q: "Do we need to buy a device for face attendance?", a: "No special hardware. The kiosk app runs on an ordinary Android tablet or phone (64-bit, with a front camera), and kiosks cost nothing extra: there is no separate kiosk plan or per-device fee." },
  { q: "Is GST included?", a: "No. Prices are exclusive of GST, which is added on your invoice." },
  { q: "How does WhatsApp and email delivery work?", a: "It is an add-on with a prepaid balance: add funds and each message is charged at a small per-message rate. Failed messages are refunded. Without it, employees can still view and download everything in Vetanly." },
  { q: "Do you offer discounts?", a: `Yes, for organizations with ${PRICING.volumeThreshold} or more employees, and for early partners who share feedback. Talk to us.` },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(pricingFaqs)} />
      <PageHero keyword="Attendance & payroll software pricing" title="One price per employee. Every feature included." intro="No modules to unlock and no setup fee. Start with a free trial and pay only for the people on Vetanly." />

      <section className="py-(--section-gap-s)">
        <Container>
          <div className="sheet grid lg:grid-cols-3">
            <div className="flex flex-col p-8 sm:p-10">
              <h2 className="text-xl text-ink">Monthly</h2>
              <p className="mt-8 font-display text-[clamp(3.5rem,6vw,5.5rem)] leading-none tracking-[-0.04em] text-ink">₹{PRICING.monthly}</p>
              <p className="mt-2 text-muted">per active employee / month</p>
              <p className="mt-6 flex-1 border-t border-rule pt-6 text-ink-2">Pay month to month. Add or remove employees any time.</p>
              <div className="mt-8"><SecondaryButton href="/contact">Choose monthly</SecondaryButton></div>
            </div>
            <div className="flex flex-col border-ink p-8 max-lg:border-t lg:border-x sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl text-ink">Annual</h2>
                <span className="chip chip--ok">2 months free</span>
              </div>
              <p className="mt-8 font-display text-[clamp(3.5rem,6vw,5.5rem)] leading-none tracking-[-0.04em] text-ink">₹{PRICING.annual}</p>
              <p className="mt-2 text-muted">per active employee / year</p>
              <p className="mt-6 flex-1 border-t border-rule pt-6 text-ink-2">Works out to about ₹{Math.round(PRICING.annual / 12)} per employee per month.</p>
              <div className="mt-8"><PrimaryButton>Start free trial</PrimaryButton></div>
            </div>
            <div className="flex flex-col p-8 max-lg:border-t max-lg:border-ink sm:p-10">
              <h2 className="text-xl text-ink">Volume</h2>
              <p className="mt-8 font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-[-0.03em] text-ink">{PRICING.volumeThreshold}+ employees</p>
              <p className="mt-2 text-muted">custom per-employee rate</p>
              <p className="mt-6 flex-1 border-t border-rule pt-6 text-ink-2">Multi-branch rollouts with help planning kiosks, branches and data import.</p>
              <div className="mt-8"><SecondaryButton href="/contact">Talk to us</SecondaryButton></div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted">All prices exclude GST. {PRICING.trialDays}-day free trial with every feature on.</p>
        </Container>
      </section>

      <section className="border-t border-ink bg-paper-2 py-(--section-gap)">
        <Container>
          <div className="grid gap-x-(--gap-columns) gap-y-6 lg:grid-cols-12 lg:items-end">
            <h2 className="text-ink lg:col-span-6">Everything, for everyone.</h2>
            <p className="text-muted lg:col-span-5 lg:col-start-8">
              Optional: <Link href="/features/whatsapp-email-delivery" className="link">WhatsApp & email delivery</Link> on a prepaid balance.
              {" "}See all {FEATURES.length} features on the <Link href="/features" className="link">features page</Link>.
            </p>
          </div>
          <div className="mt-12"><Checklist items={included} /></div>
        </Container>
      </section>

      <section className="py-(--section-gap)">
        <Container className="grid gap-x-(--gap-columns) gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading title="Pricing, answered." /></div>
          <div className="lg:col-span-8"><Faqs faqs={pricingFaqs} /></div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
