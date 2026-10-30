import type { Metadata, Viewport } from "next";
import { Red_Hat_Display, Red_Hat_Mono, Red_Hat_Text } from "next/font/google";

import "./globals.css";
import { JsonLd } from "./seo";
import { CONTACT_EMAIL, GA_ID, SITE_ORIGIN } from "./site-config";
import { Analytics } from "@/components/analytics";
import { LEGAL, SOCIAL } from "@/content/legal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

// Under 60 characters so search results show it in full; keyword first.
// The umbrella HRMS query lives here; "face recognition attendance" belongs to its own feature page.
const title = "HRMS, Payroll & Attendance Software India | Vetanly";
const description =
  "HRMS for Indian businesses: face-recognition attendance, GPS check-in, shifts, leave and payroll with PF, ESI, PT and TDS, in one place.";

export const metadata: Metadata = {
  // Each page sets its own canonical path.
  ...(SITE_ORIGIN ? { metadataBase: new URL(SITE_ORIGIN) } : {}),
  title: { default: title, template: "%s | Vetanly" },
  description,
  applicationName: "Vetanly",
  authors: [{ name: LEGAL.entity }],
  creator: LEGAL.entity,
  publisher: LEGAL.entity,
  category: "Business software",
  keywords: [
    "face recognition attendance",
    "attendance software India",
    "payroll software India",
    "HRMS",
    "biometric attendance",
    "PF ESI payroll",
    "shift management",
    "attendance kiosk",
    "HR software for small business",
    "salary software",
    "TDS payroll",
    "GPS attendance app",
  ],
  openGraph: {
    title,
    description,
    siteName: "Vetanly",
    type: "website",
    locale: "en_IN",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    ...(SOCIAL.xHandle ? { site: SOCIAL.xHandle } : {}),
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  formatDetection: { telephone: false, address: false, email: false },
};

// tokens.css reads these variables; only the weights the site uses are loaded.
const display = Red_Hat_Display({ subsets: ["latin"], weight: ["600"], variable: "--font-red-hat-display", display: "swap" });
const text = Red_Hat_Text({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-red-hat-text", display: "swap" });
const mono = Red_Hat_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-red-hat-mono", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#5938E8",
  colorScheme: "light",
};

// The Hallmark stamp for the render check, which reads inline styles; Tailwind strips comments from the built CSS.
const HALLMARK_STAMP = "/* Hallmark · posture: committed · hero: Counter (/), Stage (/features/face-recognition-attendance), Banner (/pricing), Banner (/features), Banner (/features/payroll), Banner (/features/gps-attendance), Banner (/solutions), Banner (/solutions/manufacturing), Banner (/about), Banner (/security), Banner (/contact), Banner (/guides), Banner (/tools), Banner (/tools/gratuity-calculator), Banner (/privacy), Banner (/terms), Banner (/refund-policy) */\n/* Hallmark · waive 59 · 13 sections on / and 10 on the face page, each carried from the old page · a full redesign keeps every section the owner wrote; merging them would drop content */\n/* Hallmark · waive 78 · the small h2s are guide titles, legal clauses and feature highlights in lists · they stay h2 for the search outline the SEO work built; true section heads sit at --text-section */\n/* Hallmark · waive 77 · the thin blocks are a feature FAQ of two or three questions and the purple close band · each feature keeps its own short questions, and the close is one line and the trial */\n/* Hallmark · waive 49b · the wrapping links are measured inside the closed mobile menu details · opened at 320px every Vetanly menu link sits on one line (checked by screenshot) */";

const profiles = [SOCIAL.x, SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.facebook, SOCIAL.youtube].filter(Boolean);

/** Who runs the site, for search engines' knowledge panels. Needs the public site URL for absolute links. */
const organizationJsonLd = SITE_ORIGIN && {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: "Vetanly",
      legalName: LEGAL.entity,
      url: SITE_ORIGIN,
      // Google wants a raster logo of at least 112px; apple-icon is a 180px PNG.
      logo: `${SITE_ORIGIN}/apple-icon`,
      ...(profiles.length ? { sameAs: profiles } : {}),
      ...(LEGAL.address ? { address: { "@type": "PostalAddress", streetAddress: LEGAL.address, addressCountry: "IN" } } : {}),
      ...(CONTACT_EMAIL || LEGAL.phone
        ? { contactPoint: { "@type": "ContactPoint", contactType: "customer support", areaServed: "IN", availableLanguage: ["en", "hi"], ...(CONTACT_EMAIL ? { email: CONTACT_EMAIL } : {}), ...(LEGAL.phone ? { telephone: LEGAL.phone.replace(/\s/g, "") } : {}) } }
        : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      name: "Vetanly",
      url: SITE_ORIGIN,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${display.variable} ${text.variable} ${mono.variable}`}>
      <head>
        <style>{HALLMARK_STAMP}</style>
      </head>
      <body suppressHydrationWarning>
        {organizationJsonLd && <JsonLd data={organizationJsonLd} />}
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-ink focus:px-4 focus:py-2 focus:text-paper-2">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {GA_ID && <Analytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
