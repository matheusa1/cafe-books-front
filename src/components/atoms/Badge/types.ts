import { VariantProps } from 'tailwind-variants'
import { BadgeVariants } from '.'

export type IBadge = VariantProps<typeof BadgeVariants> & {
  children: string
}
