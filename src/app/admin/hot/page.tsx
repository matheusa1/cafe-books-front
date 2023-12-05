'use client'
import { Input } from '@/components/atoms/Input'
import { Dropzone, FileCard } from '@files-ui/react'
import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { apiHotBooks, getBooks, uploadImageToCloudnary } from '@/services/api'
import { Button } from '@/components/atoms/Button'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './schema'
import { Tschema } from './types'
import { Form } from '@/components/atoms/Form'
import { useAuth } from '@/context/AuthContext'

const presetUpload = process.env.NEXT_PUBLIC_PRESET_UPLOAD

const Hot: React.FC = (): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [books, setBooks] = useState<{ label: string; value: string }[]>()
  const { token } = useAuth()

  const formMethods = useForm<Tschema>({
    resolver: zodResolver(schema),
  })

  const formImage = formMethods.watch('image_url')

  console.log(formMethods.formState.errors)

  const onHandleSubmit = async (data: Tschema) => {
    try {
      const cloudUrl = await uploadImageToCloudnary(data.image_url[0].file, presetUpload)

      const res = await apiHotBooks({
        bestBook: {
          ...data,
          image_url: cloudUrl?.secure_url,
          book: data.book.value,
        },
        token: token!,
      })

      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

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

  useEffect(() => {
    formMethods.setValue('call', '')
    formMethods.setValue('subtext', '')
    //eslint-disable-next-line
    // @ts-ignore
    formMethods.setValue('book', null)
    formMethods.setValue('image_url', null)
  }, [activeIndex, formMethods])

  return (
    <FormProvider {...formMethods}>
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
          <form onSubmit={formMethods.handleSubmit(onHandleSubmit)}>
            <Form.Select.Root>
              <Form.Select.Label>Selecione o livro</Form.Select.Label>
              <Form.Select.Select name="book" placeholder="Selecione" isClearable options={books} />
              <Form.Select.Feedback>{formMethods?.formState?.errors?.book?.message}</Form.Select.Feedback>
            </Form.Select.Root>
            <Form.Input.Root>
              <Form.Input.Label>Texto principal</Form.Input.Label>
              <Form.Input.Input name="call" className="border border-dark focus:border-brownPrimary" />
              <Form.Input.Feedback>{formMethods?.formState?.errors?.call?.message}</Form.Input.Feedback>
            </Form.Input.Root>
            <Form.TextArea.Root>
              <Form.TextArea.Label>Texto secundário</Form.TextArea.Label>
              <Form.TextArea.TextArea name="subtext" className="border border-dark focus:border-brownPrimary" />
              <Form.TextArea.Feedback>{formMethods?.formState?.errors?.subtext?.message}</Form.TextArea.Feedback>
            </Form.TextArea.Root>
            <div className="col-span-1 flex flex-col gap-2 md:col-span-2">
              <Input.Label>Imagem</Input.Label>
              <Dropzone
                onChange={(e) => {
                  formMethods.setValue('image_url', e)
                }}
                label="Arraste e solte a imagem aqui"
                header={false}
                footer={false}
                multiple={false}
              >
                <FileCard {...formImage?.[0]} onDelete={() => formMethods.setValue('image_url', null)} info preview />
              </Dropzone>
              <Form.Input.Feedback>
                {(typeof formMethods?.formState?.errors?.image_url?.message === 'string' && formMethods?.formState?.errors?.image_url?.message) || ''}
              </Form.Input.Feedback>
            </div>
            <footer className="flex justify-end gap-4">
              <Button.Root>
                <Button.Text>Salvar</Button.Text>
              </Button.Root>
            </footer>
          </form>
        </div>
      </div>
    </FormProvider>
  )
}

export default Hot
