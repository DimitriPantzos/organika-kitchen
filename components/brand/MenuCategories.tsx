import Link from "next/link"
import { LOCATION } from "@/lib/locations"

const CATEGORIES = [
  { name: "Acai Bowls", emoji: "🫐", bg: "bg-berry-500" },
  { name: "Smoothies", emoji: "🥤", bg: "bg-garden-500" },
  { name: "Fresh Juices", emoji: "🍊", bg: "bg-sunrise-500" },
  { name: "Coffee Bar", emoji: "☕", bg: "bg-earth-500" },
  { name: "Breakfast", emoji: "🥞", bg: "bg-sunshine-500" },
  { name: "Salads", emoji: "🥗", bg: "bg-garden-400" },
  { name: "Protein Bowls", emoji: "🍚", bg: "bg-ocean-500" },
  { name: "Sandwiches", emoji: "🥪", bg: "bg-chili-400" },
  { name: "Pizza", emoji: "🍕", bg: "bg-sunrise-400" },
  { name: "Gluten Free Pasta", emoji: "🍝", bg: "bg-berry-400" },
]

export function MenuCategories() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">Our Menu</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            100% plant-based, organic, made fresh daily
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.name}
              href={LOCATION.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-sm"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${cat.bg} text-2xl shadow-sm transition-transform group-hover:scale-110`}
              >
                {cat.emoji}
              </div>
              <span className="text-sm font-semibold text-foreground">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/order"
            className="inline-flex items-center gap-2 text-sm font-semibold text-garden-600 hover:text-garden-700"
          >
            View Full Menu & Order Online
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
