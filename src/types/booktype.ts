export type BookType = {
  isbn: string
  title: string
  author: string
  publisher: string
  country: string
  language: string
  image: string
  description: string
  year: number
  pages: number
  price: number
  promotional_price: null | number
  stock: number
  category: string[]
}

export type booksType = BookType[]
