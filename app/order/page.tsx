import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { LOCATION, BRAND } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Order for Pickup",
  description:
    "Order online from Organika Kitchen in Southport, CT. Plant-based smoothies, bowls, burgers, baked goods, and grab-and-go meals. Order for pickup.",
  alternates: {
    canonical: `${BRAND.url}/order`,
  },
}

export default function OrderPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Order for Pickup", href: "/order" }]} />

      <section className="bg-charcoal-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-white sm:text-5xl">Order for Pickup</h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Skip the wait. Order ahead and have your plant-based meal ready when
            you arrive.
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
                Order Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <p className="mt-4 text-xs text-muted-foreground">
              You&apos;ll be redirected to our ordering platform
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
