import React, { ReactElement } from 'react'
import { IButton } from './types'
import { tv, VariantProps } from 'tailwind-variants'

const buttonWrapper = tv({
  base: 'flex h-11 items-center justify-center text-white transition-all',
  variants: {
    content: {
      icon: 'aspect-square p-2',
      'icon-sm': 'aspect-square p-1 text-lg',
      text: 'px-10 py-4',
      'text-sm': 'px-4 py-2 text-sm',
      wFull: 'w-full',
    },
    styleType: {
      filled: 'brownButton',
      filledWhite: 'whiteButton',
      danger: 'dangerButton',
      brownDisabled: 'brownDisabledButton',
      secondary: 'bg-brownPrimary/60',
      outlinedWhite:
        'border-2 border-white hover:border-brownPrimary hover:bg-brownPrimary hover:text-white',
      outlinedBrown:
        'border-2 border-brownPrimary text-brownPrimary hover:border-brownPrimary hover:bg-brownPrimary hover:text-white',
    },
    rounded: {
      default: 'rounded-lg',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    content: 'text',
    styleType: 'filled',
    rounded: 'default',
  },
})

const Button: React.FC<IButton & VariantProps<typeof buttonWrapper>> = ({
  children,
  onClick,
  content,
  styleType,
  rounded,
  isLoading,
  ...rest
}): ReactElement => {
  return (
    <button
      className={buttonWrapper({ content, styleType, rounded })}
      onClick={isLoading ? () => {} : onClick}
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
