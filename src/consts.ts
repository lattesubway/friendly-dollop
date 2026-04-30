export const SITE = {
  name: "The Pet Affaire",
  tagline: "Cat & Dog Grooming — Santa Monica",
  description:
    "Gentle, expert grooming for cats and dogs in Santa Monica, California. Hand-finished cuts, low-stress baths, and a calm, considered space your pet will actually enjoy.",
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
