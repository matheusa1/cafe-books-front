import { z } from 'zod'

export const schema = z.object({
  book: z.object({
    label: z.string(),
    value: z.string(),
  }),
  call: z.string({ required_error: 'Requerido' }).nonempty('Requerido'),
  subtext: z.string({ required_error: 'Requerido' }).nonempty('Requerido'),
  image_url: z.any().refine((val) => val && val.length > 0, {
    message: 'Requerido',
  }),
})
