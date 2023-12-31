import React, { ReactElement } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { IInputHeaderSearch } from './types'
import { Search } from 'lucide-react'

const inputWrapper = tv({
  base: 'flex h-fit w-full max-w-xs overflow-hidden rounded-lg transition-all duration-500',
  variants: {
    open: {
      true: 'md:w-full',
      false: 'md:w-12',
    },
  },
  defaultVariants: {
    open: false,
  },
})

const inputContainer = tv({
  base: 'w-full transition-all duration-500',
  variants: {
    open: {
      true: 'px-3 md:w-full',
      false: 'md:w-0',
    },
  },
  defaultVariants: {
    open: false,
  },
})

const InputHeaderSearch: React.FC<IInputHeaderSearch & VariantProps<typeof inputWrapper> & VariantProps<typeof inputContainer>> = ({
  open = true,
  onHandleSearch,
  placeholder,
  value,
  onChange,
  setIsOpen,
}): ReactElement => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <div className={inputWrapper({ open })}>
      <input className={inputContainer({ open })} value={value} onChange={onChange} ref={inputRef} />
      <div
        onClick={() => {
          if (!open) {
            inputRef.current?.focus()
            inputRef.current?.addEventListener('blur', () => {
              setIsOpen(false)
            })
          }
          onHandleSearch()
        }}
        placeholder={placeholder}
        className="brownButton flex h-10 w-12 items-center justify-center"
      >
        <Search size={24} color="white" />
      </div>
    </div>
  )
}

export default InputHeaderSearch
