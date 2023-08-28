'use client'

import React, { ReactElement } from 'react'
import { ICarouselItem } from './types'
import Image from 'next/image'
import CarouselItemBookSide from '@/components/molecules/CarouselItemBookSide'

const CarouselItem: React.FC<ICarouselItem> = ({
  banner,
  book,
  infoText,
  punchline,
}): ReactElement => {
  return (
    <div className={'h-screen'}>
      <Image
        src={banner}
        alt="Image"
        width={1920}
        height={1080}
        className="-z-10 h-screen object-cover brightness-50"
      />
      <div className="absolute left-0 top-0 h-screen w-screen pt-14">
        <div className="flex h-full w-full flex-col gap-20 px-5 text-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-extrabold text-white">{punchline}</h1>
            <p className="text-xs text-white">{infoText}</p>
          </div>
          <div className="h-full w-full">
            <CarouselItemBookSide {...book} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
