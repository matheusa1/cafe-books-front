'use client'

import CurrencyText from '@/components/atoms/CurrencyText'
import { FC } from 'react'

export const CartResumePrices: FC = () => {
  return (
    <div className="w-full overflow-hidden rounded-md bg-gray-100">
      <div className="flex justify-between border-b border-b-gray-200 p-5">
        <span>Subtotal</span>
        <CurrencyText value={100} />
      </div>
      <div className="flex justify-between border-b border-b-gray-200 p-5">
        <span>Entrega</span>
        <CurrencyText value={100} />
      </div>
      <div className="flex justify-between border-b border-b-gray-200 p-5">
        <span>TOTAL</span>
        <CurrencyText value={100} />
      </div>
    </div>
  )
}
