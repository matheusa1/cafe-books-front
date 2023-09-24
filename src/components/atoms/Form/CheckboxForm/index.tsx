import React, { ReactElement } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import Checkbox from '../../Checkbox'
import { ICheckboxForm } from './types'

const CheckboxForm: React.FC<ICheckboxForm> = ({
  name,
  ...rest
}): ReactElement => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Checkbox {...rest} checked={value} onChange={onChange} />
      )}
    />
  )
}

export default CheckboxForm
