'use client'

import { FC, useEffect, useState } from 'react'
import { Trash } from '@phosphor-icons/react'
import CurrencyText from '../CurrencyText'
import QuantitySelector from '../QuantitySelector'
import Image from 'next/image'
import { useAuth } from '@/context/AuthContext'
import { apiHandleCart } from '@/services/api'

export const CartItemContent: FC<{ isbn: string; quantity: number; price: number; image: string; title: string; author: string[] }> = ({
  isbn,
  quantity: q,
  price,
  author,
  image,
  title,
}) => {
  const [quantity, setQuantity] = useState(q)
  const { refetchCart, token } = useAuth()

  const onRemoveItem = () => {
    apiHandleCart({ add: false, book: isbn, quantity, token: token! })
    refetchCart()
  }

  useEffect(() => {
    apiHandleCart({ add: true, book: isbn, quantity, token: token! })
    refetchCart()
  }, [quantity, isbn, refetchCart, token])

  return (
    <div className="flex flex-col border-y border-b-gray-200 p-2 lg:grid lg:grid-cols-5 lg:place-items-center">
      <header className="grid grid-cols-5 gap-2 lg:col-span-2">
        <Image src={image} alt={'book image'} width={140} height={180} className="col-span-2 h-20 object-contain" />
        <div className="col-span-3 self-center lg:self-start">
          <header className="flex items-center justify-between">
            <span className="text-xs text-subText">{author.join(', ')}</span>
            <Trash className="h-6 w-6 cursor-pointer text-danger" onClick={onRemoveItem} />
          </header>
          <h1 className="truncate text-lg font-bold">{title}</h1>
        </div>
      </header>
      <div className="hidden w-fit lg:block">
        <CurrencyText value={price} />
      </div>
      <div className="hidden w-fit lg:block">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className="hidden w-fit lg:block">
        <CurrencyText value={price * quantity} />
      </div>

      <div className="flex flex-col gap-2 lg:hidden">
        <header className="flex items-center justify-between">
          <span>Quantidade</span>
          <div className="">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </div>
        </header>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 self-center">
            <span>Preço un.</span>
            <CurrencyText value={price} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">Total</span>
            <CurrencyText value={price * quantity} />
          </div>
        </div>
      </div>
    </div>
  )
}
