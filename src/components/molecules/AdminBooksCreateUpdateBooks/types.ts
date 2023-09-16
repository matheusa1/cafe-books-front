import { BookType } from '@/types/booktype'
import { RowDataType } from 'rsuite-table'
import { z } from 'zod'

export type IAdminBooksCreateUpdateBooks = {
  setModalOpen: (value: boolean) => void
  data?: BookType | RowDataType<never>
}

const Response = {
  string: 'Campo Obigatório',
}

export const AdminCreateSchema = z.object({
  isbn: z.string().nonempty(Response.string),
  title: z.string().nonempty(Response.string),
  author: z.string().nonempty(Response.string),
  publisher: z.string().nonempty(Response.string),
  country: z.string().nonempty(Response.string),
  language: z.string().nonempty(Response.string),
  image: z.string().nonempty(Response.string),
  description: z.string().nonempty(Response.string),
  year: z
    .string()
    .nonempty(Response.string)
    .transform((val) => Number(val)),
  pages: z
    .string()
    .nonempty(Response.string)
    .transform((val) => Number(val)),
  price: z
    .string()
    .nonempty(Response.string)
    .transform((val) => Number(val)),
  promotional_price: z
    .string()
    .nullish()
    .transform((val) => Number(val)),
  stock: z
    .string()
    .nonempty(Response.string)
    .transform((val) => Number(val)),
  category: z
    .array(
      z.object({
        label: z.string().nonempty(Response.string),
        value: z.string().nonempty(Response.string),
      }),
    )
    .min(1, 'Deve conter ao menos uma categoria')
    .transform((val) => val.map((item) => item.value)),
})

export type AdminCreateType = z.infer<typeof AdminCreateSchema>
export type AdminCreateInput = z.input<typeof AdminCreateSchema>
export type AdminCreateOutput = z.output<typeof AdminCreateSchema>
