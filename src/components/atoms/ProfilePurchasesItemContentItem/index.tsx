import Image from 'next/image'
import { FC } from 'react'
import Images from '/public/mock/images/harryPotterBook.png'

export const ProfilePurchasesItemContentItem: FC = () => {
  return (
    <div className={'flex w-full items-center gap-2 text-clip'}>
      <Image src={Images} alt={'image'} className="w-20" />
      <div className="truncate">
        <span>Jojos Bizarre Adventure - Parte 5 - Vol 1</span>
        <p>1 unidade</p>
        <p className="font-bold">+ 2 outros itens</p>
      </div>
    </div>
  )
}
