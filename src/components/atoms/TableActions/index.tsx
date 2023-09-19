'use client'

import React, { ReactElement, useState } from 'react'
import { ITableActions } from './types'
import { PencilLine, Trash } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import AdminBooksCreateUpdateBooks from '@/components/molecules/AdminBooksCreateUpdateBooks'
import DeleteItemModal from '@/components/molecules/DeleteItemModal'

const TableActions: React.FC<ITableActions> = ({
  rowData,
  categoriesList,
  refetch,
}): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [ModalType, setModalType] = useState<'update' | 'delete'>('update')

  return (
    <div className={'flex w-full justify-center gap-4'}>
      <PencilLine
        className={'cursor-pointer text-blue-500'}
        size={24}
        onClick={() => {
          setModalType('update')
          setIsModalOpen(true)
        }}
      />
      <Trash
        className={'cursor-pointer text-danger'}
        size={24}
        onClick={() => {
          setModalType('delete')
          setIsModalOpen(true)
        }}
      />
      <Dialog.Root open={isModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay
            className="fixed inset-0 z-20 bg-black/50"
            onClick={() => setIsModalOpen(false)}
          />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-20 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2">
            {ModalType === 'delete' ? (
              <DeleteItemModal
                refetch={refetch}
                setIsOpen={setIsModalOpen}
                isbn={rowData.isbn}
              />
            ) : (
              <AdminBooksCreateUpdateBooks
                refetch={refetch}
                categoriesList={categoriesList}
                data={rowData}
                setModalOpen={setIsModalOpen}
              />
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default TableActions
