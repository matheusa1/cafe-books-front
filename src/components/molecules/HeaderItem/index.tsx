import React, { ReactElement } from 'react'
import { IHeaderItem, IHeaderItemToggle } from './types'
import { tv, VariantProps } from 'tailwind-variants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const container = tv({
  base: 'flex h-14 w-14 shrink-0 select-none flex-col items-center justify-center rounded-lg p-2 transition-all md:bg-transparent md:hover:bg-brownPrimary',
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

export const HeaderItem: React.FC<IHeaderItem> = ({
  icon: Icon,
  title,
  onClick,
  path,
}): ReactElement => {
  const pathname = usePathname()

  return (
    <Link
      href={path}
      className={container({ active: !!(pathname === path) })}
      onClick={onClick}
    >
      <Icon className="text-white" />
      <h1 className="text-xs text-white md:flex">{title}</h1>
    </Link>
  )
}

export const HeaderItemToggle: React.FC<
  IHeaderItemToggle & VariantProps<typeof container>
> = ({ icon: Icon, title, active = false, onClick }): ReactElement => {
  return (
    <div className={container({ active })} onClick={onClick}>
      <Icon />

      <h1 className="hidden text-xs text-white md:flex">{title}</h1>
    </div>
  )
}
