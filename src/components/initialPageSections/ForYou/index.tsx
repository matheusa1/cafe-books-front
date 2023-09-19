import SecondaryTitle from '@/components/atoms/SecondaryTitle'
import Title from '@/components/atoms/Title'
import ForYouCard from '@/components/organism/ForYouCard'
import { ReactElement } from 'react'

const ForYou: React.FC = (): ReactElement => {
  return (
    <div className="flex w-full flex-col items-center gap-4 bg-smokyGray py-16 text-smokyGrayText">
      <div className="flex flex-col items-center gap-11" id="card">
        <Title
          topText={'ESPECIAIS'}
          boldText={'Separamos'}
          text={'para você'}
        />
        <SecondaryTitle
          mainTitle={'Box Sherlock Holmes'}
          smallTitle={'Arthur Conan Doyle'}
        />
        <div className="flex w-screen justify-center px-5">
          <ForYouCard />
        </div>
      </div>
    </div>
  )
}

export default ForYou
