import React, { ReactElement } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { IInputFileForm } from './types'
import Input from '../../Input'
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

const FormInputFile: React.FC<IInputFileForm> = ({
  name,
  label,
  labelDark,
  id,
  errorMessage,
  placeholder,
  ...rest
}): ReactElement => {
  const { control } = useFormContext()

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
              type={'file'}
              id={id}
              {...rest}
              onChange={onChange}
              className="absolute left-0 top-0 z-10 h-full w-full opacity-0"
              value={typeof value === 'string' ? undefined : value}
            />
            <Input value={value} placeholder={placeholder} />
          </div>
          {errorMessage && (
            <span className="text-sm text-red-500">
              {typeof errorMessage === 'string' && errorMessage}
            </span>
          )}
        </div>
      )}
    />
  )
}

export default FormInputFile
