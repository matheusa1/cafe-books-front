'use client'

import React, { ReactElement } from 'react'
import Selecta from 'react-select'
import { ISelect } from './types'
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

const Select: React.FC<ISelect> = ({
  label,
  errorMessage,
  labelDark,
  id,
  ...rest
}): ReactElement => {
  if (label && !id) throw new Error('You must provide an id for the select')

  return (
    <div className={'flex w-full flex-col gap-2'}>
      {label && (
        <label className={LabelProps({ labelDark })} htmlFor={id}>
          {label}
        </label>
      )}
      <Selecta
        {...rest}
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
  )
}

export default Select
