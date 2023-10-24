import Badge from '@/components/atoms/Badge'
import CurrencyText from '@/components/atoms/CurrencyText'
import { ProfilePurchaseItemHeaderItem } from '@/components/atoms/ProfilePurchaseItemHeaderItem'
import { FC } from 'react'
import { converteDataISOParaDDMMAAAA } from '@/utils/formatDate'

export const ProfilePurchasesItemHeader: FC<{ id: number; date: string; value: number; size: number; status: string }> = ({
  date,
  value,
  id,
  size,
  status,
}) => {
  return (
    <div className={'flex flex-col gap-2 md:flex-row md:items-center md:justify-between'}>
      <div className="flex md:w-full md:justify-between">
        <ProfilePurchaseItemHeaderItem title={'Pedido'} value={id.toString()} />
        <ProfilePurchaseItemHeaderItem title={'Data do pedido:'} value={converteDataISOParaDDMMAAAA(date)} />
      </div>
      <div className="flex md:w-full md:justify-between">
        <ProfilePurchaseItemHeaderItem title={'PAGAMENTO'} value={'PIX'} />
        <ProfilePurchaseItemHeaderItem title={'total'} valueMonetary={<CurrencyText value={value} />} />
        <ProfilePurchaseItemHeaderItem title={'itens'} value={size.toString()} />
      </div>
      <div className="hidden md:block">
        <Badge color="success">{status}</Badge>
      </div>
    </div>
  )
}
