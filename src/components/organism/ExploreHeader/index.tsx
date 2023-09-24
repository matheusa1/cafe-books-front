import BackButton from '@/components/atoms/BackButton'
import Input from '@/components/atoms/Input'
import { Funnel } from '@phosphor-icons/react'
import React, { ReactElement } from 'react'

const ExploreHeader: React.FC = (): ReactElement => {
  return (
    <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-center">
      <div className="flex w-full items-center justify-between gap-4 self-start ">
        <BackButton />
        <button className="brownButton flex h-10 items-center justify-center gap-2 rounded-lg px-3 text-white lg:hidden">
          <Funnel className="text-lg" />
          Filtro
        </button>
      </div>
      <Input search bgWhite />
    </div>
  )
}

export default ExploreHeader
