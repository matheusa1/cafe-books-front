'use client'

import React, { ReactElement } from 'react'
import Button from '../Button'
import { CaretLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

const BackButton: React.FC<{ id: string }> = ({ id }): ReactElement => {
  const router = useRouter()
  return (
    <Button id={id} content="icon" onClick={() => router.back()}>
      <CaretLeft size={24} color="white" />
    </Button>
  )
}

export default BackButton
