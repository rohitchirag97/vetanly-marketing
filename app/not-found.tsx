import Link from "next/link";

import { Container } from "@/components/ui";

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
    </Container>
  );
}
