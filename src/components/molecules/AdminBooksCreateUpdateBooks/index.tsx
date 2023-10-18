import { X } from '@phosphor-icons/react'
import React, { ReactElement, useEffect, useState } from 'react'
import {
  AdminCreateOutput,
  AdminCreateSchema,
  IAdminBooksCreateUpdateBooks,
} from './types'
import { Button } from '@/components/atoms/Button'
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
        FormMethods.setError('isbn', {
          type: 'manual',
          message: error?.response?.data?.message,
        })
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
            <Form.Input.Root>
              <Form.Input.Label htmlFor="isbn" required>
                ISBN
              </Form.Input.Label>
              <Form.Input.Input
                id="isbn"
                name="isbn"
                placeholder="000-0-00-000000-0"
                disabled={!!data}
                error={!!FormMethods.formState.errors.isbn?.message}
                className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
              />
              <Form.Input.Feedback type="error">
                {FormMethods.formState.errors.isbn?.message}
              </Form.Input.Feedback>
            </Form.Input.Root>
            <Form.Input.Root>
              <Form.Input.Label htmlFor="title" required>
                Titulo
              </Form.Input.Label>
              <Form.Input.Input
                id="title"
                name="title"
                placeholder="O dia em ..."
                error={!!FormMethods.formState.errors.title?.message}
                className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
              />
              <Form.Input.Feedback type="error">
                {FormMethods.formState.errors.title?.message}
              </Form.Input.Feedback>
            </Form.Input.Root>
            <div className="md:col-span-2">
              <Form.TextArea.Root>
                <Form.TextArea.Label htmlFor="description" required>
                  Descrição
                </Form.TextArea.Label>
                <Form.TextArea.TextArea
                  id="description"
                  name="description"
                  placeholder="Tudo começou quando um relógio esquisito..."
                  error={!!FormMethods.formState.errors.description?.message}
                  className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
                />
                <Form.TextArea.Feedback type="error">
                  {FormMethods.formState.errors.description?.message}
                </Form.TextArea.Feedback>
              </Form.TextArea.Root>
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

            {/* <Form.Select
              name="category"
              label="Categorias"
              placeholder="Categorias"
              labelDark
              id={'category'}
              errorMessage={FormMethods?.formState?.errors?.category?.message}
              options={categoriesList}
              isMulti
            /> */}
            <Form.Select.Root>
              <Form.Select.Label htmlFor="category" required>
                Categorias
              </Form.Select.Label>
              <Form.Select.Select
                id="category"
                name="category"
                placeholder="Categorias"
                error={!!FormMethods.formState.errors.category?.message}
                options={categoriesList}
                isMulti
                className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
              />
              <Form.Select.Feedback type="error">
                {FormMethods.formState.errors.category?.message}
              </Form.Select.Feedback>
            </Form.Select.Root>

            <Form.Input.Root>
              <Form.Input.Label htmlFor="author" required>
                Autor
              </Form.Input.Label>
              <Form.Input.Input
                id="author"
                name="author"
                placeholder="Stan Lee, Machado de Assis, ..."
                error={!!FormMethods.formState.errors.author?.message}
                className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
              />
              <Form.Input.Feedback type="error">
                {FormMethods.formState.errors.author?.message}
              </Form.Input.Feedback>
            </Form.Input.Root>

            <Form.Input.Root>
              <Form.Input.Label htmlFor="publisher" required>
                Editora
              </Form.Input.Label>
              <Form.Input.Input
                id="publisher"
                name="publisher"
                placeholder="Panini"
                error={!!FormMethods.formState.errors.publisher?.message}
                className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
              />
              <Form.Input.Feedback type="error">
                {FormMethods.formState.errors.publisher?.message}
              </Form.Input.Feedback>
            </Form.Input.Root>

            <Form.Input.Root>
              <Form.Input.Label htmlFor="language" required>
                Idioma
              </Form.Input.Label>
              <Form.Input.Input
                id="language"
                name="language"
                placeholder="Português"
                error={!!FormMethods.formState.errors.language?.message}
                className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
              />
              <Form.Input.Feedback type="error">
                {FormMethods.formState.errors.language?.message}
              </Form.Input.Feedback>
            </Form.Input.Root>

            <Form.Input.Root>
              <Form.Input.Label htmlFor="country" required>
                Idioma Original
              </Form.Input.Label>
              <Form.Input.Input
                id="country"
                name="country"
                placeholder="Inglês"
                error={!!FormMethods.formState.errors.country?.message}
                className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
              />
              <Form.Input.Feedback type="error">
                {FormMethods.formState.errors.country?.message}
              </Form.Input.Feedback>
            </Form.Input.Root>

            <Form.Input.Root>
              <Form.Input.Label htmlFor="year" required>
                Ano de lançamento
              </Form.Input.Label>
              <Form.Input.Input
                id="year"
                name="year"
                placeholder="1929"
                error={!!FormMethods.formState.errors.year?.message}
                type="number"
                min={0}
                max={new Date().getFullYear()}
                className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
              />
              <Form.Input.Feedback type="error">
                {FormMethods.formState.errors.year?.message}
              </Form.Input.Feedback>
            </Form.Input.Root>

            <Form.Input.Root>
              <Form.Input.Label htmlFor="pages" required>
                Paginas
              </Form.Input.Label>
              <Form.Input.Input
                id="pages"
                name="pages"
                placeholder="2"
                error={!!FormMethods.formState.errors.pages?.message}
                type="number"
                min={0}
                className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
              />
              <Form.Input.Feedback type="error">
                {FormMethods.formState.errors.pages?.message}
              </Form.Input.Feedback>
            </Form.Input.Root>

            <Form.Input.Root>
              <Form.Input.Label htmlFor="price" required>
                Preço
              </Form.Input.Label>
              <Form.Input.Input
                id="price"
                name="price"
                placeholder="31.2"
                error={!!FormMethods.formState.errors.price?.message}
                type="number"
                min={0}
                step="0.01"
                className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
              />
              <Form.Input.Feedback type="error">
                {FormMethods.formState.errors.price?.message}
              </Form.Input.Feedback>
            </Form.Input.Root>
            {data && (
              <Form.Input.Root>
                <Form.Input.Label htmlFor="promotional_price">
                  Preço com desconto
                </Form.Input.Label>
                <Form.Input.Input
                  id="promotional_price"
                  name="promotional_price"
                  placeholder="31.2"
                  error={
                    !!FormMethods.formState.errors.promotional_price?.message
                  }
                  type="number"
                  min={0}
                  step="0.01"
                  className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
                />
                <Form.Input.Feedback type="error">
                  {FormMethods.formState.errors.promotional_price?.message}
                </Form.Input.Feedback>
              </Form.Input.Root>
            )}
            <Form.Input.Root>
              <Form.Input.Label htmlFor="stock" required>
                Estoque
              </Form.Input.Label>
              <Form.Input.Input
                id="stock"
                name="stock"
                placeholder="5"
                error={!!FormMethods.formState.errors.stock?.message}
                type="number"
                min={0}
                className="border-2 border-dark bg-pureWhite/30 text-dark hover:border-brownPrimary focus:border-brownPrimary disabled:bg-slate-100"
              />
              <Form.Input.Feedback type="error">
                {FormMethods.formState.errors.stock?.message}
              </Form.Input.Feedback>
            </Form.Input.Root>
          </div>
          <footer className="flex flex-col gap-2 md:flex-row md:gap-10 md:self-end">
            <Button.Root type="submit" loading={isLoading}>
              {data ? 'Atualizar' : 'Criar'}
            </Button.Root>
            <Button.Root
              variant={'outline'}
              type="button"
              loading={isLoading}
              onClick={() => setModalOpen(false)}
            >
              Cancelar
            </Button.Root>
          </footer>
        </form>
      </FormProvider>
    </div>
  )
}

export default AdminBooksCreateUpdateBooks
