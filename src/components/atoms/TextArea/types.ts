import { TextAreaStyle } from './parts/main'
import { LabelHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { VariantProps } from 'tailwind-variants'

export type ITextAreaLabel = {
  children: string
  required?: boolean
} & LabelHTMLAttributes<HTMLLabelElement>

export type ITextAreaFeedback = {
  children?: string
  type?: 'error' | 'warn'
}

export type ITextAreaMain = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof TextAreaStyle>
