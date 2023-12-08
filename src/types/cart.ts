export type ICart = {
  id: number
  user: number
  date: string
  total: number
  books: ICartBook[]
  address: null | string | undefined
  status: string
}

export type ICartBook = {
  book_isbn: string
  book_image: string
  book_title: string
  book_author: string[]
  quantity: number
  price: number
}
