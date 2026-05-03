export const SITE = {
  name: "The Pet Affaire",
  tagline: "Gentle Grooming. Tail-Wagging Results.",
  description:
    "Gentle, expert grooming for cats and dogs in Santa Monica, California. Calm handling, hand-finished cuts, and honest neighborhood prices — because grooming, done well, is an art form.",
  url: "https://thepetaffaire.com",
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

// ─── Fonts ────────────────────────────────────────────────────────────────
// Change these to swap typography across the entire site.
//
// `family` is the typeface name as Google Fonts knows it.
// `googleSpec` is the Google Fonts URL fragment (weights/axes you want loaded).
// `fallback` is the system-font fallback chain.
//
// To try a different body font, browse https://fonts.google.com, pick one,
// then replace `body` below. Examples (paste any of these into `body`):
//
//   Manrope:           family: "Manrope",       googleSpec: "Manrope:wght@400;500;600;700"
//   Plus Jakarta Sans: family: "Plus Jakarta Sans", googleSpec: "Plus+Jakarta+Sans:wght@400;500;600;700"
//   DM Sans:           family: "DM Sans",       googleSpec: "DM+Sans:wght@400;500;600;700"
//   Karla:             family: "Karla",         googleSpec: "Karla:wght@400;500;600;700"
//   Outfit:            family: "Outfit",        googleSpec: "Outfit:wght@400;500;600;700"
//   Work Sans:         family: "Work Sans",     googleSpec: "Work+Sans:wght@400;500;600;700"
//   Public Sans:       family: "Public Sans",   googleSpec: "Public+Sans:wght@400;500;600;700"
//   Source Sans 3:     family: "Source Sans 3", googleSpec: "Source+Sans+3:wght@400;500;600;700"
//   Geist:             family: "Geist",         googleSpec: "Geist:wght@400;500;600;700"
//   Nunito:            family: "Nunito",        googleSpec: "Nunito:wght@400;500;600;700"
export const FONTS = {
  body: {
    family: "DM Sans",
    googleSpec: "DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700",
    fallback: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  display: {
    family: "Fraunces",
    googleSpec: "Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600",
    fallback: '"Cormorant Garamond", ui-serif, Georgia, "Times New Roman", serif',
  },
} as const;

// ─── Hero media (the big visual on the home page) ─────────────────────────
// Three modes — set `kind` to whichever you want:
//
//   "placeholder"  default gradient with "[ studio photo ]" caption
//   "image"        a single still photo (set `image` below)
//   "video"        a looping muted clip (set `mp4`, optional `webm`, optional `poster`)
//
// HOW TO USE A VIDEO CLIP:
//   1. Drop your file into the repo at  public/hero/video.mp4
//   2. (Optional but recommended) export a `.webm` too for smaller file sizes
//      in Chrome/Firefox: `public/hero/video.webm`
//   3. (Recommended) export a still frame as `public/hero/poster.jpg` —
//      it shows instantly while the video buffers and is shown to users
//      with `prefers-reduced-motion` enabled.
//   4. Set `kind: "video"` below.
//
// Tips for a great hero clip:
//   • 6 – 12 seconds, will loop silently
//   • 4:5 portrait orientation reads best (matches the on-screen frame)
//   • Target <2 MB MP4 so the page stays fast — H.264, ~3 Mbps is plenty
//   • iPhone "Slo-mo" or any well-lit phone clip works great
//   • Avoid sudden cuts / flashes; viewers will see a calm loop
export const HERO_MEDIA = {
  kind: "video" as "placeholder" | "image" | "video",
  // For "image" mode:
  image: "/hero/photo.jpg",
  // For "video" mode:
  mp4: "/hero/video.mp4",
  webm: "/hero/video.webm",
  poster: "/hero/poster.jpg",
  // Shown to screen readers + reduced-motion users:
  alt: "A pet being gently groomed at The Pet Affaire studio in Santa Monica.",
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
