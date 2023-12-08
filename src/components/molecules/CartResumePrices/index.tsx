'use client'

import CurrencyText from '@/components/atoms/CurrencyText'
import { useCart } from '@/context/CartInfoContext'
import { FC } from 'react'

export const CartResumePrices: FC = () => {
  const { cartInfo } = useCart()

  return (
    <div className="w-full overflow-hidden rounded-md bg-gray-100">
      <div className="flex justify-between border-b border-b-gray-200 p-5">
        <span>Subtotal</span>
        <CurrencyText value={cartInfo?.cart?.total || 0} />
      </div>
      <div className="flex justify-between border-b border-b-gray-200 p-5">
        <span>Entrega</span>
        <CurrencyText value={10} />
      </div>
      <div className="flex justify-between border-b border-b-gray-200 p-5">
        <span>TOTAL</span>
        <CurrencyText value={(cartInfo?.cart?.total || 0) + 10} />
      </div>
    </div>
  )
}
