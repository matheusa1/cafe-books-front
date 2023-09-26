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
  bgWhite,
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
            backgroundColor: bgWhite ? 'rgb(240 230 227)' : 'transparent',
            padding: '0.4rem',
            borderRadius: '0.5rem',
            border: '2px solid rgb(29 18 18)',
          }),
          menu: (base) => ({
            ...base,
            borderRadius: '0.5rem',
            border: '2px solid rgb(29 18 18)',
            backgroundColor: bgWhite ? 'rgb(240 230 227)' : '#FFF',
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused
              ? bgWhite
                ? 'rgb(200 190 187)'
                : '#e1e1e1'
              : 'none',
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
