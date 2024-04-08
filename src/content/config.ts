// Import utilities from `astro:content`
// @ts-ignore
import {z, defineCollection} from "astro:content"
// Define a `type` and `schema` for each collection

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
    alt: z.string(),
    width: z.number(),
    height: z.number(),
    priority: z.number().optional(),
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  images: images,
};