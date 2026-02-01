import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Organika Kitchen - Plant-Based & Organic Restaurant in Southport, CT"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const poppinsBold = await fetch(
    new URL("https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDD4Z1JlFd2JQEl8qw.woff2")
  ).then((res) => res.arrayBuffer())

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
          backgroundColor: "#2E7D32",
          color: "white",
          fontFamily: "Poppins",
        }}
      >
        <p
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#A5D6A7",
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
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#A5D6A7",
            }}
          >
            Est. 2016
          </span>
          <span style={{ color: "#66BB6A", fontSize: 24 }}>•</span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#A5D6A7",
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
          data: poppinsBold,
          weight: 800,
          style: "normal",
        },
      ],
    }
  )
}
