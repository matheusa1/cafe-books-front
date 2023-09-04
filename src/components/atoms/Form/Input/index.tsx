import React, { ReactElement } from 'react'
import Input from '../../Input'
import { Controller, useFormContext } from 'react-hook-form'
import { IInputForm } from './types'

const InputForm: React.FC<IInputForm> = ({ name, ...rest }): ReactElement => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Input onChange={onChange} {...rest} />
      )}
    />
  )
}

export default InputForm
