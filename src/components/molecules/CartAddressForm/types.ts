import { IAddress } from '@/types/address'

export type ICartAddressForm = {
  address: IAddress | undefined
  setAddress: (address: IAddress) => void
  setOpen: (open: boolean) => void
  buy?: boolean
}
