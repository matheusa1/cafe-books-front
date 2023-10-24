import { TratedAuthorsType } from '@/types/authorTypes'
import { TratedCategoriesBookType } from '@/types/booktype'
import { TratedCategoriesType } from '@/types/categoriesType'
import { RowDataType } from 'rsuite-table'

export type ITableActions = {
  rowData: TratedCategoriesBookType | RowDataType<never>
  categoriesList: TratedCategoriesType
  refetch: () => void
  refetchCategories: () => void
  refetchAuthors: () => void
  authorsList: TratedAuthorsType
}
