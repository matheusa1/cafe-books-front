'use client'

import { FC, useCallback, useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CartAddressSchema, CartAddressSchemaInfer, CartAddressSchemaInput } from './schema'
import { Form } from '@/components/atoms/Form'
import { Button } from '@/components/atoms/Button'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IStates } from '@/types/states'
import { ICartAddressForm } from './types'
import { X } from 'lucide-react'
import { useCart } from '@/context/CartInfoContext'

export const CartAddressForm: FC<ICartAddressForm> = ({ setOpen, buy }) => {
  const [cities, setCities] = useState<{ label: string; value: string }[]>([])

  const { setAddress, cartInfo } = useCart()

  const address = cartInfo?.address

  const formMethods = useForm<CartAddressSchemaInput>({
    resolver: zodResolver(CartAddressSchema),
    defaultValues: {
      cep: address?.cep || undefined,
      street: address?.street || undefined,
      number: address?.number || undefined,
      complement: address?.complement || undefined,
      neighborhood: address?.neighborhood || undefined,
      city: {
        label: address?.city || undefined,
        value: address?.city || undefined,
      },
      state: {
        label: address?.state || undefined,
        value: address?.state || undefined,
      },
    },
  })

  const state = formMethods.watch('state')
  const cep = formMethods.watch('cep')

  const onHandleSubmit = async (data: CartAddressSchemaInfer) => {
    setAddress({
      ...data,
      complement: data.complement || ' ',
      city: data.city.value,
      state: data.state.value,
    })
    setOpen(false)
  }

  const { data: estados } = useQuery(['state'], async () => {
    const response = await axios.get<IStates>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    const data = response.data

    return data.map((estado) => ({
      value: estado.sigla,
      label: estado.nome,
    }))
  })

  const getCities = useCallback(async (state: string) => {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
    const data = response.data

    setCities(
      data.map((city: { nome: string }) => ({
        value: city.nome,
        label: city.nome,
      })),
    )
  }, [])

  const getCEP = useCallback(
    async (cep: string) => {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

      const data = response.data

      if (data.erro) {
        return formMethods.setError('cep', {
          type: 'manual',
          message: 'CEP não encontrado',
        })
      }

      formMethods.reset({
        ...formMethods.getValues(),
        street: data.logradouro,
        neighborhood: data.bairro,
        number: '',
        city: {
          label: data.localidade,
          value: data.localidade,
        },
        state: {
          value: data.uf,
          label: estados?.find((estado) => estado.value === data.uf)?.label,
        },
      })
    },

    [formMethods, estados],
  )

  useEffect(() => {
    if (state) {
      getCities(state?.value)
    }
  }, [state, getCities])

  useEffect(() => {
    if (cep && cep.length === 8) {
      getCEP(cep)
    }
  }, [cep, getCEP])

  return (
    <Dialog.Content className="fixed right-1/2 top-1/2 flex h-fit w-fit -translate-y-1/2 translate-x-1/2 items-center justify-center">
      <main className="w-[90vw] max-w-xl flex-col rounded-md bg-pureWhite p-5">
        <header className="mb-5 flex justify-between">
          <h1 className="text-lg font-semibold">Alterar endereço</h1>
          <Dialog.Close onClick={() => setOpen(false)}>
            <X className="h-6 w-6 text-dark" />
          </Dialog.Close>
        </header>
        <FormProvider {...formMethods}>
          <form className="grid max-h-[60vh] grid-cols-4 gap-2 overflow-auto pr-2 md:max-h-[70vh]" onSubmit={formMethods.handleSubmit(onHandleSubmit)}>
            <div className="col-span-4">
              <Form.Input.Root>
                <Form.Input.Label htmlFor="cep" required>
                  CEP
                </Form.Input.Label>
                <Form.Input.Input
                  className={'border-2 border-dark'}
                  id="cep"
                  name="cep"
                  placeholder="XXXXXXXX"
                  type="number"
                  error={!!formMethods.formState.errors.cep?.message}
                />
                <Form.Input.Feedback type="error">{formMethods.formState.errors.cep?.message}</Form.Input.Feedback>
              </Form.Input.Root>
            </div>
            <div className="col-span-4 md:col-span-2">
              <Form.Select.Root>
                <Form.Select.Label htmlFor="state" required>
                  Estado
                </Form.Select.Label>
                <Form.Select.Select className={'border-2 border-dark'} id="state" name="state" placeholder="Paraná" options={estados} />
                <Form.Select.Feedback type="error">{formMethods.formState.errors.state?.message}</Form.Select.Feedback>
              </Form.Select.Root>
            </div>
            <div className="col-span-4 md:col-span-2">
              <Form.Select.Root>
                <Form.Select.Label htmlFor="city" required>
                  Cidade
                </Form.Select.Label>
                <Form.Select.Select className={'border-2 border-dark'} id="city" name="city" placeholder="Campo Mourão" options={cities} />
                <Form.Select.Feedback type="error">{formMethods.formState.errors.city?.message}</Form.Select.Feedback>
              </Form.Select.Root>
            </div>
            <div className="col-span-3">
              <Form.Input.Root>
                <Form.Input.Label htmlFor="street" required>
                  Rua ou avenida
                </Form.Input.Label>
                <Form.Input.Input
                  className={'border-2 border-dark'}
                  id="street"
                  name="street"
                  placeholder="Av. Irmãos Pereira"
                  error={!!formMethods.formState.errors.street?.message}
                />
                <Form.Input.Feedback type="error">{formMethods.formState.errors.street?.message}</Form.Input.Feedback>
              </Form.Input.Root>
            </div>
            <div className="col-span-1">
              <Form.Input.Root>
                <Form.Input.Label htmlFor="number" required>
                  Número
                </Form.Input.Label>
                <Form.Input.Input
                  className={'border-2 border-dark'}
                  id="number"
                  name="number"
                  placeholder="500"
                  type="number"
                  error={!!formMethods.formState.errors.number?.message}
                />
                <Form.Input.Feedback type="error">{formMethods.formState.errors.number?.message}</Form.Input.Feedback>
              </Form.Input.Root>
            </div>
            <div className="col-span-4 md:col-span-2">
              <Form.Input.Root>
                <Form.Input.Label htmlFor="complement">Complemento</Form.Input.Label>
                <Form.Input.Input
                  className={'border-2 border-dark'}
                  id="complement"
                  name="complement"
                  placeholder="apto. 10"
                  error={!!formMethods.formState.errors.complement?.message}
                />
                <Form.Input.Feedback type="error">{formMethods.formState.errors.complement?.message}</Form.Input.Feedback>
              </Form.Input.Root>
            </div>
            <div className="col-span-4 md:col-span-2">
              <Form.Input.Root>
                <Form.Input.Label htmlFor="neighborhood" required>
                  Bairro
                </Form.Input.Label>
                <Form.Input.Input
                  className={'border-2 border-dark'}
                  id="neighborhood"
                  name="neighborhood"
                  placeholder="Centro"
                  error={!!formMethods.formState.errors.neighborhood?.message}
                />
                <Form.Input.Feedback type="error">{formMethods.formState.errors.neighborhood?.message}</Form.Input.Feedback>
              </Form.Input.Root>
            </div>

            <div className="col-span-4 mt-5 flex flex-col gap-4">
              <Button.Root className="bg-emerald-500 hover:bg-emerald-700">{buy ? 'Comprar' : 'Salvar'}</Button.Root>
              <Dialog.Close asChild onClick={() => setOpen(false)}>
                <Button.Root type="button" variant="outline">
                  Cancelar
                </Button.Root>
              </Dialog.Close>
            </div>
          </form>
        </FormProvider>
      </main>
    </Dialog.Content>
  )
}
