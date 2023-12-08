'use client'

import { Button } from '@/components/atoms/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { ReactElement, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ISignUpScheme, SignUpScheme } from './types'
import { signUp } from '@/services/api'
import { toast } from 'react-toastify'
import { Form } from '@/components/atoms/Form'

const SignUp: React.FC = (): ReactElement => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const formMethods = useForm<ISignUpScheme>({
    resolver: zodResolver(SignUpScheme),
  })

  const onHandleSubmit = async (data: ISignUpScheme) => {
    try {
      setLoading(true)
      const res = await signUp(data)
      setLoading(false)
      toast.success(res.message)
      router.push('/auth/sign-in')
      // eslint-disable-next-line
    } catch (error: any) {
      if (error.response.data.message === 'Este e-mail já está cadastrado!') {
        // setEmailError(error.response.data.message)
        formMethods.setError('email', {
          type: 'manual',
          message: error.response.data.message,
        })
      }
    }
  }

  return (
    <div className={'flex flex-col items-center gap-6 text-white lg:text-dark'}>
      <h1 className="mb-6 text-2xl font-bold uppercase">CADASTRO</h1>
      <p className="text-center text-sm">Para se cadastrar, insira seu nome e o email e senha desejados.</p>
      <FormProvider {...formMethods}>
        <form className="flex w-full flex-col gap-2" onSubmit={formMethods.handleSubmit(onHandleSubmit)}>
          <Form.Input.Root>
            <Form.Input.Label htmlFor="name" required className="text-pureWhite lg:text-dark">
              Nome
            </Form.Input.Label>
            <Form.Input.Input
              id="name"
              name="name"
              placeholder="Nome"
              error={!!formMethods.formState.errors.name?.message}
              className="border-2 border-brownPrimary bg-pureWhite/30 text-pureWhite lg:text-dark"
            />
            <Form.Input.Feedback type="error">{formMethods.formState.errors.name?.message}</Form.Input.Feedback>
          </Form.Input.Root>
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
              type="password"
              error={!!formMethods.formState.errors.password?.message}
              className="border-2 border-brownPrimary bg-pureWhite/30 text-pureWhite lg:text-dark"
              variant="password"
            />
            <Form.Input.Feedback type="error">{formMethods.formState.errors.password?.message}</Form.Input.Feedback>
          </Form.Input.Root>
          <Form.Input.Root>
            <Form.Input.Label htmlFor="confirmPassword" required className="text-pureWhite lg:text-dark">
              Confirmar Senha
            </Form.Input.Label>
            <Form.Input.Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmar Senha"
              type="password"
              error={!!formMethods.formState.errors.confirmPassword?.message}
              className="border-2 border-brownPrimary bg-pureWhite/30 text-pureWhite lg:text-dark"
              variant="password"
            />
            <Form.Input.Feedback type="error">{formMethods.formState.errors.confirmPassword?.message}</Form.Input.Feedback>
          </Form.Input.Root>
          <div className="mt-10 flex flex-col justify-between gap-4">
            <Button.Root type="submit" loading={loading}>
              <Button.Text>Continuar</Button.Text>
            </Button.Root>
            <Button.Root
              loading={loading}
              variant={'outline'}
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
export default SignUp
