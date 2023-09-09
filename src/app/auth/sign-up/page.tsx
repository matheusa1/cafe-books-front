'use client'

import Button from '@/components/atoms/Button'
import useWindowSize from '@/utils/hooks/useWindowSize'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { ReactElement } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form } from '@/components/atoms/Form'
import { ISignUpScheme, SignUpScheme } from './types'

const SignUp: React.FC = (): ReactElement => {
  const { width } = useWindowSize()
  const router = useRouter()

  const formMethods = useForm<ISignUpScheme>({
    resolver: zodResolver(SignUpScheme),
  })

  const onHandleSubmit = (data: ISignUpScheme) => {
    console.log(data)
  }

  return (
    <div className={'flex flex-col items-center gap-6 text-white lg:text-dark'}>
      <h1 className="mb-6 text-2xl font-bold uppercase">CADASTRO</h1>
      <p className="text-center text-sm">
        Para se cadastrar, insira seu nome e o email e senha desejados.
      </p>
      <FormProvider {...formMethods}>
        <form
          className="flex w-full flex-col gap-2"
          onSubmit={formMethods.handleSubmit(onHandleSubmit)}
        >
          <Form.Input
            label="Nome"
            name="username"
            placeholder="Nome"
            labelDark={width >= 1024}
            errorMessage={formMethods.formState.errors.username?.message}
          />
          <Form.Input
            label="E-mail"
            name="email"
            placeholder="E-mail"
            labelDark={width >= 1024}
            errorMessage={formMethods.formState.errors.email?.message}
          />
          <Form.Input
            label="Senha"
            name="password"
            placeholder="Senha"
            password
            labelDark={width >= 1024}
            errorMessage={formMethods.formState.errors.password?.message}
          />
          <Form.Input
            label="Confirmar Senha"
            name="confirmPassword"
            placeholder="Confirmar Senha"
            password
            labelDark={width >= 1024}
            errorMessage={formMethods.formState.errors.confirmPassword?.message}
          />
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
export default SignUp
