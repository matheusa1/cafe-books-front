import AuthorsItem from '@/components/molecules/AuthorsItem'
import { getAuthor } from '@/services/api'

const getAuthorsData = async () => {
  try {
    const response = await getAuthor()
    return response
  } catch (error) {
    return undefined
  }
}

export const revalidate = 60 * 60 * 24

const Authorsbar: React.FC = async () => {
  const authors = await getAuthorsData()

  return (
    <div className="flex items-center justify-center">
      <div className={'flex flex-nowrap gap-4 overflow-auto rounded-lg'}>
        {authors?.map((item, index) => <AuthorsItem key={index} title={item.name} image={item.image_url} />)}
      </div>
    </div>
  )
}

export default Authorsbar
