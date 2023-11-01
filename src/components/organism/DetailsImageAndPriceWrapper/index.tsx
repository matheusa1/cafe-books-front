import Image from 'next/image'
import React, { ReactElement } from 'react'
import { IDetailsImageAndPriceWrapper } from './types'
import DetailsPriceCard from '@/components/molecules/DetailsPriceCard'

const DetailsImageAndPriceWrapper: React.FC<IDetailsImageAndPriceWrapper> = ({ isbn, stock, image, discountPrice, price, title }): ReactElement => {
  return (
    <div className={'flex w-full flex-col items-center justify-center gap-5 lg:flex-row lg:gap-20'}>
      <div className="flex h-72 w-72 items-center justify-center rounded-full bg-purple-900 lg:h-96 lg:w-96">
        <Image src={image} className="w-2/3 animate-float" alt="BookImage" width={1920} height={1080} />
      </div>
      <DetailsPriceCard stock={stock} price={price} title={title} discountPrice={discountPrice} isbn={isbn} />
    </div>
  )
}

export default DetailsImageAndPriceWrapper
