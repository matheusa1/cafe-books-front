import React, { ReactElement } from 'react'
import { IHeaderItem } from './types'
import { tv, VariantProps } from 'tailwind-variants'

const container = tv({
  base: 'flex select-none flex-col items-center justify-center rounded-lg p-2 transition-all md:h-14 md:w-14 md:bg-transparent md:hover:bg-brownPrimary',
  variants: {
    active: {
      true: 'brownButton',
      false: 'bg-brownPressed',
    },
  },
  defaultVariants: {
    active: false,
  },
})

const HeaderItem: React.FC<IHeaderItem & VariantProps<typeof container>> = ({
  icon,
  title,
  active = false,
  onClick,
}): ReactElement => {
  return (
    <div className={container({ active })} onClick={onClick}>
      {icon}
      <h1 className="hidden text-xs text-white md:flex">{title}</h1>
    </div>
  )
}

export default HeaderItem
