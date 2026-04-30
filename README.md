# The Pet Affaire

A custom Astro + Tailwind site for The Pet Affaire — a cat & dog grooming studio in Santa Monica, CA.

This replaces the Cargo.site build with a real codebase: typed content collections, SEO + LocalBusiness schema, an RSS-backed journal, gallery, reviews, gift cards, newsletter signup, and a working contact form with spam protection.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + production build to ./dist
npm run preview  # preview the production build
```

Node 20+ recommended.

## Project layout

```
src/
  components/         Header, Footer, SEO, LocalBusiness JSON-LD, Reviews, Section
  content/
    services/*.md     Each service: price, duration, includes, body
    journal/*.md      Blog posts (renders via /journal and RSS)
    reviews/*.md      Customer reviews (renders home + /reviews)
  layouts/BaseLayout.astro
  pages/              index, services, about, gallery, reviews, contact, book, gift-cards, journal/*
  styles/global.css   Tailwind v4 + custom theme tokens
  consts.ts           Single source of truth: name, hours, phone, address, booking URL, nav
public/
  robots.txt
  favicon.svg
  _redirects          Netlify redirects (legacy URLs)
netlify.toml          Build + security headers
```

## Things to fill in (do these once, then you're done)

1. **`src/consts.ts`** — real phone, email, address, hours, social URLs, booking URL.
2. **Booking provider** — by default this site uses **Cal.com** (open source). Sign up, create an event, then update `calLink` / `bookingUrl` in `src/consts.ts`. See "Booking" below for the full setup. Other providers (Square, Calendly, Tally, manual) are also wired — flip `provider` in `src/pages/book.astro`.
3. **Gift cards** — open `src/pages/gift-cards.astro` and replace `giftCardUrl` with your Square or Stripe checkout link.
4. **Gallery** — drop real images into `public/gallery/` (filenames `01.jpg`, `02.jpg`, …) and update alt text in `src/pages/gallery.astro`.
5. **Open Graph image** — put a 1200×630 share image at `public/og-default.jpg`.
6. **Reviews** — replace the placeholder review files in `src/content/reviews/` with your real ones (one Markdown file per review).

## Booking — replace Tally with a real scheduler

Tally is a form tool, not a scheduler — that's why appointment requests sometimes don't reach you in time. For a grooming business you want a system with calendar, intake, automatic email confirmations, and reminders on both sides.

The default `provider` in `src/pages/book.astro` is **Cal.com** — open source (AGPL), beautiful, embeddable, free for the basics. It is the recommended pick.

### Setting up Cal.com

1. Sign up at [cal.com](https://cal.com) (or self-host the open-source version on Railway / Fly.io if you want full ownership — same code).
2. Create an event type. Suggested defaults:
   - **Name:** Grooming appointment
   - **URL slug:** `groom`
   - **Duration:** 90 minutes (cats) / 120 minutes (dogs) — you can create separate events per species/service
   - **Buffer time:** 15 min before / 15 min after
   - **Minimum notice:** 24 hours
   - **Booking limits:** match your studio capacity (e.g. 1 at a time)
3. Open Cal's **Workflows** tab and add:
   - Email confirmation to attendee on booking
   - Email + push notification to **you** on booking — set this so you never miss one
   - Email reminder 24 hours before (and 2 hours before for repeat clients)
4. Connect a calendar (Google / Apple / Outlook) so Cal won't double-book.
5. Update `src/consts.ts`:
   ```ts
   calLink: "<your-cal-username>/groom",
   calOrigin: "https://cal.com",       // or your self-hosted URL
   bookingUrl: "https://cal.com/<your-cal-username>/groom",
   ```
6. Optional: enable Stripe in Cal.com to take deposits and reduce no-shows.

### Other providers (already wired, just flip the switch)

In `src/pages/book.astro`, change `provider`:
- `"square"` — Square Appointments (free; closed source). Paste the embed URL into `squareUrl`.
- `"calendly"` — Calendly inline embed.
- `"tally"` — your existing Tally form (kept as a fallback).
- `"manual"` — no calendar; just phone + email.

Whatever you pick, also enable **email + push notifications** in the provider's settings — that's the fix for missed appointments.

## Forms — make sure you actually see submissions

The contact form (`/contact`) and newsletter signup (footer) use **Netlify Forms** with a honeypot + reCAPTCHA. Once deployed to Netlify:

- In the Netlify dashboard → Forms → set up email notifications **and** a Slack/Zapier webhook so submissions ping you in real time.
- Optional but recommended: add a Zapier zap from "New Netlify form submission" → SMS via Twilio so you get a text instantly.

If you're not on Netlify, swap to Formspree, Basin, or Web3Forms — same form HTML, just change the `action`.

## Deployment

- **Netlify** (recommended): connect this repo → it picks up `netlify.toml`. Done.
- **Vercel**: works out of the box; `npm run build`, output dir `dist/`.
- **Custom domain**: when ready, point `www.thepetaffaire.com` DNS at the new host and sunset the Cargo subscription.

## SEO

- `LocalBusiness` (`PetStore`) JSON-LD on every page, with hours, address, services, and area served.
- `Article` JSON-LD on every journal post.
- `sitemap-index.xml` auto-generated by `@astrojs/sitemap`.
- `robots.txt` references the sitemap.
- Open Graph + Twitter Card meta on every page.

## Adding a journal post

Create `src/content/journal/my-post.md`:

```md
---
title: "How we de-mat without shaving"
description: "A short walkthrough of low-stress de-matting."
pubDate: 2025-05-01
tags: ["how-to", "coat-care"]
---

Body text in Markdown…
```

That's it — it's automatically listed at `/journal`, gets a detail page, and shows up in the RSS feed.

## Adding a service

Create `src/content/services/foo.md`:

```md
---
title: "Doodle Maintenance Cut"
species: "dog"            # "dog" | "cat" | "both"
summary: "A short, easy-care cut for doodles between full grooms."
priceFrom: 85
priceNote: "Final price set in person."
duration: "90 minutes"
order: 25                 # lower = sorted higher
featured: true            # show on the home page
includes:
  - "Bath and dry"
  - "Half-inch all-over clip"
  - "Face, paws, sanitary tidy"
faq:
  - q: "How often?"
    a: "Every 6–8 weeks."
seoTitle: "Doodle Cut in Santa Monica"
seoDescription: "Maintenance cuts for goldendoodles and labradoodles..."
---

Body text in Markdown — appears on the detail page at /services/<filename>/.
```

The service automatically gets:
- A listing card at `/services`
- A full detail page at `/services/<filename>/` with FAQ accordions, related services, and `Service` + `BreadcrumbList` + `FAQPage` JSON-LD.

## Adding a review

Create `src/content/reviews/whoever.md`:

```md
---
author: "Sarah K."
pet: "Maple, mini-doodle"
rating: 5
source: "Google"
date: 2025-01-14
featured: true
---

Maple comes home looking like a new dog…
```
