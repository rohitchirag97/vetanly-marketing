import type { Metadata } from "next";

import { Container, CtaBand, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "Vetanly is built in India for businesses that want honest attendance and correct payroll without a stack of disconnected tools.",
  alternates: { canonical: "/about" },
};

const beliefs = [
  { title: "Attendance should be true", body: "If payroll depends on attendance, attendance has to be real. That is why face recognition with liveness checks sits at the heart of Vetanly." },
  { title: "One source of truth", body: "Attendance, leave, loans, claims and payroll belong in one place, so month-end is a review rather than a rebuild." },
  { title: "Built for Indian businesses", body: "PF, ESI, professional tax by state, TDS under both regimes, bonus and gratuity rules: compliance is part of the product, not a bolt-on." },
  { title: "Fair, simple pricing", body: "One price per employee with every feature included, so small teams get the same product as large ones." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Vetanly"
        title="Vetan means salary. Getting it right starts with attendance."
        intro="Vetanly began with a simple question: why is it still so hard to know who came to work, and to pay them correctly for it? We are building the answer for Indian businesses, from the factory gate to the bank transfer."
      />
      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="What we believe" title="Principles behind the product" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {beliefs.map((belief) => (
              <div key={belief.title} className="rounded-2xl border border-slate-200 p-7">
                <h2 className="text-xl font-semibold text-slate-950">{belief.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{belief.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
