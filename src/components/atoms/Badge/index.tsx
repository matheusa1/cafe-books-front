import React, { ReactElement } from 'react'
import { IBadge } from './types'
import { tv } from 'tailwind-variants'

export const BadgeVariants = tv({
  base: 'w-fit rounded px-1 text-sm',
  variants: {
    color: {
      success: 'bg-green-200/75 text-green-500',
      danger: 'bg-red-200/75 text-red-500',
      warning: 'bg-yellow-200/75 text-yellow-500',
      info: 'bg-blue-200/75 text-blue-500',
    },
  },
  defaultVariants: {
    color: 'info',
  },
})

const Badge: React.FC<IBadge> = ({ children, color }): ReactElement => {
  return <div className={BadgeVariants({ color })}>{children}</div>
}

export default Badge
