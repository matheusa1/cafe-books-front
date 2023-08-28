import React, { ReactElement } from 'react'
import { ICarouselItemBookSide } from './types'
import CurrencyText from '@/components/atoms/CurrencyText'
import Image from 'next/image'

const CarouselItemBookSide: React.FC<ICarouselItemBookSide> = ({
  title,
  description,
  discountPrice,
  originalPrice,
  bookImage,
}): ReactElement => {
  return (
    <div className="relative flex h-full w-full max-w-lg flex-col justify-end rounded-t-full bg-[#222E52] px-7">
      <div className="absolute left-1/2 top-5 w-36  -translate-x-1/2 -translate-y-1/2 rotate-12">
        <Image
          src={bookImage}
          alt="book image"
          width={1920}
          height={1080}
          className="animate-float"
        />
      </div>
      <h1 className="text-sm font-extrabold text-white">{title}</h1>
      <p className="text-xs text-white">{description}</p>
      <div className="flex items-center justify-center gap-4">
        <CurrencyText
          className="text-base text-white line-through"
          value={originalPrice}
        />
        <CurrencyText
          className="text-2xl font-bold text-white"
          value={discountPrice}
        />
      </div>
      <div className="flex items-center justify-center gap-4"></div>
    </div>
  )
}

export default CarouselItemBookSide
