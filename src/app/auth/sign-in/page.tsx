'use client'

import { Button } from '@/components/atoms/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ReactElement, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ISignInScheme, SignInScheme } from './types'
import { Form } from '@/components/atoms/Form'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartInfoContext'

const SignIn: React.FC = (): ReactElement => {
  const router = useRouter()
  const { signIn } = useAuth()
  const { cartInfo } = useCart()
  const [loading, setLoading] = useState<boolean>(false)

  const formMethods = useForm<ISignInScheme>({
    resolver: zodResolver(SignInScheme),
  })

  const onHandleSubmit = async (data: ISignInScheme) => {
    setLoading(true)
    const cart = cartInfo?.cart
    console.log({ cart })

    const res = await signIn(data.email, data.password)
    setLoading(false)

    if (!res) {
      formMethods.setError('email', {
        type: 'manual',
        message: 'Email ou senha incorretos',
      })
      formMethods.setError('password', {
        type: 'manual',
        message: 'Email ou senha incorretos',
      })
    }

    if (res) {
      if (cart) {
        router.push('/cart')
      } else router.push('/')
    }
  }

  return (
    <div className={'flex flex-col items-center gap-6 text-white lg:text-dark'}>
      <h1 className="mb-6 text-2xl font-bold uppercase">Login</h1>
      <p className="text-center text-sm">Para fazer login, insira seu email e senha cadastrados.</p>
      <FormProvider {...formMethods}>
        <form className="flex w-full flex-col gap-2" onSubmit={formMethods.handleSubmit(onHandleSubmit)}>
          <Form.Input.Root>
            <Form.Input.Label htmlFor="email" required className="text-pureWhite lg:text-dark">
              E-mail
            </Form.Input.Label>
            <Form.Input.Input
              id="email"
              name="email"
              placeholder="E-mail"
              error={!!formMethods.formState.errors.email?.message}
              className="border-2 border-brownPrimary bg-pureWhite/30 text-pureWhite lg:text-dark"
            />
            <Form.Input.Feedback type="error">{formMethods.formState.errors.email?.message}</Form.Input.Feedback>
          </Form.Input.Root>

          <Form.Input.Root>
            <Form.Input.Label htmlFor="password" required className="text-pureWhite lg:text-dark">
              Senha
            </Form.Input.Label>
            <Form.Input.Input
              id="password"
              name="password"
              placeholder="Senha"
              error={!!formMethods.formState.errors.password?.message}
              className="border-2 border-brownPrimary bg-pureWhite/30 text-pureWhite lg:text-dark"
              variant="password"
            />
            <Form.Input.Feedback type="error">{formMethods.formState.errors.password?.message}</Form.Input.Feedback>
          </Form.Input.Root>
          <div className="flex justify-between text-xs">
            <Link href="/auth/sign-up">Cadastre-se</Link>
            <Link href="/auth/sign-up">Esqueceu sua senha?</Link>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-4">
            <Button.Root type="submit" loading={loading}>
              <Button.Text>Continuar</Button.Text>
            </Button.Root>
            <Button.Root
              variant={'outline'}
              loading={loading}
              onClick={() => router.back()}
              type="button"
              className="border-pureWhite text-pureWhite hover:bg-pureWhite hover:text-brownPrimary lg:border-brownPrimary lg:text-brownPrimary lg:hover:bg-brownPrimary lg:hover:text-pureWhite"
            >
              <Button.Text className="">Voltar</Button.Text>
            </Button.Root>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default SignIn
