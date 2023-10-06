import { z } from 'zod'

export const CartAddressSchema = z.object({
  cep: z.string().min(8).max(8),
  street: z.string().min(1),
  number: z.string().min(1),
  complement: z.string().nullish(),
  neighborhood: z.string().min(1),
  state: z.object({
    value: z.string(),
    label: z.string(),
  }),

  city: z.object({
    value: z.string(),
    label: z.string(),
  }),
})

export type CartAddressSchemaInput = z.input<typeof CartAddressSchema>
export type CartAddressSchemaOutput = z.output<typeof CartAddressSchema>
export type CartAddressSchemaInfer = z.infer<typeof CartAddressSchema>
