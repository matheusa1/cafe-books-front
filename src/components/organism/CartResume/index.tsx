import { Button } from '@/components/atoms/Button'
import { CartResumePrices } from '@/components/molecules/CartResumePrices'
import { FC } from 'react'

export const CartResume: FC = () => {
  return (
    <div
      className={
        'flex flex-col items-center gap-5 rounded-md bg-pureWhite p-10'
      }
    >
      <span>RESUMO</span>

      <CartResumePrices />

      <div className={'flex w-full flex-col items-center gap-2'}>
        <Button.Root className="w-full bg-emerald-500 font-semibold hover:bg-emerald-700">
          IR PARA PAGAMENTO
        </Button.Root>
        <Button.Root variant="outline" className="w-full font-semibold">
          CONTINUAR COMPRANDO
        </Button.Root>
      </div>
    </div>
  )
}
