"use client"

const TAGLINES = [
  "Because We Kale",
  "Don't panic, it's organic",
  "Eat More Veggies",
  "Made with Love",
  "Fresh",
  "Organic",
  "Juicy",
  "Plant Based",
  "Vegan",
  "Homemade",
]

export function TaglineMarquee() {
  return (
    <div className="overflow-hidden bg-garden-700 py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...TAGLINES, ...TAGLINES].map((tagline, i) => (
          <span
            key={i}
            className="mx-4 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white sm:mx-6 sm:text-sm"
          >
            {tagline}
            <span className="text-garden-300" aria-hidden="true">
              &#x2022;
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
