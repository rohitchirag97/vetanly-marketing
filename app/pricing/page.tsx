import type { Metadata } from "next";
import { JsonLd, faqJsonLd, withSocial } from "@/app/seo";
import Link from "next/link";

import { ArrowRight, Check } from "@/components/icons";
import { Container, CtaBand, Faqs, PageHero, PrimaryButton, SecondaryButton, SectionHeading } from "@/components/ui";
import { FEATURES, PRICING } from "@/content/features";

export const metadata: Metadata = withSocial({
  title: "Pricing",
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
      <PageHero eyebrow="Pricing" title="One price per employee. Every feature included." intro="No modules to unlock and no setup fee. Start with a free trial and pay only for the people on Vetanly." />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-8">
            <p className="text-sm font-semibold text-slate-500">Monthly</p>
            <p className="mt-4 text-5xl font-bold text-slate-950">₹{PRICING.monthly}</p>
            <p className="mt-1 text-sm text-slate-500">per active employee / month</p>
            <p className="mt-6 text-sm text-slate-600">Pay month to month. Add or remove employees any time.</p>
            <div className="mt-8"><SecondaryButton href="/contact">Get started</SecondaryButton></div>
          </div>
          <div className="relative rounded-3xl bg-slate-950 p-8 text-white shadow-2xl shadow-brand-900/20">
            <span className="absolute right-6 top-6 rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-slate-950">2 months free</span>
            <p className="text-sm font-semibold text-brand-300">Annual</p>
            <p className="mt-4 text-5xl font-bold">₹{PRICING.annual}</p>
            <p className="mt-1 text-sm text-slate-400">per active employee / year</p>
            <p className="mt-6 text-sm text-slate-300">Works out to about ₹{Math.round(PRICING.annual / 12)} per employee per month.</p>
            <div className="mt-8"><PrimaryButton>Start free trial <ArrowRight /></PrimaryButton></div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold text-slate-500">Volume</p>
            <p className="mt-4 text-3xl font-bold text-slate-950">{PRICING.volumeThreshold}+ employees</p>
            <p className="mt-1 text-sm text-slate-500">custom per-employee rate</p>
            <p className="mt-6 text-sm text-slate-600">Multi-branch rollouts with help planning kiosks, branches and data import.</p>
            <div className="mt-8"><SecondaryButton href="/contact">Talk to us</SecondaryButton></div>
          </div>
        </Container>
        <Container>
          <p className="mt-6 text-center text-sm text-slate-500">All prices exclude GST. {PRICING.trialDays}-day free trial with every feature on.</p>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading center eyebrow="Included in every plan" title="Everything, for everyone." />
          <ul className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                <Check className="size-4 shrink-0 text-emerald-600" /> {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-slate-500">
            Optional: <Link href="/features/whatsapp-email-delivery" className="font-medium text-brand-600">WhatsApp & email delivery</Link> on a prepaid balance.
            {" "}See all {FEATURES.length} features on the <Link href="/features" className="font-medium text-brand-600">features page</Link>.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Questions" title="Pricing, answered." />
          <Faqs faqs={pricingFaqs} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
