import { TratedCategoriesBookType } from '@/types/booktype'
import { TratedCategoriesType } from '@/types/categoriesType'
import { RowDataType } from 'rsuite-table'

export type ITableActions = {
  onHandleEdit: (id: string) => void
  onHandleDelete: (id: string) => void
  rowData: TratedCategoriesBookType | RowDataType<never>
  categoriesList: TratedCategoriesType
  refetch: () => void
}
