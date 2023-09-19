export type ResponseBookType = {
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

export type ResponseBooksType = ResponseBookType[]

export type TratedCategoriesBookType = {
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
  category: {
    label: string
    value: string
  }[]
}

export type TratedCategoriesBooksType = TratedCategoriesBookType[]
