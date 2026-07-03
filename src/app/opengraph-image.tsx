import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pranshu Ghori — AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#020617",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(0,240,255,0.12), transparent 40%), radial-gradient(circle at 85% 80%, rgba(139,92,246,0.14), transparent 40%), linear-gradient(to right, rgba(128,128,128,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.06) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 100% 100%, 48px 48px, 48px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#34d399",
            }}
          />
          <div style={{ color: "#94a3b8", fontSize: "26px" }}>
            Data Science Co-Op @ Command Credit Corp
          </div>
        </div>
        <div
          style={{
            fontSize: "92px",
            fontWeight: 700,
            color: "#f8fafc",
            letterSpacing: "-2px",
            marginBottom: "16px",
          }}
        >
          Pranshu Ghori
        </div>
        <div
          style={{
            fontSize: "40px",
            fontWeight: 600,
            background: "linear-gradient(to right, #00f0ff, #8b5cf6, #06b6d4)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "28px",
          }}
        >
          AI Engineer · LLM Agents · RAG Systems
        </div>
        <div style={{ fontSize: "28px", color: "#94a3b8", maxWidth: "900px" }}>
          Building AI systems that ship — agentic pipelines on Azure and
          production data infrastructure on AWS.
        </div>
      </div>
    ),
    { ...size }
  );
}
