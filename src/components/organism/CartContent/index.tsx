import { CartItemsTable } from '@/components/molecules/CartItemsTable'
import { FC } from 'react'

export const CartContent: FC = () => {
  return (
    <div
      className={
        'flex flex-col items-center gap-5 rounded-md bg-pureWhite p-5 lg:items-start'
      }
    >
      <h1>ITEMS</h1>
      <CartItemsTable />
    </div>
  )
}
