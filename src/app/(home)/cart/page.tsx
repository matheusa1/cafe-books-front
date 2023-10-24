'use client'
import { CartAddress } from '@/components/organism/CartAddress'
import { CartContent } from '@/components/organism/CartContent'
import { CartResume } from '@/components/organism/CartResume'
import { useAuth } from '@/context/AuthContext'
import { apiHandlePurchase } from '@/services/api'
import { IAddress } from '@/types/address'
import { useRouter } from 'next/navigation'
import React, { ReactElement, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Cart: React.FC = (): ReactElement => {
  const { user, refetchCart, token } = useAuth()
  const { push } = useRouter()
  const [address, setAddress] = useState<IAddress | undefined>(
    user?.address
      ? {
          street: user?.address.split('|')[0],
          number: user?.address.split('|')[1],
          complement: user?.address.split('|')[2],
          cep: user?.address.split('|')[3],
          neighborhood: user?.address.split('|')[4],
          city: user?.address.split('|')[5],
          state: user?.address.split('|')[6],
        }
      : undefined,
  )

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
      console.log(error)
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
          <CartAddress address={address} setAddress={setAddress} />
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
