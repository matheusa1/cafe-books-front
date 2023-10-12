import React, { ReactElement } from 'react'
import { ISelectForm } from './types'
import { Controller, useFormContext } from 'react-hook-form'
import { tv } from 'tailwind-variants'
import { Select } from '../../Select'

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

const SelectForm: React.FC<ISelectForm> = ({ name, ...rest }): ReactElement => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select.Select onChange={onChange} value={value} {...rest} />
      )}
    />
  )
}

export default SelectForm
