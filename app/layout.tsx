import type { Metadata } from "next";
import "./globals.css";
import { SITE_ORIGIN } from "./site-config";

const title = "HazriPro | Employee Attendance, HR and Payroll";
const description =
  "Connect employee attendance, leave, people records and payroll in one clear workspace. Prepare and review payroll with HazriPro.";

export const metadata: Metadata = {
  ...(SITE_ORIGIN
    ? {
        metadataBase: new URL(SITE_ORIGIN),
        alternates: { canonical: "/" },
      }
    : {}),
  title: { default: title, template: "%s | HazriPro" },
  description,
  applicationName: "HazriPro",
  openGraph: {
    title,
    description,
    siteName: "HazriPro",
    type: "website",
    locale: "en_IN",
    ...(SITE_ORIGIN ? { url: SITE_ORIGIN } : {}),
    ...(SITE_ORIGIN ? { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "HazriPro employee attendance and payroll workspace" }] } : {}),
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
