import { CartItemContent } from '@/components/atoms/CartItemContent'
import { FC } from 'react'

export const CartItemsTable: FC = () => {
  return (
    <div className={'w-full'}>
      <header className="hidden">
        <div>
          <span>Produto</span>
        </div>
        <div>
          <span>Preço</span>
        </div>
        <div>
          <span>Quantidade</span>
        </div>
        <div>
          <span>Total</span>
        </div>
      </header>

      <div className="relative">
        <div
          data-itenslen={3}
          className="absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-pureWhite data-[itenslen='1']:hidden data-[itenslen='2']:hidden"
        />
        <div className="h-fit max-h-96 overflow-auto">
          <CartItemContent />
          <CartItemContent />
          <CartItemContent />
          <CartItemContent />
          <CartItemContent />
        </div>
      </div>
    </div>
  )
}
