import type { Metadata } from "next";
import Link from "next/link";

import { withSocial } from "@/app/seo";
import { ArrowRight } from "@/components/icons";
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
      <section className="py-20">
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group flex flex-col rounded-3xl border border-slate-200 p-7 transition hover:border-brand-200 hover:shadow-xl">
              <h2 className="text-xl font-semibold text-slate-950">{guide.title}</h2>
              <p className="mt-3 flex-1 text-slate-600">{guide.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1 font-semibold text-brand-600">Read the guide <ArrowRight className="size-4 transition group-hover:translate-x-0.5" /></span>
            </Link>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
