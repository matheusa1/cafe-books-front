import { ReactNode } from 'react'

export type IHeaderItemToggle = {
  title: string
  icon: ReactNode
  onClick?: () => void
}

export type IHeaderItem = IHeaderItemToggle & {
  path: string
}
