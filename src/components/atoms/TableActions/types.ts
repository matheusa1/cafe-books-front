import { BookType } from '@/types/booktype'
import { RowDataType } from 'rsuite-table'

export type ITableActions = {
  onHandleEdit: (id: string) => void
  onHandleDelete: (id: string) => void
  rowData: BookType | RowDataType<never>
}
