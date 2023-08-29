import React, { ReactElement } from 'react'
import { IButton } from './types'
import { tv, VariantProps } from 'tailwind-variants'

const buttonWrapper = tv({
  base: 'brownButton flex h-11 items-center justify-center rounded-full text-white',
  variants: {
    content: {
      icon: 'w-11',
      text: 'px-10 py-4',
    },
  },
  defaultVariants: {
    content: 'text',
  },
})

const Button: React.FC<IButton & VariantProps<typeof buttonWrapper>> = ({
  children,
  onClick,
  content,
}): ReactElement => {
  return (
    <button onClick={onClick} className={buttonWrapper({ content })}>
      {children}
    </button>
  )
}

export default Button
