import { IAddress } from '@/types/address'

export type ICartAddressForm = {
  address: IAddress
  setAddress: (address: IAddress) => void
  setOpen: (open: boolean) => void
}
