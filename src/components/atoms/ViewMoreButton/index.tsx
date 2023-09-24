'use client'

import React, { ReactElement } from 'react'
import Button from '../Button'
import { useRouter } from 'next/navigation'
import { ArrowCircleRight } from '@phosphor-icons/react'

const ViewMoreButton: React.FC = (): ReactElement => {
  const router = useRouter()

  return (
    <Button styleType="filledWhite" onClick={() => router.push('/explore')}>
      <div className="flex items-center gap-2 text-dark">
        Ver mais <ArrowCircleRight size={32} />
      </div>
    </Button>
  )
}

export default ViewMoreButton
