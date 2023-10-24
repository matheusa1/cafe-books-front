'use client'

import Badge from '@/components/atoms/Badge'
import { Button } from '@/components/atoms/Button'
import { Eye } from 'lucide-react'
import { FC, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ProfilePurchaseItemModal } from '../ProfilePurchaseItemModal'
import CurrencyText from '@/components/atoms/CurrencyText'
import { IPurchase } from '@/types/purcheses'
import { converteDataISOParaDDMMAAAA } from '@/utils/formatDate'
import { ProfilePurchasesItemContentItem } from '@/components/atoms/ProfilePurchasesItemContentItem'

export const ProfilePurchasesItemContent: FC<{ purchase: IPurchase }> = ({ purchase }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={'my-5 flex w-full flex-col gap-5 p-2 md:grid md:grid-cols-6'}>
      <Dialog.Root open={open}>
        <Dialog.Portal>
          <Dialog.Overlay onClick={() => setOpen(false)} className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Content className="fixed left-1/2 top-1/2 max-w-[90vw] -translate-x-1/2 -translate-y-1/2">
            <ProfilePurchaseItemModal
              address={purchase.address}
              date={converteDataISOParaDDMMAAAA(purchase.date)}
              id={purchase.id.toString()}
              setOpen={setOpen}
              status={purchase.status}
              value={<CurrencyText className="whitespace-nowrap" value={purchase.total} />}
              content={purchase.books}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <main className="flex flex-col gap-2 md:col-span-4">
        <ProfilePurchasesItemContentItem
          firstQuantity={purchase.books[0].quantity}
          image={purchase.books[0].book_image}
          size={purchase.books.length}
          title={purchase.books[0].book_title}
        />
      </main>
      <div className="self-center md:hidden">
        <Badge color="success">{purchase.status}</Badge>
      </div>
      <footer className="flex flex-col items-center justify-center md:col-span-2 md:items-end">
        <Button.Root
          onClick={() => setOpen(true)}
          className="border-2 border-brownPrimary bg-transparent text-brownPrimary hover:bg-brownPrimary hover:text-pureWhite"
        >
          <Button.Icon icon={Eye} />
          <Button.Text className="text-current">Ver detalhes do pedido</Button.Text>
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
