import { InputHTMLAttributes } from 'react'
import { VariantProps } from 'tailwind-variants'
import { InputProps, LabelProps } from '.'

export type IInput = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof InputProps> &
  VariantProps<typeof LabelProps> & {
    label?: string
    password?: boolean
    errorMessage?: string
    onHandleSearch?: () => void
    type?: string
  }
