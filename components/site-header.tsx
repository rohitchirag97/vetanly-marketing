import Link from "next/link";

import { LOGIN_URL } from "@/app/site-config";
import { BrandMark, Icon } from "@/components/icons";
import { CATEGORIES, FEATURES, SOLUTIONS } from "@/content/features";

const navLink =
  "inline-flex min-h-11 items-center rounded-pill px-3 text-sm font-medium text-ink-2 transition-colors duration-(--dur-short) hover:bg-paper-3 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus";
const menuLink = "flex items-start gap-2.5 rounded-pill px-2 py-1.5 transition-colors duration-(--dur-short) hover:bg-paper-3 focus-visible:outline-2 focus-visible:outline-focus";

/** Hover or focus opens a menu; no JavaScript needed. */
function Dropdown({ label, children, wide }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className="group relative">
      <button type="button" className={`${navLink} gap-1`} aria-haspopup="true">
        {label}
        <svg viewBox="0 0 20 20" className="size-4 transition-transform duration-(--dur-short) group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true">
          <path d="m5 8 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={`invisible absolute left-1/2 top-full z-(--z-dropdown) -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-(--dur-short) group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${wide ? "w-[min(920px,92vw)]" : "w-80"}`}
      >
        <div className="rounded-card bg-paper-2 p-4 shadow-lift ring-1 ring-ink">{children}</div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-(--z-sticky-nav) border-b border-ink bg-paper">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 rounded-pill focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus" aria-label="Vetanly home">
          <BrandMark />
          <span className="font-display text-xl tracking-[-0.02em] text-ink">vetanly</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <Dropdown label="Features" wide>
            <div className="grid gap-x-6 gap-y-4 md:grid-cols-[1.1fr_1fr_1fr]">
              <Link href="/features/face-recognition-attendance" className="row-span-2 flex flex-col justify-between rounded-card bg-ink p-5 text-paper-2 transition-colors duration-(--dur-short) hover:bg-ink-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
                <span>
                  <Icon name="face" className="size-8 text-mint" />
                  <span className="mt-3 block font-display text-xl">Face recognition attendance</span>
                  <span className="mt-1 block text-sm text-ink-muted">Touch-free kiosks with liveness checks. No cards, no buddy punching.</span>
                </span>
                <span className="mt-4 text-sm font-medium underline underline-offset-4">See how it works</span>
              </Link>
              {CATEGORIES.map((category) => (
                <div key={category.name}>
                  <p className="px-2 text-sm text-muted">{category.name}</p>
                  <ul className="mt-1">
                    {FEATURES.filter((f) => f.category === category.name && f.slug !== "face-recognition-attendance").map((feature) => (
                      <li key={feature.slug}>
                        <Link href={`/features/${feature.slug}`} className={menuLink}>
                          <Icon name={feature.icon} className="mt-0.5 size-4 shrink-0 text-accent" />
                          <span className="text-sm font-medium text-ink">{feature.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-rule pt-3 text-sm">
              <span className="text-muted">Every feature is included in every plan.</span>
              <Link href="/features" className="link">All features</Link>
            </div>
          </Dropdown>
          <Dropdown label="Solutions">
            <ul>
              {SOLUTIONS.map((solution) => (
                <li key={solution.slug}>
                  <Link href={`/solutions/${solution.slug}`} className={`${menuLink} items-center py-2`}>
                    <Icon name={solution.icon} className="size-4 shrink-0 text-accent" />
                    <span className="text-sm font-medium text-ink">{solution.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Dropdown>
          <Link href="/pricing" className={navLink}>Pricing</Link>
          <Link href="/security" className={navLink}>Security</Link>
          <Link href="/contact" className={navLink}>Contact</Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={LOGIN_URL} className={navLink}>Sign in</a>
          <a href={LOGIN_URL} className="btn btn--sm">Start free trial</a>
        </div>

        <details className="group/menu lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-pill border border-rule bg-paper-2 focus-visible:outline-2 focus-visible:outline-focus" aria-label="Menu">
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </summary>
          <div className="absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-ink bg-paper px-4 pb-6 pt-2">
            <p className="px-2 pt-3 text-sm text-muted">Features</p>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <Link key={feature.slug} href={`/features/${feature.slug}`} className={`${menuLink} items-center py-2 text-sm font-medium text-ink`}>
                  <Icon name={feature.icon} className="size-4 text-accent" /> {feature.name}
                </Link>
              ))}
            </div>
            <p className="px-2 pt-4 text-sm text-muted">Solutions</p>
            {SOLUTIONS.map((solution) => (
              <Link key={solution.slug} href={`/solutions/${solution.slug}`} className={`${menuLink} py-2 text-sm font-medium text-ink`}>{solution.name}</Link>
            ))}
            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-rule pt-4">
              <Link href="/pricing" className="btn btn--sm">Pricing</Link>
              <Link href="/security" className="btn btn--sm">Security</Link>
              <Link href="/contact" className="btn btn--sm">Contact</Link>
            </div>
            <a href={LOGIN_URL} className="btn btn--primary mt-4 w-full">Start free trial</a>
            <a href={LOGIN_URL} className="mt-2 flex min-h-11 items-center justify-center text-sm font-medium text-ink-2">Sign in</a>
          </div>
        </details>
      </div>
    </header>
  );
}
