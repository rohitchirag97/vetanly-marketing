import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { JsonLd } from "./seo";
import { CONTACT_EMAIL, GA_ID, SITE_ORIGIN } from "./site-config";
import { Analytics } from "@/components/analytics";
import { LEGAL, SOCIAL } from "@/content/legal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

// Under 60 characters so search results show it in full; keyword first.
const title = "Face Recognition Attendance & Payroll Software | Vetanly";
const description =
  "Face-recognition attendance kiosks, GPS check-in, shifts, leave and Indian payroll with PF, ESI, PT and TDS, in one place for growing teams.";

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

// Only the basic Latin file is preloaded (it is all the headline text needs); the rupee sign's file still loads when used.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#5938E8",
  colorScheme: "light",
};

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
      logo: `${SITE_ORIGIN}/icon.svg`,
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
    <html lang="en-IN" className={inter.variable}>
      <body suppressHydrationWarning>
        {organizationJsonLd && <JsonLd data={organizationJsonLd} />}
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow">
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
