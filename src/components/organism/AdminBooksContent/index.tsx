import React, { ReactElement } from 'react'
import { IAdminBooksContent } from './types'
import { Cell, Column, HeaderCell, Table } from 'rsuite-table'
import CurrencyText from '@/components/atoms/CurrencyText'
import TableActions from '@/components/atoms/TableActions'

const AdminBooksContent: React.FC<IAdminBooksContent> = ({
  books,
}): ReactElement => {
  return (
    <div className="flex-1">
      <Table
        // isTree
        // rowKey="genre"
        virtualized
        data={books}
        fillHeight
        wordWrap={true}
      >
        <Column minWidth={20} fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column flexGrow={1} minWidth={220}>
          <HeaderCell>Titulo</HeaderCell>
          <Cell dataKey="title" />
        </Column>
        <Column align={'center'} flexGrow={1} minWidth={100}>
          <HeaderCell>Gênero</HeaderCell>
          <Cell dataKey="genre">
            {(rowData) => {
              return (
                <div>
                  {rowData.genre.map((item: string, index: number) => (
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
              return <CurrencyText value={rowData.price} />
            }}
          </Cell>
        </Column>
        <Column align={'center'} flexGrow={1} minWidth={100}>
          <HeaderCell>Criação</HeaderCell>
          <Cell dataKey="releaseDate">
            {(rowData) => {
              return <div>{new Date(rowData.releaseDate).getFullYear()}</div>
            }}
          </Cell>
        </Column>
        <Column align={'center'} flexGrow={1} minWidth={100}>
          <HeaderCell>Ação</HeaderCell>
          <Cell dataKey="id">
            {(rowData) => {
              return (
                <TableActions
                  onHandleDelete={() => alert(`delete: ${rowData.id}`)}
                  onHandleEdit={() => alert(` edit: ${rowData.id}`)}
                />
              )
            }}
          </Cell>
        </Column>
      </Table>
    </div>
  )
}

export default AdminBooksContent
