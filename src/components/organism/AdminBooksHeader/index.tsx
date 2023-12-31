'use client'

import React, { ReactElement, useState } from 'react'
import { IAdminBooksHeader } from './types'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import AdminBooksCreateUpdateBooks from '@/components/molecules/AdminBooksCreateUpdateBooks'
import * as Dialog from '@radix-ui/react-dialog'

const AdminBooksHeader: React.FC<IAdminBooksHeader> = ({
  search,
  setSearch,
  categoriesList,
  refetch,
  refetchCategories,
  refetchAuthors,
  authorsList,
}): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className={'flex w-full items-center gap-5 md:max-w-sm'}>
        <Input.Input
          value={search}
          variant="search"
          className="border-2 border-dark hover:border-brownPrimary focus:border-brownPrimary"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Dialog.Root open={isModalOpen}>
        <Dialog.Trigger asChild>
          <div className="w-full md:max-w-[250px]">
            <Button.Root onClick={() => setIsModalOpen((prev) => !prev)} className="w-full">
              Criar novo livro
            </Button.Root>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-10 bg-black/50" onClick={() => setIsModalOpen(false)} />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-20 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2">
            <AdminBooksCreateUpdateBooks
              refetch={refetch}
              categoriesList={categoriesList}
              setModalOpen={setIsModalOpen}
              refetchCategories={refetchCategories}
              refetchAuthors={refetchAuthors}
              authorsList={authorsList}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default AdminBooksHeader
