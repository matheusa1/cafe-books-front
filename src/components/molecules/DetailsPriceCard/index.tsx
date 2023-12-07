'use client'

import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { IDetailsPriceCard } from './types'
import CurrencyText from '@/components/atoms/CurrencyText'
import { Button } from '@/components/atoms/Button'
import QuantitySelector from '@/components/atoms/QuantitySelector'
import { useAuth } from '@/context/AuthContext'
import { addBookToFavorites, apiHandleCart, apiHandlePurchaseWithoutCart, removeBookToFavorites } from '@/services/api'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import { CartAddressForm } from '../CartAddressForm'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Bookmark } from 'lucide-react'
import { useCart } from '@/context/CartInfoContext'

const DetailsPriceCard: React.FC<IDetailsPriceCard> = ({ price, title, discountPrice, isbn, stock }): ReactElement => {
  const { user, refetchCart, token } = useAuth()
  const { push } = useRouter()
  const [isBookmarked, setIsBookmarked] = useState<boolean>(user?.favorites?.includes(isbn) || false)
  const [isOnCart, setIsOnCart] = useState<boolean>(!!user?.cart?.books?.find((book) => book.book_isbn === isbn) || false)
  const [quantity, setQuantity] = React.useState(1)
  const [open, setOpen] = React.useState(false)
  const [queryClient] = useState(() => new QueryClient())

  const { cartInfo } = useCart()

  const address = cartInfo?.address

  const onHandlePurchase = useCallback(async () => {
    const formattedAddress = `${address?.street}|${address?.number}|${address?.complement}|${address?.cep}|${address?.neighborhood}|${address?.city}|${address?.state}`

    if (!address) {
      return toast.error('Endereço é obrigatório')
    }

    try {
      await apiHandlePurchaseWithoutCart({ token: token!, address: formattedAddress, isbn, quantity })

      toast.success('Pedido separado com sucesso!')
      push('/payment')
      refetchCart()
    } catch (error) {
      toast.error('Houve um erro ao completar a compra')
    }
  }, [address, push, quantity, refetchCart, token, isbn])

  const onHandleCart = async () => {
    if (!user) return

    try {
      if (isOnCart) {
        await apiHandleCart({ add: false, book: isbn, token: token! })
        refetchCart()
        setIsOnCart(false)
        toast.success('Livro removido do carrinho')
      } else {
        await apiHandleCart({ add: true, book: isbn, token: token!, quantity })
        refetchCart()
        setIsOnCart(true)
        toast.success('Livro adicionado ao carrinho')
      }
    } catch (error) {
      return
    }
  }

  const onHandleFavorite = async () => {
    if (!user) return

    try {
      if (isBookmarked) {
        await removeBookToFavorites(isbn, token!)
        refetchCart()

        setIsBookmarked(false)
        return
      }

      await addBookToFavorites(isbn, token!)
      refetchCart()
      setIsBookmarked(true)
    } catch (error) {
      return
    }
  }

  useEffect(() => {
    if (address) {
      onHandlePurchase()
    }
  }, [address, onHandlePurchase])

  return (
    <QueryClientProvider client={queryClient}>
      <div id="purchase" className={'flex w-full max-w-md flex-col gap-4 rounded-lg bg-pureWhite p-5 lg:p-10'}>
        <Dialog.Root open={open}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" onClick={() => setOpen(false)} />
            <CartAddressForm buy={true} setOpen={setOpen} />
          </Dialog.Portal>
        </Dialog.Root>
        <header className="flex items-center justify-between border-b-2 border-dark pb-2">
          <span className="text-xl font-bold">{title}</span>
          <div className="shrink-0 p-2">
            <Bookmark size={24} className={(isBookmarked && 'fill-dark') || ''} onClick={onHandleFavorite} />
          </div>
        </header>
        {stock > 0 ? (
          <>
            <div>
              <p>Estoque: {stock}</p>
            </div>
            <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
              <div className="flex gap-2">
                {discountPrice && <CurrencyText value={price} className="text-base text-subText line-through" />}
                <CurrencyText value={discountPrice ? discountPrice : price} className="text-2xl font-bold" />
              </div>
              <div>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
              </div>
            </div>
            {quantity > 1 && (
              <p className="text-base font-bold">
                Total: <CurrencyText value={discountPrice ? discountPrice * quantity : price * quantity} className="text-base font-bold" />
              </p>
            )}
            <div className="flex flex-col gap-2">
              <Button.Root
                // styleType={isOnCart ? 'danger' : 'filled'}
                onClick={onHandleCart}
                data-isoncart={isOnCart}
                className="data-[isoncart=true]:bg-danger"
              >
                <Button.Text>{isOnCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'}</Button.Text>
              </Button.Root>
              <Button.Root onClick={() => setOpen(true)}>
                <Button.Text>Comprar agora</Button.Text>
              </Button.Root>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <p className="text-base font-bold text-danger">Sem estoque</p>
          </div>
        )}
      </div>
    </QueryClientProvider>
  )
}

export default DetailsPriceCard
