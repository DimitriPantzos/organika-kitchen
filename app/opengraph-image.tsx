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
          backgroundColor: "#1A1715",
          color: "white",
          fontFamily: "Poppins",
        }}
      >
        <p
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#F06292",
            marginBottom: 0,
          }}
        >
          Plant Based & Organic
        </p>
        <h1
          style={{
            fontSize: 120,
            fontWeight: 800,
            textTransform: "uppercase",
            lineHeight: 1,
            margin: "20px 0 0 0",
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          ORGANIKA
        </h1>
        <h1
          style={{
            fontSize: 120,
            fontWeight: 800,
            textTransform: "uppercase",
            lineHeight: 1,
            margin: "0",
            textAlign: "center",
            letterSpacing: "-0.02em",
            color: "#E91E63",
          }}
        >
          KITCHEN
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: 24,
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B5AFA5",
            }}
          >
            Est. 2016
          </span>
          <span style={{ color: "#E91E63", fontSize: 24 }}>•</span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#B5AFA5",
            }}
          >
            Southport, CT
          </span>
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
