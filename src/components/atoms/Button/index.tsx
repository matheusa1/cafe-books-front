import React, { ReactElement } from 'react'
import { IButton } from './types'
import { tv, VariantProps } from 'tailwind-variants'

const buttonWrapper = tv({
  base: 'flex h-11 items-center justify-center rounded-lg text-white transition-all',
  variants: {
    content: {
      icon: 'h-11 w-11',
      text: 'px-10 py-4',
      wFull: 'w-full',
    },
    styleType: {
      filled: 'brownButton',
      filledWhite: 'whiteButton',
      danger: 'dangerButton',
      brownDisabled: 'brownDisabledButton',
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
  isLoading,
  ...rest
}): ReactElement => {
  return (
    <button
      onClick={isLoading ? () => {} : onClick}
      className={buttonWrapper({ content, styleType })}
      {...rest}
    >
      {isLoading ? (
        <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
