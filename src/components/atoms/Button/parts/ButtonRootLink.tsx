import { twMerge } from 'tailwind-merge'
import { ButtonStyle } from './ButtonRoot'
import ReactLoading from 'react-loading'
import { IButtonRootLink } from '../types'
import { FC } from 'react'
import Link from 'next/link'

export const ButtonRootLink: FC<IButtonRootLink> = ({
  children,
  size,
  loading,
  ...rest
}) => {
  return (
    <Link {...rest} className={twMerge(ButtonStyle({ size }), rest.className)}>
      {loading ? (
        <ReactLoading type={'spin'} width={24} height={24} />
      ) : (
        children
      )}
    </Link>
  )
}
