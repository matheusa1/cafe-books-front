export type IPurchaseBooks = {
  book_isbn: string
  quantity: number
  price: number
  book_image: string
  book_title: string
  book_author: string[]
}

export type IPurchase = {
  id: number
  user: number
  date: string
  total: number
  books: IPurchaseBooks[]
  address: string
  status: string
}

export type IPurchases = IPurchase[]
