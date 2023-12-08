export type IQuantitySelector = {
  quantity: number
  setQuantity: (value: number) => void
  onChange?: (number: number) => void
}
