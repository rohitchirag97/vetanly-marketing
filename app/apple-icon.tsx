import { ImageResponse } from "next/og";

import { IMAGE_TOKENS as T } from "./image-tokens";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iPhone home-screen and share icon: the Vetanly mark on a solid square (iOS rounds the corners itself). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: T.accent }}>
        <svg width="132" height="132" viewBox="0 0 128 128" aria-hidden="true">
          <g fill="none" stroke={T.sheet} strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M29 49 V36 a7 7 0 0 1 7 -7 H49" />
            <path d="M79 29 H92 a7 7 0 0 1 7 7 V49" />
            <path d="M99 79 V92 a7 7 0 0 1 -7 7 H79" />
            <path d="M49 99 H36 a7 7 0 0 1 -7 -7 V79" />
          </g>
          <path d="M44 65 L58 79 L85 49" fill="none" stroke={T.mint} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
