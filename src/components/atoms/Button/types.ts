import { ButtonHTMLAttributes } from 'react'

export type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
}
