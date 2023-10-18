import { TratedCategoriesBookType } from '@/types/booktype'
import { TratedCategoriesType } from '@/types/categoriesType'
import { RowDataType } from 'rsuite-table'
import { z } from 'zod'

export type IAdminBooksCreateUpdateBooks = {
  setModalOpen: (value: boolean) => void
  data?: TratedCategoriesBookType | RowDataType<never>
  categoriesList: TratedCategoriesType
  refetch: () => void
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
  image: z.any().refine((val) => val && val.length > 0, Response.string),
  description: z.string().nonempty(Response.string),
  year: z.string().nonempty(Response.string),
  pages: z.string().nonempty(Response.string),
  price: z.string().nonempty(Response.string),
  promotional_price: z.string().nullish(),
  stock: z.string().nonempty(Response.string),
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
