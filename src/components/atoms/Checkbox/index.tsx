import { Check } from '@phosphor-icons/react'
import React, { ReactElement } from 'react'
import { ICheckbox } from './types'
import { tv } from 'tailwind-variants'

import * as CheckboxR from '@radix-ui/react-checkbox'

const checkboxStyle = tv({
  base: 'flex aspect-square h-6 w-6 items-center justify-center rounded-md border-2',
  variants: {
    checked: {
      true: 'border-green-500',
      false: 'border-dark',
    },
  },
  defaultVariants: {
    checked: false,
  },
})

const Checkbox: React.FC<ICheckbox> = ({
  checked,
  label,
  id,
  onChange,
}): ReactElement => {
  if (label && !id) {
    throw new Error('If you pass a label, you must pass an id')
  }

  return (
    <div className={'flex gap-2'}>
      <CheckboxR.Root
        onCheckedChange={onChange}
        checked={checked}
        className={checkboxStyle({ checked })}
      >
        <CheckboxR.Indicator>
          <Check className="text-green-500" />
        </CheckboxR.Indicator>
      </CheckboxR.Root>
      {label && (
        <label htmlFor={id} className={'text-sm text-dark'}>
          {label}
        </label>
      )}
    </div>
  )
}

export default Checkbox
