import Link from "next/link";

import { LOGIN_URL } from "@/app/site-config";
import { Check, Icon } from "@/components/icons";
import { featureBySlug, PRICING, type Feature } from "@/content/features";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function SectionHeading({ title, intro, center, light, as: Tag = "h2" }: { title: React.ReactNode; intro?: React.ReactNode; center?: boolean; light?: boolean; as?: "h2" | "h3" }) {
  return (
    <div className={center ? "mx-auto text-center [&>*]:mx-auto" : ""}>
      <Tag className={light ? "text-paper-2" : "text-ink"}>{title}</Tag>
      {intro && <p className={`lead mt-5 ${light ? "text-ink-muted" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}

function ButtonLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  return href.startsWith("http") || href.startsWith("mailto:") ? <a href={href} className={className}>{children}</a> : <Link href={href} className={className}>{children}</Link>;
}

export function PrimaryButton({ href = LOGIN_URL, children }: { href?: string; children: React.ReactNode }) {
  return <ButtonLink href={href} className="btn btn--primary">{children}</ButtonLink>;
}

export function SecondaryButton({ href, children, light }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <ButtonLink href={href} className={`btn ${light ? "btn--on-dark" : ""}`}>{children}</ButtonLink>;
}

/**
 * Page header for inner pages. With `keyword`, the search phrase is the h1 and the slogan sits under it;
 * the intro takes the right-hand columns so the head block stays one head, one line and the actions.
 */
export function PageHero({ eyebrow, keyword, title, intro, children }: { eyebrow?: string; keyword?: string; title: React.ReactNode; intro: React.ReactNode; children?: React.ReactNode }) {
  const heading = keyword ?? eyebrow;
  return (
    <section className="border-b border-ink bg-paper">
      <Container className="grid gap-x-(--gap-columns) gap-y-10 py-(--space-3xl) lg:grid-cols-12 lg:items-end lg:py-(--section-gap-s)">
        <div className="lg:col-span-7">
          {heading ? (
            <>
              <h1 className="text-ink">{heading}</h1>
              <p className="lead mt-6 text-ink-2">{title}</p>
            </>
          ) : (
            <h1 className="text-ink">{title}</h1>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
        <p className="max-w-[46ch] text-muted lg:col-span-4 lg:col-start-9">{intro}</p>
      </Container>
    </section>
  );
}

/** One feature as an entry in a ruled index: the icon inline with its name, then its line. */
export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Link href={`/features/${feature.slug}`} className="group flex h-full flex-col gap-3 border-t border-ink py-6 transition-colors duration-(--dur-short) hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
      <span className="flex items-start gap-2.5">
        <Icon name={feature.icon} className="mt-1.5 size-5 shrink-0 text-accent" />
        <h3 className="text-xl text-ink group-hover:text-accent">{feature.name}</h3>
      </span>
      <p className="text-muted">{feature.short}</p>
    </Link>
  );
}

export function Checklist({ items, columns = 3 }: { items: string[]; columns?: 2 | 3 }) {
  return (
    <ul className={`grid gap-x-(--gap-columns) border-t border-ink sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 border-b border-rule py-4 text-ink-2">
          <Check className="mt-0.5 size-5 shrink-0 text-green" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-ink">
      {faqs.map((faq) => (
        <details key={faq.q} className="group border-b border-rule">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
            {faq.q}
            <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-pill border border-rule text-ink-2 transition-transform duration-(--dur-short) ease-(--ease-in-out) group-open:rotate-45">+</span>
          </summary>
          <p className="pb-6 pr-14 text-muted">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function RelatedFeatures({ slugs }: { slugs: string[] }) {
  const related = slugs.map(featureBySlug).filter((f): f is Feature => Boolean(f));
  if (related.length === 0) return null;
  return (
    <div className="grid gap-x-(--gap-columns) md:grid-cols-3">
      {related.map((feature) => <FeatureCard key={feature.slug} feature={feature} />)}
    </div>
  );
}

/** The close: the trial again, on the brand's purple field. */
export function CtaBand({ title = "See your first month in Vetanly.", intro }: { title?: string; intro?: string }) {
  return (
    <section className="bg-accent py-(--section-gap-s) text-accent-ink">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <h2 className="text-accent-ink">{title}</h2>
          <p className="lead mt-5 text-accent-ink">
            {intro ?? `Start a ${PRICING.trialDays}-day free trial with every feature on. No card needed to begin.`}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
          <a href={LOGIN_URL} className="btn">Start free trial</a>
          <Link href="/contact" className="btn btn--on-dark">Talk to us</Link>
        </div>
      </Container>
    </section>
  );
}
