import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Organika Kitchen - Plant-Based & Organic Restaurant in Southport, CT"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const fontData = await readFile(
    join(process.cwd(), "app/fonts/Poppins-ExtraBold.ttf")
  )

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#F9F7F0",
          fontFamily: "Poppins",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Natural colored background blobs - terracotta, sage, earth */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            backgroundColor: "#F0C9B3",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: -60,
            width: 280,
            height: 280,
            borderRadius: "50%",
            backgroundColor: "#C9D6C4",
            opacity: 0.7,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -40,
            right: 200,
            width: 200,
            height: 200,
            borderRadius: "50%",
            backgroundColor: "#E4EBE1",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -30,
            left: 180,
            width: 220,
            height: 220,
            borderRadius: "50%",
            backgroundColor: "#F9E5D9",
            opacity: 0.5,
          }}
        />

        {/* Veggie emoji doodles scattered around */}
        <span style={{ position: "absolute", top: 30, left: 40, fontSize: 56, transform: "rotate(-15deg)" }}>
          🥬
        </span>
        <span style={{ position: "absolute", top: 40, right: 50, fontSize: 52, transform: "rotate(12deg)" }}>
          🥑
        </span>
        <span style={{ position: "absolute", bottom: 35, left: 60, fontSize: 50, transform: "rotate(8deg)" }}>
          🥕
        </span>
        <span style={{ position: "absolute", bottom: 30, right: 70, fontSize: 54, transform: "rotate(-10deg)" }}>
          🍅
        </span>
        <span style={{ position: "absolute", top: 140, left: 50, fontSize: 40, transform: "rotate(20deg)" }}>
          🌽
        </span>
        <span style={{ position: "absolute", top: 120, right: 40, fontSize: 42, transform: "rotate(-18deg)" }}>
          🥒
        </span>
        <span style={{ position: "absolute", bottom: 130, left: 35, fontSize: 44, transform: "rotate(-5deg)" }}>
          🍋
        </span>
        <span style={{ position: "absolute", bottom: 120, right: 45, fontSize: 40, transform: "rotate(15deg)" }}>
          🌿
        </span>

        {/* Colored pill behind tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#C4643A",
            borderRadius: 50,
            padding: "8px 28px",
            marginBottom: 0,
          }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "white",
              margin: 0,
            }}
          >
            Plant Based & Organic
          </p>
        </div>

        {/* Main title */}
        <h1
          style={{
            fontSize: 130,
            fontWeight: 800,
            textTransform: "uppercase",
            lineHeight: 1,
            margin: "16px 0 0 0",
            textAlign: "center",
            letterSpacing: "-0.02em",
            color: "#2D2926",
          }}
        >
          ORGANIKA
        </h1>
        <h1
          style={{
            fontSize: 130,
            fontWeight: 800,
            textTransform: "uppercase",
            lineHeight: 1,
            margin: "0",
            textAlign: "center",
            letterSpacing: "-0.02em",
            color: "#C4643A",
          }}
        >
          KITCHEN
        </h1>

        {/* Bottom info with colored dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginTop: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#7C9473",
              borderRadius: 30,
              padding: "6px 18px",
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "white" }}>
              Est. 2016
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FF8F00",
              borderRadius: 30,
              padding: "6px 18px",
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 800, color: "white" }}>
              Southport, CT
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Poppins",
          data: fontData,
          weight: 800,
          style: "normal",
        },
      ],
    }
  )
}
