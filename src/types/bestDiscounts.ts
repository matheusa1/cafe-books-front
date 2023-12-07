import { ResponseBookType } from './booktype'

export type TMostDiscountResponse = {
  book: ResponseBookType
  discount_percentage: string
}[]
