'use client'

import { FC, useCallback, useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CartAddressSchema,
  CartAddressSchemaInfer,
  CartAddressSchemaInput,
} from './schema'
import { Form } from '@/components/atoms/Form'
import Button from '@/components/atoms/Button'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IStates } from '@/types/states'
import { ICartAddressForm } from './types'

export const CartAddressForm: FC<ICartAddressForm> = ({
  address,
  setAddress,
  setOpen,
}) => {
  const [cities, setCities] = useState<{ label: string; value: string }[]>([])
  const formMethods = useForm<CartAddressSchemaInput>({
    resolver: zodResolver(CartAddressSchema),
    defaultValues: {
      cep: address.cep,
      street: address.street,
      number: address.number,
      complement: address.complement,
      neighborhood: address.neighborhood,
      city: {
        label: address.city,
        value: address.city,
      },
      state: {
        label: address.state,
        value: address.state,
      },
    },
  })

  const state = formMethods.watch('state')
  const cep = formMethods.watch('cep')

  const onHandleSubmit = (data: CartAddressSchemaInfer) => {
    setAddress({
      ...data,
      complement: data.complement || '',
      city: data.city.value,
      state: data.state.value,
    })
    setOpen(false)
  }

  const { data: estados } = useQuery(['state'], async () => {
    const response = await axios.get<IStates>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
    )
    const data = response.data

    return data.map((estado) => ({
      value: estado.sigla,
      label: estado.nome,
    }))
  })

  const getCities = useCallback(async (state: string) => {
    const response = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`,
    )
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
          <Dialog.Close>
            <X className="h-6 w-6 text-dark" />
          </Dialog.Close>
        </header>
        <FormProvider {...formMethods}>
          <form
            className="grid max-h-[60vh] grid-cols-4 gap-2 overflow-auto pr-2 md:max-h-[70vh]"
            onSubmit={formMethods.handleSubmit(onHandleSubmit)}
          >
            <div className="col-span-4">
              <Form.Input
                name="cep"
                id="cep"
                label="CEP"
                labelDark
                placeholder="XXXXXXXX"
                type="number"
                errorMessage={formMethods.formState.errors.cep?.message}
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <Form.Select
                name="state"
                id="state"
                label="Estado"
                labelDark
                placeholder="Paraná"
                options={estados}
                errorMessage={formMethods.formState.errors.state?.message}
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <Form.Select
                name="city"
                id="city"
                label="Cidade"
                labelDark
                options={cities}
                placeholder="Campo Mourão"
                noOptionsMessage={() => 'Selecione um estado'}
                errorMessage={formMethods.formState.errors.city?.message}
              />
            </div>
            <div className="col-span-3">
              <Form.Input
                name="street"
                id="street"
                label="Rua ou avenida"
                labelDark
                placeholder="Av. Irmãos Pereira"
                errorMessage={formMethods.formState.errors.street?.message}
              />
            </div>
            <div className="col-span-1">
              <Form.Input
                name="number"
                id="number"
                label="Número"
                labelDark
                placeholder="500"
                type="number"
                errorMessage={formMethods.formState.errors.number?.message}
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <Form.Input
                name="complement"
                id="complement"
                label="Complemento"
                labelDark
                placeholder="apto. 10"
                errorMessage={formMethods.formState.errors.complement?.message}
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <Form.Input
                name="neighborhood"
                id="neighborhood"
                label="Bairro"
                labelDark
                placeholder="Centro"
                errorMessage={
                  formMethods.formState.errors.neighborhood?.message
                }
              />
            </div>

            <div className="col-span-4 mt-5 flex flex-col gap-4">
              <Button content="wFull" styleType="success">
                Salvar
              </Button>
              <Dialog.Close asChild>
                <Button type="button" content="wFull" styleType="outlinedBrown">
                  Cancelar
                </Button>
              </Dialog.Close>
            </div>
          </form>
        </FormProvider>
      </main>
    </Dialog.Content>
  )
}
