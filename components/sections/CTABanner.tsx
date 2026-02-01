import Link from "next/link"
import { Button } from "@/components/ui/button"

type CTABannerProps = {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  variant?: "garden" | "earth"
}

export function CTABanner({
  title,
  description,
  buttonText,
  buttonHref,
  variant = "garden",
}: CTABannerProps) {
  const bgClass =
    variant === "garden"
      ? "bg-charcoal-800 text-white"
      : "bg-cream-elevated text-foreground"

  const btnClass =
    variant === "garden"
      ? "bg-berry-500 text-white hover:bg-berry-400"
      : "bg-berry-500 text-white hover:bg-berry-400"

  return (
    <section className={`${bgClass} section-padding`}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        <p
          className={`mx-auto mt-4 max-w-xl text-lg ${
            variant === "garden" ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
        <Button asChild size="lg" className={`mt-8 text-lg ${btnClass}`}>
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  )
}
