import React, { ReactElement } from 'react'
import { ICarouselItemBookSide } from './types'
import CurrencyText from '@/components/atoms/CurrencyText'
import Image from 'next/image'
import { Button } from '@/components/atoms/Button'
import { ShoppingBasket } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

const CarouselItemBookSide: React.FC<ICarouselItemBookSide> = ({ book_details: { title, description, image, price, promotional_price } }): ReactElement => {
  return (
    <div className="relative flex h-fit max-h-[550px] w-full max-w-lg flex-col justify-end rounded-t-full bg-[#222E52] px-7 pb-24 pt-28 xs:pt-36 md:px-14 md:pb-12 lg:h-4/6 xl:h-5/6">
      <div className="absolute -top-0 left-1/2 w-24 -translate-x-1/2 -translate-y-1/2 rotate-12 md:w-28 lg:w-36 xl:w-44">
        <Image src={image} alt="book image" width={1920} height={1080} className="animate-float" />
      </div>
      <div className="flex flex-col gap-3 text-center lg:gap-8">
        <h1 className="text-sm font-extrabold text-white lg:text-xl">{title}</h1>
        <p className="overflow-hidden text-2xs text-white lg:text-sm xl:max-h-40">{description}</p>
        <div className="flex items-center justify-center gap-4">
          <CurrencyText className={twMerge('text-2xl font-bold text-white', !!promotional_price && 'font-normal text-base line-through')} value={price} />
          {promotional_price && <CurrencyText className="text-2xl font-bold text-white" value={promotional_price} />}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4 lg:hidden">
        <Button.Root>
          <Button.Text>Comprar</Button.Text>
        </Button.Root>
        <Button.Root className="aspect-square">
          <Button.Icon icon={ShoppingBasket} />
        </Button.Root>
      </div>
    </div>
  )
}

export default CarouselItemBookSide
