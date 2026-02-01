import Link from "next/link"
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"
import { LOCATION, SOCIAL, BRAND } from "@/lib/locations"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-extrabold uppercase tracking-wider text-white font-heading">
                {BRAND.name}
              </span>
            </Link>
            <p className="mt-1 font-script text-lg text-berry-300">
              Southport, CT
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              {BRAND.description}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-berry-300"
              >
                <Instagram className="h-4 w-4" />
                {SOCIAL.instagramHandle}
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white/50 hover:text-berry-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-berry-300 font-heading">
              {LOCATION.name}
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sunrise-400" />
                <a
                  href={LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {LOCATION.address}
                  <br />
                  {LOCATION.city}, {LOCATION.state} {LOCATION.zip}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-sunrise-400" />
                <a
                  href={`tel:${LOCATION.phone}`}
                  className="hover:text-white"
                >
                  {LOCATION.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sunrise-400" />
                <span>
                  Mon&ndash;Sat: {LOCATION.hours[0].open} - {LOCATION.hours[0].close}
                  <br />
                  Sun: {LOCATION.hours[6].open} - {LOCATION.hours[6].close}
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-berry-300 font-heading">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={LOCATION.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white"
                >
                  Order Online
                </a>
              </li>
              <li>
                <Link href="/catering" className="text-white/50 hover:text-white">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/50 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 py-6 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Plant-Based &bull; Organic &bull; Est. 2016
          </p>
        </div>
      </div>
    </footer>
  )
}
