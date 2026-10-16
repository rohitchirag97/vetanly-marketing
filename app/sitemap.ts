import type { MetadataRoute } from "next";

import { FEATURES, SOLUTIONS } from "@/content/features";
import { SITE_ORIGIN } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_ORIGIN) return [];
  const lastModified = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({ url: `${SITE_ORIGIN}${path}`, lastModified, priority, changeFrequency: "monthly" });
  return [
    { url: SITE_ORIGIN, lastModified, priority: 1, changeFrequency: "weekly" },
    page("/features", 0.9),
    page("/features/face-recognition-attendance", 0.9),
    ...FEATURES.filter((f) => f.slug !== "face-recognition-attendance").map((f) => page(`/features/${f.slug}`, 0.7)),
    page("/solutions", 0.6),
    ...SOLUTIONS.map((s) => page(`/solutions/${s.slug}`, 0.6)),
    page("/pricing", 0.8),
    page("/security", 0.5),
    page("/about", 0.4),
    page("/contact", 0.5),
    page("/privacy", 0.3),
    page("/terms", 0.3),
    page("/refund-policy", 0.3),
  ];
}
