'use client'

import React, { ReactElement } from 'react'
import { CaretLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { VariantProps, tv } from 'tailwind-variants'

const buttonStyle = tv({
  base: 'brownButton flex items-center justify-center gap-2 rounded-lg px-4 text-white',
  variants: {
    height: {
      hFull: 'h-full',
      hBase: 'h-10',
    },
  },
  defaultVariants: {
    height: 'hBase',
  },
})

const BackButton: React.FC<VariantProps<typeof buttonStyle>> = ({
  height,
}): ReactElement => {
  const router = useRouter()
  return (
    <button className={buttonStyle({ height })} onClick={() => router.back()}>
      <CaretLeft className="text-lg" />
      Voltar
    </button>
  )
}

export default BackButton
