import React, { ReactElement } from 'react'
import { IQuantitySelector } from './types'

const QuantitySelector: React.FC<IQuantitySelector> = ({
  quantity,
  setQuantity,
}): ReactElement => {
  return (
    <div className={'flex gap-2'}>
      <div
        className="flex h-10 w-10 select-none items-center justify-center rounded-lg bg-gray-200 font-bold hover:bg-gray-300"
        onClick={quantity > 0 ? () => setQuantity(quantity - 1) : undefined}
      >
        -
      </div>
      <div className="flex h-10 w-10 select-none items-center justify-center rounded-lg bg-gray-200 font-bold">
        {quantity}
      </div>
      <div
        onClick={() => setQuantity(quantity + 1)}
        className="flex h-10 w-10 select-none items-center justify-center rounded-lg bg-gray-200 font-bold hover:bg-gray-300"
      >
        +
      </div>
    </div>
  )
}

export default QuantitySelector
