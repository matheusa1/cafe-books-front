import { X } from '@phosphor-icons/react'
import React, { ReactElement, useEffect, useState } from 'react'
import {
  AdminCreateOutput,
  AdminCreateSchema,
  IAdminBooksCreateUpdateBooks,
} from './types'
import Button from '@/components/atoms/Button'
import { Form } from '@/components/atoms/Form'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { createBook, updateBook, uploadImageToCloudnary } from '@/services/api'

import { Dropzone, FileCard } from '@files-ui/react'
import Image from 'next/image'

const presetUpload = process.env.NEXT_PUBLIC_PRESET_UPLOAD

const AdminBooksCreateUpdateBooks: React.FC<IAdminBooksCreateUpdateBooks> = ({
  setModalOpen,
  data,
  categoriesList,
  refetch,
}): ReactElement => {
  const FormMethods = useForm<AdminCreateOutput>({
    resolver: zodResolver(AdminCreateSchema),
  })

  FormMethods.watch('image')

  const [IsbnMessage, setIsbnMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onHandleSubmit = async (formData: AdminCreateOutput) => {
    setIsLoading(true)
    try {
      let image

      if (typeof formData.image !== 'string') {
        const res = await uploadImageToCloudnary(
          formData.image[0].file,
          presetUpload,
        )

        image = res?.secure_url
      } else {
        image = formData.image
      }

      if (data) {
        await updateBook({
          ...formData,
          image: image,
          promotional_price: Number(formData?.promotional_price),
          price: Number(formData.price),
          stock: Number(formData.stock),
          pages: Number(formData.pages),
          year: Number(formData.year),
        })
        refetch()
        setModalOpen(false)
        toast.success('Livro atualizado com sucesso!')
        setIsLoading(false)

        return
      }

      await createBook({
        ...formData,
        image: image,
        promotional_price:
          formData?.promotional_price === null
            ? null
            : Number(formData.promotional_price),
        price: Number(formData.price),
        stock: Number(formData.stock),
        pages: Number(formData.pages),
        year: Number(formData.year),
      })
      refetch()
      setModalOpen(false)

      setIsLoading(false)

      toast.success('Livro criado com sucesso!')
      // eslint-disable-next-line
    } catch (error: any) {
      if (error?.response?.data?.type === 'isbn') {
        setIsbnMessage(error?.response?.data?.message)
      } else {
        toast.error('Erro ao criar livro')
      }
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (data) {
      FormMethods?.reset({
        isbn: data.isbn,
        title: data.title,
        description: data.description,
        category: data.category,
        author: data.author,
        publisher: data.publisher,
        language: data.language,
        country: data.country,
        image: data.image,
        year: String(data.year),
        pages: String(data.pages),
        price: String(data.price),
        promotional_price: String(data.promotional_price),
        stock: String(data.stock),
      })
    }
  }, [data, FormMethods])

  return (
    <div className="flex max-h-screen p-5">
      <FormProvider {...FormMethods}>
        <form
          onSubmit={FormMethods.handleSubmit(onHandleSubmit)}
          className={
            'flex max-h-full w-full max-w-3xl flex-col gap-5 overflow-auto rounded-lg bg-pureWhite p-5'
          }
        >
          <header className="flex items-center justify-between">
            <span className="text-xl font-bold">
              {data ? 'Editar Livro' : 'Criar Livro'}
            </span>
            <div
              onClick={() => setModalOpen(false)}
              className="rounded-lg p-2 hover:bg-gray-200"
            >
              <X size={20} />
            </div>
          </header>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-10">
            <Form.Input
              name="isbn"
              label="ISBN"
              placeholder="000-0-00-000000-0"
              labelDark
              disabled={!!data}
              id={'isbn'}
              errorMessage={
                FormMethods?.formState?.errors?.isbn?.message || IsbnMessage
              }
            />
            <Form.Input
              name="title"
              label="Titulo"
              placeholder="O dia em ..."
              labelDark
              id={'title'}
              errorMessage={FormMethods?.formState?.errors?.title?.message}
            />
            <div className="md:col-span-2">
              <Form.TextArea
                name="description"
                label="Descrição"
                placeholder="Tudo começou quando um relógio esquisito..."
                labelDark
                id={'description'}
                errorMessage={
                  FormMethods?.formState?.errors?.description?.message
                }
              />
            </div>

            <div className="col-span-1 flex flex-col gap-2 md:col-span-2">
              <span className="text-lg font-bold">Imagem</span>
              <Dropzone
                onChange={(file) => FormMethods.setValue('image', file)}
                label="Arraste e solte a imagem aqui"
                header={false}
                footer={false}
                multiple={false}
              >
                {typeof FormMethods.getValues('image') === 'string' ? (
                  <Image
                    src={data?.image}
                    alt="book image"
                    className="w-20"
                    width={40}
                    height={40}
                  />
                ) : (
                  <FileCard
                    {...FormMethods.getValues('image')?.[0]}
                    onDelete={() => FormMethods.setValue('image', null)}
                    info
                    preview
                  />
                )}
              </Dropzone>
              {typeof FormMethods?.formState?.errors?.image?.message ===
                'string' && (
                <span className="text-red-500">
                  {FormMethods?.formState?.errors?.image?.message}
                </span>
              )}
            </div>

            <Form.Select
              name="category"
              label="Categorias"
              placeholder="Categorias"
              labelDark
              id={'category'}
              errorMessage={FormMethods?.formState?.errors?.category?.message}
              options={categoriesList}
              isMulti
            />

            <Form.Input
              name="author"
              label="Autor"
              placeholder="Stan Lee, Machado de Assis, ..."
              labelDark
              id={'author'}
              errorMessage={FormMethods?.formState?.errors?.author?.message}
            />

            <Form.Input
              name="publisher"
              label="Editora"
              placeholder="Panini"
              labelDark
              id={'publisher'}
              errorMessage={FormMethods?.formState?.errors?.publisher?.message}
            />

            <Form.Input
              name="language"
              label="Idioma"
              placeholder="Português"
              labelDark
              id={'language'}
              errorMessage={FormMethods?.formState?.errors?.language?.message}
            />

            <Form.Input
              name="country"
              label="Idioma Original"
              placeholder="Inglês"
              labelDark
              id={'country'}
              errorMessage={FormMethods?.formState?.errors?.country?.message}
            />

            <Form.Input
              name="year"
              label="Ano de lançamento"
              placeholder="1929"
              labelDark
              id={'year'}
              errorMessage={FormMethods?.formState?.errors?.year?.message}
              type="number"
              min={0}
              max={new Date().getFullYear()}
            />

            <Form.Input
              name="pages"
              label="Paginas"
              placeholder="2"
              labelDark
              id={'pages'}
              errorMessage={FormMethods?.formState?.errors?.pages?.message}
              type="number"
              min={0}
            />

            <Form.Input
              name="price"
              label="Preço"
              placeholder="31.2"
              labelDark
              step="0.01"
              id={'price'}
              errorMessage={FormMethods?.formState?.errors?.price?.message}
              type="number"
              min={0}
            />
            {data && (
              <Form.Input
                name="promotional_price"
                label="Preço com desconto"
                placeholder="31.2"
                labelDark
                step="0.01"
                id={'promotional_price'}
                errorMessage={
                  FormMethods?.formState?.errors?.promotional_price?.message
                }
                type="number"
                min={0}
              />
            )}

            <Form.Input
              name="stock"
              label="Estoque"
              placeholder="5"
              labelDark
              id={'stock'}
              errorMessage={FormMethods?.formState?.errors?.stock?.message}
              type="number"
              min={0}
            />
          </div>
          <footer className="flex flex-col gap-2 md:flex-row md:gap-10">
            <Button content="wFull" type="submit" isLoading={isLoading}>
              {data ? 'Atualizar' : 'Criar'}
            </Button>
            <Button
              content="wFull"
              styleType="outlinedBrown"
              type="button"
              isLoading={isLoading}
              onClick={() => setModalOpen(false)}
            >
              Cancelar
            </Button>
          </footer>
        </form>
      </FormProvider>
    </div>
  )
}

export default AdminBooksCreateUpdateBooks
