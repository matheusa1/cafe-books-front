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

  const [IsbnMessage, setIsbnMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const inputsData = [
    {
      label: 'ISBN',
      placeholder: '000-0-00-000000-0',
      name: 'isbn',
      error: FormMethods?.formState?.errors?.isbn?.message || IsbnMessage,
      disabled: data ? true : false,
    },
    {
      label: 'Titulo',
      placeholder: 'O dia em ...',
      name: 'title',
      error: FormMethods?.formState?.errors?.title?.message,
    },
    {
      label: 'Descrição',
      placeholder: 'Tudo começou quando um relógio esquisito...',
      name: 'description',
      error: FormMethods?.formState?.errors?.description?.message,
      type: 'textarea',
      colspan: 2,
    },
    {
      label: 'Categorias',
      placeholder: 'Categorias',
      name: 'category',
      error: FormMethods?.formState?.errors?.category?.message,
      type: 'select',
      isMulti: true,
      options: categoriesList,
    },
    {
      label: 'Autor',
      placeholder: 'Stan Lee, Machado de Assis, ...',
      name: 'author',
      error: FormMethods?.formState?.errors?.author?.message,
    },
    {
      label: 'Editora',
      placeholder: 'Panini',
      name: 'publisher',
      error: FormMethods?.formState?.errors?.publisher?.message,
    },
    {
      label: 'Idioma',
      placeholder: 'Português',
      name: 'language',
      error: FormMethods?.formState?.errors?.language?.message,
    },
    {
      label: 'Idioma Original',
      placeholder: 'Inglês',
      name: 'country',
      error: FormMethods?.formState?.errors?.country?.message,
    },
    {
      label: 'Ano de lançamento',
      placeholder: '1929',
      name: 'year',
      error: FormMethods?.formState?.errors?.year?.message,
      type: 'number',
    },
    {
      label: 'Paginas',
      placeholder: '2',
      name: 'pages',
      error: FormMethods?.formState?.errors?.pages?.message,
      type: 'number',
    },

    {
      label: 'Preço',
      placeholder: '31.2',
      name: 'price',
      error: FormMethods?.formState?.errors?.price?.message,
      type: 'number',
    },
    {
      label: 'Preço com desconto',
      placeholder: '31.2',
      name: 'promotional_price',
      error: FormMethods?.formState?.errors?.promotional_price?.message,
      type: 'number',
      hidden: data ? false : true,
    },
    {
      label: 'Estoque',
      placeholder: '5',
      name: 'stock',
      error: FormMethods?.formState?.errors?.stock?.message,
      type: 'number',
    },
  ]

  const onHandleSubmit = async (formData: AdminCreateOutput) => {
    setIsLoading(true)
    try {
      const res = await uploadImageToCloudnary(formData.image[0], presetUpload)

      if (data) {
        await updateBook({
          ...formData,
          image: res?.secure_url,
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
        image: res?.secure_url,
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

  console.log(FormMethods?.formState?.errors)

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
            {inputsData.map((input, index) => {
              if (!input.hidden)
                return (
                  <div
                    key={index}
                    className={input.colspan && !data ? 'md:col-span-2' : ''}
                  >
                    {input.type === 'textarea' ? (
                      <Form.TextArea
                        name={input.name}
                        label={input.label}
                        placeholder={input.placeholder}
                        labelDark
                        id={input.name}
                        errorMessage={input.error}
                      />
                    ) : input.type === 'select' ? (
                      <Form.Select
                        name={input.name}
                        placeholder={input.placeholder}
                        options={input.options}
                        isMulti={input.isMulti}
                        label={input.label}
                        id={input.name}
                        labelDark
                        errorMessage={input.error}
                        hFull
                      />
                    ) : (
                      <>
                        <Form.Input
                          name={input.name}
                          label={input.label}
                          placeholder={input.placeholder}
                          labelDark
                          errorMessage={input.error}
                          type={input?.type}
                          disabled={input?.disabled}
                          id={input.name}
                        />
                      </>
                    )}
                  </div>
                )
            })}
            <input type="file" {...FormMethods.register('image')} />
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
