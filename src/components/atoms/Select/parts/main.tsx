import { FC } from 'react'
import Selecta from 'react-select'
import { ISelectMain } from '../types'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

export const SelectStyle = tv({
  base: 'rounded-md',
  variants: {
    error: {
      true: 'animate-shake border-danger',
      false: '',
    },
  },
  defaultVariants: {
    error: false,
  },
})

export const SelectMain: FC<ISelectMain> = ({ error, ...rest }) => {
  return (
    <Selecta
      {...rest}
      className={twMerge(rest.className, SelectStyle({ error }))}
    />
  )
}
