import BackButton from '@/components/atoms/BackButton'
import { Input } from '@/components/atoms/Input'
import { Funnel } from '@phosphor-icons/react'
import React, { ReactElement } from 'react'
import { IExploreHeader } from './types'

const ExploreHeader: React.FC<IExploreHeader> = ({
  search,
  setSearch,
}): ReactElement => {
  return (
    <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-center">
      <div className="flex w-full items-center justify-between gap-4 self-start ">
        <BackButton />
        <button className="brownButton flex h-10 items-center justify-center gap-2 rounded-lg px-3 text-white lg:hidden">
          <Funnel className="text-lg" />
          Filtro
        </button>
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
