import type { Metadata } from "next";
import Link from "next/link";

import { withSocial } from "@/app/seo";
import { Icon } from "@/components/icons";
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
      <section className="py-(--section-gap)">
        <Container className="grid gap-x-(--gap-columns) md:grid-cols-2">
          {TOOLS.map((tool) => (
            <Link key={tool.slug} href={`/tools/${tool.slug}`} className="group flex flex-col border-t border-ink py-8 transition-colors duration-(--dur-short) hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
              <span className="flex items-center gap-3">
                <Icon name={tool.icon} className="size-6 shrink-0 text-accent" />
                <h2 className="text-3xl text-ink group-hover:text-accent">{tool.name}</h2>
              </span>
              <p className="mt-3 text-lg text-muted">{tool.intro}</p>
            </Link>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
