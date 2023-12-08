'use client'

import { FC, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ChangeUserDataSchema, TChangeUserDataSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/atoms/Form'
import { Button } from '@/components/atoms/Button'
import * as Dialog from '@radix-ui/react-dialog'
import { CartAddressForm } from '@/components/molecules/CartAddressForm'
import { useCart } from '@/context/CartInfoContext'
import { useAuth } from '@/context/AuthContext'

const UserInfo: FC = () => {
  const [open, setOpen] = useState(false)
  const { cartInfo } = useCart()

  const { user } = useAuth()

  const formMethods = useForm<TChangeUserDataSchema>({
    resolver: zodResolver(ChangeUserDataSchema),
  })

  const onHandleSubmit = (data: TChangeUserDataSchema) => {
    console.log({ data })
    console.log(cartInfo?.address)
    // let endereco

    if (cartInfo?.address) {
      // endereco = `${cartInfo?.address?.street}|${cartInfo?.address?.number}|${cartInfo?.address?.complement}|${cartInfo?.address?.cep}|${cartInfo?.address?.neighborhood}|${cartInfo?.address?.city}|${cartInfo?.address?.state}`
    }
  }

  useEffect(() => {
    if (user) {
      formMethods.reset({
        name: user.name,
        phone: user.phone,
      })
    }
  })

  return (
    <FormProvider {...formMethods}>
      <div className={'flex w-full justify-center'}>
        <Dialog.Root open={open}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" onClick={() => setOpen(false)} />
            <CartAddressForm setOpen={setOpen} />
          </Dialog.Portal>
        </Dialog.Root>
        <form className="flex w-full max-w-lg flex-col gap-5" onSubmit={formMethods.handleSubmit(onHandleSubmit)}>
          <Form.Input.Root>
            <Form.Input.Label htmlFor="name">Nome</Form.Input.Label>
            <Form.Input.Input className="border border-dark focus:border-brownPrimary" name={'name'} id="name" />
            <Form.Input.Feedback>{formMethods.formState.errors.name?.message}</Form.Input.Feedback>
          </Form.Input.Root>
          <Form.Input.Root>
            <Form.Input.Label htmlFor="phone">Telefone</Form.Input.Label>
            <Form.Input.Input name={'phone'} id="phone" className="border border-dark focus:border-brownPrimary" />
            <Form.Input.Feedback>{formMethods.formState.errors.phone?.message}</Form.Input.Feedback>
          </Form.Input.Root>
          <Button.Root type="button" className="w-full" onClick={() => setOpen(true)}>
            <Button.Text>Mudar Endereço</Button.Text>
          </Button.Root>

          <Button.Root type="submit" className="w-full bg-emerald-500">
            <Button.Text>Salvar</Button.Text>
          </Button.Root>
        </form>
      </div>
    </FormProvider>
  )
}

export default UserInfo
