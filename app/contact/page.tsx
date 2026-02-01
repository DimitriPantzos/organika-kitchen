import type { Metadata } from "next"
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { ContactForm } from "@/components/forms/ContactForm"
import { LOCATION, SOCIAL, BRAND } from "@/lib/locations"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Contact Us | Location, Hours & Directions",
  description:
    "Contact Organika Kitchen in Southport, CT. Located at 3546 Post Rd. Find hours, directions, and phone number.",
  alternates: {
    canonical: `${BRAND.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", href: "/contact" }]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: BRAND.name,
          description: BRAND.description,
          url: BRAND.url,
          telephone: `+1${LOCATION.phone}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: LOCATION.address,
            addressLocality: LOCATION.city,
            addressRegion: LOCATION.state,
            postalCode: LOCATION.zip,
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: LOCATION.geo.lat,
            longitude: LOCATION.geo.lng,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "08:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "08:00",
              closes: "17:00",
            },
          ],
          servesCuisine: ["Plant-Based", "Organic", "Vegan"],
          priceRange: "$$",
        }}
      />

      {/* Hero */}
      <section className="bg-garden-700 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Have a question, feedback, or want to learn more? We&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Location Info */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl">Our Location</h2>
              <Card className="border-border/50">
                <CardContent className="space-y-4 p-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold">{BRAND.name}</h3>
                    <p className="font-script text-lg text-garden-600">
                      Southport, CT
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-garden-600" />
                      <a
                        href={LOCATION.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground"
                      >
                        {LOCATION.address}
                        <br />
                        {LOCATION.city}, {LOCATION.state} {LOCATION.zip}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 shrink-0 text-garden-600" />
                      <a
                        href={`tel:${LOCATION.phone}`}
                        className="hover:text-foreground"
                      >
                        {LOCATION.phoneFormatted}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-garden-600" />
                      <div>
                        {LOCATION.hours.map((h) => (
                          <div key={h.day} className="flex gap-3">
                            <span className="w-24 font-medium text-foreground">
                              {h.day}
                            </span>
                            <span>
                              {h.open} &ndash; {h.close}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="overflow-hidden rounded-lg border border-border">
                    <iframe
                      src={LOCATION.mapEmbedUrl}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Organika Kitchen map"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Social */}
              <div className="flex items-center gap-6 rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-garden-600" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Instagram</p>
                    <a
                      href={SOCIAL.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-garden-600 hover:text-garden-700"
                    >
                      {SOCIAL.instagramHandle}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Facebook className="h-5 w-5 text-garden-600" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Facebook</p>
                    <a
                      href={SOCIAL.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-garden-600 hover:text-garden-700"
                    >
                      Organika Kitchen
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">
                We typically respond within 24 hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
