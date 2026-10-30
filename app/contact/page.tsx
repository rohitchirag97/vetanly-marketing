import type { Metadata } from "next";
import { withSocial } from "@/app/seo";

import { CONTACT_EMAIL, CONTACT_WHATSAPP, LOGIN_URL } from "@/app/site-config";
import { Icon } from "@/components/icons";
import { Container, PageHero } from "@/components/ui";
import { PRICING, type IconName } from "@/content/features";
import { LEGAL } from "@/content/legal";

export const metadata: Metadata = withSocial({
  title: "Contact Sales & Support",
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
      <section className="py-(--section-gap)">
        {/* Actions on the left, contact details and map on the right; stacked on small screens. */}
        <Container className={`grid items-start gap-x-(--gap-columns) gap-y-16 ${details.length ? "lg:grid-cols-12" : ""}`}>
          <div className={details.length ? "lg:col-span-6" : "max-w-2xl"}>
            <ul className="border-t border-ink">
              {cards.map((card) => (
                <li key={card.title} className="border-b border-rule">
                  <a href={card.action.href} className="group flex gap-4 py-7 transition-colors duration-(--dur-short) hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-focus">
                    <Icon name={card.icon} className="mt-1 size-6 shrink-0 text-accent" />
                    <span className="flex min-w-0 flex-col">
                      <span className="font-display text-2xl text-ink">{card.title}</span>
                      <span className="mt-1 text-muted">{card.body}</span>
                      <span className="mt-3 break-all font-medium text-accent underline decoration-accent/35 underline-offset-4 group-hover:decoration-current">{card.action.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-12 bg-paper-3 p-8">
              <p className="font-medium text-ink">Planning a rollout? Have these handy:</p>
              <ul className="ruled mt-4 text-ink-2">
                <li className="py-3">Number of employees and branches</li>
                <li className="py-3">How attendance is recorded today</li>
                <li className="py-3">Your shift pattern (fixed, rotating, night shifts)</li>
                <li className="py-3">Which statutory deductions apply (PF, ESI, PT)</li>
              </ul>
            </div>
          </div>
          {details.length > 0 && (
            <div className="sheet p-8 lg:col-span-5 lg:col-start-8">
              <h2 className="text-3xl text-ink">Contact details</h2>
              <p className="mt-2 text-muted">{LEGAL.entity}</p>
              <dl className="mt-6 border-t border-ink">
                {details.map((detail) => (
                  <div key={detail.label} className="flex gap-4 border-b border-rule py-4">
                    <Icon name={detail.icon} className="mt-0.5 size-5 shrink-0 text-accent" />
                    <div className="min-w-0">
                      <dt className="text-sm text-muted">{detail.label}</dt>
                      <dd className="mt-0.5 break-words text-ink">
                        {detail.href ? <a href={detail.href} className="link">{detail.value}</a> : detail.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
              {LEGAL.address && (
                <iframe
                  title={`Map of ${LEGAL.entity}'s office`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(LEGAL.address)}&output=embed`}
                  className="mt-8 h-64 w-full rounded-card border-0"
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
