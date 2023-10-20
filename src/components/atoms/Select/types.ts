import { LabelHTMLAttributes, ReactNode } from 'react'
import { Props } from 'react-select'
import { VariantProps } from 'tailwind-variants'
import { SelectStyle } from './parts/main'

export type ISelectLabel = {
  children: string
  required?: boolean
} & LabelHTMLAttributes<HTMLLabelElement>

export type ISelectFeedback = {
  children?: string
  type?: 'error' | 'warn'
}

export type ISelectMain = Props &
  VariantProps<typeof SelectStyle> & {
    modal?: ReactNode
    isModalOpen?: boolean
    setIsModalOpen?: (value: boolean) => void
  }
