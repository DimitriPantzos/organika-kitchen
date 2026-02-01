"use client"

const TAGLINES = [
  { text: "Because We Kale", color: "text-sage-400" },
  { text: "Don't panic, it's organic", color: "text-berry-400" },
  { text: "Eat More Veggies", color: "text-garden-400" },
  { text: "Made with Love", color: "text-berry-300" },
  { text: "Fresh", color: "text-sage-300" },
  { text: "Organic", color: "text-earth-400" },
  { text: "Juicy", color: "text-sunrise-400" },
  { text: "Plant Based", color: "text-garden-400" },
  { text: "Vegan", color: "text-sage-400" },
  { text: "Homemade", color: "text-earth-500" },
]

export function TaglineMarquee() {
  return (
    <div className="overflow-hidden bg-charcoal-900 py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...TAGLINES, ...TAGLINES].map((tagline, i) => (
          <span
            key={i}
            className="mx-4 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white sm:mx-6 sm:text-sm"
          >
            <span className={tagline.color}>{tagline.text}</span>
            <span className="text-charcoal-600" aria-hidden="true">
              &#x2022;
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
