'use client'

import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import useWindowSize from '@/utils/hooks/useWindowSize'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ReactElement } from 'react'

const SignIn: React.FC = (): ReactElement => {
  const { width } = useWindowSize()
  const router = useRouter()

  return (
    <div className={'flex flex-col items-center gap-6 text-white lg:text-dark'}>
      <h1 className="mb-6 text-2xl font-bold uppercase">Login</h1>
      <p className="text-center text-sm">
        Para fazer login, insira seu email e senha cadastrados.
      </p>
      <form className="flex w-full flex-col gap-2">
        <Input label="E-mail" placeholder="E-mail" labelDark={width >= 1024} />
        <Input
          label="Senha"
          placeholder="Senha"
          password
          labelDark={width >= 1024}
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
    </div>
  )
}

export default SignIn
