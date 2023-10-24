import { ProfilePurchasesItemContent } from '@/components/molecules/ProfilePurchasesItemContent'
import { ProfilePurchasesItemHeader } from '@/components/molecules/ProfilePurchasesItemHeader'
import { IPurchase } from '@/types/purcheses'
import { FC } from 'react'

export const ProfilePurchasesItem: FC<{ purchase: IPurchase }> = ({ purchase }) => {
  return (
    <div className={'flex w-full flex-col gap-2 rounded-lg border-2 border-dark p-4'}>
      <ProfilePurchasesItemHeader date={purchase.date} id={purchase.id} size={purchase.books.length} status={purchase.status} value={purchase.total} />
      <ProfilePurchasesItemContent purchase={purchase} />
    </div>
  )
}
