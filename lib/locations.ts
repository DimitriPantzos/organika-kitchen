export type DayHours = {
  day: string
  open: string
  close: string
  closed?: boolean
}

export type Location = {
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  phoneFormatted: string
  orderUrl: string
  mapEmbedUrl: string
  geo: { lat: number; lng: number }
  hours: DayHours[]
  googleMapsUrl: string
}

export const LOCATION: Location = {
  name: "Southport",
  address: "3546 Post Rd",
  city: "Southport",
  state: "CT",
  zip: "06890",
  phone: "2039551500",
  phoneFormatted: "(203) 955-1500",
  orderUrl: "https://order.toasttab.com/online/organika",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Organika+Kitchen,+3546+Post+Rd,+Southport,+CT+06890&output=embed",
  geo: { lat: 41.1423, lng: -73.2866 },
  hours: [
    { day: "Monday", open: "8:00 AM", close: "7:00 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "7:00 PM" },
    { day: "Wednesday", open: "8:00 AM", close: "7:00 PM" },
    { day: "Thursday", open: "8:00 AM", close: "7:00 PM" },
    { day: "Friday", open: "8:00 AM", close: "7:00 PM" },
    { day: "Saturday", open: "8:00 AM", close: "7:00 PM" },
    { day: "Sunday", open: "8:00 AM", close: "5:00 PM" },
  ],
  googleMapsUrl: "https://maps.google.com/?q=3546+Post+Rd+Southport+CT+06890",
} as const

export const SOCIAL = {
  instagram: "https://instagram.com/organikakitchen",
  instagramHandle: "@organikakitchen",
  facebook: "https://www.facebook.com/OrganikaKitchen/",
} as const

export const BRAND = {
  name: "Organika Kitchen",
  tagline: "Plant-Based | Organic | Grab & Go",
  description:
    "Plant-based and organic restaurant in Southport, CT. Handcrafted smoothies, plant burgers, acai bowls, baked goods, and grab-and-go meals. Made with intention since 2016.",
  email: "info@organikact.com",
  url: "https://organikact.com",
} as const
