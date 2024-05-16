// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// Define a `type` and `schema` for each collection
export const worksCollections = {
	works: defineCollection({
		type: 'content',
		schema: z.object({
			draft: z.boolean().default(false),
			title: z.string(),
			publishDate: z.coerce.date(),
			description: z.string(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			img_figcaption: z.string().optional(),
		}),
	}),
};

export const blogCollections = {
	blog: defineCollection({
		type: 'content',
		schema: z.object({
			draft: z.boolean().default(false),
			title: z.string(),
			publishDate: z.coerce.date(),
			description: z.string(),	
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			img_figcaption: z.string().optional(),
		}),
	}),
};
