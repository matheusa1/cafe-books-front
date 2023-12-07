import SecondaryTitle from '@/components/atoms/SecondaryTitle'
import Title from '@/components/atoms/Title'
import ForYouCard from '@/components/organism/ForYouCard'
import { apiGetMostDiscount } from '@/services/api'
import { ReactElement } from 'react'

const getMostDiscount = async () => {
  try {
    const response = await apiGetMostDiscount()

    return response
  } catch (error) {
    return undefined
  }
}

export const revalidate = 60 * 60 * 24

const ForYou: React.FC = async (): Promise<ReactElement> => {
  const mostDiscount = await getMostDiscount()

  return (
    <div className="flex w-full flex-col items-center gap-4 bg-smokyGray py-16 text-smokyGrayText">
      <div className="flex flex-col items-center gap-11" id="card">
        <Title topText={'ESPECIAIS'} boldText={'Separamos'} text={'para você'} />
        <SecondaryTitle
          mainTitle={mostDiscount ? mostDiscount[0].book.title : 'Box Sherlock Holmes'}
          smallTitle={mostDiscount ? mostDiscount[0].book.author[0] : 'Arthur Conan Doyle'}
        />
        <div className="flex w-screen justify-center px-5">
          <ForYouCard book={mostDiscount![0].book} />
        </div>
      </div>
    </div>
  )
}

export default ForYou
