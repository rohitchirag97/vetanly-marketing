import type { Metadata } from "next";
import { withSocial } from "@/app/seo";

import { CONTACT_EMAIL, CONTACT_WHATSAPP, LOGIN_URL } from "@/app/site-config";
import { ArrowRight, Icon } from "@/components/icons";
import { Container, PageHero } from "@/components/ui";
import { PRICING, type IconName } from "@/content/features";
import { LEGAL } from "@/content/legal";

export const metadata: Metadata = withSocial({
  title: "Contact",
  description: "Talk to Vetanly about face-recognition attendance, payroll or a multi-branch rollout, or start a free trial.",
  alternates: { canonical: "/contact" },
});

const phone = LEGAL.phone || (CONTACT_WHATSAPP ? `+${CONTACT_WHATSAPP}` : "");

/** Contact details gateways and customers look for; each row appears only when it is set. */
const details: { icon: IconName; label: string; value: string; href?: string }[] = [
  ...(CONTACT_EMAIL ? [{ icon: "message" as const, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }] : []),
  ...(phone ? [{ icon: "phone" as const, label: "Phone", value: phone, href: `tel:${phone.replace(/[^d+]/g, "")}` }] : []),
  ...(LEGAL.hours ? [{ icon: "clock" as const, label: "Support hours", value: LEGAL.hours }] : []),
  ...(LEGAL.address ? [{ icon: "pin" as const, label: "Registered office", value: LEGAL.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LEGAL.address)}` }] : []),
];

export default function ContactPage() {
  const cards = [
    {
      icon: "spark" as const,
      title: "Start right away",
      body: `Create your organization and start the ${PRICING.trialDays}-day free trial with every feature on.`,
      action: { label: "Start free trial", href: LOGIN_URL },
    },
    ...(CONTACT_WHATSAPP
      ? [{ icon: "message" as const, title: "WhatsApp us", body: "Quick questions about features, kiosks or pricing.", action: { label: "Open WhatsApp", href: `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent("Hi Vetanly, I'd like to know more.")}` } }]
      : []),
    ...(CONTACT_EMAIL
      ? [{ icon: "book" as const, title: "Email us", body: "Demos, volume pricing, data import and multi-branch rollouts.", action: { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Vetanly enquiry")}` } }]
      : []),
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get your team set up."
        intro="Whether you have ten employees or a thousand across branches, we'll help you plan kiosks, shifts and payroll."
      />
      <section className="py-20">
        {/* Actions on the left, contact details and map on the right; stacked on small screens. */}
        <Container className={`grid items-start gap-8 ${details.length ? "lg:grid-cols-[1fr_1.15fr]" : "max-w-xl"}`}>
          <div className="grid gap-4">
            {cards.map((card) => (
              <a key={card.title} href={card.action.href} className="group flex gap-5 rounded-3xl border border-slate-200 p-6 transition hover:border-brand-200 hover:shadow-xl">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600"><Icon name={card.icon} className="size-6" /></span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-lg font-semibold text-slate-950">{card.title}</span>
                  <span className="mt-1 text-slate-600">{card.body}</span>
                  <span className="mt-3 inline-flex items-center gap-1.5 break-all font-semibold text-brand-600">{card.action.label} <ArrowRight className="size-4 shrink-0 transition group-hover:translate-x-0.5" /></span>
                </span>
              </a>
            ))}
            <div className="rounded-3xl bg-slate-50 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Planning a rollout? Have these handy:</p>
              <ul className="mt-3 space-y-2">
                <li>• Number of employees and branches</li>
                <li>• How attendance is recorded today</li>
                <li>• Your shift pattern (fixed, rotating, night shifts)</li>
                <li>• Which statutory deductions apply (PF, ESI, PT)</li>
              </ul>
            </div>
          </div>
          {details.length > 0 && (
            <div className="rounded-3xl border border-slate-200 p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Contact details</h2>
              <p className="mt-2 text-slate-600">{LEGAL.entity}</p>
              <dl className="mt-6 space-y-5">
                {details.map((detail) => (
                  <div key={detail.label} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon name={detail.icon} className="size-5" /></span>
                    <div className="min-w-0">
                      <dt className="text-sm font-medium text-slate-500">{detail.label}</dt>
                      <dd className="mt-0.5 break-words text-slate-950">
                        {detail.href ? <a href={detail.href} className="hover:text-brand-700 hover:underline">{detail.value}</a> : detail.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
              {LEGAL.address && (
                <iframe
                  title={`Map of ${LEGAL.entity}'s office`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(LEGAL.address)}&output=embed`}
                  className="mt-8 h-64 w-full rounded-2xl border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
