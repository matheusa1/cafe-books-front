'use client'

import { Button } from '@/components/atoms/Button'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import React, { ReactElement } from 'react'

const Profile: React.FC = (): ReactElement => {
  const { signOut } = useAuth()
  const router = useRouter()

  return (
    <div className={'mt-40'}>
      <Button.Root
        onClick={() => {
          signOut()
          router.push('/')
        }}
      >
        <Button.Text>Sair</Button.Text>
      </Button.Root>
    </div>
  )
}

export default Profile
