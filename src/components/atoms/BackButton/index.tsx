'use client'

import React, { ReactElement } from 'react'
import { CaretLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

const BackButton: React.FC = (): ReactElement => {
  const router = useRouter()
  return (
    <button
      className="brownButton flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-white"
      onClick={() => router.back()}
    >
      <CaretLeft className="text-lg" />
      Voltar
    </button>
  )
}

export default BackButton
