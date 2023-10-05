'use client'

import { FC, useState } from 'react'
import BookImage from '@/../public/mock/images/OHobbit.png'
import { Trash } from '@phosphor-icons/react'
import CurrencyText from '../CurrencyText'
import QuantitySelector from '../QuantitySelector'
import Image from 'next/image'

export const CartItemContent: FC = () => {
  const [quantity, setQuantity] = useState(1)
  const value = 100

  return (
    <div className="flex flex-col border-y border-b-gray-200 p-2">
      <header className="grid grid-cols-5 gap-2">
        <Image
          src={BookImage}
          alt={'book image'}
          className="col-span-2 h-16 object-contain"
        />
        <div className="col-span-3 self-center">
          <header className="flex items-center justify-between">
            <span className="text-xs text-subText">J.R.R. Tolkien</span>
            <Trash className="h-6 w-6 text-danger" />
          </header>
          <h1 className="truncate text-lg font-bold">O Hobbit</h1>
        </div>
      </header>
      <div className="flex flex-col gap-2">
        <header className="flex items-center justify-between">
          <span>Quantidade</span>
          <div className="">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </div>
        </header>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 self-center">
            <span>Preço un.</span>
            <CurrencyText value={100} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">Total</span>
            <CurrencyText value={value * quantity} />
          </div>
        </div>
      </div>
    </div>
  )
}
