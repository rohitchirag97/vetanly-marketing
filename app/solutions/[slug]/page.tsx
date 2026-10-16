import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowRight, Icon } from "@/components/icons";
import { Container, CtaBand, PageHero, PrimaryButton, SecondaryButton, SectionHeading } from "@/components/ui";
import { featureBySlug, SOLUTIONS, solutionBySlug } from "@/content/features";

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionBySlug(slug);
  if (!solution) return { robots: { index: false } };
  return {
    title: `Vetanly for ${solution.name}`,
    description: `${solution.headline} ${solution.intro}`.slice(0, 160),
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const solution = solutionBySlug(slug);
  if (!solution) notFound();

  return (
    <>
      <PageHero eyebrow={`Solutions · ${solution.name}`} title={solution.headline} intro={solution.intro}>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton>Start free trial <ArrowRight /></PrimaryButton>
          <SecondaryButton href="/contact">Talk to us</SecondaryButton>
        </div>
      </PageHero>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading eyebrow="Sound familiar?" title="What gets in the way" />
            <ul className="mt-8 space-y-3">
              {solution.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-900">
                  <span className="mt-0.5 font-bold">×</span> {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="With Vetanly" title="How it's solved" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {solution.answers.map((answer, index) => {
                const feature = featureBySlug(answer.feature);
                if (!feature) return null;
                return (
                  <Link key={`${answer.feature}-${index}`} href={`/features/${feature.slug}`} className="group rounded-2xl border border-slate-200 p-5 transition hover:border-brand-200 hover:shadow-lg">
                    <span className="flex items-center gap-2 text-sm font-semibold text-brand-600"><Icon name={feature.icon} className="size-4" /> {feature.name}</span>
                    <p className="mt-3 text-slate-800">{answer.text}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-500 group-hover:text-brand-600">Learn more <ArrowRight /></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <h2 className="mb-6 text-xl font-bold text-slate-950">Other teams using Vetanly</h2>
          <div className="flex flex-wrap gap-3">
            {SOLUTIONS.filter((other) => other.slug !== solution.slug).map((other) => (
              <Link key={other.slug} href={`/solutions/${other.slug}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-brand-200">
                <Icon name={other.icon} className="size-4 text-brand-600" /> {other.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
