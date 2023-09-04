'use client'

import React, { ReactElement } from 'react'
import { IInput } from './types'
import { Eye, EyeClosed } from '@phosphor-icons/react'
import { tv, VariantProps } from 'tailwind-variants'

const LabelProps = tv({
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

const InputProps = tv({
  base: 'w-full rounded-lg border-2 border-dark bg-backgroundLight py-3  text-dark outline-none transition-all focus:border-brownPrimary',
  variants: {
    password: {
      true: 'px-4 pr-12',
      false: 'px-4 ',
    },
  },
  defaultVariants: {
    password: false,
  },
})

const Input: React.FC<IInput & VariantProps<typeof LabelProps>> = ({
  label,
  password = false,
  labelDark = false,
  ...rest
}): ReactElement => {
  const [showPassword, setShowPassword] = React.useState(password)

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label className={LabelProps({ labelDark })} htmlFor="input_id">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={InputProps({ password })}
          type={password ? (showPassword ? 'password' : 'text') : 'text'}
          id="input_id"
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
      </div>
    </div>
  )
}

export default Input
