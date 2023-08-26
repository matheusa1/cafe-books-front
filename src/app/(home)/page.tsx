import React, { ReactElement } from 'react'

const Home: React.FC = (): ReactElement => {
  return (
    <div className={''}>
      <div className="h-screen bg-red-500" />
      <div className="h-screen bg-blue-500" />
      <div className="h-screen bg-green-500" />
    </div>
  )
}

export default Home
