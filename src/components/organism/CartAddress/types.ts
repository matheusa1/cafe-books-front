import { IAddress } from '@/types/address'

export type ICartAddress = {
  address: IAddress | undefined
  setAddress: (address: IAddress) => void
}
