import Badge from '@/components/atoms/Badge'
import CurrencyText from '@/components/atoms/CurrencyText'
import { ProfilePurchaseItemHeaderItem } from '@/components/atoms/ProfilePurchaseItemHeaderItem'
import { FC } from 'react'

export const ProfilePurchasesItemHeader: FC = () => {
  return (
    <div
      className={
        'flex flex-col gap-2 md:flex-row md:items-center md:justify-between'
      }
    >
      <div className="flex md:w-full md:justify-between">
        <ProfilePurchaseItemHeaderItem title={'Pedido'} value={'1'} />
        <ProfilePurchaseItemHeaderItem
          title={'Data do pedido:'}
          value={'20/10/2023'}
        />
      </div>
      <div className="flex md:w-full md:justify-between">
        <ProfilePurchaseItemHeaderItem title={'PAGAMENTO'} value={'PIX'} />
        <ProfilePurchaseItemHeaderItem
          title={'total'}
          valueMonetary={<CurrencyText value={50} />}
        />
        <ProfilePurchaseItemHeaderItem title={'itens'} value={'3'} />
      </div>
      <div className="hidden md:block">
        <Badge color="success">Entregue</Badge>
      </div>
    </div>
  )
}
