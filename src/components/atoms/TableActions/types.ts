import { SingleDataType } from '@/mock/booksInfoData'
import { RowDataType } from 'rsuite-table'

export type ITableActions = {
  onHandleEdit: (id: string) => void
  onHandleDelete: (id: string) => void
  rowData: SingleDataType | RowDataType<never>
}
