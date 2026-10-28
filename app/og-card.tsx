import { ImageResponse } from "next/og";

import { IMAGE_TOKENS as T } from "./image-tokens";

export const OG_SIZE = { width: 1200, height: 630 };

/**
 * The 1200×630 card shown when a page is shared on WhatsApp, LinkedIn, X or Facebook:
 * the site's paper and ink, with the brand purple on the one action.
 */
export function ogCard({ eyebrow, title, accent, footer }: { eyebrow: string; title: string; accent?: string; footer: string }) {
  const long = title.length + (accent?.length ?? 0) > 40;
  const heading = { display: "flex", fontSize: long ? 58 : 70, lineHeight: 1.04, fontWeight: 700, letterSpacing: -2 } as const;
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: T.paper, color: T.ink, padding: "60px 72px", flexDirection: "column", justifyContent: "space-between", fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 24, borderBottom: `2px solid ${T.ink}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, fontWeight: 700 }}>
            <svg width="48" height="48" viewBox="0 0 128 128" aria-hidden="true">
              <rect width="128" height="128" rx="34" fill={T.accent} />
              <g fill="none" stroke={T.sheet} strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M29 49 V36 a7 7 0 0 1 7 -7 H49" />
                <path d="M79 29 H92 a7 7 0 0 1 7 7 V49" />
                <path d="M99 79 V92 a7 7 0 0 1 -7 7 H79" />
                <path d="M49 99 H36 a7 7 0 0 1 -7 -7 V79" />
              </g>
              <path d="M44 65 L58 79 L85 49" fill="none" stroke={T.mint} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>vetanly</span>
          </div>
          {/* A call to action makes the shared link more clickable. */}
          <div style={{ display: "flex", alignItems: "center", background: T.accent, color: T.accentInk, fontSize: 24, fontWeight: 700, padding: "12px 26px", borderRadius: 8 }}>Start your free trial</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ display: "flex", color: T.muted, fontSize: 26, marginBottom: 20 }}>{eyebrow}</div>
          <div style={heading}>{title}</div>
          {accent && <div style={heading}>{accent}</div>}
          <div style={{ display: "flex", color: T.muted, fontSize: 26, marginTop: 28, paddingTop: 20, borderTop: `1px solid ${T.rule}` }}>{footer}</div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
