'use client'

import DetailsTitle from '@/components/atoms/DetailsTitle'
import React, { ReactElement } from 'react'
import { IDetailsDescription } from './types'
import { Button } from '@/components/atoms/Button'
import { ButtonIcon } from '@/components/atoms/Button/parts/ButtonIcon'
import { ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

const DetailsDescription: React.FC<IDetailsDescription> = ({
  description,
}): ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <div
      id="description"
      className={
        'flex w-full flex-col items-center gap-2 text-center lg:items-start lg:text-start'
      }
    >
      <DetailsTitle>Descrição</DetailsTitle>
      <div className={isOpen ? '' : 'max-h-40 overflow-hidden'}>
        <span className="text-sm">{description}</span>
      </div>

      <Button.Root
        className="aspect-square w-fit self-center rounded-full"
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
      >
        <ButtonIcon
          icon={ChevronDown}
          size="lg"
          className={twMerge('rotate-0 transition-all', isOpen && 'rotate-180')}
        />
        {/* <CaretCircleDown size={32} className={isOpen ? 'rotate-180' : ''} /> */}
      </Button.Root>
    </div>
  )
}

export default DetailsDescription
