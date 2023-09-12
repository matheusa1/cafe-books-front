import { X } from '@phosphor-icons/react'
import React, { ReactElement, useEffect } from 'react'
import {
  AdminCreateSchema,
  AdminCreateType,
  IAdminBooksCreateUpdateBooks,
} from './types'
import Button from '@/components/atoms/Button'
import { Form } from '@/components/atoms/Form'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const AdminBooksCreateUpdateBooks: React.FC<IAdminBooksCreateUpdateBooks> = ({
  setModalOpen,
  data,
}): ReactElement => {
  const FormMethods = useForm<AdminCreateType>({
    resolver: zodResolver(AdminCreateSchema),
  })

  const inputsData = [
    {
      label: 'Titulo',
      placeholder: 'Titulo',
      name: 'title',
      error: FormMethods?.formState?.errors?.title?.message,
    },
    {
      label: 'Descrição',
      placeholder: 'Descrição',
      name: 'description',
      error: FormMethods?.formState?.errors?.description?.message,
      type: 'textarea',
    },
    {
      label: 'Autor',
      placeholder: 'Autor',
      name: 'author',
      error: FormMethods?.formState?.errors?.author?.message,
    },
    {
      label: 'Editora',
      placeholder: 'Editora',
      name: 'publisher',
      error: FormMethods?.formState?.errors?.publisher?.message,
    },
    {
      label: 'Edição',
      placeholder: 'Edição',
      name: 'edition',
      error: FormMethods?.formState?.errors?.edition?.message,
    },
    {
      label: 'Ilustração',
      placeholder: 'Ilustração',
      name: 'illustration',
      error: FormMethods?.formState?.errors?.illustration?.message,
    },
    {
      label: 'Tradutor(es)',
      placeholder: 'Tradutor(es)',
      name: 'translator',
      error: FormMethods?.formState?.errors?.translator?.message,
    },
    {
      label: 'Idioma Original',
      placeholder: 'Idioma Original',
      name: 'originalLanguage',
      error: FormMethods?.formState?.errors?.originalLanguage?.message,
    },
    {
      label: 'Titulo Original',
      placeholder: 'Titulo Original',
      name: 'originalTitle',
      error: FormMethods?.formState?.errors?.originalTitle?.message,
    },
    {
      label: 'Paginas',
      placeholder: 'Paginas',
      name: 'pages',
      error: FormMethods?.formState?.errors?.pages?.message,
      type: 'number',
    },
    {
      label: 'Acabamento',
      placeholder: 'Acabamento',
      name: 'finish',
      error: FormMethods?.formState?.errors?.finish?.message,
    },
    {
      label: 'Ano de lançamento',
      placeholder: 'Ano de lançamento',
      name: 'releaseDate',
      error: FormMethods?.formState?.errors?.releaseDate?.message,
    },
    {
      label: 'Imagem da capa',
      placeholder: '.jpg ou .png',
      name: 'coverImage',
      error: FormMethods?.formState?.errors?.coverImage?.message,
    },
    {
      label: 'Preço',
      placeholder: 'Preço',
      name: 'price',
      error: FormMethods?.formState?.errors?.price?.message,
      pattern: '^(R$ )?(d{1,3}(.d{3})*,d{2})$',
    },
    {
      label: 'Preço com desconto',
      placeholder: 'Preço com desconto',
      name: 'discountPrice',
      error: FormMethods?.formState?.errors?.discountPrice?.message,

      hidden: data ? false : true,
    },
  ]

  const onHandleSubmit = (formData: AdminCreateType) => {
    console.log(formData)
  }

  useEffect(() => {
    if (data) {
      FormMethods?.reset({
        ...data,
        releaseDate: String(new Date(data.releaseDate).getFullYear()),
      })
      console.log(data)
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
            {inputsData.map((input, index) => (
              <div key={index}>
                {input.type === 'textarea' ? (
                  <Form.TextArea
                    name={input.name}
                    label={input.label}
                    placeholder={input.placeholder}
                    labelDark
                    errorMessage={input.error}
                  />
                ) : (
                  <>
                    {!input.hidden && (
                      <Form.Input
                        name={input.name}
                        label={input.label}
                        placeholder={input.placeholder}
                        labelDark
                        errorMessage={input.error}
                        type={input?.type}
                        pattern={input?.pattern}
                      />
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <footer className="flex flex-col gap-2 md:flex-row md:gap-10">
            <Button content="wFull" type="submit">
              Criar
            </Button>
            <Button
              content="wFull"
              styleType="outlinedBrown"
              type="button"
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
