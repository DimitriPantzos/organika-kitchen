"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LOCATION } from "@/lib/locations"
import { cn } from "@/lib/utils"

type LocationMapProps = {
  height?: number
  className?: string
}

export function LocationMap({ height = 350, className }: LocationMapProps) {
  const [mapReady, setMapReady] = useState(false)

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-sage-200 bg-sage-50",
        className
      )}
      style={{ height }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-sage-50 px-6 text-center"
        aria-hidden={mapReady}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-sage-200"
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M0 70h400M0 130h400M0 190h400M80 0v240M180 0v240M280 0v240"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M0 100h160c20 0 20 40 40 40h200"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            opacity="0.45"
          />
        </svg>

        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-berry-500 text-white shadow-sm">
          <MapPin className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="relative">
          <p className="font-heading text-lg font-bold text-charcoal-800">
            Organika Kitchen
          </p>
          <p className="mt-1 text-sm leading-relaxed text-charcoal-600">
            {LOCATION.address}
            <br />
            {LOCATION.city}, {LOCATION.state} {LOCATION.zip}
          </p>
        </div>
        <Button asChild className="relative bg-berry-500 hover:bg-berry-400">
          <a
            href={LOCATION.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </Button>
      </div>

      <iframe
        src={LOCATION.mapEmbedUrl}
        width="100%"
        height={height}
        className={cn(
          "absolute inset-0 h-full w-full transition-opacity duration-300",
          mapReady ? "z-10 opacity-100" : "pointer-events-none opacity-0"
        )}
        style={{ border: 0 }}
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        title="Organika Kitchen map"
        onLoad={() => setMapReady(true)}
      />
    </div>
  )
}
