export const SITE = {
  name: "The Pet Affaire",
  tagline: "Cat & Dog Grooming — Santa Monica",
  description:
    "Gentle, expert grooming for cats and dogs in Santa Monica, California. Hand-finished cuts, low-stress baths, and a calm, considered space your pet will actually enjoy.",
  url: "https://www.thepetaffaire.com",
  email: "hello@thepetaffaire.com",
  phone: "(310) 000-0000",
  phoneHref: "tel:+13100000000",
  address: {
    street: "Santa Monica, CA",
    city: "Santa Monica",
    region: "CA",
    postalCode: "90401",
    country: "US",
  },
  hours: [
    { day: "Tue – Fri", hours: "9:00 AM – 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
    { day: "Sun – Mon", hours: "Closed" },
  ],
  social: {
    instagram: "https://instagram.com/thepetaffaire",
    google: "https://www.google.com/search?q=The+Pet+Affaire+Santa+Monica",
  },
  // Replace with your real Calendly / Square Appointments / Vagaro link.
  bookingUrl: "https://calendly.com/thepetaffaire",
} as const;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
] as const;
