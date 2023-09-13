import React, { ReactElement } from 'react'
import { tv } from 'tailwind-variants'
import { ITextArea } from './types'

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

const TextArea: React.FC<ITextArea> = ({
  label,
  labelDark,
  errorMessage,
  ...rest
}): ReactElement => {
  return (
    <div className={'flex w-full flex-col gap-2'}>
      {label && (
        <label className={LabelProps({ labelDark })} htmlFor="text-area-id">
          {label}
        </label>
      )}
      <textarea
        className={
          'h-32 w-full rounded-lg border-2 border-dark bg-backgroundLight p-3  text-dark outline-none transition-all focus:border-brownPrimary'
        }
        id="text-area-id"
        {...rest}
      />
      {errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  )
}

export default TextArea