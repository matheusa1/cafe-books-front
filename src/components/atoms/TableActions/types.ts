import { ResponseBookType } from '@/types/booktype'
import { TratedCategoriesType } from '@/types/categoriesType'
import { RowDataType } from 'rsuite-table'

export type ITableActions = {
  onHandleEdit: (id: string) => void
  onHandleDelete: (id: string) => void
  rowData: ResponseBookType | RowDataType<never>
  categoriesList: TratedCategoriesType
  refetch: () => void
}
