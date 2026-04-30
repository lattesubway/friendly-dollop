export const SITE = {
  name: "The Pet Affaire",
  tagline: "Gentle Grooming. Tail-Wagging Results.",
  description:
    "Gentle, expert grooming for cats and dogs in Santa Monica, California. Calm handling, hand-finished cuts, and honest neighborhood prices — because grooming, done well, is an art form.",
  url: "https://www.thepetaffaire.com",
  email: "hello@thepetaffaire.com",
  phone: "(310) 396-0804",
  phoneHref: "tel:+13103960804",
  address: {
    street: "3013 Lincoln Boulevard",
    city: "Santa Monica",
    region: "CA",
    postalCode: "90405",
    country: "US",
  },
  hours: [
    { day: "Tue – Sat", hours: "7:30 AM – 3:00 PM" },
    { day: "Sun – Mon", hours: "Closed" },
  ],
  hoursDetailed: [
    { day: "Tues",   hours: "7:30 AM – 3:00 PM" },
    { day: "Wed",    hours: "7:30 AM – 3:00 PM" },
    { day: "Thurs",  hours: "7:30 AM – 3:00 PM" },
    { day: "Fri",    hours: "7:30 AM – 3:00 PM" },
    { day: "Sat",    hours: "7:30 AM – 3:00 PM" },
  ],
  closedNote: "*Closed Sundays & Mondays",
  social: {
    instagram: "https://instagram.com/thepetaffaire",
    google: "https://www.google.com/search?q=The+Pet+Affaire+Santa+Monica",
  },
  // Cal.com handle + event slug. Format: "<username>/<event-slug>".
  // Sign up at https://cal.com (free), create an event called "groom" or similar,
  // then update this. Self-hosting Cal.com? change calOrigin to your instance.
  calLink: "thepetaffaire/groom",
  calOrigin: "https://cal.com",
  bookingUrl: "https://cal.com/thepetaffaire/groom",
  // Map: derived from address. Replace with the precise lat/lng if you want.
  mapEmbedSrc:
    "https://www.google.com/maps?q=3013+Lincoln+Boulevard,+Santa+Monica,+CA+90405&output=embed",
  mapDirectionsGoogle:
    "https://www.google.com/maps/dir/?api=1&destination=3013+Lincoln+Boulevard,+Santa+Monica,+CA+90405",
  mapDirectionsApple:
    "https://maps.apple.com/?daddr=3013+Lincoln+Boulevard,+Santa+Monica,+CA+90405",
} as const;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
] as const;

// Booking sub-routes (used by Header + Footer to link to intake/book together).
export const BOOK_LINKS = [
  { label: "Online booking (intake form)", href: "/intake" },
  { label: "Pick a time", href: "/book" },
] as const;
