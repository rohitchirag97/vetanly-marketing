import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, withSocial } from "@/app/seo";
import { SITE_ORIGIN } from "@/app/site-config";
import { notFound } from "next/navigation";

import { ArrowRight, Icon } from "@/components/icons";
import { DashboardMockup, FaceKioskMockup, PayslipMockup, PhoneMockup } from "@/components/mockups";
import { Checklist, Container, CtaBand, Faqs, PageHero, PrimaryButton, RelatedFeatures, SecondaryButton, SectionHeading } from "@/components/ui";
import { FEATURES, featureBySlug, type Feature } from "@/content/features";

export function generateStaticParams() {
  // The face recognition page has its own route.
  return FEATURES.filter((feature) => feature.slug !== "face-recognition-attendance").map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: PageProps<"/features/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const feature = featureBySlug(slug);
  // Unknown slugs render the 404 page; keep them out of search results.
  if (!feature) return { robots: { index: false } };
  return withSocial({
    title: feature.name,
    description: `${feature.headline} ${feature.intro}`.slice(0, 160),
    alternates: { canonical: `/features/${feature.slug}` },
  }, `/features/${feature.slug}/opengraph-image`);
}

/** The illustration that best shows each kind of feature. */
const visualFor = (feature: Feature) => {
  if (feature.slug === "face-recognition-attendance") return <FaceKioskMockup compact />;
  if (feature.slug === "gps-attendance" || feature.slug === "employee-self-service") return <PhoneMockup />;
  if (feature.category === "Payroll" || feature.slug === "whatsapp-email-delivery" || feature.slug === "accounting-export") return <PayslipMockup />;
  return <DashboardMockup />;
};

export default async function FeaturePage({ params }: PageProps<"/features/[slug]">) {
  const { slug } = await params;
  const feature = featureBySlug(slug);
  if (!feature) notFound();

  return (
    <>
      <JsonLd data={faqJsonLd(feature.faqs)} />
      {SITE_ORIGIN && <JsonLd data={breadcrumbJsonLd(SITE_ORIGIN, [{ name: "Home", path: "/" }, { name: "Features", path: "/features" }, { name: feature.name, path: `/features/${feature.slug}` }])} />}
      <PageHero eyebrow={`${feature.category} · ${feature.name}`} title={feature.headline} intro={feature.intro}>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton>Start free trial <ArrowRight /></PrimaryButton>
          <SecondaryButton href="/pricing">See pricing</SecondaryButton>
        </div>
      </PageHero>

      <section className="py-20">
        <Container className="grid items-start gap-14 lg:grid-cols-[1.25fr_1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {feature.highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-2xl border border-slate-200 p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon name={feature.icon} className="size-5" /></span>
                <h2 className="mt-4 text-lg font-semibold text-slate-950">{highlight.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{highlight.body}</p>
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-24">{visualFor(feature)}</div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading eyebrow="Included" title="What you get" />
          <div className="mt-10"><Checklist items={feature.details} /></div>
        </Container>
      </section>

      {feature.faqs.length > 0 && (
        <section className="py-20">
          <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <SectionHeading eyebrow="Questions" title={`${feature.name}, answered.`} />
            <Faqs faqs={feature.faqs} />
          </Container>
        </section>
      )}

      <section className={feature.faqs.length > 0 ? "pb-4" : "py-20"}>
        <Container>
          <h2 className="mb-8 text-2xl font-bold text-slate-950">Works with</h2>
          <RelatedFeatures slugs={feature.related} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
