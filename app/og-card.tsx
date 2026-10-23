import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/**
 * The 1200×630 card shown when a page is shared on WhatsApp, LinkedIn, X or Facebook.
 * Dark on purpose: it stands out in white social feeds.
 */
export function ogCard({ eyebrow, title, accent, footer }: { eyebrow: string; title: string; accent?: string; footer: string }) {
  const long = title.length + (accent?.length ?? 0) > 40;
  const heading = { display: "flex", fontSize: long ? 58 : 70, lineHeight: 1.08, fontWeight: 700, letterSpacing: -2 } as const;
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", position: "relative", overflow: "hidden", background: "#020617", color: "#F8FAFC", padding: "68px 76px", flexDirection: "column", justifyContent: "space-between", fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, fontWeight: 700 }}>
            <svg width="48" height="48" viewBox="0 0 128 128">
              <rect width="128" height="128" rx="34" fill="#5938E8" />
              <g fill="none" stroke="#fff" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M29 49 V36 a7 7 0 0 1 7 -7 H49" />
                <path d="M79 29 H92 a7 7 0 0 1 7 7 V49" />
                <path d="M99 79 V92 a7 7 0 0 1 -7 7 H79" />
                <path d="M49 99 H36 a7 7 0 0 1 -7 -7 V79" />
              </g>
              <path d="M44 65 L58 79 L85 49" fill="none" stroke="#B9F5D0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>vetanly</span>
          </div>
          {/* A call to action makes the shared link more clickable. */}
          <div style={{ display: "flex", alignItems: "center", background: "#5938E8", color: "#fff", fontSize: 24, fontWeight: 700, padding: "12px 26px", borderRadius: 999 }}>Start your free trial →</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
          <div style={{ display: "flex", color: "#9B89FF", fontSize: 20, letterSpacing: 4, fontWeight: 700, marginBottom: 20 }}>{eyebrow.toUpperCase()}</div>
          <div style={heading}>{title}</div>
          {accent && <div style={{ ...heading, color: "#6EE7B7" }}>{accent}</div>}
          <div style={{ display: "flex", color: "#94A3B8", fontSize: 26, marginTop: 26 }}>{footer}</div>
        </div>
        <div style={{ display: "flex", position: "absolute", right: 70, top: 150, width: 300, height: 300, borderRadius: 999, border: "3px solid rgba(155,137,255,.7)" }} />
        <div style={{ display: "flex", position: "absolute", right: 145, top: 215, width: 150, height: 150, borderRadius: 999, background: "rgba(155,137,255,.18)" }} />
        <div style={{ display: "flex", position: "absolute", right: 60, top: 298, width: 320, height: 4, background: "#9B89FF" }} />
      </div>
    ),
    { ...OG_SIZE },
  );
}
