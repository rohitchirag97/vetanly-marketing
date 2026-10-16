import Link from "next/link";

import { ArrowRight } from "@/components/icons";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold text-brand-600">404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">This page is absent today.</h1>
      <p className="mt-4 text-slate-600">The page you were looking for does not exist or has moved.</p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white">Home <ArrowRight /></Link>
        <Link href="/features" className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800">All features</Link>
      </div>
    </Container>
  );
}
