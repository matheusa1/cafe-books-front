'use client'
import { PartyPopper } from 'lucide-react'
import Image from 'next/image'
import React, { ReactElement } from 'react'
import qrcode from '/public/mock/images/qrcode.png'
import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import copy from 'copy-to-clipboard'
import { ToastContainer, toast } from 'react-toastify'

const PurchaseComplete: React.FC = (): ReactElement => {
  return (
    <div className={'my-20 flex flex-col items-center px-5 md:my-28 md:px-10'}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="mb-4 flex flex-col items-center gap-2">
        <span className="text-base font-bold">
          Seu pedido foi realizado com sucesso!
        </span>
        <PartyPopper className="text-green-500" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-row gap-1">
          <span className="text-sm font-bold">Valor a pagar:</span>
          <span className="text-sm">R$ 100,00</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-row gap-1">
            <span className="text-sm font-bold">Forma de pagamento:</span>
            <span className="text-sm">Pix</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={qrcode}
              alt={'QR Code'}
              height={250}
              width={250}
              className="flex items-center self-center"
            />
            <span className="max-w-xs text-justify text-2xs">
              Pix tem o pagamento aprovado na hora. Você poderá finalizar o seu
              Pix por meio do QR Code ou código no banco que preferir! Mas fique
              atento, este código só será válido por 4 horas. Ao clicar em
              comprar, você dá ciência e aceita os termos desta transação.
            </span>
          </div>
        </div>
        <div className="flex w-full max-w-xs flex-col items-center gap-2">
          <Input.Input
            className="w-full text-xs text-slate-500"
            value={'DCVNAOCLONARCARTAOKHXLSAOPAULO-IFOOD'}
          />
          <Button.Root
            onClick={() => {
              copy('DCVNAOCLONARCARTAOKHXLSAOPAULO-IFOOD')
              toast.success('Código copiado com sucesso!')
            }}
            className="w-full"
          >
            <Button.Text className="text-sm font-semibold">
              Copiar código
            </Button.Text>
          </Button.Root>
        </div>
      </div>
    </div>
  )
}

export default PurchaseComplete
