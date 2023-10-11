import React from 'react'
import { IInputForm } from './types'
import { Input } from '../../Input'
import { Controller, useFormContext } from 'react-hook-form'

export const InputForm: React.FC<IInputForm> = ({ name, ...rest }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Input.Input onChange={onChange} value={value ? value : ''} {...rest} />
      )}
    />
  )
}
