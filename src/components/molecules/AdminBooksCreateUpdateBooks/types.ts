import { SingleDataType } from '@/mock/booksInfoData'
import { RowDataType } from 'rsuite-table'
import { z } from 'zod'

export type IAdminBooksCreateUpdateBooks = {
  setModalOpen: (value: boolean) => void
  data?: SingleDataType | RowDataType<never>
}

const Response = {
  string: 'Campo Obigatório',
}

export const AdminCreateSchema = z.object({
  title: z.string().nonempty(Response.string).min(1).max(50),
  description: z.string().nonempty(Response.string).min(1).max(500),
  author: z.string().nonempty(Response.string).min(1).max(50),
  publisher: z.string().nonempty(Response.string).min(1).max(50),
  edition: z.string().nonempty(Response.string).min(1).max(50),
  illustration: z.string().nonempty(Response.string).min(1).max(50),
  translator: z.string().nonempty(Response.string).min(1).max(50),
  originalLanguage: z.string().nonempty(Response.string).min(1).max(50),
  originalTitle: z.string().nonempty(Response.string).min(1).max(50),
  pages: z
    .string()
    .min(1)
    .max(10000)
    .refine((value) => {
      return !isNaN(Number(value))
    }, 'Campo deve ser um numero'),
  finish: z.string().nonempty(Response.string).min(1).max(50),
  releaseDate: z
    .string()
    .min(1)
    .max(2021)
    .refine((value) => {
      return !isNaN(Number(value))
    }, 'Campo deve ser um numero'),
  coverImage: z.string().nonempty(Response.string).min(1).max(50),
  price: z
    .string()
    .min(1)
    .max(10000)
    .refine((value) => {
      return !isNaN(Number(value))
    }, 'Campo deve ser um numero'),
  discountPrice: z.string().nullish(),
})

export type AdminCreateType = z.infer<typeof AdminCreateSchema>
