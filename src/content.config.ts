import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';
import { TAGS } from "@/constants";

const DATE_NAME_PATTERN = "**/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]_*";

const blog = defineCollection({
  loader: glob({ pattern: `${DATE_NAME_PATTERN}.md`, base: "./src/data/blog" }),
  schema: z.object({
    slug: z.string().min(1),
    title: z.string().min(3),
    summary: z.string().min(5),
    date: z.date(),
    author: z.string(),
    draft: z.boolean().optional(),
  }).strict(),
});

const plugins = defineCollection({
  loader: glob({ pattern: ["*/plugin.md"], base: "./src/data/plugins" }),
  schema: ({ image }) => z.object({
    id: z.string().min(10),
    slug: z.string().min(1).optional(),
    videos: z.array(
      z.string()
        .refine(v =>
          v.startsWith("https://youtube.com/watch") ||
          v.startsWith("https://www.youtube.com/watch") ||
          v.startsWith("https://youtu.be/")
        ),
    ).optional(),
    images: z.array(image()).optional(),
    tags: z.array(z.enum(TAGS)).optional(),
    draft: z.boolean().optional(),
  }).strict(),
});

const pluginBlog = defineCollection({
  loader: glob({ pattern: [`*/blog/${DATE_NAME_PATTERN}.md`], base: "./src/data/plugins" }),
  schema: z.object({
    slug: z.string().min(1),
    title: z.string().min(3),
    summary: z.string().min(5),
    date: z.date(),
    author: z.string(),
    draft: z.boolean().optional(),
  }).strict(),
});

export const collections = {
  blog,
  plugins,
  pluginBlog,
};
