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
    if (!user) {
      toast.error('Entre em uma conta para fazer a compra. Mas cuidado!! Isso pode mesclar o carrinho atual')
      return
    }

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
      <div className="grid w-full flex-1 grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="order-1 col-span-1 h-fit  lg:order-none lg:col-span-2">
          <CartAddress />
        </div>
        <div className="order-2 row-span-1  lg:order-none lg:row-span-2">
          <CartResume onHandlePurchase={onHandlePurchase} />
        </div>
        <div className="col-span-1 place-items-start lg:col-span-2">
          <CartContent />
        </div>
      </div>
    </div>
  )
}

export default Cart
