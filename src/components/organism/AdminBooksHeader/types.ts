import { TratedCategoriesType } from '@/types/categoriesType'

export type IAdminBooksHeader = {
  search: string
  setSearch: (search: string) => void
  categoriesList: TratedCategoriesType
  refetch: () => void
  refetchCategories: () => void
}
