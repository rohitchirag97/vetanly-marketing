import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, withSocial } from "@/app/seo";
import { SITE_ORIGIN } from "@/app/site-config";
import { notFound } from "next/navigation";

import { Icon } from "@/components/icons";
import { FeatureVisual } from "@/components/feature-visuals";
import { Checklist, Container, CtaBand, Faqs, PageHero, PrimaryButton, RelatedFeatures, RelatedReading, SecondaryButton, SectionHeading } from "@/components/ui";
import { FEATURES, featureBySlug } from "@/content/features";

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
    title: feature.seoTitle,
    description: feature.seoDescription,
    alternates: { canonical: `/features/${feature.slug}` },
  }, `/features/${feature.slug}/opengraph-image`);
}

export default async function FeaturePage({ params }: PageProps<"/features/[slug]">) {
  const { slug } = await params;
  const feature = featureBySlug(slug);
  if (!feature) notFound();

  return (
    <>
      <JsonLd data={faqJsonLd(feature.faqs)} />
      {SITE_ORIGIN && <JsonLd data={breadcrumbJsonLd(SITE_ORIGIN, [{ name: "Home", path: "/" }, { name: "Features", path: "/features" }, { name: feature.name, path: `/features/${feature.slug}` }])} />}
      <PageHero keyword={feature.seoTitle} title={feature.headline} intro={feature.intro}>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton>Start free trial</PrimaryButton>
          <SecondaryButton href="/pricing">See pricing</SecondaryButton>
        </div>
      </PageHero>

      {/* The feature itself, right under the hero. */}
      <section className="bg-paper-2 py-(--space-3xl)">
        <Container>
          <FeatureVisual slug={feature.slug} name={feature.name} />
        </Container>
      </section>

      <section className="border-t border-ink py-(--section-gap)">
        <Container>
          <ul className="border-t border-ink">
            {feature.highlights.map((highlight) => (
              <li key={highlight.title} className="grid gap-x-(--gap-columns) gap-y-2 border-b border-rule py-8 lg:grid-cols-12">
                <h2 className="flex items-start gap-3 text-xl text-ink lg:col-span-5"><Icon name={feature.icon} className="mt-1 size-5 shrink-0 text-accent" />{highlight.title}</h2>
                <p className="text-lg text-muted lg:col-span-6 lg:col-start-7">{highlight.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper-3 py-(--section-gap-s)">
        <Container>
          <SectionHeading title="What you get" />
          <div className="mt-12"><Checklist items={feature.details} /></div>
        </Container>
      </section>

      {feature.faqs.length > 0 && (
        <section className="py-(--section-gap)">
          <Container className="grid gap-x-(--gap-columns) gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><SectionHeading title={`${feature.name}, answered.`} /></div>
            <div className="lg:col-span-8"><Faqs faqs={feature.faqs} /></div>
          </Container>
        </section>
      )}

      <section className={feature.faqs.length > 0 ? "pb-(--section-gap-s)" : "py-(--section-gap-s)"}>
        <Container>
          <h2 className="mb-6 text-ink">Works with</h2>
          <RelatedFeatures slugs={feature.related} />
          <RelatedReading slug={feature.slug} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
