import { IAddress } from '@/types/address'

export type ICartInfoContextProvider = {
  children: React.ReactNode
}

export type contextType = {
  cartInfo?: ICartInfo
  setAddress: (address: IAddress) => void
}

export type ICartInfo = {
  address?: IAddress
}
