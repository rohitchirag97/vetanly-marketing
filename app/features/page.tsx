import type { Metadata } from "next";
import { withSocial } from "@/app/seo";

import { Container, CtaBand, FeatureCard, PageHero, PrimaryButton } from "@/components/ui";
import { CATEGORIES, FEATURES } from "@/content/features";

export const metadata: Metadata = withSocial({
  title: "HR, Attendance & Payroll Software Features",
  description: "Every Vetanly feature: face-recognition attendance, GPS check-in, shifts, leave, payroll with PF, ESI, PT and TDS, claims, assets and HR insights.",
  alternates: { canonical: "/features" },
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        keyword="HR, attendance & payroll software features"
        title="Everything between the front gate and the bank transfer."
        intro="Vetanly covers attendance, people and payroll end to end. Every feature below is included in every plan."
      >
        <PrimaryButton>Start free trial</PrimaryButton>
      </PageHero>
      <Container className="space-y-(--space-3xl) py-(--section-gap)">
        {CATEGORIES.map((category) => (
          <section key={category.name} className="grid gap-x-(--gap-columns) gap-y-6 lg:grid-cols-12" aria-labelledby={`cat-${category.name}`}>
            <div className="lg:col-span-3">
              <h2 id={`cat-${category.name}`} className="text-3xl text-ink">{category.name}</h2>
              <p className="mt-2 text-muted">{category.blurb}</p>
            </div>
            <div className={`grid gap-x-(--gap-columns) sm:grid-cols-2 lg:col-span-9 ${FEATURES.filter((f) => f.category === category.name).length === 3 ? "lg:grid-cols-3" : ""}`}>
              {FEATURES.filter((f) => f.category === category.name).map((feature) => <FeatureCard key={feature.slug} feature={feature} />)}
            </div>
          </section>
        ))}
      </Container>
      <CtaBand />
    </>
  );
}
