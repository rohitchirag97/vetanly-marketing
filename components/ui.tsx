import Link from "next/link";

import { LOGIN_URL } from "@/app/site-config";
import { ArrowRight, Check, Icon } from "@/components/icons";
import { featureBySlug, PRICING, type Feature } from "@/content/features";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${light ? "bg-white/10 text-brand-200" : "bg-brand-50 text-brand-700"}`}>
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, center, light }: { eyebrow?: string; title: React.ReactNode; intro?: React.ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>{intro}</p>}
    </div>
  );
}

export function PrimaryButton({ href = LOGIN_URL, children }: { href?: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  const className = "inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700";
  return external ? <a href={href} className={className}>{children}</a> : <Link href={href} className={className}>{children}</Link>;
}

export function SecondaryButton({ href, children, light }: { href: string; children: React.ReactNode; light?: boolean }) {
  const className = `inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition ${light ? "border-white/20 text-white hover:bg-white/10" : "border-slate-300 bg-white text-slate-900 hover:border-slate-400"}`;
  return href.startsWith("http") ? <a href={href} className={className}>{children}</a> : <Link href={href} className={className}>{children}</Link>;
}

/** Page header for inner pages. */
export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: React.ReactNode; intro: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-b from-brand-50/70 to-white">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative py-16 sm:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{intro}</p>
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Link href={`/features/${feature.slug}`} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5">
      <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
        <Icon name={feature.icon} />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-slate-950">{feature.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{feature.short}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">Learn more <ArrowRight className="size-4 transition group-hover:translate-x-0.5" /></span>
    </Link>
  );
}

export function Checklist({ items, columns = 3 }: { items: string[]; columns?: 2 | 3 }) {
  return (
    <ul className={`grid gap-3 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check className="size-3.5" /></span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map((faq) => (
        <details key={faq.q} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
            {faq.q}
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function RelatedFeatures({ slugs }: { slugs: string[] }) {
  const related = slugs.map(featureBySlug).filter((f): f is Feature => Boolean(f));
  if (related.length === 0) return null;
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {related.map((feature) => <FeatureCard key={feature.slug} feature={feature} />)}
    </div>
  );
}

export function CtaBand({ title = "See your first month in Vetanly.", intro }: { title?: string; intro?: string }) {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 text-center sm:px-12">
        <div className="cta-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            {intro ?? `Start a ${PRICING.trialDays}-day free trial with every feature on. No card needed to begin.`}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryButton>Start free trial <ArrowRight /></PrimaryButton>
            <SecondaryButton href="/contact" light>Talk to us</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
