import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui";

// Overrides the layout's "index, follow" so the 404 carries a single noindex.
export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

const popular = [
  { href: "/features/face-recognition-attendance", label: "Face recognition attendance" },
  { href: "/features/payroll", label: "Payroll" },
  { href: "/pricing", label: "Pricing" },
  { href: "/tools", label: "Free payroll calculators" },
  { href: "/guides", label: "Guides" },
  { href: "/contact", label: "Contact us" },
];

export default function NotFound() {
  return (
    <Container className="flex min-h-[60dvh] flex-col justify-center py-(--space-3xl)">
      <p className="num text-xl text-accent">404</p>
      <h1 className="mt-4 text-ink">This page is absent today.</h1>
      <p className="lead mt-5 text-muted">The page you were looking for does not exist or has moved.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn--primary">Home</Link>
        <Link href="/features" className="btn">All features</Link>
      </div>
      <nav aria-label="Popular pages" className="mt-14 max-w-2xl border-t border-ink pt-5">
        <p className="font-medium text-ink">Popular pages</p>
        <ul className="mt-3 grid gap-x-(--gap-columns) sm:grid-cols-2">
          {popular.map((page) => (
            <li key={page.href} className="border-b border-rule py-3"><Link href={page.href} className="link">{page.label}</Link></li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
