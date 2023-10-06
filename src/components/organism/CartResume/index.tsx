import Button from '@/components/atoms/Button'
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
        <Button content="wFull" styleType="success">
          IR PARA PAGAMENTO
        </Button>
        <Button content="wFull" styleType="outlinedBrown">
          CONTINUAR COMPRANDO
        </Button>
      </div>
    </div>
  )
}
