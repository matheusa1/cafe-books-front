import React, { ReactElement } from 'react'

const Cart: React.FC = (): ReactElement => {
  return (
    <div
      className={
        'flex min-h-screen flex-col items-center px-5 py-20 md:px-10 md:py-28'
      }
    >
      <div className="grid w-full flex-1 grid-cols-3 gap-4">
        <div className="col-span-2 bg-red-500">Endereco</div>
        <div className="row-span-2 bg-green-500">Resumo</div>
        <div className="col-span-2 bg-blue-500">Carrinho</div>
      </div>
    </div>
  )
}

export default Cart
