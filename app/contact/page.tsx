import type { Metadata } from "next";

import { CONTACT_EMAIL, CONTACT_WHATSAPP, LOGIN_URL } from "@/app/site-config";
import { ArrowRight, Icon } from "@/components/icons";
import { Container, PageHero } from "@/components/ui";
import { PRICING } from "@/content/features";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Vetanly about face-recognition attendance, payroll or a multi-branch rollout, or start a free trial.",
  alternates: { canonical: "/contact" },
};

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
        <Container className={`grid gap-5 ${cards.length === 3 ? "md:grid-cols-3" : cards.length === 2 ? "md:grid-cols-2" : "max-w-xl"}`}>
          {cards.map((card) => (
            <a key={card.title} href={card.action.href} className="group flex flex-col rounded-3xl border border-slate-200 p-8 transition hover:border-brand-200 hover:shadow-xl">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600"><Icon name={card.icon} className="size-6" /></span>
              <h2 className="mt-6 text-xl font-semibold text-slate-950">{card.title}</h2>
              <p className="mt-2 flex-1 text-slate-600">{card.body}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-600">{card.action.label} <ArrowRight className="transition group-hover:translate-x-0.5" /></span>
            </a>
          ))}
        </Container>
        <Container>
          <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Planning a rollout? Have these handy:</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              <li>• Number of employees and branches</li>
              <li>• How attendance is recorded today</li>
              <li>• Your shift pattern (fixed, rotating, night shifts)</li>
              <li>• Which statutory deductions apply (PF, ESI, PT)</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
