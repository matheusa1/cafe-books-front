export type TBestBook = {
  book: string
  call: string
  subtext: string
  image_url: string
}

export type TBestBooksResponse = {
  id: number
  book_details: {
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
    promotional_price: number | null
    stock: number
    sales: number
    category: string[]
    author: string[]
  }
  call: string
  subtext: string
  image_url: string
  book: string
}[]
