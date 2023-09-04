import { ReactNode } from 'react'

export type IFooterItem = {
  title: string
  items: {
    title: string
    data: string
  }[]
  icon: ReactNode
  onHandleClick: (data: string, title: string) => void
}
