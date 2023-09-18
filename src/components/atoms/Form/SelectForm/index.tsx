import React, { ReactElement } from 'react'
import { ISelectForm } from './types'
import { Controller, useFormContext } from 'react-hook-form'
import { tv } from 'tailwind-variants'
import Selecta from 'react-select'

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

const SelectForm: React.FC<ISelectForm> = ({
  name,
  label,
  errorMessage,
  labelDark,
  id,
  ...rest
}): ReactElement => {
  const { control } = useFormContext()

  if (label && !id) throw new Error('You must provide an id for the select')

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
          <Selecta
            {...rest}
            onChange={onChange}
            value={value}
            id={id}
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: 'rgb(240 230 227)',
                padding: '0.4rem',
                borderRadius: '0.5rem',
                border: '2px solid rgb(29 18 18)',
              }),
              menu: (base) => ({
                ...base,
                borderRadius: '0.5rem',
                border: '2px solid rgb(29 18 18)',
                backgroundColor: 'rgb(240 230 227)',
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? 'rgb(200 190 187)' : 'none',
              }),
            }}
          />

          {errorMessage && (
            <span className="text-sm text-red-500">{errorMessage}</span>
          )}
        </div>
      )}
    />
  )
}

export default SelectForm
