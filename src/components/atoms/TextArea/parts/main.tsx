import { FC } from 'react'
import { ITextAreaMain } from '../types'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

export const TextAreaStyle = tv({
  base: 'h-32 w-full rounded-md p-3 text-base outline-none transition-all',
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

export const TextAreaMain: FC<ITextAreaMain> = ({ id, error, ...rest }) => {
  return (
    <textarea
      {...rest}
      className={twMerge(rest.className, TextAreaStyle({ error }))}
      id={id}
    />
  )
}
