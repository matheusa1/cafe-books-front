import { InputHTMLAttributes } from 'react'

export type IInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  password?: boolean
}
