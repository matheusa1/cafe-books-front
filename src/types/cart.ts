export type ICart = {
  id: number
  user: number
  date: string
  total: number
  books: {
    book_isbn: string
    book_image: string
    book_title: string
    book_author: string[]
    quantity: number
    price: number
  }[]
  address: null | string | undefined
  status: string
}
