import { ResponseBookType, ResponseBooksType } from '@/types/booktype'
import { ResponseCategoriesType } from '@/types/categoriesType'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://hendrickfs.pythonanywhere.com/',
})

export const getCategories = async () => {
  const response = await api.get<ResponseCategoriesType>('/category/')
  return response.data
}

export const getBooks = async () => {
  const response = await api.get<ResponseBooksType>('/book/')
  return response.data
}

export const createBook = async (data: ResponseBookType) => {
  const response = await api.post('api/book/', data)
  return response.data
}

export const updateBook = async (data: ResponseBookType) => {
  const response = await api.put('api/book/', data)
  return response.data
}

export const deleteBook = async (isbn: string) => {
  const response = await api.delete('api/book/', {
    data: { isbn: isbn },
  })
  return response.data
}
