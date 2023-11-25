import { ElementType } from 'react'

export type IFooterItem = {
  title: string
  items: {
    name: string
  }[]
  icon: ElementType
  onHandleClick: (title: string) => void
}
