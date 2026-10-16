# Vetanly Marketing

Public marketing site for Vetanly, built with Next.js App Router.

## Run locally

From this directory:

    bun install
    bun run dev

The site runs on http://localhost:3000. Its workspace links default to the Vite app at http://localhost:5173.

## Deployment URLs and indexing

Copy .env.example to .env.local and replace the example origins before deploying:

- NEXT_PUBLIC_SITE_URL: canonical public marketing origin. Used for canonical metadata, Open Graph URLs, /sitemap.xml, and the sitemap reference in /robots.txt.
- NEXT_PUBLIC_APP_URL: public client-app origin used by sign-in and workspace links.

The home page is server-rendered and indexable. The sitemap intentionally stays empty until a real public site origin is configured, so it never advertises localhost or an example domain.
