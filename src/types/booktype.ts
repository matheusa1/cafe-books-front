export type ResponseBookType = {
  isbn: string
  title: string
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
  author: string[]
  category: string[]
}

export type ResponseBooksType = ResponseBookType[]

export type TratedCategoriesBookType = {
  isbn: string
  title: string
  author: {
    label: string
    value: string
  }[]
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
