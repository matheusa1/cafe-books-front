'use client'
import { Input } from '@/components/atoms/Input'
import { Dropzone } from '@files-ui/react'
import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { getBooks } from '@/services/api'
import { Button } from '@/components/atoms/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './schema'
import { Tschema } from './types'
import { Form } from '@/components/atoms/Form'

const Hot: React.FC = (): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [books, setBooks] = useState<{ label: string; value: string }[]>()

  const formMethods = useForm<Tschema>({
    resolver: zodResolver(schema),
  })

  const getData = useCallback(async () => {
    try {
      const books = await getBooks()
      const tratedBooks = books.map((book) => ({ label: book.title, value: book.isbn }))
      setBooks(tratedBooks)
    } catch (error) {
      return []
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div className="flex justify-center ">
      <div className={'flex w-full max-w-xl flex-col gap-3'}>
        <h1>Editar destaques</h1>
        <div className="flex w-full justify-between">
          <div onClick={() => setActiveIndex(0)} className="flex aspect-square w-16 items-center justify-center rounded border border-dark text-2xl">
            1
          </div>
          <div onClick={() => setActiveIndex(1)} className="flex aspect-square w-16 items-center justify-center rounded border border-dark text-2xl">
            2
          </div>
          <div onClick={() => setActiveIndex(2)} className="flex aspect-square w-16 items-center justify-center rounded border border-dark text-2xl">
            3
          </div>
          <div onClick={() => setActiveIndex(3)} className="flex aspect-square w-16 items-center justify-center rounded border border-dark text-2xl">
            4
          </div>
        </div>
        <Form.Select.Root>
          <Form.Select.Label>Selecione o livro</Form.Select.Label>
          <Form.Select.Select name="book" placeholder="Selecione" isClearable options={books} />
          <Form.Select.Feedback>a</Form.Select.Feedback>
        </Form.Select.Root>
        <Form.Input.Root>
          <Form.Input.Label>Texto principal</Form.Input.Label>
          <Form.Input.Input name="mainText" className="border border-dark focus:border-brownPrimary" />
          <Form.Input.Feedback>a</Form.Input.Feedback>
        </Form.Input.Root>
        <Form.TextArea.Root>
          <Form.TextArea.Label>Texto secundário</Form.TextArea.Label>
          <Form.TextArea.TextArea name="subText" className="border border-dark focus:border-brownPrimary" />
          <Form.TextArea.Feedback>a</Form.TextArea.Feedback>
        </Form.TextArea.Root>
        <div className="col-span-1 flex flex-col gap-2 md:col-span-2">
          <Input.Label>Imagem</Input.Label>
          <Dropzone
            onChange={(e) => {
              console.log(e)
            }}
            label="Arraste e solte a imagem aqui"
            header={false}
            footer={false}
            multiple={false}
          ></Dropzone>

          <Input.Feedback>a</Input.Feedback>
        </div>
        <footer className="flex justify-end gap-4">
          <Button.Root>
            <Button.Text>Salvar</Button.Text>
          </Button.Root>
        </footer>
      </div>
    </div>
  )
}

export default Hot
