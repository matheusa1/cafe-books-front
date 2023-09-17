import { ResponseBooksType } from '@/types/booktype'
import { TratedCategoriesType } from '@/types/categoriesType'

export type IAdminBooksContent = {
  books: ResponseBooksType
  categoriesList: TratedCategoriesType
  isLoading: boolean
  refetch: () => void
}
