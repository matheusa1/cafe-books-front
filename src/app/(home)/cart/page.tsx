import { CartResume } from '@/components/organism/CartResume'
import React, { ReactElement } from 'react'

const Cart: React.FC = (): ReactElement => {
  return (
    <div
      className={
        'flex min-h-screen flex-col items-center px-5 py-20 md:px-10 md:py-28'
      }
    >
      <div className="grid w-full flex-1 grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-1 bg-red-500 md:col-span-2">Endereco</div>
        <div className="order-1 row-span-1 md:order-none md:row-span-2">
          <CartResume />
        </div>
        <div className="col-span-1 bg-blue-500 md:col-span-2">Carrinho</div>
      </div>
    </div>
  )
}

export default Cart
