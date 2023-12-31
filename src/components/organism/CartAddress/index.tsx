'use client'

import { FC, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CartAddressForm } from '@/components/molecules/CartAddressForm'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useCart } from '@/context/CartInfoContext'

export const CartAddress: FC = () => {
  const [queryClient] = useState(() => new QueryClient())
  const [open, setOpen] = useState(false)

  const { cartInfo } = useCart()

  const address = cartInfo?.address

  return (
    <QueryClientProvider client={queryClient}>
      <div className={'flex w-full flex-col gap-5 rounded-md bg-pureWhite p-5'}>
        <h1>SELECIONE O ENDEREÇO</h1>
        <div className="flex flex-col border-l-2 border-l-brownPrimary bg-gray-100 p-2">
          {address ? (
            <>
              <span className="text-sm">{address.street}</span>
              <span className="text-sm">
                Número: {address.number}, {address?.complement}
              </span>
              <span className="text-sm">CEP: {`${address.cep.substring(0, 5)}-${address.cep.substring(5)}`}</span>
              <span className="text-sm">Bairro: {address.neighborhood}</span>
              <span className="text-sm">
                {address.city}, {address.state}
              </span>
            </>
          ) : (
            <span className="text-sm">Nenhum endereço cadastrado</span>
          )}

          <Dialog.Root open={open}>
            <Dialog.DialogTrigger asChild>
              <button className="mt-2 self-end text-brownPrimary" onClick={() => setOpen(true)}>
                Alterar endereço
              </button>
            </Dialog.DialogTrigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" onClick={() => setOpen(false)} />
              <CartAddressForm setOpen={setOpen} />
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </QueryClientProvider>
  )
}
