'use client'
import { Input } from '@/components/atoms/Input'
import { Dropzone, FileCard } from '@files-ui/react'
import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { apiGetHotBooks, apiHotBooks, apiRemoveHotBooks, getBooks, uploadImageToCloudnary } from '@/services/api'
import { Button } from '@/components/atoms/Button'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './schema'
import { Tschema } from './types'
import { Form } from '@/components/atoms/Form'
import { useAuth } from '@/context/AuthContext'
import { TBestBooksResponseTrated } from '@/types/bestBooks'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import { twMerge } from 'tailwind-merge'

const presetUpload = process.env.NEXT_PUBLIC_PRESET_UPLOAD

const Hot: React.FC = (): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [books, setBooks] = useState<{ label: string; value: string }[]>()
  const [hots, setHots] = useState<TBestBooksResponseTrated>([])
  const [isLoading, setIsLoading] = useState(false)
  const { token } = useAuth()

  const formMethods = useForm<Tschema>({
    resolver: zodResolver(schema),
  })

  const formImage = formMethods.watch('image_url')

  const onHandleSubmit = async (data: Tschema) => {
    setIsLoading(true)

    let cloudUrl = data.image_url

    try {
      if (typeof data.image_url !== 'string') {
        const res = await uploadImageToCloudnary(data.image_url[0].file, presetUpload)
        cloudUrl = res?.secure_url
      }

      if (hots.map((hot) => hot.book_details.value).includes(data.book.value)) {
        await apiRemoveHotBooks({ token: token!, book: data.book.value })
      }

      await apiHotBooks({
        bestBook: {
          ...data,
          image_url: cloudUrl,
          book: data.book.value,
        },
        token: token!,
      })

      toast.success('Destaques atualizados com sucesso')
      setIsLoading(false)
    } catch (error) {
      toast.error('Erro ao atualizar destaques')
      setIsLoading(false)
    }
  }

  const getData = useCallback(async () => {
    try {
      const books = await getBooks()
      const hots = await apiGetHotBooks()
      const tratedHots = hots.map((hot) => ({ ...hot, book_details: { label: hot.book_details.title, value: hot.book_details.isbn } }))
      const tratedBooks = books.map((book) => ({ label: book.title, value: book.isbn }))

      if (tratedHots.length !== 0) {
        setHots(tratedHots)
        formMethods.setValue('call', tratedHots[0].call)
        formMethods.setValue('subtext', tratedHots[0].subtext)
        formMethods.setValue('book', tratedHots[0].book_details)
        formMethods.setValue('image_url', tratedHots[0].image_url)
      }

      setBooks(tratedBooks)
    } catch (error) {
      return []
    }
  }, [formMethods])

  useEffect(() => {
    getData()
  }, [getData])

  useEffect(() => {
    if (hots.length >= activeIndex + 1) {
      formMethods.setValue('call', hots[activeIndex].call)
      formMethods.setValue('subtext', hots[activeIndex].subtext)
      formMethods.setValue('book', hots[activeIndex].book_details)
      formMethods.setValue('image_url', hots[activeIndex].image_url)
    } else {
      formMethods.setValue('call', '')
      formMethods.setValue('subtext', '')
      //eslint-disable-next-line
      // @ts-ignore
      formMethods.setValue('book', null)
      formMethods.setValue('image_url', null)
    }
  }, [activeIndex, formMethods, hots])

  return (
    <FormProvider {...formMethods}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex justify-center ">
        <div className={'flex w-full max-w-xl flex-col gap-3'}>
          <h1>Editar destaques</h1>
          <div className="flex w-full justify-between">
            <div
              onClick={() => setActiveIndex(0)}
              className={twMerge(
                'flex cursor-pointer aspect-square w-16 items-center justify-center rounded border-2 border-dark text-2xl hover:bg-slate-100 transition-all',
                hots[0] && 'border-green-500 text-green-500 hover:bg-green-100',
                activeIndex === 0 && 'bg-green-500 text-white hover:bg-green-500 border-green-500',
              )}
            >
              1
            </div>
            <div
              onClick={() => setActiveIndex(1)}
              className={twMerge(
                'flex cursor-pointer aspect-square w-16 items-center justify-center rounded border-2 border-dark text-2xl hover:bg-slate-100 transition-all',
                hots[1] && 'border-green-500 text-green-500 hover:bg-green-100',
                activeIndex === 1 && 'bg-green-500 text-white hover:bg-green-500 border-green-500',
              )}
            >
              2
            </div>
            <div
              onClick={() => setActiveIndex(2)}
              className={twMerge(
                'flex cursor-pointer aspect-square w-16 items-center justify-center rounded border-2 border-dark text-2xl hover:bg-slate-100 transition-all',
                hots[2] && 'border-green-500 text-green-500 hover:bg-green-100',
                activeIndex === 2 && 'bg-green-500 text-white hover:bg-green-500 border-green-500',
              )}
            >
              3
            </div>
            <div
              onClick={() => setActiveIndex(3)}
              className={twMerge(
                'flex cursor-pointer aspect-square w-16 items-center justify-center rounded border-2 border-dark text-2xl hover:bg-slate-100 transition-all',
                hots[3] && 'border-green-500 text-green-500 hover:bg-green-100',
                activeIndex === 3 && 'bg-green-500 text-white hover:bg-green-500 border-green-500',
              )}
            >
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
                {typeof formImage === 'string' ? (
                  <Image src={formImage} alt="book image" className="w-20" width={40} height={40} />
                ) : (
                  <FileCard {...formImage?.[0]} onDelete={() => formMethods.setValue('image_url', null)} info preview />
                )}
              </Dropzone>
              <Form.Input.Feedback>
                {(typeof formMethods?.formState?.errors?.image_url?.message === 'string' && formMethods?.formState?.errors?.image_url?.message) || ''}
              </Form.Input.Feedback>
            </div>
            <footer className="flex justify-end gap-4">
              <Button.Root loading={isLoading}>
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
