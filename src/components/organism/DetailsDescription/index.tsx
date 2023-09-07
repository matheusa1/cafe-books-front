'use client'

import DetailsTitle from '@/components/atoms/DetailsTitle'
import React, { ReactElement } from 'react'
import { IDetailsDescription } from './types'
import { CaretCircleDown } from '@phosphor-icons/react'

const DetailsDescription: React.FC<IDetailsDescription> = ({
  description,
}): ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const scrollToDescription = () => {
    const descriptionElement = document.getElementById('purchase')
    if (descriptionElement) {
      descriptionElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }

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
      <button
        onClick={() => {
          setIsOpen((prev) => !prev)
          if (isOpen) scrollToDescription()
        }}
        className="self-center"
      >
        <div className="flex flex-col items-center">
          <CaretCircleDown size={32} className={isOpen ? 'rotate-180' : ''} />
          {isOpen ? 'Mostrar menos' : 'Mostrar mais'}
        </div>
      </button>
    </div>
  )
}

export default DetailsDescription
