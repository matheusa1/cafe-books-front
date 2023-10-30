import Categories from '@/components/initialPageSections/Categories'
import ForYou from '@/components/initialPageSections/ForYou'
import StartCarousel from '@/components/initialPageSections/StartCarousel'
import Authors from '@/components/initialPageSections/Authors'
import React, { ReactElement } from 'react'
import HeadboardItems from '@/components/initialPageSections/HeadboardItems'
import { ToastContainer } from 'react-toastify'

const Home: React.FC = (): ReactElement => {
  return (
    <div className={''}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <StartCarousel />
      <Categories />
      <HeadboardItems />
      <ForYou />
      <Authors />
    </div>
  )
}

export default Home
