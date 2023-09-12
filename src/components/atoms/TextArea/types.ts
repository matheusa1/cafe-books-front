import { VariantProps } from 'tailwind-variants'
import { LabelProps } from '.'
import { TextareaHTMLAttributes } from 'react'

export type ITextArea = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof LabelProps> & {
    label: string
    errorMessage?: string
    placeholder?: string
  }
