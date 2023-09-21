import { ISignUpScheme } from '@/app/auth/sign-up/types'
import { ResponseCategoriesType } from './../types/categoriesType'
import { ResponseBookType, ResponseBooksType } from '@/types/booktype'

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://hendrickfs.pythonanywhere.com/',
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

export const getBook = async (isbn: string) => {
  const response = await api.get<ResponseBookType>(`book/${isbn}`)
  return response.data
}

export const signUp = async (data: ISignUpScheme) => {
  const response = await api.post('api/user/', {
    ...data,
    confirmPassword: undefined,
  })
  return response.data
}
