import type { MetadataRoute } from "next"
import { BRAND } from "@/lib/locations"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BRAND.url}/sitemap.xml`,
  }
}
