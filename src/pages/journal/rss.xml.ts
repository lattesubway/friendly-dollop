import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@/consts";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("journal")).filter((p) => !p.data.draft);
  return rss({
    title: `${SITE.name} — Journal`,
    description: "Notes, guides, and the occasional opinion from The Pet Affaire.",
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/journal/${p.id}/`,
    })),
  });
}
