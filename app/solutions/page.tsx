import type { Metadata } from "next";
import { withSocial } from "@/app/seo";
import Link from "next/link";

import { ArrowRight, Icon } from "@/components/icons";
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
      <section className="py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {SOLUTIONS.map((solution) => (
            <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="group rounded-3xl border border-slate-200 p-8 transition hover:border-brand-200 hover:shadow-xl">
              <span className="grid size-12 place-items-center rounded-2xl bg-slate-950 text-white"><Icon name={solution.icon} className="size-6" /></span>
              <h2 className="mt-6 text-2xl font-semibold text-slate-950">{solution.name}</h2>
              <p className="mt-2 text-lg text-slate-700">{solution.headline}</p>
              <p className="mt-2 text-slate-600">{solution.intro}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-600">See how <ArrowRight /></span>
            </Link>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
