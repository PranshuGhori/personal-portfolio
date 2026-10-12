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
          background: "#121211",
          color: "#f3efe8",
          fontSize: "26px",
          letterSpacing: "1px",
          borderRadius: "8px",
        }}
      >
        PG
      </div>
    ),
    size,
  );
}
