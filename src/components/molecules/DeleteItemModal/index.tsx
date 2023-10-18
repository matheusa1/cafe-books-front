import { Trash, X } from '@phosphor-icons/react'
import React, { ReactElement, useState } from 'react'
import { IDeleteItemModal } from './types'
import { Button } from '@/components/atoms/Button'
import { deleteBook } from '@/services/api'
import { toast } from 'react-toastify'

const DeleteItemModal: React.FC<IDeleteItemModal> = ({
  setIsOpen,
  isbn,
  refetch,
}): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onHandleDelete = async () => {
    setIsLoading(true)
    try {
      const res = await deleteBook(isbn)
      toast.success(res.message)

      refetch()
      setIsOpen(false)
    } catch (error) {
      toast.error('Erro ao apagar item')
    }
    setIsLoading(false)
  }

  return (
    <div className={'flex max-h-screen p-5'}>
      <div className="flex w-full flex-col gap-4 rounded-lg bg-pureWhite p-5">
        <header className="flex items-center justify-between">
          <span className="text-xl font-bold">Apagar Item</span>
          <div
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-200"
          >
            <X size={20} />
          </div>
        </header>

        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="h-24 w-24 rounded-full bg-danger/50 p-4">
            <Trash className="h-full w-full text-pureWhite/50" />
          </div>
          <span>Deseja realmente apagar este item?</span>
          <span>Esta ação é irreversível!</span>
        </div>

        <footer className="flex flex-col gap-2">
          <Button.Root
            content="wFull"
            className="bg-danger hover:bg-danger/70"
            type="button"
            onClick={onHandleDelete}
            loading={isLoading}
          >
            Apagar
          </Button.Root>
          <Button.Root
            content="wFull"
            variant="outline"
            type="button"
            onClick={() => setIsOpen(false)}
            loading={isLoading}
          >
            Cancelar
          </Button.Root>
        </footer>
      </div>
    </div>
  )
}

export default DeleteItemModal
