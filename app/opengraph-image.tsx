import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Organika Kitchen - Plant-Based & Organic Restaurant in Southport, CT"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const [fontData, imageData] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/Poppins-ExtraBold.ttf")),
    readFile(join(process.cwd(), "public/food/beet-arugula-toast.jpg")),
  ])

  const imageBase64 = `data:image/jpeg;base64,${imageData.toString("base64")}`

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
          fontFamily: "Poppins",
          position: "relative",
        }}
      >
        {/* Background image */}
        <img
          src={imageBase64}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Dark overlay for text readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.45)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Tagline pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: 50,
              padding: "10px 32px",
              border: "2px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <p
              style={{
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "white",
                margin: 0,
              }}
            >
              100% Organic • Plant-Based
            </p>
          </div>

          {/* Main title */}
          <h1
            style={{
              fontSize: 140,
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 0.9,
              margin: "24px 0 0 0",
              textAlign: "center",
              letterSpacing: "-0.02em",
              color: "white",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Organika
          </h1>
          <h1
            style={{
              fontSize: 140,
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 0.9,
              margin: "0",
              textAlign: "center",
              letterSpacing: "-0.02em",
              color: "white",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Kitchen
          </h1>

          {/* Location */}
          <p
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.8)",
              marginTop: 28,
            }}
          >
            Southport, CT
          </p>
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
