import type { Metadata } from "next";

import { SOCIAL } from "@/content/legal";

/**
 * Next merges metadata shallowly, so a page without its own `openGraph` and `twitter` would be shared with the
 * homepage's title and description. This adds them from the page's own title, description and canonical path.
 * `image` is the page's share card: the site-wide one unless the page has its own opengraph-image route.
 */
export function withSocial<T extends Metadata & { title: string; description: string }>(meta: T, image = "/opengraph-image"): Metadata {
  const card = { url: image, width: 1200, height: 630, alt: meta.title };
  const title = `${meta.title} | Vetanly`;
  const url = typeof meta.alternates?.canonical === "string" ? meta.alternates.canonical : undefined;
  return {
    ...meta,
    openGraph: { title, description: meta.description, url, siteName: "Vetanly", type: "website", locale: "en_IN", images: [card] },
    twitter: { card: "summary_large_image", title, description: meta.description, images: [card], ...(SOCIAL.xHandle ? { site: SOCIAL.xHandle } : {}) },
  };
}

/** Structured data for search engines. `<` is escaped so the JSON cannot close the script tag. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const faqJsonLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
});

/** Breadcrumb trail, e.g. Home › Features › Payroll. Paths are made absolute when the site URL is known. */
export const breadcrumbJsonLd = (origin: string | undefined, items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${origin ?? ""}${item.path}` })),
});
