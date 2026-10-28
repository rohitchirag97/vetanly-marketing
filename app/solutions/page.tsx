import type { Metadata } from "next";
import { withSocial } from "@/app/seo";
import Link from "next/link";

import { Icon } from "@/components/icons";
import { Container, CtaBand, PageHero } from "@/components/ui";
import { SOLUTIONS } from "@/content/features";

export const metadata: Metadata = withSocial({
  title: "Attendance & Payroll Software by Industry",
  description: "Face attendance, shifts and Indian payroll set up for how you work: factories, retail chains with branches, offices and field teams.",
  alternates: { canonical: "/solutions" },
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero keyword="Attendance & payroll software by industry" title="Built for the way your team works." intro="Shift floors, store chains, offices and field teams each run attendance and payroll differently. Vetanly fits all four." />
      <section className="py-(--section-gap)">
        <Container>
          <ul className="border-t border-ink">
            {SOLUTIONS.map((solution) => (
              <li key={solution.slug}>
                <Link href={`/solutions/${solution.slug}`} className="group grid gap-x-(--gap-columns) gap-y-3 border-b border-rule py-10 transition-colors duration-(--dur-short) hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-focus lg:grid-cols-12">
                  <span className="flex items-start gap-3 lg:col-span-5">
                    <Icon name={solution.icon} className="mt-1.5 size-6 shrink-0 text-accent" />
                    <h2 className="text-3xl text-ink group-hover:text-accent">{solution.name}</h2>
                  </span>
                  <span className="lg:col-span-6 lg:col-start-7">
                    <span className="block font-display text-xl text-ink-2">{solution.headline}</span>
                    <span className="mt-2 block text-muted">{solution.intro}</span>
                  </span>
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
