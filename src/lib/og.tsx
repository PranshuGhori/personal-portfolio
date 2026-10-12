import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/** Editorial social card. Uses built-in fonts so it renders without network access. */
export function renderOgCard({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f3efe8",
          color: "#121211",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              background: "#121211",
              color: "#f3efe8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              letterSpacing: "2px",
              borderRadius: "4px",
            }}
          >
            PG
          </div>
          <div style={{ fontSize: "22px", letterSpacing: "4px", textTransform: "uppercase", color: "#645f56" }}>
            {eyebrow}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: title.length > 48 ? "64px" : "78px", lineHeight: 1.05, letterSpacing: "-1.5px", maxWidth: "1000px", fontFamily: "serif" }}>
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #d9d2c5",
            paddingTop: "24px",
            fontSize: "22px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#645f56",
          }}
        >
          <span>Pranshu Ghori</span>
          <span>{footer}</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
