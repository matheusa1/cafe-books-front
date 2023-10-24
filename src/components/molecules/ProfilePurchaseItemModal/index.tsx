import { FC } from 'react'
import { IProfilePurchaseItemModal } from './types'
import { X } from 'lucide-react'
import Badge from '@/components/atoms/Badge'

export const ProfilePurchaseItemModal: FC<IProfilePurchaseItemModal> = (i) => {
  const { address, date, id, setOpen, status, value } = i

  return (
    <div className={'flex flex-col gap-4 rounded-md bg-pureWhite p-5'}>
      <header className="flex items-center justify-between">
        <span className="text-lg font-bold">PEDIDO: {id}</span>
        <button
          className="rounded-md p-2 hover:bg-white1/2"
          onClick={() => setOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>
      </header>
      <main className="flex flex-col gap-4">
        <header className="flex w-fit justify-between gap-5 self-center rounded-md bg-gray-200 px-5 py-1 text-center md:gap-20">
          <div>
            <h1>DATA:</h1>
            <p>{date}</p>
          </div>
          <div>
            <h1>PAGAMENTO:</h1>
            <p>PIX</p>
          </div>
          <div>
            <h1>TOTAL:</h1>
            {value}
          </div>
        </header>
        <main>Conteudo</main>
        <footer className="flex flex-col gap-2">
          <div>
            <h1 className="font-semibold">Endereço de entrega:</h1>
            <p>{address}</p>
          </div>
          <div>
            <h1 className="font-semibold">Status:</h1>
            <Badge color="success">{status}</Badge>
          </div>
        </footer>
      </main>
    </div>
  )
}
