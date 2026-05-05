import type { ImageMetadata } from "astro";
import pomeranian from "@/assets/gallery/01-pomeranian.jpg";
import pomMix from "@/assets/gallery/02-pom-mix.jpg";
import tabby from "@/assets/gallery/03-tabby-cat.jpg";
import persian from "@/assets/gallery/04-persian-chair.jpg";
import dachshund from "@/assets/gallery/05-dachshund.jpg";
import poodle from "@/assets/gallery/06-poodle-holiday.jpg";
import pupToys from "@/assets/gallery/07-pup-toys.jpg";
import pupSweater from "@/assets/gallery/08-pup-sweater.jpg";
import meetGreet from "@/assets/gallery/09-meet-and-greet.jpg";

export interface GalleryItem {
  src: ImageMetadata;
  alt: string;
  caption: string;
}

export const galleryItems = {
  pomeranian: {
    src: pomeranian,
    alt: "Silver Pomeranian relaxing on a jute rug, freshly fluffed.",
    caption: "Pomeranian · freshly fluffed",
  },
  pomMix: {
    src: pomMix,
    alt: "Black and tan Pomeranian mix with bright eyes, sitting on a wood floor.",
    caption: "Pom mix · bright eyes",
  },
  tabby: {
    src: tabby,
    alt: "Long-haired tabby cat with green eyes, freshly groomed.",
    caption: "Long-haired tabby · post-groom",
  },
  persian: {
    src: persian,
    alt: "White Persian cat sitting on an ornate silver tufted chair.",
    caption: "Persian · royalty",
  },
  dachshund: {
    src: dachshund,
    alt: "Black and tan dapple dachshund sitting on a bed.",
    caption: "Dachshund · sleek & shiny",
  },
  poodle: {
    src: poodle,
    alt: "White poodle sitting next to a lit Christmas tree, photographed in black and white.",
    caption: "Holiday poodle",
  },
  pupToys: {
    src: pupToys,
    alt: "Grey and white doodle puppy lounging on a sofa with stuffed toys after a groom.",
    caption: "Post-spa playtime",
  },
  pupSweater: {
    src: pupSweater,
    alt: "Grey and white doodle pup standing up in a knit turtleneck sweater.",
    caption: "Sweater season",
  },
  meetGreet: {
    src: meetGreet,
    alt: "Cream Shih Tzu and a small black puppy saying hello after their groom.",
    caption: "Studio mornings",
  },
} as const satisfies Record<string, GalleryItem>;

export const galleryBySpecies: Record<"dog" | "cat" | "both", GalleryItem[]> = {
  dog: [galleryItems.pomeranian, galleryItems.dachshund, galleryItems.poodle],
  cat: [galleryItems.tabby, galleryItems.persian, galleryItems.meetGreet],
  both: [galleryItems.pomMix, galleryItems.tabby, galleryItems.poodle],
};
