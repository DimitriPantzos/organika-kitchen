import type { Metadata } from "next"
import { Users, Utensils, Building2, PartyPopper } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { CateringForm } from "@/components/forms/CateringForm"
import { BRAND } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Plant-Based Catering in Southport CT",
  description:
    "Organika Kitchen catering for events of all sizes. Plant-based platters, smoothie bars, acai bowls, and healthy grab-and-go options. Get a free quote.",
  alternates: {
    canonical: `${BRAND.url}/catering`,
  },
}

const PACKAGES = [
  {
    icon: Users,
    name: "Small Gatherings",
    capacity: "10-20 guests",
    color: "bg-garden-500",
    description:
      "Perfect for team wellness events, birthday celebrations, and intimate gatherings. Curated plant-based platters and smoothie trays.",
  },
  {
    icon: PartyPopper,
    name: "Medium Events",
    capacity: "20-50 guests",
    color: "bg-sunrise-500",
    description:
      "Ideal for office parties, holiday gatherings, and celebrations. Customizable plant-based menu with bowls, burgers, and baked goods.",
  },
  {
    icon: Building2,
    name: "Large Events",
    capacity: "50+ guests",
    color: "bg-berry-400",
    description:
      "Full-service plant-based catering for large events and corporate functions. Dedicated setup and service available.",
  },
  {
    icon: Utensils,
    name: "Corporate & Recurring",
    capacity: "Any size",
    color: "bg-ocean-500",
    description:
      "Weekly office wellness lunches, monthly team events, or recurring healthy catering. Special pricing for ongoing partnerships.",
  },
]

export default function CateringPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Catering", href: "/catering" }]} />

      {/* Hero */}
      <section className="bg-charcoal-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-berry-300">
              Catering
            </p>
            <h1 className="mt-3 text-4xl text-white sm:text-5xl">
              Plant-Based Catering for Every Occasion
            </h1>
            <p className="mt-4 text-lg text-white/70">
              From office wellness lunches to celebration platters, we bring
              fresh, organic, plant-based food to your event. Made with the same
              care and intention you expect from our kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl">Catering Options</h2>
          <p className="mt-3 text-center text-lg text-muted-foreground">
            We customize every order. Tell us what you need.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((pkg) => (
              <Card key={pkg.name} className="border-border/50">
                <CardHeader>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${pkg.color} shadow-sm`}
                  >
                    <pkg.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-heading text-lg font-semibold">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-sm font-medium text-berry-500">
                    {pkg.capacity}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="border-y border-border bg-cream-elevated py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl">What&apos;s Included</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="font-heading text-base font-semibold text-foreground">
                Smoothie & Juice Bar
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fresh smoothies, cold-pressed juices, and acai bowls perfect for
                wellness-focused events and morning gatherings.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-heading text-base font-semibold text-foreground">
                Plant-Based Platters
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Plant burgers, wraps, grain bowls, salads, and our famous baked
                goods -- all 100% plant-based and organic.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-heading text-base font-semibold text-foreground">
                Setup & Delivery
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We deliver and set up at your venue. Eco-friendly plates, napkins,
                and serving supplies included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="section-padding">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl">Get a Free Quote</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Tell us about your event and we&apos;ll put together a custom
            plant-based package for you.
          </p>
          <div className="mt-8">
            <CateringForm />
          </div>
        </div>
      </section>
    </>
  )
}
