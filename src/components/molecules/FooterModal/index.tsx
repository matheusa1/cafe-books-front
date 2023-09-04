import React, { ReactElement } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IFooterModal } from './types'
import { X } from '@phosphor-icons/react'
import Button from '@/components/atoms/Button'

const FooterModal: React.FC<IFooterModal> = ({
  content,
  isOpen,
  setIsOpen,
  title,
}): ReactElement => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50"
        />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex w-[80vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-xl bg-white p-5">
          <header className="flex items-center justify-between">
            <div />
            <p>{title}</p>
            <X
              onClick={() => setIsOpen(false)}
              size={24}
              color="black"
              className="cursor-pointer"
            />
          </header>
          <main className="h-[324px] w-full overflow-auto rounded-lg bg-white1/2 p-4">
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
          </main>
          <div className="flex justify-end" onClick={() => setIsOpen(false)}>
            <Button>Continuar</Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default FooterModal
