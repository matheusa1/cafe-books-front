import { VariantProps } from 'tailwind-variants'
import { LabelProps } from '.'
import { InputHTMLAttributes } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export type IInputFile = VariantProps<typeof LabelProps> &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    // eslint-disable-next-line
    errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  }
