import React, { ReactElement } from 'react'
import { tv } from 'tailwind-variants'
import { IInputFile } from './types'
import Input from '../Input'

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

const InputFile: React.FC<IInputFile> = ({
  label,
  id,
  errorMessage,
  labelDark,
  value,
  onChange,
  ...rest
}): ReactElement => {
  if (label && !id) throw new Error('Input: id is required')

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label className={LabelProps({ labelDark })} htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={'file'}
          id={id}
          {...rest}
          onChange={onChange}
          className="absolute left-0 top-0 z-10 h-full w-full "
          value={value}
        />
        <Input value={value} />
      </div>
      {errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  )
}

export default InputFile
