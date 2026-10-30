import { NextResponse, type NextRequest } from "next/server";

import { COMPARISONS } from "@/content/compare";
import { FEATURES, SOLUTIONS } from "@/content/features";
import { GUIDES } from "@/content/guides";
import { TOOLS } from "@/content/tools";

/**
 * Unknown slugs would stream the not-found page with a 200 (a soft 404 to Google); `dynamicParams` is not
 * allowed with cacheComponents, so they are rejected here, before rendering, with a real 404.
 */
const KNOWN: Record<string, Set<string>> = {
  features: new Set(FEATURES.map((f) => f.slug)),
  solutions: new Set(SOLUTIONS.map((s) => s.slug)),
  tools: new Set(TOOLS.map((t) => t.slug)),
  guides: new Set(GUIDES.map((g) => g.slug)),
  compare: new Set(COMPARISONS.map((c) => c.slug)),
};

export function proxy(request: NextRequest) {
  const [, section, slug] = request.nextUrl.pathname.split("/");
  if (KNOWN[section]?.has(slug)) return NextResponse.next();
  // No route matches this path, so Next renders not-found.tsx with a 404 status.
  return NextResponse.rewrite(new URL("/_unknown", request.url));
}

export const config = {
  matcher: ["/features/:slug", "/solutions/:slug", "/tools/:slug", "/guides/:slug", "/compare/:slug"],
};
