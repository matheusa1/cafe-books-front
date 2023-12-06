import { IAddress } from '@/types/address'
import { ICart, ICartBook } from '@/types/cart'

export type ICartInfoContextProvider = {
  children: React.ReactNode
}

export type contextType = {
  cartInfo?: ICartInfo
  setAddress: (address: IAddress) => void
  onHandleAddBookToCart: (book: ICartBook) => void
  onHandleRemoveBookToCart: (isbn: string) => void
}

export type ICartInfo = {
  address?: IAddress
  cart?: ICart
}
