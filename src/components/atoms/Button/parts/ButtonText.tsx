import React from 'react'
import { IButtonText } from '../types'
import { twMerge } from 'tailwind-merge'

export const ButtonText: React.FC<IButtonText> = ({ children, ...rest }) => {
  return (
    <span className={twMerge(rest.className)} {...rest}>
      {children}
    </span>
  )
}
