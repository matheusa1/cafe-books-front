export type IAdminBooksContent = {
  books: {
    id: number
    title: string
    releaseDate: string
    genre: string[]
    price: number
  }[]
}
