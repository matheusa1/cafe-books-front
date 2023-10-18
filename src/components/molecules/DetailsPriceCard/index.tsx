'use client'

import React, { ReactElement } from 'react'
import { IDetailsPriceCard } from './types'
import { BookmarkSimple } from '@phosphor-icons/react'
import CurrencyText from '@/components/atoms/CurrencyText'
import { Button } from '@/components/atoms/Button'
import QuantitySelector from '@/components/atoms/QuantitySelector'

const DetailsPriceCard: React.FC<IDetailsPriceCard> = ({
  price,
  title,
  discountPrice,
}): ReactElement => {
  const [isLiked, setIsLiked] = React.useState(false)
  const [quantity, setQuantity] = React.useState(1)
  const [isOnCart, setIsOnCart] = React.useState(false)

  return (
    <div
      id="purchase"
      className={
        'flex w-full max-w-md flex-col gap-4 rounded-lg bg-pureWhite p-5 lg:p-10'
      }
    >
      <header className="flex items-center justify-between border-b-2 border-dark pb-2">
        <span className="text-xl font-bold">{title}</span>
        <div className="shrink-0 p-2">
          <BookmarkSimple
            size={24}
            weight={isLiked ? 'fill' : 'regular'}
            onClick={() => setIsLiked((prev) => !prev)}
          />
        </div>
      </header>
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
        <div className="flex gap-2">
          {discountPrice && (
            <CurrencyText
              value={price}
              className="text-base text-subText line-through"
            />
          )}
          <CurrencyText
            value={discountPrice ? discountPrice : price}
            className="text-2xl font-bold"
          />
        </div>
        <div>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Button.Root
          // styleType={isOnCart ? 'danger' : 'filled'}
          onClick={() => setIsOnCart((prev) => !prev)}
          data-isoncart={isOnCart}
          className="data-[isoncart=true]:bg-danger"
        >
          <Button.Text>
            {isOnCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
          </Button.Text>
        </Button.Root>
        <Button.Root>
          <Button.Text>Comprar agora</Button.Text>
        </Button.Root>
      </div>
    </div>
  )
}

export default DetailsPriceCard
