import { TratedAuthorsType } from '@/types/authorTypes'
import { TratedCategoriesType } from '@/types/categoriesType'

export type IAdminBooksHeader = {
  search: string
  setSearch: (search: string) => void
  categoriesList: TratedCategoriesType
  authorsList: TratedAuthorsType
  refetch: () => void
  refetchCategories: () => void
  refetchAuthors: () => void
}
