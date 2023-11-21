// Import utilities from `astro:content`
// @ts-ignore
import {z, defineCollection} from "astro:content"
// Define a `type` and `schema` for each collection
const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    quote: z.string(),
    callout: z.string(),
    position: z.string(),
  })
});

const images = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    credit: z.string(),
    style: z.string(),
    project: z.string(),
    type: z.string(),
    pathToImage: z.string(),
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  testimonials: testimonials,
  images: images,
};