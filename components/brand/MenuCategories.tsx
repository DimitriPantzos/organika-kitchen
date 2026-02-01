import Link from "next/link"

const CATEGORIES = [
  { name: "Acai Bowls", emoji: "\uD83E\uDED0", bg: "bg-berry-500", slug: "organic-acai-bowls" },
  { name: "Smoothies", emoji: "\uD83E\uDD64", bg: "bg-garden-500", slug: "organic-smoothies" },
  { name: "Fresh Juices", emoji: "\uD83C\uDF4A", bg: "bg-sunrise-500", slug: "fresh-juices" },
  { name: "Coffee Bar", emoji: "\u2615", bg: "bg-earth-500", slug: "organic-coffee-bar" },
  { name: "Breakfast", emoji: "\uD83E\uDD5E", bg: "bg-sunshine-500", slug: "organic-breakfast" },
  { name: "Salads", emoji: "\uD83E\uDD57", bg: "bg-garden-400", slug: "organic-salads" },
  { name: "Protein Bowls", emoji: "\uD83C\uDF5A", bg: "bg-ocean-500", slug: "organic-protein-bowls" },
  { name: "Sandwiches", emoji: "\uD83E\uDD6A", bg: "bg-chili-400", slug: "organic-sandwiches" },
  { name: "Pizza", emoji: "\uD83C\uDF55", bg: "bg-sunrise-400", slug: "organic-pizza" },
  { name: "Gluten Free Pasta", emoji: "\uD83C\uDF5D", bg: "bg-berry-400", slug: "gluten-free-pasta" },
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
            <Link
              key={cat.name}
              href={`/menu#${cat.slug}`}
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
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/menu"
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
