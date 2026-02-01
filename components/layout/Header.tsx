"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { LOCATION, BRAND } from "@/lib/locations"

const NAV_ITEMS = [
  { label: "Menu", href: "/order" },
  { label: "Catering", href: "/catering" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-garden-700 shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold uppercase tracking-wider text-white font-heading">
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wider text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${LOCATION.phone}`}
            className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white"
          >
            <Phone className="h-4 w-4" />
            {LOCATION.phoneFormatted}
          </a>
          <Button
            asChild
            className="bg-white font-bold uppercase tracking-wider text-garden-700 hover:bg-white/90"
          >
            <a href={LOCATION.orderUrl} target="_blank" rel="noopener noreferrer">
              Order Online
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            asChild
            size="sm"
            className="bg-white text-xs font-bold uppercase tracking-wider text-garden-700 hover:bg-white/90"
          >
            <a href={LOCATION.orderUrl} target="_blank" rel="noopener noreferrer">
              Order
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-garden-800">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-3 text-base font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-4 border-t border-white/20" />
                <a
                  href={`tel:${LOCATION.phone}`}
                  className="flex items-center gap-2 rounded-md px-4 py-3 text-base font-medium text-white/70 hover:bg-white/10 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {LOCATION.phoneFormatted}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
