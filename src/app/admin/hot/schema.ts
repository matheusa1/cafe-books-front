import { z } from 'zod'

export const schema = z.object({
  book: z.object({
    label: z.string(),
    value: z.string(),
  }),
  mainText: z.string(),
  subText: z.string(),
  image: z.array(
    z.object({
      name: z.string(),
      size: z.number(),
      type: z.string(),
      url: z.string(),
    }),
  ),
})
