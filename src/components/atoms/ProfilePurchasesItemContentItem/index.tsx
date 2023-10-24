import Image from 'next/image'
import { FC } from 'react'

export const ProfilePurchasesItemContentItem: FC<{ image: string; title: string; size: number; firstQuantity: number }> = ({
  firstQuantity,
  image,
  size,
  title,
}) => {
  return (
    <div className={'flex w-full items-center gap-2 text-clip'}>
      <Image src={image} alt={'image'} width={160} height={180} className="w-20" />
      <div className="">
        <span>{title}</span>
        <p>{firstQuantity} unidade(s)</p>
        {size - 1 === 0 ? null : <p className="font-bold">+ {size - 1} outros itens</p>}
      </div>
    </div>
  )
}
