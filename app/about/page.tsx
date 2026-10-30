import type { Metadata } from "next";
import { withSocial } from "@/app/seo";

import { Container, CtaBand, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = withSocial({
  title: "About Us: HR & Payroll Software Built in India",
  description: "Vetanly is built in India for businesses that want honest attendance and correct payroll without a stack of disconnected tools.",
  alternates: { canonical: "/about" },
});

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
      <section className="py-(--section-gap)">
        <Container className="grid gap-x-(--gap-columns) gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading title="Principles behind the product" />
          </div>
          <ol className="border-t border-ink lg:col-span-8">
            {beliefs.map((belief, index) => (
              <li key={belief.title} className="grid gap-x-(--gap-columns) gap-y-2 border-b border-rule py-8 sm:grid-cols-[3rem_minmax(0,1fr)]">
                <span className="num text-xl text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-2xl text-ink">{belief.title}</h2>
                  <p className="mt-3 text-lg text-muted">{belief.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
