import { IPurchaseBooks } from '@/types/purcheses'
import { ReactNode } from 'react'

export type IProfilePurchaseItemModal = {
  setOpen: (value: boolean) => void
  id: string
  status: string
  address: string
  date: string
  value: ReactNode
  content: IPurchaseBooks[]
}
