import { ProfilePurchaseContent } from '@/components/organism/ProfilePurchaseContent'
import { ProfilePurchaseHeader } from '@/components/organism/ProfilePurchaseHeader'
import { FC } from 'react'

const Purchases: FC = () => {
  return (
    <div className={'flex h-full flex-col gap-10'}>
      <ProfilePurchaseHeader />
      <ProfilePurchaseContent />
    </div>
  )
}

export default Purchases
