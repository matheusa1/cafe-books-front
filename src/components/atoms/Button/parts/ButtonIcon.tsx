import React from 'react'
import { IButtonIcon } from '../types'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

export const IconStyle = tv({
  base: 'shrink-0',
  variants: {
    size: {
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      sm: 'h-4 w-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const ButtonIcon: React.FC<IButtonIcon> = ({
  icon: Icon,
  size,
  className,
}) => {
  return <Icon className={twMerge(IconStyle({ size }), className)} />
}
