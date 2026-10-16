import Link from "next/link";

import { CONTACT_EMAIL, CONTACT_WHATSAPP, GA_ID, LOGIN_URL } from "@/app/site-config";
import { CookieSettingsButton } from "@/components/analytics";
import { BrandMark } from "@/components/icons";
import { CATEGORIES, FEATURES, SOLUTIONS } from "@/content/features";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <BrandMark />
            <span className="text-lg font-bold text-white">vetanly</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6">
            Face-recognition attendance, HR and Indian payroll in one place, for teams that want every day and every rupee accounted for.
          </p>
          <div className="mt-5 space-y-1 text-sm">
            {CONTACT_EMAIL && <a href={`mailto:${CONTACT_EMAIL}`} className="block hover:text-white">{CONTACT_EMAIL}</a>}
            {CONTACT_WHATSAPP && <a href={`https://wa.me/${CONTACT_WHATSAPP}`} className="block hover:text-white">WhatsApp us</a>}
          </div>
        </div>
        {CATEGORIES.slice(0, 2).map((category) => (
          <div key={category.name}>
            <p className="text-sm font-semibold text-white">{category.name}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {FEATURES.filter((f) => f.category === category.name).map((feature) => (
                <li key={feature.slug}><Link href={`/features/${feature.slug}`} className="hover:text-white">{feature.name}</Link></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-sm font-semibold text-white">People & insights</p>
          <ul className="mt-3 space-y-2 text-sm">
            {FEATURES.filter((f) => f.category === "People" || f.category === "Insights").map((feature) => (
              <li key={feature.slug}><Link href={`/features/${feature.slug}`} className="hover:text-white">{feature.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/features" className="hover:text-white">All features</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/security" className="hover:text-white">Security</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><a href={LOGIN_URL} className="hover:text-white">Sign in</a></li>
          </ul>
          <p className="mt-6 text-sm font-semibold text-white">Solutions</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SOLUTIONS.map((solution) => (
              <li key={solution.slug}><Link href={`/solutions/${solution.slug}`} className="hover:text-white">{solution.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-xs sm:px-6">
          <span>© 2026 Vetanly. Made in India.</span>
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/refund-policy" className="hover:text-white">Refunds</Link>
            {GA_ID && <CookieSettingsButton className="hover:text-white" />}
            <span>Prices exclude GST.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
