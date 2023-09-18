import React, { ReactElement } from 'react'
import { ISelectForm } from './types'
import { Controller, useFormContext } from 'react-hook-form'
import Select from '../../Select'

const SelectForm: React.FC<ISelectForm> = ({ name, ...rest }): ReactElement => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select onChange={onChange} value={value} {...rest} />
      )}
    />
  )
}

export default SelectForm
