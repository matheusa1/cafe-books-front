'use client'

import { Dropzone, FileCard } from '@files-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { createAuthorSchema, createAuthorSchemaType } from './shema'
import { Form } from '@/components/atoms/Form'
import { X } from 'lucide-react'
import { ICreateAuthorModal } from './types'
import { Button } from '@/components/atoms/Button'
import { createCategory, uploadImageToCloudnary } from '@/services/api'
import { useAuth } from '@/context/AuthContext'
const presetUpload = process.env.NEXT_PUBLIC_PRESET_UPLOAD

export const CreateAuthorModal: FC<ICreateAuthorModal> = ({
  setModalOpen,
  refetch,
}) => {
  const FormMethods = useForm<createAuthorSchemaType>({
    resolver: zodResolver(createAuthorSchema),
  })

  const { token } = useAuth()

  FormMethods.watch('image')

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleCreateAuthor = async (data: createAuthorSchemaType) => {
    try {
      setIsLoading(true)
      const res = await uploadImageToCloudnary(data.image[0].file, presetUpload)

      const image = res?.secure_url

      await createCategory(data.name, image, token!)
      refetch()
      setIsLoading(false)
      setModalOpen(false)
    } catch (error) {
      console.log('error', error)
    }
    console.log(data)
  }

  return (
    <FormProvider {...FormMethods}>
      <form
        className={
          'flex flex-col justify-start gap-5 rounded-md bg-pureWhite p-5'
        }
      >
        <header className="flex items-center justify-between">
          <span className="text-xl font-bold">Criar autor(a)</span>
          <div
            onClick={() => setModalOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-200"
          >
            <X size={20} />
          </div>
        </header>
        <Form.Input.Root>
          <Form.Input.Label required>Nome do(a) autor(a)</Form.Input.Label>
          <Form.Input.Input
            placeholder={'Nome da categoria'}
            className={'rounded-md border-2 border-dark'}
            name="name"
            error={!!FormMethods.formState.errors.name?.message}
          />
          <Form.Input.Feedback>
            {FormMethods.formState.errors.name?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>
        <Form.Input.Root>
          <Form.Input.Label required>Imagem</Form.Input.Label>
          <Dropzone
            onChange={(file) => FormMethods.setValue('image', file)}
            label="Arraste e solte a imagem aqui"
            header={false}
            footer={false}
            multiple={false}
          >
            <FileCard
              {...FormMethods.getValues('image')?.[0]}
              onDelete={() => FormMethods.setValue('image', null)}
              info
              preview
            />
          </Dropzone>
          {typeof FormMethods?.formState?.errors?.image?.message ===
            'string' && (
            <Form.Input.Feedback>
              {FormMethods?.formState?.errors?.image?.message}
            </Form.Input.Feedback>
          )}
        </Form.Input.Root>

        <footer className="flex w-full flex-col gap-2 md:flex-row md:gap-10 md:self-end">
          <Button.Root
            type="button"
            loading={isLoading}
            className="w-full"
            onClick={FormMethods.handleSubmit(handleCreateAuthor)}
          >
            Criar
          </Button.Root>
          <Button.Root
            variant={'outline'}
            type="button"
            loading={isLoading}
            onClick={() => setModalOpen(false)}
            className="w-full"
          >
            Cancelar
          </Button.Root>
        </footer>
      </form>
    </FormProvider>
  )
}
