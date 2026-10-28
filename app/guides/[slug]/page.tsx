import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd, breadcrumbJsonLd, withSocial } from "@/app/seo";
import { SITE_ORIGIN } from "@/app/site-config";
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
        <header className="border-b border-ink">
          <Container className="py-(--space-3xl)">
            <Link href="/guides" className="link text-sm">Guides</Link>
            <h1 className="mt-5 max-w-[22ch] text-[length:var(--text-display-s)] text-ink">{guide.title}</h1>
            <p className="lead mt-6 text-muted">{guide.summary}</p>
            <p className="mt-6 text-sm text-muted">Updated <time dateTime={guide.updated}>{longDate(guide.updated)}</time></p>
          </Container>
        </header>

        <Container className="py-(--space-3xl)">
          <div className="max-w-[68ch]">
            {guide.sections.map((section) => (
              <section key={section.heading} className="mb-14 last:mb-0">
                <h2 className="text-3xl text-ink">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-lg leading-[1.7] text-ink-2">{paragraph}</p>)}
                {section.link && (
                  <Link href={section.link.href} className="link mt-5 inline-block">
                    {section.link.label}
                  </Link>
                )}
              </section>
            ))}
          </div>
        </Container>
      </article>

      {others.length > 0 && (
        <section className="bg-paper-3 py-(--section-gap-s)">
          <Container>
            <h2 className="text-ink">More guides</h2>
            <ul className="mt-10 border-t border-ink">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link href={`/guides/${other.slug}`} className="group grid gap-x-(--gap-columns) gap-y-2 border-b border-grid-strong py-6 focus-visible:outline-2 focus-visible:outline-focus lg:grid-cols-12">
                    <h3 className="text-ink group-hover:text-accent lg:col-span-6">{other.title}</h3>
                    <p className="text-muted lg:col-span-5 lg:col-start-8">{other.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}
