import { z } from 'zod'

export const createCategorySchema = z.object({
  name: z.string().min(3).max(255),
  image: z.any().refine((val) => val && val.length > 0, 'Campo Obigatório'),
})

export type createCategorySchemaType = z.infer<typeof createCategorySchema>
