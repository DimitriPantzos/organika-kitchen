import Link from "next/link"
import { Leaf, Heart, Clock, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTABanner } from "@/components/sections/CTABanner"
import { TaglineMarquee } from "@/components/brand/TaglineMarquee"
import { MenuCategories } from "@/components/brand/MenuCategories"
import { LOCATION } from "@/lib/locations"
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
  Onion,
  Plum,
} from "@/components/brand/Doodles"
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
    color: "bg-garden-500",
    description:
      "Every item on our menu is entirely plant-based. No refined sugars, no processed oils -- just wholesome, natural ingredients.",
  },
  {
    icon: Sprout,
    title: "Locally Sourced",
    color: "bg-sunrise-500",
    description:
      "We source all organic and organic-by-nature goods. From our house-made dressings to our baked goods, quality is non-negotiable.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    color: "bg-berry-400",
    description:
      "Handcrafted smoothies, plant burgers, acai bowls, and grab-and-go meals prepared fresh daily with care and purpose.",
  },
  {
    icon: Clock,
    title: "Grab & Go Ready",
    color: "bg-ocean-500",
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
      "Yes! You can order online through our website for pickup. Click 'Order Online' to place your order through Toast.",
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

      {/* Hero - Brand Presentation with Doodles */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-garden-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,187,106,0.15),transparent_70%)]" />

        {/* Floating Doodles */}
        <Avocado className="absolute left-[3%] top-[12%] h-20 w-20 rotate-[-12deg] opacity-20 sm:h-28 sm:w-28 sm:opacity-25" />
        <Strawberry className="absolute right-[5%] top-[10%] h-16 w-16 rotate-[15deg] opacity-20 sm:h-24 sm:w-24 sm:opacity-25" />
        <OrangeSlice className="absolute left-[8%] bottom-[18%] h-16 w-16 rotate-[20deg] opacity-15 sm:h-24 sm:w-24 sm:opacity-20" />
        <Banana className="absolute right-[4%] bottom-[22%] h-20 w-20 rotate-[-8deg] opacity-15 sm:h-28 sm:w-28 sm:opacity-20" />
        <Carrot className="absolute left-[18%] top-[6%] h-14 w-14 rotate-[25deg] opacity-15 sm:h-20 sm:w-20 sm:opacity-20" />
        <Pineapple className="absolute right-[15%] bottom-[8%] h-16 w-16 rotate-[-18deg] opacity-15 sm:h-22 sm:w-22 sm:opacity-20" />
        <Smiley className="absolute left-[6%] top-[55%] h-12 w-12 rotate-[8deg] opacity-15 sm:h-18 sm:w-18 sm:opacity-20" />
        <Lemon className="absolute right-[10%] top-[40%] h-14 w-14 rotate-[-20deg] opacity-15 sm:h-20 sm:w-20 sm:opacity-20" />
        <Beet className="absolute left-[22%] bottom-[6%] h-12 w-12 rotate-[10deg] opacity-10 sm:h-16 sm:w-16 sm:opacity-15" />
        <ChiliPepper className="absolute right-[22%] top-[8%] h-12 w-12 rotate-[30deg] opacity-10 sm:h-16 sm:w-16 sm:opacity-15" />

        <div className="relative z-10 px-4 py-20 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-garden-200 sm:text-sm">
            Plant Based &amp; Organic
          </p>

          <h1 className="mt-6 text-6xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-7xl lg:text-9xl">
            Organika
            <br />
            Kitchen
          </h1>

          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-garden-200 sm:text-sm">
              Est. 2016
            </span>
            <span className="text-garden-400" aria-hidden="true">
              &#x2022;
            </span>
            <span className="font-script text-lg text-garden-200 sm:text-xl">
              Southport, CT
            </span>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-lg font-bold uppercase tracking-wider text-garden-700 hover:bg-white/90"
            >
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-lg font-bold uppercase tracking-wider text-white hover:bg-white/10 hover:text-white"
            >
              <a
                href={LOCATION.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Online
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Scrolling Tagline Marquee */}
      <TaglineMarquee />

      {/* Because We Kale */}
      <section className="relative section-padding bg-cream-elevated overflow-hidden">
        {/* Decorative doodles */}
        <Beet className="absolute -left-4 top-8 h-24 w-24 rotate-[-15deg] opacity-[0.07] sm:h-32 sm:w-32" />
        <Mango className="absolute -right-4 bottom-8 h-24 w-24 rotate-[12deg] opacity-[0.07] sm:h-32 sm:w-32" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-script text-2xl text-garden-600">
              Because We Kale
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">
              What Makes Us Different
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Pure, organic, plant-based goodness since 2016
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className="text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${item.color} shadow-sm`}
                >
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
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

      {/* Doodle Divider Strip */}
      <div className="flex items-center justify-center gap-6 overflow-hidden bg-cream-base py-6 sm:gap-10">
        <Carrot className="h-10 w-10 rotate-[15deg] opacity-60 sm:h-14 sm:w-14" />
        <OrangeSlice className="h-10 w-10 rotate-[-10deg] opacity-60 sm:h-14 sm:w-14" />
        <Avocado className="h-10 w-10 rotate-[5deg] opacity-60 sm:h-14 sm:w-14" />
        <Strawberry className="h-10 w-10 rotate-[-15deg] opacity-60 sm:h-14 sm:w-14" />
        <Lemon className="hidden h-10 w-10 rotate-[20deg] opacity-60 sm:block sm:h-14 sm:w-14" />
        <Smiley className="hidden h-10 w-10 rotate-[-8deg] opacity-60 sm:block sm:h-14 sm:w-14" />
        <Banana className="hidden h-10 w-10 rotate-[12deg] opacity-60 md:block md:h-14 md:w-14" />
        <Pineapple className="hidden h-10 w-10 rotate-[-5deg] opacity-60 md:block md:h-14 md:w-14" />
        <Mushroom className="hidden h-10 w-10 rotate-[18deg] opacity-60 lg:block lg:h-14 lg:w-14" />
        <ChiliPepper className="hidden h-10 w-10 rotate-[-12deg] opacity-60 lg:block lg:h-14 lg:w-14" />
      </div>

      {/* Menu Categories */}
      <MenuCategories />

      {/* Quote Banner with Doodles */}
      <section className="relative overflow-hidden bg-garden-600 py-12">
        <Strawberry className="absolute -left-2 top-1/2 h-20 w-20 -translate-y-1/2 rotate-[-15deg] opacity-15 sm:h-28 sm:w-28 sm:opacity-20" />
        <Banana className="absolute -right-2 top-1/2 h-20 w-20 -translate-y-1/2 rotate-[15deg] opacity-15 sm:h-28 sm:w-28 sm:opacity-20" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-script text-3xl text-white sm:text-4xl">
            &ldquo;Don&rsquo;t panic, it&rsquo;s organic&rdquo;
          </p>
        </div>
      </section>

      {/* Location Info */}
      <section className="relative section-padding overflow-hidden">
        <Plum className="absolute -right-6 top-12 h-28 w-28 rotate-[10deg] opacity-[0.06]" />
        <Onion className="absolute -left-6 bottom-12 h-28 w-28 rotate-[-10deg] opacity-[0.06]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-script text-xl text-garden-600">Come visit</p>
              <h2 className="mt-1 text-3xl sm:text-4xl">Our Location</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Located on Post Road in Southport, we&apos;re your neighborhood
                destination for clean, plant-based eating.
              </p>
              <div className="mt-6 space-y-3 text-muted-foreground">
                <p className="font-heading font-semibold text-foreground">
                  {LOCATION.address}
                  <br />
                  {LOCATION.city}, {LOCATION.state} {LOCATION.zip}
                </p>
                <p>
                  <a
                    href={`tel:${LOCATION.phone}`}
                    className="font-semibold text-garden-600 hover:text-garden-700"
                  >
                    {LOCATION.phoneFormatted}
                  </a>
                </p>
                <p>Mon&ndash;Sat 8:00 AM &ndash; 7:00 PM | Sun 8:00 AM &ndash; 5:00 PM</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="bg-garden-600 hover:bg-garden-700">
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
                <AccordionTrigger className="text-left font-heading text-base font-medium">
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
