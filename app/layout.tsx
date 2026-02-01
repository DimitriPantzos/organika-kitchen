import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google"
import { Toaster } from "sonner"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { JsonLd } from "@/components/seo/JsonLd"
import { BRAND, SOCIAL } from "@/lib/locations"
import "./globals.css"

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: "Organika Kitchen | Plant-Based & Organic Restaurant in Southport CT",
    template: "%s | Organika Kitchen",
  },
  description: BRAND.description,
  keywords: [
    "plant-based restaurant Southport CT",
    "organic restaurant Fairfield County",
    "vegan food Southport CT",
    "plant-based burgers",
    "acai bowls Southport",
    "organic smoothies CT",
    "grab and go Southport",
    "healthy food near me",
    "plant-based catering CT",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BRAND.url,
    siteName: BRAND.name,
    images: [
      {
        url: "/images/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Organika Kitchen - Plant-Based & Organic Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BRAND.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: BRAND.name,
            url: BRAND.url,
            description: BRAND.description,
            sameAs: [SOCIAL.instagram, SOCIAL.facebook],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+12039551500",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "English",
              },
            ],
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
