import { Button } from '@/components/atoms/Button'
import CurrencyText from '@/components/atoms/CurrencyText'
import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import React, { ReactElement } from 'react'

const ForYouBottomSliderItem: React.FC = (): ReactElement => {
  return (
    <div className="flex min-w-[320px] flex-row items-center justify-center rounded-lg border-2 border-brownPrimary/60">
      <Image
        src={'/mock/images/EntreMonstrosEDeuses.png'}
        alt={'book picture'}
        height={120}
        width={81}
        className="w-36 object-cover"
      />
      <div className="flex flex-col items-center justify-center gap-2 p-2 text-center">
        <span className="text-sm font-bold text-dark">
          Arsène Lupin Contra Herlock Sholmes
        </span>
        <div className="flex flex-col items-center justify-center gap-1">
          <CurrencyText
            className="text-sm text-dark line-through"
            value={326.5}
          />
          <CurrencyText
            className="text-base font-bold text-dark"
            value={252.5}
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button.Root>
            <Button.Text>Comprar</Button.Text>
          </Button.Root>
          <Button.Root className="aspect-square">
            <Button.Icon icon={ShoppingBasket} />
          </Button.Root>
        </div>
      </div>
    </div>
  )
}

export default ForYouBottomSliderItem
