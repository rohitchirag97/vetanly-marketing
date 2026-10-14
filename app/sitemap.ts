import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_ORIGIN) return [];
  return [{ url: SITE_ORIGIN, priority: 1, changeFrequency: "weekly" }];
}
