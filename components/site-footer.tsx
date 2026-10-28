import Link from "next/link";

import { CONTACT_EMAIL, CONTACT_WHATSAPP, GA_ID, LOGIN_URL } from "@/app/site-config";
import { CookieSettingsButton } from "@/components/analytics";
import { BrandMark } from "@/components/icons";
import { COMPARISONS } from "@/content/compare";
import { CATEGORIES, FEATURES, SOLUTIONS } from "@/content/features";
import { TOOLS } from "@/content/tools";

const footLink = "rounded-[2px] transition-colors duration-(--dur-short) hover:text-paper-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="border-b border-ink-rule pb-3 text-sm text-ink-muted">{title}</p>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="container grid gap-x-(--gap-columns) gap-y-12 py-(--space-3xl) sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-[1.3fr_repeat(4,minmax(0,1fr))]">
        <div>
          <Link href="/" className={`inline-flex items-center gap-2.5 ${footLink}`}>
            <BrandMark />
            <span className="font-display text-xl tracking-[-0.02em] text-paper-2">vetanly</span>
          </Link>
          <p className="mt-5 max-w-xs">
            Face-recognition attendance, HR and Indian payroll in one place, for teams that want every day and every rupee accounted for.
          </p>
          <div className="mt-6 space-y-2">
            {CONTACT_EMAIL && <a href={`mailto:${CONTACT_EMAIL}`} className={`block text-paper-2 ${footLink}`}>{CONTACT_EMAIL}</a>}
            {CONTACT_WHATSAPP && <a href={`https://wa.me/${CONTACT_WHATSAPP}`} className={`block text-paper-2 ${footLink}`}>WhatsApp us</a>}
          </div>
        </div>
        {CATEGORIES.slice(0, 2).map((category) => (
          <Column key={category.name} title={category.name}>
            {FEATURES.filter((f) => f.category === category.name).map((feature) => (
              <li key={feature.slug}><Link href={`/features/${feature.slug}`} className={footLink}>{feature.name}</Link></li>
            ))}
          </Column>
        ))}
        <div className="space-y-10">
          <Column title="People & insights">
            {FEATURES.filter((f) => f.category === "People" || f.category === "Insights").map((feature) => (
              <li key={feature.slug}><Link href={`/features/${feature.slug}`} className={footLink}>{feature.name}</Link></li>
            ))}
          </Column>
          <Column title="Free tools">
            {TOOLS.map((tool) => (
              <li key={tool.slug}><Link href={`/tools/${tool.slug}`} className={footLink}>{tool.name}</Link></li>
            ))}
          </Column>
        </div>
        <div className="space-y-10">
          <Column title="Company">
            <li><Link href="/features" className={footLink}>All features</Link></li>
            <li><Link href="/pricing" className={footLink}>Pricing</Link></li>
            <li><Link href="/security" className={footLink}>Security</Link></li>
            <li><Link href="/about" className={footLink}>About</Link></li>
            <li><Link href="/contact" className={footLink}>Contact</Link></li>
            <li><a href={LOGIN_URL} className={footLink}>Sign in</a></li>
          </Column>
          <Column title="Solutions">
            {SOLUTIONS.map((solution) => (
              <li key={solution.slug}><Link href={`/solutions/${solution.slug}`} className={footLink}>{solution.name}</Link></li>
            ))}
          </Column>
          <Column title="Resources">
            <li><Link href="/guides" className={footLink}>Guides</Link></li>
            {COMPARISONS.map((comparison) => (
              <li key={comparison.slug}><Link href={`/compare/${comparison.slug}`} className={footLink}>{comparison.competitor} alternative</Link></li>
            ))}
          </Column>
        </div>
      </div>
      <div className="border-t border-ink-rule">
        <div className="container flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-6 text-sm">
          <span>© 2026 Vetanly. Made in India.</span>
          <span className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/privacy" className={footLink}>Privacy policy</Link>
            <Link href="/terms" className={footLink}>Terms</Link>
            <Link href="/refund-policy" className={footLink}>Refunds</Link>
            {GA_ID && <CookieSettingsButton className={footLink} />}
            <span>Prices exclude GST.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
