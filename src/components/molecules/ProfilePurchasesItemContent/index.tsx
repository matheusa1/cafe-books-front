'use client'

import Badge from '@/components/atoms/Badge'
import { Button } from '@/components/atoms/Button'
import { ProfilePurchasesItemContentItem } from '@/components/atoms/ProfilePurchasesItemContentItem'
import { Eye } from 'lucide-react'
import { FC, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ProfilePurchaseItemModal } from '../ProfilePurchaseItemModal'
import CurrencyText from '@/components/atoms/CurrencyText'

export const ProfilePurchasesItemContent: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={'my-5 flex w-full flex-col gap-5 p-2 md:grid md:grid-cols-6'}
    >
      <Dialog.Root open={open}>
        <Dialog.Portal>
          <Dialog.Overlay
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black opacity-30"
          />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ProfilePurchaseItemModal
              address="Avenida Mario Bros, número 5358, apto 03, 87456-789, Campo Mourão - PR"
              date="20/10/2023"
              id="2"
              setOpen={setOpen}
              status="Entregue"
              value={<CurrencyText className="whitespace-nowrap" value={100} />}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <main className="flex flex-col gap-2 md:col-span-4">
        <ProfilePurchasesItemContentItem />
      </main>
      <div className="self-center md:hidden">
        <Badge color="success">Entregue</Badge>
      </div>
      <footer className="flex flex-col items-center justify-center md:col-span-2 md:items-end">
        <Button.Root
          onClick={() => setOpen(true)}
          className="border-2 border-brownPrimary bg-transparent text-brownPrimary hover:bg-brownPrimary hover:text-pureWhite"
        >
          <Button.Icon icon={Eye} />
          <Button.Text className="text-current">
            Ver detalhes do pedido
          </Button.Text>
        </Button.Root>
        {/* <Button.Root className="border-2 border-brownPrimary bg-transparent text-brownPrimary hover:bg-brownPrimary hover:text-pureWhite">
          <Button.Icon icon={RedoDot} />
          <Button.Text className="text-current">Pedir novamente</Button.Text>
        </Button.Root>
        <Button.Root className="border-2 border-brownPrimary bg-transparent text-brownPrimary hover:bg-brownPrimary hover:text-pureWhite">
          <Button.Icon icon={XCircle} />
          <Button.Text className="text-current">Cancelar pedido</Button.Text>
        </Button.Root> */}
      </footer>
    </div>
  )
}
