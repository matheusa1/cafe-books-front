import React, { ReactElement } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { ITextAreaForm } from './types'
import { TextArea } from '../../TextArea'

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
        <TextArea.TextArea value={value} onChange={onChange} {...rest} />
      )}
    />
  )
}

export default TextAreaForm
