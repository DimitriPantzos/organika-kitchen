import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/s/:path*",
        destination: "/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
