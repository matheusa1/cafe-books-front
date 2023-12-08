'use client'
import { CartAddress } from '@/components/organism/CartAddress'
import { CartContent } from '@/components/organism/CartContent'
import { CartResume } from '@/components/organism/CartResume'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartInfoContext'
import { apiHandlePurchase } from '@/services/api'
import { useRouter } from 'next/navigation'
import React, { ReactElement } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Cart: React.FC = (): ReactElement => {
  const { user, refetchCart, token } = useAuth()
  const { push } = useRouter()
  const { cartInfo } = useCart()

  const address = cartInfo?.address

  const onHandlePurchase = async () => {
    const formattedAddress = `${address?.street}|${address?.number}|${address?.complement}|${address?.cep}|${address?.neighborhood}|${address?.city}|${address?.state}`

    if (!address) {
      return toast.error('Endereço é obrigatório')
    }

    if (user?.cart?.books.length === 0 || !user?.cart?.books) {
      return toast.error('Carrinho vazio')
    }

    try {
      await apiHandlePurchase({ token: token!, address: formattedAddress })

      toast.success('Pedido separado com sucesso!')
      push('/payment')
      refetchCart()
    } catch (error) {
      toast.error('Houve um erro ao completar a compra')
    }
  }

  return (
    <div className={'flex min-h-screen flex-col items-center px-5 py-20 md:px-10 md:py-28'}>
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
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <div className="flex w-full flex-col gap-4">
          <div className="">
            <CartAddress />
          </div>
          <div className="place-items-start">
            <CartContent />
          </div>
        </div>
        <div className="min-w-fit">
          <CartResume onHandlePurchase={onHandlePurchase} />
        </div>
      </div>
    </div>
  )
}

export default Cart
