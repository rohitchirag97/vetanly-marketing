import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd, breadcrumbJsonLd, faqJsonLd, withSocial } from "@/app/seo";
import { SITE_ORIGIN } from "@/app/site-config";
import { ArrowRight } from "@/components/icons";
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
    <div className={`rounded-3xl border p-8 ${tone === "brand" ? "border-brand-200 bg-brand-50/50" : "border-slate-200 bg-white"}`}>
      <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
      <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-700">
        {items.map((item) => <li key={item}>{item}</li>)}
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
          <PrimaryButton>Start free trial <ArrowRight /></PrimaryButton>
          <SecondaryButton href="/pricing">See pricing</SecondaryButton>
        </div>
      </PageHero>

      <section className="py-20">
        <Container className="grid gap-5 lg:grid-cols-3">
          <List title={`What ${competitor} focuses on`} items={comparison.theirFocus} tone="plain" />
          <List title={`${competitor} may suit you if`} items={comparison.chooseThemIf} tone="plain" />
          <List title="Vetanly suits you if" items={comparison.chooseVetanlyIf} tone="brand" />
        </Container>
        <Container>
          <p className="mt-6 text-xs leading-5 text-slate-500">
            {competitor} details are based on how {competitor} describes itself on its public website, checked {comparison.checked}. Products change, so confirm current features with them.
            {` ${competitor}`} is a trademark of its owner; Vetanly is not affiliated with it.
          </p>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading eyebrow="In Vetanly" title="What you get on every plan" />
          <div className="mt-10"><RelatedFeatures slugs={["face-recognition-attendance", "payroll", "statutory-compliance"]} /></div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Questions" title={`Switching from ${competitor}`} />
          <Faqs faqs={comparison.faqs} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
