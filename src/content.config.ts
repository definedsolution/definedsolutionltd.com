import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content_layer",
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/pages/services" }),
  schema: z.object({
    index: z.number(),
    title: z.string(),
    slug: z.string(),
    image: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  services,
};
