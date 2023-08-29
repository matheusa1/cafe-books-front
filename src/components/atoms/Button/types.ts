import { ReactNode } from 'react'

export type IButton = {
  children: string | ReactNode
  onClick?: () => void
}
