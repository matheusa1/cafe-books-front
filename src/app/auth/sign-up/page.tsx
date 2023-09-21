'use client'

import Button from '@/components/atoms/Button'
import useWindowSize from '@/utils/hooks/useWindowSize'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { ReactElement, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form } from '@/components/atoms/Form'
import { ISignUpScheme, SignUpScheme } from './types'
import { signUp } from '@/services/api'
import { toast } from 'react-toastify'

const SignUp: React.FC = (): ReactElement => {
  const { width } = useWindowSize()
  const router = useRouter()

  const [emailError, setEmailError] = useState<string>('')

  const formMethods = useForm<ISignUpScheme>({
    resolver: zodResolver(SignUpScheme),
  })

  const onHandleSubmit = async (data: ISignUpScheme) => {
    setEmailError('')

    try {
      const res = await signUp(data)
      toast.success(res.message)

      router.push('/auth/sign-in')
      // eslint-disable-next-line
    } catch (error: any) {
      console.log(error.response.data)
      if (error.response.data.message === 'Este e-mail já está cadastrado!')
        setEmailError(error.response.data.message)
    }
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
            name="name"
            id="name"
            placeholder="Nome"
            labelDark={width >= 1024}
            errorMessage={formMethods.formState.errors.name?.message}
            bgWhite
          />
          <Form.Input
            bgWhite
            label="E-mail"
            name="email"
            id="email"
            placeholder="E-mail"
            labelDark={width >= 1024}
            errorMessage={
              emailError || formMethods.formState.errors.email?.message
            }
          />
          <Form.Input
            label="Senha"
            name="password"
            id="password"
            placeholder="Senha"
            password
            bgWhite
            labelDark={width >= 1024}
            errorMessage={formMethods.formState.errors.password?.message}
          />
          <Form.Input
            bgWhite
            label="Confirmar Senha"
            name="confirmPassword"
            id="confirmPassword"
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
