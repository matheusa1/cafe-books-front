import { ReactElement } from 'react'
import AuthorsItem from '@/components/molecules/AuthorsItem'
import { authorsData } from '@/mock/authorsData'

const Authorsbar: React.FC = (): ReactElement => {
  return (
    <div className="flex items-center justify-center">
      <div className={'flex flex-nowrap gap-4 overflow-auto rounded-lg'}>
        {authorsData.map((item, index) => (
          <AuthorsItem key={index} title={item.name} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default Authorsbar
