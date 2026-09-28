import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Static hex approximations of the dark-theme oklch tokens in theme.css —
// satori (the renderer behind ImageResponse) doesn't support oklch().
const BG = "#1b1815";
const FOREGROUND = "#f4f2ef";
const MUTED = "#b7ada3";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: BG,
          color: FOREGROUND,
          fontFamily: "sans-serif",
        }}
      >
        <svg width="72" height="72" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="e" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#F0801F" />
              <stop offset="1" stopColor="#F0B429" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="8" fill="url(#e)" />
          <rect
            x="16"
            y="8.4"
            width="10.75"
            height="10.75"
            rx="1.5"
            transform="rotate(45 16 8.4)"
            fill="#fff"
            fillOpacity="0.92"
          />
        </svg>
        <div style={{ marginTop: 28, fontSize: 64, fontWeight: 600, letterSpacing: "0.02em" }}>
          {site.name}
        </div>
        <div style={{ marginTop: 14, fontSize: 28, color: MUTED }}>{site.tagline}</div>
      </div>
    ),
    { ...size },
  );
}
