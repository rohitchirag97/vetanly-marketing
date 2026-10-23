import type { Metadata } from "next";
import Link from "next/link";

import { withSocial } from "@/app/seo";
import { ArrowRight, Icon } from "@/components/icons";
import { Container, CtaBand, PageHero } from "@/components/ui";
import { TOOLS } from "@/content/tools";

export const metadata: Metadata = withSocial({
  title: "Free Payroll Calculators for India",
  description: "Free in-hand salary, gratuity, PF and professional tax calculators for Indian employers and employees, using FY 2025-26 rules.",
  alternates: { canonical: "/tools" },
});

export default function ToolsPage() {
  return (
    <>
      <PageHero keyword="Free payroll calculators for India" title="Payroll maths, done for you." intro="Work out take-home pay, gratuity, PF and professional tax in seconds. Free, no sign-up." />
      <section className="py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {TOOLS.map((tool) => (
            <Link key={tool.slug} href={`/tools/${tool.slug}`} className="group rounded-3xl border border-slate-200 p-8 transition hover:border-brand-200 hover:shadow-xl">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600"><Icon name={tool.icon} className="size-6" /></span>
              <h2 className="mt-6 text-2xl font-semibold text-slate-950">{tool.name}</h2>
              <p className="mt-2 text-slate-600">{tool.intro}</p>
              <span className="mt-5 inline-flex items-center gap-1 font-semibold text-brand-600">Open calculator <ArrowRight className="size-4 transition group-hover:translate-x-0.5" /></span>
            </Link>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
