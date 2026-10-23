import type { MetadataRoute } from "next";

import { COMPARISONS } from "@/content/compare";
import { FEATURES, SOLUTIONS } from "@/content/features";
import { GUIDES } from "@/content/guides";
import { TOOLS } from "@/content/tools";
import { SITE_ORIGIN } from "./site-config";

// No lastModified except where a page has a real date: a build-time "now" on every URL teaches Google to ignore it.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_ORIGIN) return [];
  const page = (path: string, priority: number, lastModified?: string): MetadataRoute.Sitemap[number] => ({ url: `${SITE_ORIGIN}${path}`, priority, ...(lastModified ? { lastModified } : {}) });
  return [
    page("", 1),
    page("/features", 0.9),
    page("/features/face-recognition-attendance", 0.9),
    ...FEATURES.filter((f) => f.slug !== "face-recognition-attendance").map((f) => page(`/features/${f.slug}`, 0.7)),
    page("/solutions", 0.6),
    ...SOLUTIONS.map((s) => page(`/solutions/${s.slug}`, 0.6)),
    page("/pricing", 0.8),
    page("/tools", 0.7),
    ...TOOLS.map((t) => page(`/tools/${t.slug}`, 0.8)),
    ...COMPARISONS.map((c) => page(`/compare/${c.slug}`, 0.7)),
    page("/guides", 0.6),
    ...GUIDES.map((g) => page(`/guides/${g.slug}`, 0.6, g.updated)),
    page("/security", 0.5),
    page("/about", 0.4),
    page("/contact", 0.5),
    page("/privacy", 0.3),
    page("/terms", 0.3),
    page("/refund-policy", 0.3),
  ];
}
