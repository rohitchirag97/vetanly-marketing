import type { Metadata } from "next";
import Link from "next/link";

import { withSocial } from "@/app/seo";
import { Container, CtaBand, PageHero } from "@/components/ui";
import { GUIDES } from "@/content/guides";

export const metadata: Metadata = withSocial({
  title: "Attendance, HR & Payroll Guides for India",
  description: "Practical guides for Indian employers on attendance, gratuity, salary structure, PF, ESI, professional tax and TDS.",
  alternates: { canonical: "/guides" },
});

export default function GuidesPage() {
  return (
    <>
      <PageHero keyword="Attendance, HR & payroll guides" title="Clear answers for Indian payroll." intro="Practical, plain-language guides on attendance, statutory pay and HR, written for business owners and HR teams." />
      <section className="pb-(--section-gap) pt-(--space-2xl)">
        <Container>
          <ul className="border-t border-ink">
            {GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link href={`/guides/${guide.slug}`} className="group grid gap-x-(--gap-columns) gap-y-2 border-b border-rule py-8 transition-colors duration-(--dur-short) hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-focus lg:grid-cols-12">
                  <h2 className="text-2xl text-ink group-hover:text-accent lg:col-span-6">{guide.title}</h2>
                  <p className="text-muted lg:col-span-5 lg:col-start-8">{guide.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
