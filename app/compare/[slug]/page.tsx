import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd, breadcrumbJsonLd, faqJsonLd, withSocial } from "@/app/seo";
import { SITE_ORIGIN } from "@/app/site-config";
import { Container, CtaBand, Faqs, PageHero, PrimaryButton, RelatedFeatures, SecondaryButton, SectionHeading } from "@/components/ui";
import { COMPARISONS, comparisonBySlug } from "@/content/compare";

export function generateStaticParams() {
  return COMPARISONS.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({ params }: PageProps<"/compare/[slug]">): Promise<Metadata> {
  const comparison = comparisonBySlug((await params).slug);
  if (!comparison) return { robots: { index: false } };
  return withSocial({ title: comparison.seoTitle, description: comparison.seoDescription, alternates: { canonical: `/compare/${comparison.slug}` } });
}

function List({ title, items, tone }: { title: string; items: string[]; tone: "brand" | "plain" }) {
  return (
    <div className={`border-t-2 pt-6 ${tone === "brand" ? "border-accent" : "border-ink"}`}>
      <h2 className={`text-2xl ${tone === "brand" ? "text-accent" : "text-ink"}`}>{title}</h2>
      <ul className="mt-6 border-t border-rule text-ink-2">
        {items.map((item) => <li key={item} className="border-b border-rule py-3">{item}</li>)}
      </ul>
    </div>
  );
}

export default async function ComparePage({ params }: PageProps<"/compare/[slug]">) {
  const comparison = comparisonBySlug((await params).slug);
  if (!comparison) notFound();
  const { competitor } = comparison;

  return (
    <>
      <JsonLd data={faqJsonLd(comparison.faqs)} />
      {SITE_ORIGIN && <JsonLd data={breadcrumbJsonLd(SITE_ORIGIN, [{ name: "Home", path: "/" }, { name: `${competitor} alternative`, path: `/compare/${comparison.slug}` }])} />}
      <PageHero keyword={`${competitor} alternative`} title={comparison.headline} intro={comparison.intro}>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton>Start free trial</PrimaryButton>
          <SecondaryButton href="/pricing">See pricing</SecondaryButton>
        </div>
      </PageHero>

      <section className="py-(--section-gap)">
        <Container className="grid gap-x-(--gap-columns) gap-y-12 lg:grid-cols-3">
          <List title={`What ${competitor} focuses on`} items={comparison.theirFocus} tone="plain" />
          <List title={`${competitor} may suit you if`} items={comparison.chooseThemIf} tone="plain" />
          <List title="Vetanly suits you if" items={comparison.chooseVetanlyIf} tone="brand" />
        </Container>
        <Container>
          <p className="mt-10 max-w-[75ch] text-sm text-muted">
            {competitor} details are based on how {competitor} describes itself on its public website, checked {comparison.checked}. Products change, so confirm current features with them.
            {` ${competitor}`} is a trademark of its owner; Vetanly is not affiliated with it.
          </p>
        </Container>
      </section>

      <section className="bg-paper-3 py-(--section-gap-s)">
        <Container>
          <SectionHeading title="What you get on every plan" />
          <div className="mt-10"><RelatedFeatures slugs={["face-recognition-attendance", "payroll", "statutory-compliance"]} /></div>
        </Container>
      </section>

      <section className="py-(--section-gap)">
        <Container className="grid gap-x-(--gap-columns) gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading title={`Switching from ${competitor}`} /></div>
          <div className="lg:col-span-8"><Faqs faqs={comparison.faqs} /></div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
