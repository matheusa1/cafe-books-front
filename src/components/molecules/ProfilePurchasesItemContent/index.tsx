import Badge from '@/components/atoms/Badge'
import { Button } from '@/components/atoms/Button'
import { ProfilePurchasesItemContentItem } from '@/components/atoms/ProfilePurchasesItemContentItem'
import { Eye } from 'lucide-react'
import { FC } from 'react'

export const ProfilePurchasesItemContent: FC = () => {
  return (
    <div
      className={'my-5 flex w-full flex-col gap-5 p-2 md:grid md:grid-cols-6'}
    >
      <main className="flex flex-col gap-2 md:col-span-4">
        <ProfilePurchasesItemContentItem />
      </main>
      <div className="self-center md:hidden">
        <Badge color="success">Entregue</Badge>
      </div>
      <footer className="flex flex-col items-center justify-center md:col-span-2">
        <Button.Root className="border-2 border-brownPrimary bg-transparent text-brownPrimary hover:bg-brownPrimary hover:text-pureWhite">
          <Button.Icon icon={Eye} />
          <Button.Text className="text-current">
            Ver detalhes do pedido
          </Button.Text>
        </Button.Root>
        {/* <Button.Root className="border-2 border-brownPrimary bg-transparent text-brownPrimary hover:bg-brownPrimary hover:text-pureWhite">
          <Button.Icon icon={RedoDot} />
          <Button.Text className="text-current">Pedir novamente</Button.Text>
        </Button.Root>
        <Button.Root className="border-2 border-brownPrimary bg-transparent text-brownPrimary hover:bg-brownPrimary hover:text-pureWhite">
          <Button.Icon icon={XCircle} />
          <Button.Text className="text-current">Cancelar pedido</Button.Text>
        </Button.Root> */}
      </footer>
    </div>
  )
}
