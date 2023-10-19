import { ElementType } from 'react'

export type IHeaderItemToggle = {
  title: string
  icon: ElementType
  onClick?: () => void
}

export type IHeaderItem = IHeaderItemToggle & {
  path: string
}
