import { Trash, X } from '@phosphor-icons/react'
import React, { ReactElement } from 'react'
import { IDeleteItemModal } from './types'
import Button from '@/components/atoms/Button'

const DeleteItemModal: React.FC<IDeleteItemModal> = ({
  setIsOpen,
}): ReactElement => {
  const onHandleDelete = () => {
    alert('delete')
  }

  return (
    <div className={'flex max-h-screen w-screen p-5'}>
      <div className="flex w-full flex-col gap-4 rounded-lg bg-pureWhite p-5">
        <header className="flex items-center justify-between">
          <span>Apagar Item</span>
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
          <Button
            content="wFull"
            styleType="danger"
            type="button"
            onClick={onHandleDelete}
          >
            Apagar
          </Button>
          <Button
            content="wFull"
            styleType="outlinedBrown"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Cancelar
          </Button>
        </footer>
      </div>
    </div>
  )
}

export default DeleteItemModal
