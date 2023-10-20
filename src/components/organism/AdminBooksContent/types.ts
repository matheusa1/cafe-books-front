import { TratedCategoriesBooksType } from '@/types/booktype'
import { TratedCategoriesType } from '@/types/categoriesType'

export type IAdminBooksContent = {
  books: TratedCategoriesBooksType
  categoriesList: TratedCategoriesType
  isLoading: boolean
  refetch: () => void
  refetchCategories: () => void
}
