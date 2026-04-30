import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    species: z.enum(["dog", "cat", "both"]),
    summary: z.string(),
    priceFrom: z.number().optional(),
    priceNote: z.string().optional(),
    duration: z.string().optional(),
    includes: z.array(z.string()).default([]),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("The Pet Affaire"),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reviews" }),
  schema: z.object({
    author: z.string(),
    pet: z.string().optional(),
    rating: z.number().min(1).max(5).default(5),
    source: z.string().optional(),
    date: z.coerce.date().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { services, journal, reviews };
