import React from 'react'
import { IInputLabel } from '../types'
import { twMerge } from 'tailwind-merge'

const InputLabel: React.FC<IInputLabel> = ({ children, required, ...rest }) => {
  return (
    <label
      data-required={required}
      className={twMerge(
        rest.className,
        'text-xs data-[required=true]:after:text-orange-500 data-[required=true]:after:content-["*"]',
      )}
      {...rest}
    >
      {children}
    </label>
  )
}

export default InputLabel
