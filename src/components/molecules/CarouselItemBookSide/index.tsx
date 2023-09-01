import React, { ReactElement } from 'react'
import { ICarouselItemBookSide } from './types'
import CurrencyText from '@/components/atoms/CurrencyText'
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import { ShoppingCart } from '@phosphor-icons/react'

const CarouselItemBookSide: React.FC<ICarouselItemBookSide> = ({
  title,
  description,
  discountPrice,
  originalPrice,
  bookImage,
}): ReactElement => {
  return (
    <div className="relative flex h-fit max-h-[550px] w-full max-w-lg flex-col justify-end rounded-t-full bg-[#222E52] px-7 pb-24 pt-28 xs:pt-36 md:px-14 md:pb-12 lg:h-4/6 xl:h-5/6">
      <div className="absolute left-1/2 top-5 w-24 -translate-x-1/2 -translate-y-1/2 rotate-12 md:w-28 lg:w-36 xl:w-52">
        <Image
          src={bookImage}
          alt="book image"
          width={1920}
          height={1080}
          className="animate-float"
        />
      </div>
      <div className="flex flex-col gap-3 text-center lg:gap-8">
        <h1 className="text-sm font-extrabold text-white lg:text-xl">
          {title}
        </h1>
        <p className="overflow-hidden text-2xs text-white lg:text-sm xl:max-h-40">
          {description}
        </p>
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
      </div>

      <div className="mt-4 flex items-center justify-center gap-4 lg:hidden">
        <Button>Comprar</Button>
        <Button content="icon">
          <ShoppingCart size={24} color="white" weight="bold" />
        </Button>
      </div>
    </div>
  )
}

export default CarouselItemBookSide
