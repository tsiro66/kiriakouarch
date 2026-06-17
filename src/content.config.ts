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
      titleEl: z.string(),
      titleEn: z.string(),
      descriptionEl: z.string(),
      descriptionEn: z.string(),
      thumbnail: image(),
      images: z.array(image()).optional(),
      tagsEl: z.array(z.string()).optional(),
      tagsEn: z.array(z.string()).optional(),
      year: z.number().optional(),
      locationEl: z.string().optional(),
      locationEn: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      bodyEl: z.string().optional(),
      bodyEn: z.string().optional(),
    }),
});

export const collections = { projects };