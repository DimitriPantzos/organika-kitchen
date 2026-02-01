import Link from "next/link"
import { Leaf, Sprout, Heart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTABanner } from "@/components/sections/CTABanner"
import { LOCATION, BRAND } from "@/lib/locations"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { JsonLd } from "@/components/seo/JsonLd"

const DIFFERENTIATORS = [
  {
    icon: Leaf,
    title: "100% Plant-Based",
    description:
      "Every item on our menu is entirely plant-based. No refined sugars, no processed oils -- just wholesome, natural ingredients.",
  },
  {
    icon: Sprout,
    title: "Certified Organic",
    description:
      "We source organic, locally-grown produce whenever possible. From our house-made dressings to our baked goods, quality is non-negotiable.",
  },
  {
    icon: Heart,
    title: "Made with Intention",
    description:
      "Handcrafted smoothies, plant burgers, acai bowls, and grab-and-go meals prepared fresh daily with care and purpose.",
  },
  {
    icon: Clock,
    title: "Grab & Go Ready",
    description:
      "Busy day? Our extensive grab-and-go selection has you covered with overnight oats, fresh juices, salads, and ready-to-eat meals.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Is everything on the menu plant-based?",
    answer:
      "Yes! Our entire menu is 100% plant-based. We use no animal products, refined sugars, or processed oils in any of our dishes.",
  },
  {
    question: "Do you offer online ordering?",
    answer:
      "Yes! You can order online through our website for pickup. Click 'Order for Pickup' to place your order through Toast.",
  },
  {
    question: "Do you do catering?",
    answer:
      "We cater events of all sizes with our plant-based menu. Visit our Catering page to submit an inquiry and we'll put together a custom package.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're located at 3546 Post Rd in Southport, CT 06890. Easy to find on Post Road with nearby parking available.",
  },
  {
    question: "Do you have grab-and-go options?",
    answer:
      "Absolutely! We have an extensive grab-and-go fridge stocked with overnight oats, fresh juices, smoothies, salads, and ready-to-eat meals.",
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-garden-900">
        <div className="absolute inset-0 bg-gradient-to-r from-garden-900/95 via-garden-900/80 to-garden-900/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-garden-300">
              {BRAND.tagline}
            </p>
            <h1 className="mt-4 text-5xl leading-[1.1] text-white sm:text-6xl lg:text-7xl">
              Pure Food,
              <br />
              <span className="text-garden-300">Plant</span> Powered
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Organic, plant-based meals crafted with intention. Smoothies,
              bowls, plant burgers, baked goods, and grab-and-go goodness in
              Southport, CT.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-garden-500 text-lg hover:bg-garden-400"
              >
                <Link href="/order">Order for Pickup</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-lg text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/contact">Visit Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="border-y border-border bg-cream-elevated py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <blockquote className="text-2xl italic text-garden-700 sm:text-3xl">
            &ldquo;Let food be thy medicine and medicine be thy food&rdquo;
          </blockquote>
          <cite className="mt-3 block text-sm font-medium not-italic text-muted-foreground">
            &mdash; Hippocrates
          </cite>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-cream-elevated">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl">Because We Kale</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Pure, organic, plant-based goodness since 2016
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-garden-50">
                  <item.icon className="h-7 w-7 text-garden-500" />
                </div>
                <h3 className="mt-4 font-sans text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl">Come Visit Us</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Located on Post Road in Southport, we&apos;re your neighborhood
                destination for clean, plant-based eating.
              </p>
              <div className="mt-6 space-y-3 text-muted-foreground">
                <p className="font-sans font-semibold text-foreground">
                  {LOCATION.address}
                  <br />
                  {LOCATION.city}, {LOCATION.state} {LOCATION.zip}
                </p>
                <p>
                  <a
                    href={`tel:${LOCATION.phone}`}
                    className="font-semibold text-garden-500 hover:text-garden-600"
                  >
                    {LOCATION.phoneFormatted}
                  </a>
                </p>
                <p>Mon&ndash;Sat 8:00 AM &ndash; 6:00 PM | Sun 8:00 AM &ndash; 5:00 PM</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="bg-garden-500 hover:bg-garden-600">
                  <Link href="/order">Order for Pickup</Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={LOCATION.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src={LOCATION.mapEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Organika Kitchen map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catering CTA */}
      <CTABanner
        title="Planning an Event?"
        description="We cater events of all sizes with our plant-based menu. From office wellness lunches to celebration platters, let us fuel your gathering."
        buttonText="Get a Catering Quote"
        buttonHref="/catering"
        variant="garden"
      />

      {/* FAQ */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-sans text-base font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Order CTA */}
      <CTABanner
        title="Ready to Order?"
        description="Skip the wait. Order online for pickup and have your plant-based meal ready when you arrive."
        buttonText="Order for Pickup"
        buttonHref="/order"
        variant="earth"
      />
    </>
  )
}
