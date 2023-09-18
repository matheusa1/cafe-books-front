import React, { ReactElement } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { ITextAreaForm } from './types'
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

const TextAreaForm: React.FC<ITextAreaForm> = ({
  name,
  label,
  labelDark,
  errorMessage,
  id,
  ...rest
}): ReactElement => {
  const { control } = useFormContext()
  if (label && !id) throw new Error('You must provide an id for the textarea')

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className={'flex w-full flex-col gap-2'}>
          {label && (
            <label className={LabelProps({ labelDark })} htmlFor={id}>
              {label}
            </label>
          )}
          <textarea
            className={
              'h-32 w-full rounded-lg border-2 border-dark bg-backgroundLight p-3  text-dark outline-none transition-all focus:border-brownPrimary'
            }
            id={id}
            onChange={onChange}
            value={value}
            {...rest}
          />
          {errorMessage && (
            <span className="text-sm text-red-500">{errorMessage}</span>
          )}
        </div>
      )}
    />
  )
}

export default TextAreaForm
