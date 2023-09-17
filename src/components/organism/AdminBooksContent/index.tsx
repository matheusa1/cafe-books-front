import React, { ReactElement } from 'react'
import { IAdminBooksContent } from './types'
import { Cell, Column, HeaderCell, RowDataType, Table } from 'rsuite-table'
import CurrencyText from '@/components/atoms/CurrencyText'
import TableActions from '@/components/atoms/TableActions'
import { ResponseBookType } from '@/types/booktype'

import EmptyImage from '@/assets/images/empty-box.png'
import Image from 'next/image'

const AdminBooksContent: React.FC<IAdminBooksContent> = ({
  books,
  categoriesList,
  isLoading,
  refetch,
}): ReactElement => {
  const ActionCell = ({
    rowData,
  }: {
    rowData: ResponseBookType | RowDataType<never>
  }) => {
    return (
      <TableActions
        refetch={refetch}
        rowData={rowData}
        categoriesList={categoriesList}
        onHandleDelete={() => alert(`delete: ${rowData.isbn}`)}
        onHandleEdit={() => alert(` edit: ${rowData.isbn}`)}
      />
    )
  }

  return (
    <div className={`flex-1 ${books.length === 0 && 'flex'}`}>
      {isLoading ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <div className="h-14 w-14 animate-spin rounded-full border-b-2 border-gray-900" />
          <span>Carregando... 🚀</span>
        </div>
      ) : books.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <Image src={EmptyImage} alt="Table Vazia" className="w-20" />
          <span>Ops! Nenhum dado encontrado. 😥</span>
        </div>
      ) : (
        <Table data={books} fillHeight>
          <Column fullText minWidth={20} fixed>
            <HeaderCell>ISBN</HeaderCell>
            <Cell dataKey="isbn" />
          </Column>
          <Column fullText flexGrow={1} minWidth={220}>
            <HeaderCell>Titulo</HeaderCell>
            <Cell dataKey="title" />
          </Column>
          <Column fullText align={'center'} flexGrow={1} minWidth={100}>
            <HeaderCell>Gênero</HeaderCell>
            <Cell dataKey="category">
              {(rowData) => {
                return (
                  <div>
                    {rowData.category.map((item: string, index: number) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                )
              }}
            </Cell>
          </Column>
          <Column fullText align={'center'} flexGrow={1} minWidth={100}>
            <HeaderCell>Preço</HeaderCell>
            <Cell dataKey="price">
              {(rowData) => {
                return <CurrencyText value={Number(rowData.price)} />
              }}
            </Cell>
          </Column>
          <Column fullText align={'center'} flexGrow={1} minWidth={100}>
            <HeaderCell>Criação</HeaderCell>
            <Cell dataKey="year" />
          </Column>
          <Column fullText align={'center'} flexGrow={1} minWidth={100}>
            <HeaderCell>Ação</HeaderCell>
            <Cell>
              {(rowData) => {
                return <ActionCell rowData={rowData} />
              }}
            </Cell>
          </Column>
        </Table>
      )}
    </div>
  )
}

export default AdminBooksContent
