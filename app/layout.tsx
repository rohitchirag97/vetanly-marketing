import type { Metadata } from "next";

import "./globals.css";
import { SITE_ORIGIN } from "./site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const title = "Vetanly | Face Recognition Attendance, HR & Payroll Software";
const description =
  "Face-recognition attendance kiosks, GPS check-in, shifts, leave, employee records and Indian payroll with PF, ESI, PT and TDS, in one workspace for growing teams.";

export const metadata: Metadata = {
  // Each page sets its own canonical path.
  ...(SITE_ORIGIN ? { metadataBase: new URL(SITE_ORIGIN) } : {}),
  title: { default: title, template: "%s | Vetanly" },
  description,
  applicationName: "Vetanly",
  keywords: [
    "face recognition attendance",
    "attendance software India",
    "payroll software India",
    "HRMS",
    "biometric attendance",
    "PF ESI payroll",
    "shift management",
  ],
  openGraph: {
    title,
    description,
    siteName: "Vetanly",
    type: "website",
    locale: "en_IN",
    ...(SITE_ORIGIN ? { url: SITE_ORIGIN } : {}),
    ...(SITE_ORIGIN ? { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vetanly face recognition attendance and payroll" }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    ...(SITE_ORIGIN ? { images: ["/opengraph-image"] } : {}),
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN">
      <body suppressHydrationWarning>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
