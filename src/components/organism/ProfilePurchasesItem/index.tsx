import { ProfilePurchasesItemHeader } from '@/components/molecules/ProfilePurchasesItemHeader'
import { FC } from 'react'

export const ProfilePurchasesItem: FC = () => {
  return (
    <div className={'flex flex-col gap-2 rounded-lg border-2 border-dark p-4'}>
      <ProfilePurchasesItemHeader />
    </div>
  )
}
