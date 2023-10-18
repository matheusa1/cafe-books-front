import {
  ButtonHTMLAttributes,
  ElementType,
  HtmlHTMLAttributes,
  ReactNode,
} from 'react'
import { VariantProps } from 'tailwind-variants'
import { ButtonStyle } from './parts/ButtonRoot'
import { IconStyle } from './parts/ButtonIcon'
import { LinkProps } from 'next/link'

export type IButtonRoot = {
  children?: ReactNode
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonStyle>

export type IButtonRootLink = {
  children?: ReactNode
  loading?: boolean
  className?: string
} & LinkProps &
  VariantProps<typeof ButtonStyle>

export type IButtonText = HtmlHTMLAttributes<HTMLSpanElement>

export type IButtonIcon = {
  icon: ElementType
  className?: string
} & VariantProps<typeof IconStyle>

export type IButton = {
  text: string
  iconRight?: boolean
  iconLeft?: boolean
} & VariantProps<typeof ButtonStyle>
