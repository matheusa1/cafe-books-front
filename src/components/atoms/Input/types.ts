import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react'
import { VariantProps } from 'tailwind-variants'
import { InputStyle } from './parts/InputMain'

export type IInputRoot = {
  children: ReactNode
  className?: string
}

export type IInputLabel = {
  children: string
  required?: boolean
} & LabelHTMLAttributes<HTMLLabelElement>

export type IInputFeedback = {
  children?: string
  type?: 'error' | 'warn'
}

export type IInputMain = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof InputStyle>

export type IInput = {
  label: string
  errorMessage: string
  warnMessage: string
  placeholder: string
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof InputStyle>
