import Link from "next/link";

import { LOGIN_URL } from "@/app/site-config";
import { ArrowRight, BrandMark, Icon } from "@/components/icons";
import { CATEGORIES, FEATURES, SOLUTIONS } from "@/content/features";

const navLink = "rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950";

/** Hover or focus opens a menu; no JavaScript needed. */
function Dropdown({ label, children, wide }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className="group relative">
      <button type="button" className={`${navLink} inline-flex items-center gap-1`} aria-haspopup="true">
        {label}
        <svg viewBox="0 0 20 20" className="size-4 transition group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true">
          <path d="m5 8 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={`invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${wide ? "w-[min(920px,92vw)]" : "w-80"}`}
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10">{children}</div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Vetanly home">
          <BrandMark />
          <span className="text-lg font-bold tracking-tight text-slate-950">
            vetanly
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <Dropdown label="Features" wide>
            <div className="grid gap-x-6 gap-y-4 md:grid-cols-[1.1fr_1fr_1fr]">
              <Link href="/features/face-recognition-attendance" className="row-span-2 flex flex-col justify-between rounded-xl bg-linear-to-br from-brand-600 to-brand-800 p-5 text-white">
                <span>
                  <Icon name="face" className="size-8" />
                  <span className="mt-3 block text-lg font-semibold">Face recognition attendance</span>
                  <span className="mt-1 block text-sm text-brand-100">Touch-free kiosks with liveness checks. No cards, no buddy punching.</span>
                </span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">See how it works <ArrowRight /></span>
              </Link>
              {CATEGORIES.map((category) => (
                <div key={category.name}>
                  <p className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{category.name}</p>
                  <ul className="mt-1">
                    {FEATURES.filter((f) => f.category === category.name && f.slug !== "face-recognition-attendance").map((feature) => (
                      <li key={feature.slug}>
                        <Link href={`/features/${feature.slug}`} className="flex items-start gap-2.5 rounded-lg px-2 py-1.5 hover:bg-slate-50">
                          <Icon name={feature.icon} className="mt-0.5 size-4 shrink-0 text-brand-600" />
                          <span className="text-sm font-medium text-slate-800">{feature.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-sm">
              <span className="text-slate-500">Every feature is included in every plan.</span>
              <Link href="/features" className="inline-flex items-center gap-1 font-semibold text-brand-600">All features <ArrowRight /></Link>
            </div>
          </Dropdown>
          <Dropdown label="Solutions">
            <ul>
              {SOLUTIONS.map((solution) => (
                <li key={solution.slug}>
                  <Link href={`/solutions/${solution.slug}`} className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-slate-50">
                    <span className="grid size-9 place-items-center rounded-lg bg-brand-50 text-brand-600"><Icon name={solution.icon} className="size-4" /></span>
                    <span className="text-sm font-medium text-slate-800">{solution.name}</span>
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
          <a href={LOGIN_URL} className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
            Start free trial <ArrowRight />
          </a>
        </div>

        <details className="group/menu lg:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200" aria-label="Menu">
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </summary>
          <div className="absolute inset-x-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-slate-200 bg-white px-4 pb-6 pt-2 shadow-xl">
            <p className="px-2 pt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Features</p>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <Link key={feature.slug} href={`/features/${feature.slug}`} className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm font-medium text-slate-800">
                  <Icon name={feature.icon} className="size-4 text-brand-600" /> {feature.name}
                </Link>
              ))}
            </div>
            <p className="px-2 pt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Solutions</p>
            {SOLUTIONS.map((solution) => (
              <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="block rounded-lg px-2 py-2 text-sm font-medium text-slate-800">{solution.name}</Link>
            ))}
            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-sm font-medium">
              <Link href="/pricing" className="rounded-lg bg-slate-50 px-3 py-2 text-center">Pricing</Link>
              <Link href="/security" className="rounded-lg bg-slate-50 px-3 py-2 text-center">Security</Link>
              <Link href="/contact" className="rounded-lg bg-slate-50 px-3 py-2 text-center">Contact</Link>
            </div>
            <a href={LOGIN_URL} className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-700">Start free trial <ArrowRight /></a>
            <a href={LOGIN_URL} className="mt-2 block text-center text-sm font-medium text-slate-600">Sign in</a>
          </div>
        </details>
      </div>
    </header>
  );
}
