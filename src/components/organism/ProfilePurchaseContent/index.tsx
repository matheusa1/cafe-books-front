import { FC } from 'react'
import { ProfilePurchasesItem } from '../ProfilePurchasesItem'

export const ProfilePurchaseContent: FC = () => {
  return (
    <div className={'flex h-full flex-col gap-2'}>
      <ProfilePurchasesItem />
      <ProfilePurchasesItem />
      <ProfilePurchasesItem />
    </div>
  )
}
