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

// Photos for the botanical wreath around the hero
const WREATH_PHOTOS = [
  { src: "/food/beet-arugula-toast.jpg", alt: "Beet toast", position: "left-[50%] top-[2%] -translate-x-1/2", size: "h-16 w-16 sm:h-28 sm:w-28", animation: "animate-bubble-1", showMobile: true },
  { src: "/food/taco-bowl-radishes.jpg", alt: "Taco bowl", position: "left-[8%] top-[8%] sm:left-[25%] sm:top-[5%]", size: "h-14 w-14 sm:h-24 sm:w-24", animation: "animate-bubble-2", showMobile: true },
  { src: "/food/avocado-toast.jpg", alt: "Avocado toast", position: "right-[8%] top-[8%] sm:left-[75%] sm:top-[5%]", size: "h-14 w-14 sm:h-24 sm:w-24", animation: "animate-bubble-3", showMobile: true },
  { src: "/food/acai-bowls-overhead.jpg", alt: "Acai bowls", position: "left-[10%] top-[15%]", size: "hidden sm:block sm:h-22 sm:w-22", animation: "animate-bubble-4", showMobile: false },
  { src: "/food/plant-burger-fries.jpg", alt: "Plant burger", position: "right-[10%] top-[15%]", size: "hidden sm:block sm:h-22 sm:w-22", animation: "animate-bubble-1", showMobile: false },
  { src: "/food/quinoa-bowl.jpg", alt: "Quinoa bowl", position: "left-[2%] top-[25%] sm:top-[35%]", size: "h-14 w-14 sm:h-24 sm:w-24", animation: "animate-bubble-2", showMobile: true },
  { src: "/food/smoothie-bowls-wood.jpg", alt: "Smoothie bowls", position: "right-[2%] top-[25%] sm:top-[35%]", size: "h-14 w-14 sm:h-24 sm:w-24", animation: "animate-bubble-3", showMobile: true },
  { src: "/food/collard-wrap.jpg", alt: "Collard wrap", position: "left-[2%] top-[55%]", size: "hidden sm:block sm:h-20 sm:w-20", animation: "animate-bubble-4", showMobile: false },
  { src: "/food/juice-ingredients.jpg", alt: "Fresh juice", position: "right-[2%] top-[55%]", size: "hidden sm:block sm:h-20 sm:w-20", animation: "animate-bubble-1", showMobile: false },
  { src: "/food/chickpea-veggie-soup.jpg", alt: "Veggie soup", position: "left-[5%] bottom-[22%] sm:left-[10%] sm:bottom-[15%]", size: "h-14 w-14 sm:h-22 sm:w-22", animation: "animate-bubble-2", showMobile: true },
  { src: "/food/cookies.jpg", alt: "Cookies", position: "right-[5%] bottom-[22%] sm:right-[10%] sm:bottom-[15%]", size: "h-14 w-14 sm:h-22 sm:w-22", animation: "animate-bubble-3", showMobile: true },
  { src: "/food/acai-bowls-group.jpg", alt: "Acai group", position: "left-[15%] bottom-[8%] sm:left-[25%] sm:bottom-[5%]", size: "h-14 w-14 sm:h-24 sm:w-24", animation: "animate-bubble-4", showMobile: true },
  { src: "/food/plant-burger.jpg", alt: "Plant burger close", position: "right-[15%] bottom-[8%] sm:right-[25%] sm:bottom-[5%]", size: "h-14 w-14 sm:h-24 sm:w-24", animation: "animate-bubble-1", showMobile: true },
  { src: "/food/taco-bowl.jpg", alt: "Taco bowl", position: "left-[50%] bottom-[2%] -translate-x-1/2", size: "h-16 w-16 sm:h-28 sm:w-28", animation: "animate-bubble-2", showMobile: true },
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

      {/* Hero - Botanical Wreath Style with Real Food Photos */}
      <section className="relative overflow-hidden bg-cream-white">
        <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-4 py-20 sm:py-24">
          {/* Photo Wreath - circular arrangement of real food with floating animation on mobile */}
          {WREATH_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`absolute ${photo.position} ${photo.size} ${photo.animation} overflow-hidden rounded-full border-4 border-white shadow-lg`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="120px"
              />
            </div>
          ))}

          {/* Center content - Brand */}
          <div className="relative z-10 text-center">
            <p className="font-script text-2xl text-sage-600 sm:text-3xl">
              100% Plant-Based
            </p>

            <h1 className="mt-2 font-heading text-6xl font-extrabold tracking-tight text-charcoal-800 sm:text-7xl lg:text-8xl">
              Organika
            </h1>
            <h1 className="font-heading text-6xl font-extrabold tracking-tight text-sage-600 sm:text-7xl lg:text-8xl">
              Kitchen
            </h1>

            <p className="mt-5 text-base font-semibold uppercase tracking-[0.3em] text-charcoal-400 sm:text-lg">
              Southport, CT
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 text-lg font-bold uppercase tracking-wider text-white hover:bg-sage-500"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sage-400 text-lg font-bold uppercase tracking-wider text-sage-700 hover:bg-sage-50"
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

      {/* Quote Banner with Doodle Pattern */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <Image
          src="/doodle-pattern.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-script text-3xl text-charcoal-600 sm:text-4xl">
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
