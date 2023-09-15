import SecondaryTitle from '@/components/atoms/SecondaryTitle'
import Title from '@/components/atoms/Title'
import { ReactElement } from 'react'

const ForYou: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col items-center gap-4 bg-smokyGray pt-16 text-smokyGrayText">
      <div className="flex flex-col gap-11">
        <Title
          topText={'ESPECIAIS'}
          boldText={'Separamos'}
          text={'para você'}
        ></Title>
        <SecondaryTitle
          mainTitle={'Box Sherlock Holmes'}
          smallTitle={'Arthur Conan Doyle'}
        ></SecondaryTitle>
      </div>
      <div className="flex w-[90%] justify-center rounded-md bg-white p-11">
        <p>foto</p>
      </div>
    </div>
  )
}

export default ForYou
