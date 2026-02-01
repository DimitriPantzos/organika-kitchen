import Link from "next/link"
import Image from "next/image"
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

const HERO_PHOTOS = [
  { src: "/food/taco-bowl-radishes.jpg", alt: "Taco bowl with fresh radish bunch and seasonal veggies" },
  { src: "/food/beet-arugula-toast.jpg", alt: "Beet and arugula toast with pine nuts on whole grain" },
  { src: "/food/avocado-toast.jpg", alt: "Avocado toast with arugula and pine nuts" },
  { src: "/food/chickpea-veggie-soup.jpg", alt: "Chickpea vegetable soup with sweet potato and peas" },
]

const FOOD_GALLERY = [
  { src: "/food/taco-bowl-radishes.jpg", alt: "Taco bowl with fresh radish bunch", span: "col-span-2 row-span-2" },
  { src: "/food/beet-arugula-toast.jpg", alt: "Beet and arugula toast on whole grain", span: "col-span-1 row-span-1" },
  { src: "/food/collard-wrap.jpg", alt: "Collard green wrap with colorful filling", span: "col-span-1 row-span-1" },
  { src: "/food/juice-ingredients.jpg", alt: "Fresh juice with beets, citrus and celery", span: "col-span-1 row-span-2" },
  { src: "/food/chickpea-veggie-soup.jpg", alt: "Chickpea soup loaded with sweet potato and veggies", span: "col-span-1 row-span-1" },
  { src: "/food/plant-burger-fries.jpg", alt: "Plant burger with lettuce, tomato, and sweet potato fries", span: "col-span-1 row-span-1" },
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

      {/* Hero - Warm, Photo-Forward with Doodle Character */}
      <section className="relative overflow-hidden bg-cream-base">
        {/* Scattered Doodles - high opacity, lots of personality */}
        <Avocado className="absolute left-[2%] top-[8%] h-20 w-20 rotate-[-12deg] opacity-30 sm:h-28 sm:w-28 sm:opacity-40" />
        <Strawberry className="absolute right-[3%] top-[5%] h-16 w-16 rotate-[15deg] opacity-30 sm:h-24 sm:w-24 sm:opacity-40" />
        <Banana className="absolute left-[5%] bottom-[8%] h-18 w-18 rotate-[-8deg] opacity-25 sm:h-24 sm:w-24 sm:opacity-35" />
        <Lemon className="absolute right-[8%] bottom-[15%] h-14 w-14 rotate-[-20deg] opacity-25 sm:h-20 sm:w-20 sm:opacity-35" />
        <Smiley className="absolute left-[15%] bottom-[3%] h-12 w-12 rotate-[8deg] opacity-20 sm:h-16 sm:w-16 sm:opacity-30" />
        <ChiliPepper className="absolute right-[18%] top-[3%] h-12 w-12 rotate-[30deg] opacity-20 sm:h-16 sm:w-16 sm:opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Typography */}
            <div className="text-center lg:text-left">
              <p className="font-script text-2xl text-berry-500 sm:text-3xl">
                plant-based &amp; organic
              </p>

              <h1 className="mt-3 text-6xl font-extrabold uppercase leading-[0.9] tracking-tight text-charcoal-900 sm:text-7xl lg:text-8xl">
                Organika
                <br />
                <span className="text-berry-500">Kitchen</span>
              </h1>

              <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-400 sm:text-sm">
                  Est. 2016
                </span>
                <span className="text-charcoal-300" aria-hidden="true">
                  &#x2022;
                </span>
                <span className="font-script text-lg text-charcoal-500 sm:text-xl">
                  Southport, CT
                </span>
              </div>

              <p className="mx-auto mt-6 max-w-md text-lg text-charcoal-400 lg:mx-0">
                Handcrafted smoothies, plant burgers, acai bowls, and grab-and-go meals.
                Made with intention since 2016.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-berry-500 text-lg font-bold uppercase tracking-wider text-white hover:bg-berry-400"
                >
                  <Link href="/menu">View Menu</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-charcoal-300 text-lg font-bold uppercase tracking-wider text-charcoal-700 hover:bg-charcoal-50 hover:text-charcoal-900"
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

            {/* Right - Photo Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {HERO_PHOTOS.map((photo, i) => (
                  <div
                    key={photo.src}
                    className={`relative overflow-hidden rounded-2xl shadow-lg ${
                      i === 0 ? "aspect-square" : i === 1 ? "aspect-[3/4]" : i === 2 ? "aspect-[3/4]" : "aspect-square"
                    } ${i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, 25vw"
                      priority={i < 2}
                    />
                  </div>
                ))}
              </div>
              {/* Doodle accents on the photo grid */}
              <Carrot className="absolute -left-6 -top-4 h-16 w-16 rotate-[25deg] opacity-60 sm:h-20 sm:w-20" />
              <OrangeSlice className="absolute -bottom-4 -right-4 h-14 w-14 rotate-[-15deg] opacity-60 sm:h-18 sm:w-18" />
              <Pineapple className="absolute -right-6 top-1/3 h-14 w-14 rotate-[10deg] opacity-50 sm:h-18 sm:w-18" />
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Tagline Marquee */}
      <TaglineMarquee />

      {/* Food Gallery - Bento Grid */}
      <section className="section-padding bg-cream-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-script text-2xl text-berry-500">
              Made fresh daily
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">
              Our Food Speaks for Itself
            </h2>
          </div>
          <div className="relative mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-4">
            {FOOD_GALLERY.map((photo) => (
              <div
                key={photo.src}
                className={`${photo.span} relative overflow-hidden rounded-2xl shadow-md`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
            {/* Doodle overlay on gallery */}
            <Mushroom className="absolute -right-3 -top-3 h-14 w-14 rotate-[18deg] opacity-50 sm:h-18 sm:w-18" />
            <Beet className="absolute -bottom-3 -left-3 h-14 w-14 rotate-[-12deg] opacity-50 sm:h-18 sm:w-18" />
          </div>
        </div>
      </section>

      {/* Doodle Divider Strip */}
      <div className="flex items-center justify-center gap-6 overflow-hidden bg-cream-elevated py-6 sm:gap-10">
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

      {/* Because We Kale */}
      <section className="relative section-padding bg-cream-base overflow-hidden">
        {/* Decorative doodles */}
        <Beet className="absolute -left-4 top-8 h-24 w-24 rotate-[-15deg] opacity-[0.07] sm:h-32 sm:w-32" />
        <Mango className="absolute -right-4 bottom-8 h-24 w-24 rotate-[12deg] opacity-[0.07] sm:h-32 sm:w-32" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-script text-2xl text-berry-500">
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

      {/* Menu Categories */}
      <MenuCategories />

      {/* Quote Banner - Sage green for natural feel */}
      <section className="relative overflow-hidden bg-sage-600 py-12">
        <Carrot className="absolute -left-2 top-1/2 h-20 w-20 -translate-y-1/2 rotate-[-15deg] opacity-20 sm:h-28 sm:w-28 sm:opacity-25" />
        <Beet className="absolute -right-2 top-1/2 h-20 w-20 -translate-y-1/2 rotate-[15deg] opacity-20 sm:h-28 sm:w-28 sm:opacity-25" />
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
              <p className="font-script text-xl text-berry-500">Come visit</p>
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
                    className="font-semibold text-berry-500 hover:text-berry-400"
                  >
                    {LOCATION.phoneFormatted}
                  </a>
                </p>
                <p>Mon&ndash;Sat 8:00 AM &ndash; 7:00 PM | Sun 8:00 AM &ndash; 5:00 PM</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="bg-berry-500 hover:bg-berry-400">
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
