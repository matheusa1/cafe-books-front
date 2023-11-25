'use client'

import BackButton from '@/components/atoms/BackButton'
import { Input } from '@/components/atoms/Input'

import React, { ReactElement, useState } from 'react'
import { IExploreHeader } from './types'
import { Filter, X } from 'lucide-react'

import * as Dialog from '@radix-ui/react-dialog'
import ExploreFilter from '../ExploreFilter'

const ExploreHeader: React.FC<IExploreHeader> = ({ search, setSearch, filter, setFilter }): ReactElement => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="mt-2 flex w-full flex-col gap-2 lg:flex-row lg:items-center">
      <div className="flex w-full items-center justify-between gap-4 self-start ">
        <BackButton />
        <Dialog.Root open={isDialogOpen}>
          <Dialog.Trigger asChild onClick={() => setIsDialogOpen(true)}>
            <button className="brownButton flex h-10 items-center justify-center gap-2 rounded-lg px-3 text-white lg:hidden">
              <Filter className="text-lg" />
              Filtro
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-30 bg-black opacity-30" onClick={() => setIsDialogOpen(false)} />
            <Dialog.Content className="fixed left-1/2 top-1/2 z-40 flex w-5/6 max-w-md -translate-x-1/2 -translate-y-1/2 flex-col gap-5 rounded-md bg-pureWhite p-4">
              <header className="flex justify-between">
                <Dialog.Title>Filtro</Dialog.Title>
                <Dialog.Close onClick={() => setIsDialogOpen(false)}>
                  <X />
                </Dialog.Close>
              </header>

              <ExploreFilter filter={filter} setFilter={setFilter} noheader closeDialog={setIsDialogOpen} />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <Input.Input
        variant="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Pesquisar por título ou ISBN"
        className="border-2 border-dark hover:border-brownPrimary focus:border-brownPrimary"
      />
    </div>
  )
}

export default ExploreHeader
