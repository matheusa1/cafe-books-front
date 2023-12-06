'use client'

import React, { ReactElement } from 'react'
import { ICarouselItem } from './types'
import Image from 'next/image'
import CarouselItemBookSide from '@/components/molecules/CarouselItemBookSide'
import { Button } from '@/components/atoms/Button'
import useWindowSize from '@/utils/hooks/useWindowSize'
import { ShoppingBasket } from 'lucide-react'

const CarouselItem: React.FC<ICarouselItem> = ({ data }): ReactElement => {
  const { height } = useWindowSize()

  return (
    <div className={'h-screen w-screen overflow-hidden'}>
      <Image src={data.image_url} alt="Image" width={1920} height={1080} className="-z-10 h-screen w-screen scale-110 object-cover blur-sm brightness-50" />
      <div className="absolute left-0 top-0 h-screen w-screen pt-20 md:pt-32">
        <div className="grid h-full w-full grid-cols-1 gap-20 px-2 md:px-20 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-3 text-center md:gap-4 lg:text-start">
            <h1 className="text-xl font-extrabold text-white xs:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">{data.call}</h1>
            <p className={`overflow-hidden text-xs text-white md:flex md:text-sm ${height < 720 && 'hidden'}`}>{data.subtext}</p>
            <div className="mt-14 hidden items-center gap-4 lg:flex">
              <Button.RootLink href={`/book-info/${data.book}`}>Ver mais</Button.RootLink>
              <Button.Root className="aspect-square">
                <Button.Icon icon={ShoppingBasket} />
              </Button.Root>
            </div>
          </div>
          <div className="flex h-full w-full items-end justify-center">
            <CarouselItemBookSide book_details={data.book_details} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
