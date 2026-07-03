import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
          borderRadius: "14px",
          border: "2px solid rgba(0,240,255,0.4)",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            fontWeight: 700,
            background: "linear-gradient(135deg, #00f0ff, #8b5cf6)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          PG
        </div>
      </div>
    ),
    { ...size }
  );
}
