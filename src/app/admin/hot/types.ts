import { ExtFile } from '@files-ui/react'

export type THot = {
  book?: { label: string; value: string } | unknown
  mainText?: string
  subText?: string
  image?: ExtFile[]
}[]
