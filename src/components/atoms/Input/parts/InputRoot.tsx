import React from 'react'
import { IInputRoot } from '../types'
import { twMerge } from 'tailwind-merge'

export const InputRoot: React.FC<IInputRoot> = ({ children, className }) => {
  return (
    <div className={twMerge('flex flex-col gap-2 w-full', className)}>
      {children}
    </div>
  )
}
