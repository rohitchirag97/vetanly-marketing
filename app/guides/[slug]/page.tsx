import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd, breadcrumbJsonLd, withSocial } from "@/app/seo";
import { SITE_ORIGIN } from "@/app/site-config";
import { ArrowRight } from "@/components/icons";
import { Container, CtaBand } from "@/components/ui";
import { GUIDES, guideBySlug } from "@/content/guides";

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const guide = guideBySlug((await params).slug);
  if (!guide) return { robots: { index: false } };
  const meta = withSocial({ title: guide.seoTitle, description: guide.seoDescription, alternates: { canonical: `/guides/${guide.slug}` } });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: guide.published, modifiedTime: guide.updated } };
}

const longDate = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const guide = guideBySlug((await params).slug);
  if (!guide) notFound();
  const others = GUIDES.filter((other) => other.slug !== guide.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.seoDescription,
          datePublished: guide.published,
          dateModified: guide.updated,
          inLanguage: "en-IN",
          ...(SITE_ORIGIN ? { mainEntityOfPage: `${SITE_ORIGIN}/guides/${guide.slug}`, author: { "@id": `${SITE_ORIGIN}/#organization` }, publisher: { "@id": `${SITE_ORIGIN}/#organization` } } : {}),
        }}
      />
      {SITE_ORIGIN && <JsonLd data={breadcrumbJsonLd(SITE_ORIGIN, [{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: guide.title, path: `/guides/${guide.slug}` }])} />}

      <article>
        <header className="border-b border-slate-200 bg-linear-to-b from-brand-50/70 to-white">
          <Container className="max-w-3xl py-16 sm:py-20">
            <Link href="/guides" className="text-sm font-semibold text-brand-600 hover:text-brand-700">Guides</Link>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{guide.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{guide.summary}</p>
            <p className="mt-6 text-sm text-slate-500">Updated <time dateTime={guide.updated}>{longDate(guide.updated)}</time></p>
          </Container>
        </header>

        <Container className="max-w-3xl py-14">
          {guide.sections.map((section) => (
            <section key={section.heading} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-lg leading-8 text-slate-700">{paragraph}</p>)}
              {section.link && (
                <Link href={section.link.href} className="mt-5 inline-flex items-center gap-1 font-semibold text-brand-600 hover:text-brand-700">
                  {section.link.label} <ArrowRight className="size-4" />
                </Link>
              )}
            </section>
          ))}
        </Container>
      </article>

      {others.length > 0 && (
        <section className="bg-slate-50 py-16">
          <Container className="max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-950">More guides</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {others.map((other) => (
                <Link key={other.slug} href={`/guides/${other.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-200 hover:shadow-xl">
                  <h3 className="text-lg font-semibold text-slate-950">{other.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{other.summary}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}
