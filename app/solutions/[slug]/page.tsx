import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, withSocial } from "@/app/seo";
import { SITE_ORIGIN } from "@/app/site-config";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/icons";
import { Container, CtaBand, PageHero, PrimaryButton, SecondaryButton } from "@/components/ui";
import { featureBySlug, SOLUTIONS, solutionBySlug } from "@/content/features";

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionBySlug(slug);
  if (!solution) return { robots: { index: false } };
  return withSocial({
    title: solution.seoTitle,
    description: solution.seoDescription,
    alternates: { canonical: `/solutions/${solution.slug}` },
  }, `/solutions/${solution.slug}/opengraph-image`);
}

export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const solution = solutionBySlug(slug);
  if (!solution) notFound();

  return (
    <>
      {SITE_ORIGIN && <JsonLd data={breadcrumbJsonLd(SITE_ORIGIN, [{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }, { name: solution.name, path: `/solutions/${solution.slug}` }])} />}
      <PageHero keyword={solution.seoTitle} title={solution.headline} intro={solution.intro}>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton>Start free trial</PrimaryButton>
          <SecondaryButton href="/contact">Talk to us</SecondaryButton>
        </div>
      </PageHero>

      <section className="py-(--section-gap)">
        <Container className="grid gap-x-(--gap-columns) gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-ink">What gets in the way</h2>
            <ul className="mt-10 border-t border-ink">
              {solution.challenges.map((challenge) => (
                <li key={challenge} className="border-b border-rule py-5 text-lg text-ink-2">{challenge}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="text-ink">How it&apos;s solved</h2>
            <ul className="mt-10 border-t border-ink">
              {solution.answers.map((answer, index) => {
                const feature = featureBySlug(answer.feature);
                if (!feature) return null;
                return (
                  <li key={`${answer.feature}-${index}`} className="border-b border-rule">
                    <Link href={`/features/${feature.slug}`} className="group block py-5 transition-colors duration-(--dur-short) hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-focus">
                      <span className="flex items-center gap-2 text-sm font-medium text-accent"><Icon name={feature.icon} className="size-4" /> {feature.name}</span>
                      <span className="mt-1.5 block font-display text-xl text-ink group-hover:text-accent">{answer.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-paper-3 py-(--space-3xl)">
        <Container className="grid gap-x-(--gap-columns) gap-y-6 lg:grid-cols-12 lg:items-center">
          <h2 className="text-2xl text-ink lg:col-span-4">Other teams using Vetanly</h2>
          <div className="flex flex-wrap gap-3 lg:col-span-8">
            {SOLUTIONS.filter((other) => other.slug !== solution.slug).map((other) => (
              <Link key={other.slug} href={`/solutions/${other.slug}`} className="btn">
                <Icon name={other.icon} className="size-4 text-accent" /> {other.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
