'use client'

import Button from '@/components/atoms/Button'
import CurrencyText from '@/components/atoms/CurrencyText'
import ForYouBottomSlider from '@/components/molecules/ForYouBottomSlider'
import useWindowSize from '@/utils/hooks/useWindowSize'
import { CaretRight, ShoppingCart } from '@phosphor-icons/react'
import Image from 'next/image'
import React, { ReactElement, useState } from 'react'

const ForYouCard: React.FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const { width } = useWindowSize()

  const scrollToCard = () => {
    const cardElement = document.getElementById('card')
    if (cardElement) {
      cardElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }

  return (
    <div className="flex w-full max-w-7xl flex-col gap-4 rounded-md bg-pureWhite p-5">
      <div className="flex flex-col items-center lg:p-10 lg:gap-10 justify-center gap-4 text-center md:grid md:grid-cols-3">
        <Image
          src={'/mock/images/boxSherlock.png'}
          alt={'box'}
          width={308}
          height={467}
          className="w-full"
        />
        <div className="flex flex-col gap-2 md:col-span-2 md:justify-start md:text-start">
          <span className="text-xl font-bold text-dark xl:text-3xl">
            Coleção Especial Sherlock Holmes - 06 Volumes da Editora Principis
          </span>
          <div
            className={` flex-col gap-4 self-start overflow-y-hidden text-black ${
              isOpen || width >= 768 ? 'flex' : 'hidden'
            }`}
          >
            <span className="text-justify">
              O box imperdível para os amantes de mistério e investigação.
              Composto por seis livros, escritos por Sir Arthur Conan Doyle, o
              box apresenta as aventuras do detetive mais famoso da literatura,
              Sherlock Holmes, acompanhado por seu inseparável companheiro, o
              Dr. Watson.
            </span>
            <div className="flex items-center justify-center gap-4 md:items-start md:justify-start">
              <CurrencyText
                className="text-base text-dark line-through"
                value={236.5}
              />
              <CurrencyText
                className="text-2xl font-bold text-dark"
                value={119.99}
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 md:items-start md:justify-start">
              <Button>Comprar</Button>
              <Button content="icon">
                <ShoppingCart size={24} color="white" weight="bold" />
              </Button>
            </div>
          </div>
        </div>

        {width < 768 && (
          <Button
            rounded="full"
            content="icon"
            onClick={() => {
              setIsOpen((prev) => !prev)
              if (isOpen) scrollToCard()
            }}
          >
            <CaretRight
              className={
                isOpen
                  ? '-rotate-90'
                  : 'rotate-90' + ' transition-all duration-500'
              }
            />
          </Button>
        )}
      </div>
      <ForYouBottomSlider />
    </div>
  )
}

export default ForYouCard
