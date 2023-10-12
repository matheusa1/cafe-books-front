import { FC } from 'react'
import { ITextAreaLabel } from '../types'
import { twMerge } from 'tailwind-merge'

export const TextAreaLabel: FC<ITextAreaLabel> = ({
  children,
  required,
  ...rest
}) => {
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
