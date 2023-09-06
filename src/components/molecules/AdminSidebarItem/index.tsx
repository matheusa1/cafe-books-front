import { useSidebar } from '@/context/AuthSidebarContext'
import React, { ReactElement } from 'react'
import { IAdminSidebarItem } from './types'
import { tv } from 'tailwind-variants'
import Link from 'next/link'

const containerStyles = tv({
  base: 'relative flex h-14 w-full shrink-0 cursor-pointer select-none flex-row items-center justify-start gap-5 overflow-hidden px-7 text-white hover:bg-blue-900/50',
  variants: {
    active: {
      true: 'cursor-default bg-white text-blue-500 hover:bg-white',
    },
    sidebarState: {
      true: 'w-full rounded-full lg:rounded-l-full lg:rounded-r-none',
      false: 'h-14 w-14 items-center rounded-full pl-4',
    },
  },
  defaultVariants: {
    active: false,
  },
})

const AdminSidebarItem: React.FC<IAdminSidebarItem> = ({
  icon,
  path,
  text,
  active,
}): ReactElement => {
  const { isSidebarOpen } = useSidebar()

  return (
    <Link
      href={path}
      className={containerStyles({ active, sidebarState: isSidebarOpen })}
    >
      <div
        className={`absolute -top-4 right-0 hidden h-4 w-4 bg-white before:absolute before:right-0 before:top-0 before:h-4 before:w-4 before:rounded-br-full before:bg-black before:content-['']  lg:flex ${
          active && isSidebarOpen
            ? 'opacity-100 before:opacity-100'
            : 'opacity-0 before:opacity-0'
        }`}
      />
      <div
        className={`absolute -bottom-4 right-0 hidden h-4 w-4 bg-white before:absolute before:right-0 before:top-0 before:h-4 before:w-4 before:rounded-tr-full before:bg-black before:content-['']  lg:flex ${
          active && isSidebarOpen
            ? 'opacity-100 before:opacity-100'
            : 'opacity-0 before:opacity-0'
        }`}
      />
      <div className="shrink-0">{icon(active)}</div>
      <span className="text-sm font-bold">{text}</span>
    </Link>
  )
}

export default AdminSidebarItem
