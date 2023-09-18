'use client'

import Button from '@/components/atoms/Button'
import { Form } from '@/components/atoms/Form'
import useWindowSize from '@/utils/hooks/useWindowSize'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ReactElement } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ISignInScheme, SignInScheme } from './types'

const SignIn: React.FC = (): ReactElement => {
  const { width } = useWindowSize()
  const router = useRouter()

  const formMethods = useForm<ISignInScheme>({
    resolver: zodResolver(SignInScheme),
  })

  const onHandleSubmit = (data: ISignInScheme) => {
    console.log(data)
  }

  return (
    <div className={'flex flex-col items-center gap-6 text-white lg:text-dark'}>
      <h1 className="mb-6 text-2xl font-bold uppercase">Login</h1>
      <p className="text-center text-sm">
        Para fazer login, insira seu email e senha cadastrados.
      </p>
      <FormProvider {...formMethods}>
        <form
          className="flex w-full flex-col gap-2"
          onSubmit={formMethods.handleSubmit(onHandleSubmit)}
        >
          <Form.Input
            label="E-mail"
            name="email"
            id="email"
            placeholder="E-mail"
            labelDark={width >= 1024}
            errorMessage={formMethods.formState.errors.email?.message}
          />
          <Form.Input
            label="Senha"
            name="password"
            placeholder="Senha"
            id="password"
            password
            labelDark={width >= 1024}
            errorMessage={formMethods.formState.errors.password?.message}
          />
          <div className="flex justify-between text-xs">
            <Link href="/auth/sign-up">Cadastre-se</Link>
            <Link href="/auth/sign-up">Esqueceu sua senha?</Link>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-4">
            <Button type="submit">Continuar</Button>
            <Button
              styleType={width >= 1024 ? 'outlinedBrown' : 'outlinedWhite'}
              onClick={() => router.push('/')}
              type="button"
            >
              Voltar
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default SignIn
