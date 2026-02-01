"use client"

import { useState, useEffect } from "react"
import type { MenuCategory } from "@/lib/menu-data"

type MenuNavProps = {
  categories: MenuCategory[]
}

export function MenuNav({ categories }: MenuNavProps) {
  const [activeSlug, setActiveSlug] = useState(categories[0]?.slug ?? "")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    categories.forEach((category) => {
      const el = document.getElementById(category.slug)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSlug(category.slug)
            }
          })
        },
        { rootMargin: "-20% 0px -70% 0px" }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [categories])

  const handleClick = (slug: string) => {
    const el = document.getElementById(slug)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="scrollbar-hide flex gap-1 overflow-x-auto py-3">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleClick(category.slug)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeSlug === category.slug
                  ? "bg-berry-500 text-white"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <span className="mr-1.5" aria-hidden="true">
                {category.emoji}
              </span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
