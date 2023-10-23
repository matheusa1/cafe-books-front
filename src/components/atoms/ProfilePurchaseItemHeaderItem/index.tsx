import { FC } from 'react'
import { IProfilePurchaseItemHeaderItem } from './types'

export const ProfilePurchaseItemHeaderItem: FC<
  IProfilePurchaseItemHeaderItem
> = ({ title, value, valueMonetary }) => {
  return (
    <div className={'flex w-full flex-col items-center justify-center'}>
      <h1>{title.toUpperCase()}</h1>
      {valueMonetary ? valueMonetary : <p>{value}</p>}
    </div>
  )
}
