import { CartContent } from '@/components/organism/CartContent'
import { CartResume } from '@/components/organism/CartResume'
import React, { ReactElement } from 'react'

const Cart: React.FC = (): ReactElement => {
  return (
    <div
      className={
        'flex min-h-screen flex-col items-center px-5 py-20 md:px-10 md:py-28'
      }
    >
      <div className="grid w-full flex-1 grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="order-1 col-span-1 bg-red-500 lg:order-none lg:col-span-2">
          Endereco
        </div>
        <div className="order-2 row-span-1 lg:order-none lg:row-span-2">
          <CartResume />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <CartContent />
        </div>
      </div>
    </div>
  )
}

export default Cart
