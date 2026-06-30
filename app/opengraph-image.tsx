import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#1a1a16",
        padding: "60px 72px",
        fontFamily: "monospace",
      }}
    >
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: 10, height: 10, background: "#e6e5df", borderRadius: 2 }} />
          <div style={{ width: 10, height: 10, border: "1px solid #e6e5df", borderRadius: 2 }} />
          <div style={{ width: 10, height: 10, background: "#d46b4e", borderRadius: 2 }} />
        </div>
        <span
          style={{ fontSize: 11, color: "#e6e5df", opacity: 0.4, letterSpacing: "0.2em", textTransform: "uppercase" }}
        >
          SYS.INIT // PORTFOLIO
        </span>
      </div>

      {/* Main content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Accent bar */}
          <div style={{ width: 6, height: 80, background: "#d46b4e", borderRadius: 2 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: 64, fontWeight: 700, color: "#e6e5df", letterSpacing: "-2px", lineHeight: 1 }}>
              {site.name}
            </span>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span
                style={{
                  fontSize: 14,
                  color: "#e6e5df",
                  background: "#d46b4e",
                  padding: "4px 12px",
                  borderRadius: 4,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {site.role}
              </span>
              <span style={{ fontSize: 13, color: "#e6e5df", opacity: 0.5, letterSpacing: "0.1em" }}>
                {site.location.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: 18, color: "#e6e5df", opacity: 0.65, lineHeight: 1.6, maxWidth: 780, margin: 0 }}>
          {site.intro}
        </p>
      </div>

      {/* Bottom bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "3px", opacity: 0.3 }}>
          {[1, 3, 1, 2, 4, 1, 1, 2, 3, 2, 1, 1, 4, 2, 1, 5, 1, 1, 6, 1, 1, 1, 1, 1, 1].map((w, i) => (
            <div key={i} style={{ width: w * 3, height: 24, background: "#e6e5df", borderRadius: 1 }} />
          ))}
        </div>
        <span style={{ fontSize: 12, color: "#d46b4e", opacity: 0.6, letterSpacing: "0.15em" }}>
          christopher-setiabudi.dev
        </span>
      </div>
    </div>,
    { ...size },
  );
}
