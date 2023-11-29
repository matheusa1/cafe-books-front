import { z } from 'zod'

export const ChangeUserDataSchema = z.object({
  name: z.string().nullish(),
  phone: z.string().nullish(),
  gender: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .nullish(),
})

export type TChangeUserDataSchema = z.infer<typeof ChangeUserDataSchema>
