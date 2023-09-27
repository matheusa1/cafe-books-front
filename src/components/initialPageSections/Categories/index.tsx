import Title from '@/components/atoms/Title'
import CategoriesSwiper from '@/components/organism/CategoriesSwiper'

import { getCategories } from '@/services/api'

const getCategoriesData = async () => {
  try {
    const response = await getCategories()
    return response
  } catch (error) {
    return undefined
  }
}

export const revalidate = 60 * 60 * 24

const Categories: React.FC = async () => {
  const categories = await getCategoriesData()
  return (
    <div className={'mt-20'}>
      <Title
        topText={'CATEGORIAS'}
        boldText={'Nossa estante'}
        text={'de livros'}
      />
      <CategoriesSwiper categories={categories} />
    </div>
  )
}

export default Categories
