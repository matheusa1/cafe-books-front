'use client'

import { FC } from 'react'
import Selecta from 'react-select'
import { ISelectMain } from '../types'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import * as Dialog from '@radix-ui/react-dialog'

export const SelectStyle = tv({
  base: 'rounded-md',
  variants: {
    error: {
      true: 'animate-shake border-danger',
      false: '',
    },
  },
  defaultVariants: {
    error: false,
  },
})

export const SelectMain: FC<ISelectMain> = ({
  error,
  modal,
  isModalOpen,
  setIsModalOpen,
  ...rest
}) => {
  return (
    <>
      <Dialog.Root open={isModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay
            onClick={() => setIsModalOpen!(false)}
            className="fixed inset-0 z-40 bg-black/50"
          />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
            {modal}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Selecta
        {...rest}
        className={twMerge(rest.className, SelectStyle({ error }))}
        noOptionsMessage={() => (
          <p
            onClick={() => setIsModalOpen!(true)}
            className="cursor-pointer hover:bg-gray-100"
          >
            Criar
          </p>
        )}
      />
    </>
  )
}
