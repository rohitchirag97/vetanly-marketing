import type { Metadata } from "next";

import { ArrowRight } from "@/components/icons";
import { Container, CtaBand, FeatureCard, PageHero, PrimaryButton } from "@/components/ui";
import { CATEGORIES, FEATURES } from "@/content/features";

export const metadata: Metadata = {
  title: "Features",
  description: "Face-recognition attendance, GPS check-in, shifts, leave, payroll, PF/ESI/PT/TDS, loans, claims, assets, HR insights and accounting export. Every feature of Vetanly.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything between the front gate and the bank transfer."
        intro="Vetanly covers attendance, people and payroll end to end. Every feature below is included in every plan."
      >
        <PrimaryButton>Start free trial <ArrowRight /></PrimaryButton>
      </PageHero>
      <Container className="py-16 sm:py-20">
        {CATEGORIES.map((category) => (
          <section key={category.name} className="mb-16 last:mb-0" aria-labelledby={`cat-${category.name}`}>
            <div className="mb-6 flex flex-wrap items-baseline gap-3 border-b border-slate-200 pb-4">
              <h2 id={`cat-${category.name}`} className="text-2xl font-bold text-slate-950">{category.name}</h2>
              <span className="text-slate-500">{category.blurb}</span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.filter((f) => f.category === category.name).map((feature) => <FeatureCard key={feature.slug} feature={feature} />)}
            </div>
          </section>
        ))}
      </Container>
      <CtaBand />
    </>
  );
}
