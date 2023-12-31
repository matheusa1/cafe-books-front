'use client'

import { Select } from '@/components/atoms/Select'
import ExploreFilterItem from '@/components/molecules/ExploreFilterItem'
import { getAuthor, getCategories } from '@/services/api'
import { toTitleCase } from '@/utils/toTitleCase'

import { useQuery } from '@tanstack/react-query'
import React, { ReactElement, useEffect, useState } from 'react'
import { ExploreFilterProps, IExploreFilter, selectProps } from './types'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { useSearchParams } from 'next/navigation'
import { Filter } from 'lucide-react'

const ExploreFilter: React.FC<IExploreFilter> = ({ filter, setFilter, noheader, closeDialog }): ReactElement => {
  const [localFilter, setLocalFilter] = useState<ExploreFilterProps>(filter)

  const { data: categories } = useQuery(['categories', Infinity], async () => {
    const categories = await getCategories()

    const categoriesList = categories.map((category) => {
      return {
        label: toTitleCase(category.name),
        value: category.name,
      }
    })

    return categoriesList
  })

  const { data: authors } = useQuery(['authors', Infinity], async () => {
    const authors = await getAuthor()

    const authorList = authors.map((author) => {
      return {
        label: toTitleCase(author.name),
        value: author.name,
      }
    })

    return authorList
  })

  const params = useSearchParams()

  useEffect(() => {
    if (params.get('category')) {
      const newCategory = categories?.filter((category) => {
        return category.value === params.get('category')
      })

      if (newCategory) {
        setFilter({
          ...filter,
          categories: newCategory,
        })

        setLocalFilter({
          ...localFilter,
          categories: newCategory,
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, categories])

  return (
    <div className={'flex w-full flex-col gap-5'}>
      {!noheader && (
        <header className="flex items-center gap-2 border-b-2 border-b-subText text-lg text-dark">
          <Filter />
          <span className="ml-2">Filtro</span>
        </header>
      )}
      <main className="flex flex-col gap-5">
        <ExploreFilterItem title={'Categorias'}>
          <Select.Select
            className="border-2 border-dark hover:border-brownPrimary focus:border-brownPrimary"
            isMulti
            placeholder={'Selecione'}
            options={categories}
            value={localFilter.categories}
            onChange={(value: unknown) =>
              setLocalFilter({
                ...localFilter,
                categories: value as selectProps,
              })
            }
          />
        </ExploreFilterItem>

        <ExploreFilterItem title={'Autores'}>
          <Select.Select
            className="border-2 border-dark hover:border-brownPrimary focus:border-brownPrimary"
            isMulti
            placeholder={'Selecione'}
            options={authors}
            value={localFilter.authors}
            onChange={(value: unknown) =>
              setLocalFilter({
                ...localFilter,
                authors: value as selectProps,
              })
            }
          />
        </ExploreFilterItem>
        <ExploreFilterItem title={'Preço'}>
          <div className="flex w-full items-center justify-between">
            <span className="">Valor mínimo:</span>
            <div className="w-24">
              <Input.Input
                className="border-2 border-dark hover:border-brownPrimary focus:border-brownPrimary"
                type="number"
                min={0}
                placeholder="20.5"
                value={localFilter.price.min === undefined ? '' : localFilter.price.min}
                onChange={(e) =>
                  setLocalFilter({
                    ...localFilter,
                    price: {
                      ...localFilter.price,
                      min: Number(e.target.value),
                    },
                  })
                }
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="">Valor máximo:</span>
            <div className="w-24">
              <Input.Input
                className="border-2 border-dark hover:border-brownPrimary focus:border-brownPrimary"
                type="number"
                placeholder="20.5"
                value={localFilter.price.max === undefined ? '' : localFilter.price.max}
                min={0}
                onChange={(e) =>
                  setLocalFilter({
                    ...localFilter,
                    price: {
                      ...localFilter.price,
                      max: Number(e.target.value),
                    },
                  })
                }
              />
            </div>
          </div>
        </ExploreFilterItem>
        <div className="flex flex-col gap-2">
          <Button.Root
            onClick={() => {
              setFilter({
                categories: [],
                authors: [],
                price: { min: undefined, max: undefined },
              })

              setLocalFilter({
                categories: [],
                authors: [],
                price: { min: undefined, max: undefined },
              })
            }}
          >
            <Button.Text>Limpar filtro</Button.Text>
          </Button.Root>
          <Button.Root
            onClick={() => {
              setFilter(localFilter)
              closeDialog?.(false)
            }}
          >
            <Button.Text>Filtrar</Button.Text>
          </Button.Root>
        </div>
      </main>
    </div>
  )
}

export default ExploreFilter
