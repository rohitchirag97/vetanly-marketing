import Link from "next/link";

import { Container, PageHero } from "@/components/ui";
import { LEGAL } from "@/content/legal";

export type LegalSection = { id: string; title: string; body: React.ReactNode };

/** Shared layout for the privacy policy and terms: a contents list, then numbered sections. */
export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: React.ReactNode; sections: LegalSection[] }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro}>
        <p className="text-sm text-muted">Last updated {LEGAL.updated}</p>
      </PageHero>
      <section className="py-(--space-3xl)">
        <Container className="grid gap-x-(--gap-columns) gap-y-10 lg:grid-cols-[240px_minmax(0,1fr)]">
          <nav aria-label="Contents" className="lg:sticky lg:top-24 lg:self-start">
            <p className="border-b border-ink pb-3 font-medium text-ink">Contents</p>
            <ol className="mt-3 space-y-2 text-sm text-muted">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <Link href={`#${section.id}`} className="rounded-[2px] hover:text-accent focus-visible:outline-2 focus-visible:outline-focus">{index + 1}. {section.title}</Link>
                </li>
              ))}
            </ol>
          </nav>
          <div className="max-w-3xl space-y-12">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="border-t border-ink pt-6 text-3xl text-ink">{index + 1}. {section.title}</h2>
                <div className="mt-4 space-y-4 text-lg leading-[1.7] text-ink-2">{section.body}</div>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

/** A bulleted list styled for legal text. */
export function Points({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-muted">
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}
