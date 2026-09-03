import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { LOCATION, BRAND } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Schedule Pickup",
  description:
    "Order ahead from Organika Kitchen in Southport, CT. Schedule pickup for plant-based smoothies, bowls, burgers, baked goods, and grab-and-go meals.",
  alternates: {
    canonical: `${BRAND.url}/order`,
  },
}

export default function OrderPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Schedule Pickup", href: "/order" }]} />

      <section className="bg-charcoal-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-white sm:text-5xl">Schedule Pickup</h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Order ahead and schedule a pickup time for your plant-based meal.
            Toast is accepting scheduled orders.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-card p-8 sm:p-12">
            <p className="font-script text-xl text-berry-500">Southport, CT</p>
            <h2 className="mt-1 text-2xl sm:text-3xl">Our Menu</h2>
            <p className="mt-2 text-muted-foreground">
              {LOCATION.address}, {LOCATION.city}, {LOCATION.state}{" "}
              {LOCATION.zip}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Mon&ndash;Sat 8:00 AM &ndash; 7:00 PM | Sun 8:00 AM &ndash; 5:00 PM
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-berry-500 text-lg hover:bg-berry-400"
            >
              <a
                href={LOCATION.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Ahead
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <p className="mt-4 text-xs text-muted-foreground">
              You&apos;ll be redirected to Toast to schedule your pickup
            </p>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Prefer to call?{" "}
            <a
              href={`tel:${LOCATION.phone}`}
              className="font-medium text-berry-500 hover:text-garden-700"
            >
              {LOCATION.phoneFormatted}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
