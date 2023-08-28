import { LabelHTMLAttributes } from 'react'

export type ICurrencyText = LabelHTMLAttributes<HTMLLabelElement> & {
  value: number
}
