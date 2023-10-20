import { z } from 'zod'

export const createAuthorSchema = z.object({
  name: z.string().min(3).max(255),
  image: z.any().refine((val) => val && val.length > 0, 'Campo Obigatório'),
})

export type createAuthorSchemaType = z.infer<typeof createAuthorSchema>
