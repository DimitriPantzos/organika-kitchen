import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { JsonLd } from "@/components/seo/JsonLd"
import { LOCATION, BRAND } from "@/lib/locations"
import { MENU_CATEGORIES } from "@/lib/menu-data"
import {
  Avocado,
  Lemon,
  Carrot,
  OrangeSlice,
  Strawberry,
  Banana,
  Smiley,
  Beet,
  Pineapple,
  Mushroom,
  ChiliPepper,
  Mango,
} from "@/components/brand/Doodles"
import { MenuNav } from "./MenuNav"

export const metadata: Metadata = {
  title: "Full Menu | Plant-Based & Organic Food in Southport CT",
  description:
    "Browse the full Organika Kitchen menu. Organic acai bowls, smoothies, fresh juices, plant-based burgers, pizza, gluten free pasta, protein bowls, and more. 100% plant-based, no refined sugars.",
  alternates: {
    canonical: `${BRAND.url}/menu`,
  },
  openGraph: {
    title: "Menu | Organika Kitchen",
    description:
      "100% plant-based and organic menu. Acai bowls, smoothies, juices, burgers, pizza, pasta, protein bowls, salads, and baked goods.",
    url: `${BRAND.url}/menu`,
    type: "website",
  },
}

function formatPrice(price: number): string {
  return price % 1 === 0 ? `$${price}.00` : `$${price.toFixed(2)}`
}

export default function MenuPage() {
  const menuSectionSchema = MENU_CATEGORIES.map((category) => ({
    "@type": "MenuSection" as const,
    name: category.name,
    description: category.tagline,
    hasMenuItem: category.items.map((item) => ({
      "@type": "MenuItem" as const,
      name: item.name,
      description: item.description || undefined,
      offers: {
        "@type": "Offer" as const,
        price: item.price,
        priceCurrency: "USD",
      },
    })),
  }))

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Menu", href: "/menu" }]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: BRAND.name,
          description: BRAND.description,
          url: BRAND.url,
          servesCuisine: ["Plant-Based", "Organic", "Vegan"],
          hasMenu: {
            "@type": "Menu",
            name: "Organika Kitchen Menu",
            description:
              "100% plant-based and organic menu. No refined sugars, no processed oils.",
            hasMenuSection: menuSectionSchema,
          },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-garden-700 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,187,106,0.15),transparent_70%)]" />

        {/* Decorative Doodles */}
        <Avocado className="absolute left-[3%] top-[10%] h-16 w-16 rotate-[-12deg] opacity-15 sm:h-24 sm:w-24 sm:opacity-20" />
        <Strawberry className="absolute right-[5%] top-[8%] h-14 w-14 rotate-[15deg] opacity-15 sm:h-20 sm:w-20 sm:opacity-20" />
        <OrangeSlice className="absolute left-[8%] bottom-[10%] h-14 w-14 rotate-[20deg] opacity-10 sm:h-20 sm:w-20 sm:opacity-15" />
        <Banana className="absolute right-[4%] bottom-[15%] h-16 w-16 rotate-[-8deg] opacity-10 sm:h-24 sm:w-24 sm:opacity-15" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-garden-200">
            100% Plant-Based &amp; Organic
          </p>
          <h1 className="mt-3 text-4xl text-white sm:text-5xl lg:text-6xl">
            Our Menu
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Everything is made fresh daily with organic ingredients. No refined
            sugars, no processed oils &mdash; just wholesome, plant-based food.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-lg font-bold uppercase tracking-wider text-garden-700 hover:bg-white/90"
            >
              <a
                href={LOCATION.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Online
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <MenuNav categories={MENU_CATEGORIES} />

      {/* Menu Sections */}
      <div className="relative">
        {/* Scattered decorative doodles */}
        <Carrot className="absolute left-[2%] top-[5%] h-20 w-20 rotate-[15deg] opacity-[0.05] sm:h-28 sm:w-28" />
        <Lemon className="absolute right-[3%] top-[12%] h-16 w-16 rotate-[-20deg] opacity-[0.05] sm:h-24 sm:w-24" />
        <Pineapple className="absolute left-[4%] top-[28%] h-18 w-18 rotate-[10deg] opacity-[0.04] sm:h-24 sm:w-24" />
        <Smiley className="absolute right-[2%] top-[35%] h-14 w-14 rotate-[8deg] opacity-[0.05] sm:h-20 sm:w-20" />
        <Beet className="absolute left-[3%] top-[50%] h-16 w-16 rotate-[-15deg] opacity-[0.04] sm:h-22 sm:w-22" />
        <Mushroom className="absolute right-[4%] top-[55%] h-18 w-18 rotate-[18deg] opacity-[0.05] sm:h-24 sm:w-24" />
        <Mango className="absolute left-[2%] top-[72%] h-16 w-16 rotate-[12deg] opacity-[0.04] sm:h-22 sm:w-22" />
        <ChiliPepper className="absolute right-[3%] top-[80%] h-14 w-14 rotate-[30deg] opacity-[0.05] sm:h-20 sm:w-20" />

        {MENU_CATEGORIES.map((category, categoryIndex) => (
          <section
            key={category.slug}
            id={category.slug}
            className={`scroll-mt-20 section-padding ${
              categoryIndex % 2 === 1 ? "bg-cream-elevated" : ""
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <span className="text-3xl" role="img" aria-label={category.name}>
                  {category.emoji}
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl">{category.name}</h2>
                <p className="mt-2 font-script text-lg text-garden-600">
                  {category.tagline}
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <span className="shrink-0 font-heading text-base font-bold text-garden-600">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    {item.description && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Order CTA */}
      <section className="bg-garden-800 section-padding">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-script text-2xl text-garden-200">
            Ready to eat?
          </p>
          <h2 className="mt-2 text-3xl text-white sm:text-4xl">
            Order Online for Pickup
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Skip the wait. Order ahead through Toast and have your plant-based
            meal ready when you arrive.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-lg font-bold text-garden-800 hover:bg-white/90"
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-lg text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`tel:${LOCATION.phone}`}>
                Call {LOCATION.phoneFormatted}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
