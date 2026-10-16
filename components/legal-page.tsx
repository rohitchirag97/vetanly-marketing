import Link from "next/link";

import { Container, PageHero } from "@/components/ui";
import { LEGAL } from "@/content/legal";

export type LegalSection = { id: string; title: string; body: React.ReactNode };

/** Shared layout for the privacy policy and terms: a contents list, then numbered sections. */
export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: React.ReactNode; sections: LegalSection[] }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro}>
        <p className="text-sm text-slate-500">Last updated {LEGAL.updated}</p>
      </PageHero>
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <nav aria-label="Contents" className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-semibold text-slate-950">Contents</p>
            <ol className="mt-3 space-y-2 text-sm text-slate-600">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <Link href={`#${section.id}`} className="hover:text-brand-700">{index + 1}. {section.title}</Link>
                </li>
              ))}
            </ol>
          </nav>
          <div className="max-w-3xl space-y-12">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-slate-950">{index + 1}. {section.title}</h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-700">{section.body}</div>
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
    <ul className="list-disc space-y-2 pl-5 marker:text-slate-400">
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}
