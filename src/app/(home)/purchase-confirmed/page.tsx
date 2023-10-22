'use client'
import { Button } from '@/components/atoms/Button'
import { BadgeCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { ReactElement, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const PurchaseConfirmed: React.FC = (): ReactElement => {
  const { push } = useRouter()
  useEffect(() => { toast.success('Você será redirecionado à página principal em breve...')
    const t = setTimeout(() => {
      push('/')
    }, 5000)

    return () => clearTimeout(t)
  })

  return (
    <div className="flex min-h-screen flex-col place-items-center justify-center px-5 md:px-10">
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
        theme="light"
      />
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="font-bold md:text-lg lg:text-xl">
            Sua compra foi confirmada!
          </span>
          <BadgeCheck className="h-16 w-16 text-green-500 md:h-20 md:w-20" />
        </div>
        <div className="flex flex-col gap-2 text-center 2xs:gap-4">
          <span>
            Sua compra já foi enviada para separação, e, em algumas horas, será
            enviada para a transportadora.
          </span>
          <span className="text-center">
            Obrigado por comprar com a gente! 🤎
          </span>
        </div>
        <Button.Root className="w-full max-w-xs">
          <Button.Text>Ver pedido</Button.Text>
        </Button.Root>
      </div>
    </div>
  )
}

export default PurchaseConfirmed
