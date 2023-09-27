'use client'

import React, { ReactElement, useState } from 'react'
import { IInput } from './types'
import { Eye, EyeClosed, MagnifyingGlass } from '@phosphor-icons/react'
import { tv } from 'tailwind-variants'

export const LabelProps = tv({
  base: 'text-lg font-bold',
  variants: {
    labelDark: {
      true: 'text-dark',
      false: 'text-white',
    },
  },
  defaultVariants: {
    labelDark: false,
  },
})

export const InputProps = tv({
  base: 'w-full rounded-lg border-2 border-dark bg-backgroundLight py-3 text-dark outline-none transition-all focus:border-brownPrimary',
  variants: {
    password: {
      true: 'px-4 pr-12',
      false: 'px-4',
    },
    search: {
      true: 'px-4 pr-12',
      false: 'px-4',
    },
    disabled: {
      true: 'cursor-not-allowed bg-gray-300 px-4',
      false: 'px-4',
    },
    bgWhite: {
      true: 'bg-white',
      false: 'bg-transparent',
    },
  },
  defaultVariants: {
    password: false,
    search: false,
    disabled: false,
    bgWhite: false,
  },
})

const Input: React.FC<IInput> = ({
  label,
  password = false,
  search = false,
  labelDark = false,
  errorMessage,
  onHandleSearch,
  type,
  disabled,
  id,
  bgWhite,
  ...rest
}): ReactElement => {
  const [showPassword, setShowPassword] = useState(password)

  if (label && !id) throw new Error('Input: id is required')

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label className={LabelProps({ labelDark })} htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={
            InputProps({ password, search, disabled, bgWhite }) +
            ` ${!!errorMessage && 'animate-shake border-red-500'}`
          }
          type={password ? (showPassword ? 'password' : 'text') : type}
          id={id}
          disabled={disabled}
          {...rest}
        />
        {password && (
          <div
            onClick={() => setShowPassword((e) => !e)}
            className="absolute inset-y-0 right-0 flex items-center justify-center px-4"
          >
            {showPassword ? (
              <Eye size={24} color="black" />
            ) : (
              <EyeClosed size={24} color="black" />
            )}
          </div>
        )}
        {search && (
          <div
            onClick={onHandleSearch}
            className="absolute inset-y-0 right-0 flex items-center justify-center px-4"
          >
            <MagnifyingGlass size={24} color="black" />
          </div>
        )}
      </div>
      {errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  )
}

export default Input
