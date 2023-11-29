'use client'
import { Input } from '@/components/atoms/Input'
import { Select } from '@/components/atoms/Select'
import { TextArea } from '@/components/atoms/TextArea'
import { Dropzone, FileCard } from '@files-ui/react'
import React, { ReactElement, useState } from 'react'
import { THot } from './types'

const Hot: React.FC = (): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [errors] = useState([{ message: '' }, { message: '' }, { message: '' }, { message: '' }])
  const [hots, setHots] = useState<THot>([])

  console.log({ hots })

  return (
    <div className={'flex flex-col gap-3'}>
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
      <Select.Root>
        <Select.Label>Selecione o livro</Select.Label>
        <Select.Select
          placeholder="Selecione"
          isClearable
          value={hots[activeIndex]?.book}
          onChange={(e) =>
            setHots((prev: THot) => {
              const newState = [...prev]
              newState[activeIndex] = { ...newState[activeIndex], book: e }
              return newState
            })
          }
          options={[{ label: 'teste', value: 'teste' }]}
        />
        <Select.Feedback>{errors[0].message}</Select.Feedback>
      </Select.Root>
      <Input.Root>
        <Input.Label>Texto principal</Input.Label>
        <Input.Input
          value={hots[activeIndex]?.mainText}
          onChange={(e) =>
            setHots((prev: THot) => {
              const newState = [...prev]
              newState[activeIndex] = { ...newState[activeIndex], mainText: e.target.value }
              return newState
            })
          }
          className="border border-dark focus:border-brownPrimary"
        />
        <Input.Feedback>{errors[1].message}</Input.Feedback>
      </Input.Root>
      <TextArea.Root>
        <TextArea.Label>Texto secundário</TextArea.Label>
        <TextArea.TextArea
          value={hots[activeIndex]?.subText}
          onChange={(e) =>
            setHots((prev: THot) => {
              const newState = [...prev]
              newState[activeIndex] = { ...newState[activeIndex], subText: e.target.value }
              return newState
            })
          }
          className="border border-dark focus:border-brownPrimary"
        />
        <TextArea.Feedback>{errors[2].message}</TextArea.Feedback>
      </TextArea.Root>
      <div className="col-span-1 flex flex-col gap-2 md:col-span-2">
        <Input.Label>Imagem</Input.Label>
        <Dropzone
          onChange={(file) =>
            setHots((prev: THot) => {
              const newState = [...prev]
              newState[activeIndex] = { ...newState[activeIndex], image: file }
              return newState
            })
          }
          label="Arraste e solte a imagem aqui"
          header={false}
          footer={false}
          multiple={false}
        >
          {/* <Image src={data?.image} alt="book image" className="w-20" width={40} height={40} /> */}
          <FileCard
            {...hots[activeIndex]?.image?.[0]}
            onDelete={() =>
              setHots((prev: THot) => {
                const newState = [...prev]
                newState[activeIndex] = { ...newState[activeIndex], image: undefined }
                return newState
              })
            }
            info
            preview
          />
        </Dropzone>

        <Input.Feedback>{errors[3].message}</Input.Feedback>
      </div>
    </div>
  )
}

export default Hot
