import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI & Tech Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(255, 59, 48, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(90, 200, 250, 0.1) 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: 20,
              color: "#ff3b30",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            AI • Careers • Technology
          </p>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#ffffff",
              textAlign: "center",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Think Bigger.
          </h1>
          <p
            style={{
              fontSize: 24,
              color: "#999999",
              marginTop: 20,
              textAlign: "center",
              maxWidth: 600,
            }}
          >
            Deep dives into AI, career strategy, and the ideas reshaping technology.
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
