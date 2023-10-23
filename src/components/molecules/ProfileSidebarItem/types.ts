import { ElementType } from 'react'

export type IProfileSidebarItem = {
  title: string
  icon: ElementType
  isActive?: boolean
  onClick?: () => void
  logout?: boolean
}
