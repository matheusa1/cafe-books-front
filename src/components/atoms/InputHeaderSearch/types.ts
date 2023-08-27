export type IInputHeaderSearch = {
  placeholder: string
  onHandleSearch: () => void
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
