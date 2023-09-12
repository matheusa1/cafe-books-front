import React, { ReactElement } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import TextArea from '../../TextArea'
import { ITextAreaForm } from './types'

const TextAreaForm: React.FC<ITextAreaForm> = ({
  name,
  ...rest
}): ReactElement => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextArea onChange={onChange} value={value} {...rest} />
      )}
    />
  )
}

export default TextAreaForm
