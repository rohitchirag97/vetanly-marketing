import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "./site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(SITE_ORIGIN ? { sitemap: SITE_ORIGIN + "/sitemap.xml" } : {}),
  };
}
