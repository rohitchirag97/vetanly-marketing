import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd, breadcrumbJsonLd, faqJsonLd, withSocial } from "@/app/seo";
import { SITE_ORIGIN } from "@/app/site-config";
import { GratuityCalculator, InHandSalaryCalculator, PfCalculator, ProfessionalTaxCalculator } from "@/components/calculators";
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
    <div className="grid gap-x-(--gap-columns) gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      {PT_STATES.map((state) => {
        let from = 0;
        return (
          <div key={state.code} className="border-t border-ink pt-4">
            <h3 className="text-xl text-ink">{state.name}{state.code === "MH" ? " (men)" : ""}</h3>
            <table className="mt-3 w-full text-sm">
              <thead><tr className="text-left text-muted"><th scope="col" className="py-1 font-normal">Monthly gross</th><th scope="col" className="py-1 text-right font-normal">PT</th></tr></thead>
              <tbody className="divide-y divide-grid-strong">
                {ptSlabs(state.code).map((slab) => {
                  const range = slab.upTo === Infinity ? `Above ${rupee(from)}` : `${rupee(from === 0 ? 0 : from + 1)} to ${rupee(slab.upTo)}`;
                  from = slab.upTo;
                  return (
                    <tr key={range}>
                      <td className="py-1.5 text-ink-2">{range}</td>
                      <td className="py-1.5 text-right num text-ink">{rupee(slab.amount)}{slab.februaryAmount ? ` (${rupee(slab.februaryAmount)} in Feb)` : ""}</td>
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

      <section className="bg-paper-2 py-(--space-3xl)">
        <Container>
          <Calculator />
        </Container>
      </section>

      <section className="border-t border-ink py-(--section-gap-s)">
        <Container className="grid gap-x-(--gap-columns) gap-y-8 lg:grid-cols-12">
          <h2 className="text-ink lg:col-span-4">How it is calculated</h2>
          <ul className="ruled text-lg text-ink-2 lg:col-span-7 lg:col-start-6">
            {tool.method.map((line) => <li key={line} className="py-4">{line}</li>)}
          </ul>
        </Container>
      </section>

      {tool.slug === "professional-tax-calculator" && (
        <section className="bg-paper-3 py-(--section-gap-s)">
          <Container>
            <SectionHeading title="Professional tax slabs by state" />
            <div className="mt-10"><PtSlabTables /></div>
          </Container>
        </section>
      )}

      <section className="py-(--section-gap)">
        <Container className="grid gap-x-(--gap-columns) gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading title={`${tool.name}, answered.`} /></div>
          <div className="lg:col-span-8"><Faqs faqs={tool.faqs} /></div>
        </Container>
      </section>

      <section className="pb-(--section-gap-s)">
        <Container>
          <h2 className="mb-6 text-ink">Let Vetanly do this every month</h2>
          <div className="grid gap-x-(--gap-columns) md:grid-cols-3">
            {feature && <FeatureCard feature={feature} />}
            {TOOLS.filter((other) => other.slug !== tool.slug).slice(0, 2).map((other) => (
              <Link key={other.slug} href={`/tools/${other.slug}`} className="group flex flex-col gap-3 border-t border-ink py-6 transition-colors duration-(--dur-short) hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
                <h3 className="text-xl text-ink group-hover:text-accent">{other.name}</h3>
                <p className="text-muted">{other.intro}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Stop calculating payroll by hand." />
    </>
  );
}
