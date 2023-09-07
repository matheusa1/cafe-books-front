import React, { ReactElement } from 'react'
import { IButton } from './types'
import { tv, VariantProps } from 'tailwind-variants'

const buttonWrapper = tv({
  base: 'flex h-11 items-center justify-center rounded-lg text-white transition-all',
  variants: {
    content: {
      icon: 'w-11',
      text: 'px-10 py-4',
    },
    styleType: {
      filled: 'brownButton',
      outlinedWhite:
        'border-2 border-white hover:border-brownPrimary hover:bg-brownPrimary hover:text-white',
      outlinedBrown:
        'border-2 border-brownPrimary text-brownPrimary hover:border-brownPrimary hover:bg-brownPrimary hover:text-white',
    },
  },
  defaultVariants: {
    content: 'text',
    styleType: 'filled',
  },
})

const Button: React.FC<IButton & VariantProps<typeof buttonWrapper>> = ({
  children,
  onClick,
  content,
  styleType,
  ...rest
}): ReactElement => {
  return (
    <button
      onClick={onClick}
      className={buttonWrapper({ content, styleType })}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
