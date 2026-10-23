import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd, breadcrumbJsonLd, faqJsonLd, withSocial } from "@/app/seo";
import { SITE_ORIGIN } from "@/app/site-config";
import { GratuityCalculator, InHandSalaryCalculator, PfCalculator, ProfessionalTaxCalculator } from "@/components/calculators";
import { ArrowRight } from "@/components/icons";
import { Container, CtaBand, Faqs, FeatureCard, PageHero, SectionHeading } from "@/components/ui";
import { featureBySlug } from "@/content/features";
import { TOOLS, toolBySlug } from "@/content/tools";
import { PT_STATES, ptSlabs } from "@/lib/payroll-rules";

const CALCULATORS: Record<string, () => React.ReactNode> = {
  "in-hand-salary-calculator": InHandSalaryCalculator,
  "gratuity-calculator": GratuityCalculator,
  "pf-calculator": PfCalculator,
  "professional-tax-calculator": ProfessionalTaxCalculator,
};

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tools/[slug]">): Promise<Metadata> {
  const tool = toolBySlug((await params).slug);
  if (!tool) return { robots: { index: false } };
  return withSocial({ title: tool.seoTitle, description: tool.seoDescription, alternates: { canonical: `/tools/${tool.slug}` } });
}

const rupee = (value: number) => `₹${value.toLocaleString("en-IN")}`;

/** The slab table people search for alongside the PT calculator. */
function PtSlabTables() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {PT_STATES.map((state) => {
        let from = 0;
        return (
          <div key={state.code} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-950">{state.name}{state.code === "MH" ? " (men)" : ""}</h3>
            <table className="mt-3 w-full text-sm">
              <thead><tr className="text-left text-slate-500"><th className="py-1 font-medium">Monthly gross</th><th className="py-1 text-right font-medium">PT</th></tr></thead>
              <tbody className="divide-y divide-slate-100">
                {ptSlabs(state.code).map((slab) => {
                  const range = slab.upTo === Infinity ? `Above ${rupee(from)}` : `${rupee(from === 0 ? 0 : from + 1)} – ${rupee(slab.upTo)}`;
                  from = slab.upTo;
                  return (
                    <tr key={range}>
                      <td className="py-1.5 text-slate-700">{range}</td>
                      <td className="py-1.5 text-right font-semibold text-slate-900">{rupee(slab.amount)}{slab.februaryAmount ? ` (${rupee(slab.februaryAmount)} in Feb)` : ""}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default async function ToolPage({ params }: PageProps<"/tools/[slug]">) {
  const tool = toolBySlug((await params).slug);
  if (!tool) notFound();
  const Calculator = CALCULATORS[tool.slug];
  const feature = featureBySlug(tool.feature);

  return (
    <>
      <JsonLd data={faqJsonLd(tool.faqs)} />
      {SITE_ORIGIN && <JsonLd data={breadcrumbJsonLd(SITE_ORIGIN, [{ name: "Home", path: "/" }, { name: "Free tools", path: "/tools" }, { name: tool.name, path: `/tools/${tool.slug}` }])} />}
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", name: tool.seoTitle, applicationCategory: "FinanceApplication", operatingSystem: "Any", isAccessibleForFree: true, offers: { "@type": "Offer", price: 0, priceCurrency: "INR" } }} />
      <PageHero keyword={tool.name} title={tool.headline} intro={tool.intro} />

      <section className="bg-linear-to-b from-white to-brand-50/40 py-14">
        <Container className="max-w-5xl">
          <Calculator />
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-950">How it is calculated</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-700">
            {tool.method.map((line) => <li key={line}>{line}</li>)}
          </ul>
        </Container>
      </section>

      {tool.slug === "professional-tax-calculator" && (
        <section className="bg-slate-50 py-16">
          <Container>
            <SectionHeading eyebrow="Slabs" title="Professional tax slabs by state" />
            <div className="mt-10"><PtSlabTables /></div>
          </Container>
        </section>
      )}

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Questions" title={`${tool.name}, answered.`} />
          <Faqs faqs={tool.faqs} />
        </Container>
      </section>

      <section className="pb-4">
        <Container>
          <h2 className="mb-8 text-2xl font-bold text-slate-950">Let Vetanly do this every month</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {feature && <FeatureCard feature={feature} />}
            {TOOLS.filter((other) => other.slug !== tool.slug).slice(0, 2).map((other) => (
              <Link key={other.slug} href={`/tools/${other.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-200 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-slate-950">{other.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{other.intro}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">Open calculator <ArrowRight className="size-4" /></span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Stop calculating payroll by hand." />
    </>
  );
}
