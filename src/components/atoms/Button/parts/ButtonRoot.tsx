import React from 'react'
import { IButtonRoot } from '../types'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import ReactLoading from 'react-loading'

export const ButtonStyle = tv({
  base: 'flex items-center justify-center gap-2 rounded-md transition-all disabled:cursor-not-allowed disabled:bg-brownPrimary/50',
  variants: {
    variant: {
      outline:
        'border border-brownPrimary bg-transparent text-brownPrimary hover:bg-brownPrimary hover:text-white',
      default: 'bg-brownPrimary text-white hover:bg-brownPressed',
    },
    size: {
      md: 'h-10 px-5 text-base',
      sm: 'h-9 px-4 text-sm',
      lg: 'h-14 px-6 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
})

export const ButtonRoot: React.FC<IButtonRoot> = ({
  children,
  size,
  loading,
  variant,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={loading ? undefined : rest.onClick}
      className={twMerge(ButtonStyle({ size, variant }), rest.className)}
    >
      {loading ? (
        <ReactLoading type={'spin'} width={24} height={24} />
      ) : (
        children
      )}
    </button>
  )
}
