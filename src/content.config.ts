import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/content/projects",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      lang: z.enum(["el", "en"]),
      description: z.string(),
      thumbnail: image(),
      images: z.array(image()).optional(),
      tags: z.array(z.string()).optional(),
      year: z.number().optional(),
      location: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

export const collections = { projects };
