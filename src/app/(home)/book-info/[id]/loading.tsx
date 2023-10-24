'use client'

import { FC } from 'react'
import Loading from 'react-loading'

const LoadingScreen: FC = () => {
  return (
    <div className={'flex h-screen w-screen items-center justify-center'}>
      <Loading type="bubbles" color="#000" />
    </div>
  )
}

export default LoadingScreen
