'use client'

import React, { useState } from 'react'
import { IInputMain } from '../types'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import { Eye, EyeOff, Search } from 'lucide-react'

export const InputStyle = tv({
  base: 'h-10 w-full rounded-md text-base outline-none transition-all',
  variants: {
    variant: {
      password: 'py-3 pl-3 pr-16',
      search: 'py-3 pl-3 pr-16',
      default: 'p-3',
    },
    error: {
      true: 'animate-shake border-danger',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    error: false,
  },
})

export const InputMain: React.FC<IInputMain> = ({
  variant,
  error,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={'relative'}>
      <input
        {...rest}
        type={
          variant === 'password'
            ? showPassword
              ? 'text'
              : 'password'
            : rest.type
        }
        className={twMerge(rest.className, InputStyle({ variant, error }))}
      />
      {variant && (
        <div
          className="absolute right-1 top-1/2 flex aspect-square h-9 -translate-y-1/2 cursor-pointer items-center justify-center transition-all hover:bg-slate-200"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {variant === 'search' ? (
            <Search className="h-5 w-5" />
          ) : showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </div>
      )}
    </div>
  )
}
