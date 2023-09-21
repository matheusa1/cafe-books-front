import React, { ReactElement, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { IInputForm } from './types'
import { tv } from 'tailwind-variants'
import { Eye, EyeClosed, MagnifyingGlass } from '@phosphor-icons/react'

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
  base: 'w-full rounded-lg border-2 border-dark py-3 text-dark outline-none transition-all',
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
      true: 'bg-white hover:bg-backgroundLight focus:border-brownPrimary focus:bg-backgroundLight',
      false:
        'bg-pureWhite hover:bg-white focus:border-brownPrimary focus:bg-white',
    },
  },
  defaultVariants: {
    password: false,
    search: false,
    disabled: false,
    bgWhite: false,
  },
})

const InputForm: React.FC<IInputForm> = ({
  name,
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
  const { control } = useFormContext()

  const [showPassword, setShowPassword] = useState(password)

  if (label && !id) throw new Error('Input: id is required')

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
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
              onChange={onChange}
              value={value}
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
      )}
    />
  )
}

export default InputForm
