export type ICarouselItemBookSide = {
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
}
