import React, { ReactElement } from 'react'
import { IAdminBooksContent } from './types'
import { Cell, Column, HeaderCell, RowDataType, Table } from 'rsuite-table'
import CurrencyText from '@/components/atoms/CurrencyText'
import TableActions from '@/components/atoms/TableActions'
import { BookType } from '@/types/booktype'

import EmptyImage from '@/assets/images/empty-box.png'
import Image from 'next/image'

const AdminBooksContent: React.FC<IAdminBooksContent> = ({
  books,
}): ReactElement => {
  const ActionCell = ({
    rowData,
  }: {
    rowData: BookType | RowDataType<never>
  }) => {
    return (
      <TableActions
        rowData={rowData}
        onHandleDelete={() => alert(`delete: ${rowData.isbn}`)}
        onHandleEdit={() => alert(` edit: ${rowData.isbn}`)}
      />
    )
  }

  return (
    <div className={`flex-1 ${books.length === 0 && 'flex'}`}>
      {books.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <Image src={EmptyImage} alt="Table Vazia" className="w-20" />
          <span>Ops! Nenhum dado encontrado. 😥</span>
        </div>
      ) : (
        <Table data={books} fillHeight wordWrap={true}>
          <Column minWidth={20} fixed>
            <HeaderCell>ISBN</HeaderCell>
            <Cell dataKey="isbn" />
          </Column>
          <Column flexGrow={1} minWidth={220}>
            <HeaderCell>Titulo</HeaderCell>
            <Cell dataKey="title" />
          </Column>
          <Column align={'center'} flexGrow={1} minWidth={100}>
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
          <Column align={'center'} flexGrow={1} minWidth={100}>
            <HeaderCell>Preço</HeaderCell>
            <Cell dataKey="price">
              {(rowData) => {
                return <CurrencyText value={Number(rowData.price)} />
              }}
            </Cell>
          </Column>
          <Column align={'center'} flexGrow={1} minWidth={100}>
            <HeaderCell>Criação</HeaderCell>
            <Cell dataKey="year" />
          </Column>
          {/* <Column align={'center'} flexGrow={1} minWidth={100}>
          <HeaderCell>Ação</HeaderCell>
          <Cell dataKey="id">
            {(rowData) => {
              return (
                <TableActions
                  rowData={rowData}
                  onHandleDelete={() => alert(`delete: ${rowData.id}`)}
                  onHandleEdit={() => alert(` edit: ${rowData.id}`)}
                />
              )
            }}
          </Cell>
        </Column> */}
          <Column align={'center'} flexGrow={1} minWidth={100}>
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
