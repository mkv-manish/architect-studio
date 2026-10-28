import { ImageResponse } from "next/og";
export const alt =
  "BTC Design Studio — Home design and architectural planning in Giridih, Jharkhand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function SocialImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#08131c",
        color: "#f6f4ef",
        padding: 64,
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          border: "1px solid #dfc39c40",
          padding: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 25,
            color: "#dfc39c",
            letterSpacing: 3,
          }}
        >
          BTC DESIGN STUDIO
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              fontWeight: 600,
              letterSpacing: -2,
            }}
          >
            Thoughtful homes.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              color: "#dfc39c",
              letterSpacing: -2,
            }}
          >
            Considered design.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#b7c0c5",
          }}
        >
          <span>Home design · Floor plans · Elevations</span>
          <span>Giridih, Jharkhand</span>
        </div>
      </div>
    </div>,
    size,
  );
}
