import React, { ReactElement } from 'react'
import { IPagination } from './types'
import Button from '../Button'

const Pagination: React.FC<IPagination> = ({
  currentPage,
  handlePageChange,
  itemsPerPage,
  totalItems,
  setItemsPerPage,
}): ReactElement => {
  return (
    <div
      className={
        'flex w-full flex-col items-center justify-center gap-1 md:flex-row md:justify-between'
      }
    >
      <div>
        <div className="flex gap-2">
          Itens por página:
          <select
            className={'rounded-md border border-gray-300'}
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value))
              handlePageChange(1)
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div>
          {/* 30-36 de 36 */}
          {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
            currentPage * itemsPerPage,
            totalItems,
          )} de ${totalItems}`}
        </div>
      </div>
      <div className="flex w-full max-w-xs gap-2">
        <Button
          content="wFull"
          styleType={currentPage === 1 ? 'brownDisabled' : 'filled'}
          onClick={() => {
            if (currentPage > 1) {
              handlePageChange(currentPage - 1)
            }
          }}
        >
          Anterior
        </Button>
        <Button
          content="wFull"
          styleType={
            currentPage === Math.ceil(totalItems / itemsPerPage)
              ? 'brownDisabled'
              : 'filled'
          }
          onClick={() => {
            if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
              handlePageChange(currentPage + 1)
            }
          }}
        >
          Próximo
        </Button>
      </div>
    </div>
  )
}

export default Pagination
