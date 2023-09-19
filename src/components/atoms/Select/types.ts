import { Props } from 'react-select'
import { VariantProps } from 'tailwind-variants'
import { LabelProps } from '.'

export type ISelect = Props &
  VariantProps<typeof LabelProps> & {
    label: string
    errorMessage?: string
  }
