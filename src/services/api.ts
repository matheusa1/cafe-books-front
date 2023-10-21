import { ISignUpScheme } from '@/app/auth/sign-up/types'
import { ResponseCategoriesType } from './../types/categoriesType'
import { ResponseBookType, ResponseBooksType } from '@/types/booktype'

import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const getCategories = async () => {
  const response = await api.get<ResponseCategoriesType>('/category/')
  return response.data
}

export const getAuthor = async () => {
  const response = await api.get<ResponseCategoriesType>('/author/')
  return response.data
}

export const getBooks = async () => {
  const response = await api.get<ResponseBooksType>('/book/')
  return response.data
}

export const createBook = async (data: ResponseBookType, token: string) => {
  const response = await api.post('api/book/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const updateBook = async (data: ResponseBookType, token: string) => {
  const response = await api.put('api/book/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const deleteBook = async (isbn: string, token: string) => {
  const response = await api.delete('api/book/', {
    data: { isbn: isbn },
    headers: {
      Authorization: `Bearer ${token}`,
    },
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

export const signIn = async (email: string, password: string) => {
  const response = await api.post('token/', {
    email,
    password,
  })
  return response.data
}

export const getUser = async (id: number) => {
  const response = await api.get(`user/${id}/`)
  return response.data
}

export const uploadImageToCloudnary = async (
  file: File,
  upload_preset?: string,
) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', upload_preset ? upload_preset : 'books')

  const res = await axios.post(
    'https://api.cloudinary.com/v1_1/dkwt60tnl/image/upload',
    formData,
  )

  return res.data
}

export const addBookToFavorites = async (ISBN: string, token: string) => {
  const response = await api.post(
    'api/favorites/',
    {
      book: ISBN,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}

export const removeBookToFavorites = async (ISBN: string, token: string) => {
  const response = await api.delete('api/favorites/', {
    data: {
      book: ISBN,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export const getUserFavorites = async (token: string) => {
  const response = await api.get('api/favorites/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export const createCategory = async (
  name: string,
  image: string,
  token: string,
) => {
  const response = await api.post(
    'api/book/category/',
    {
      name,
      image_url: image,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}

export const createAuthor = async (
  name: string,
  image: string,
  token: string,
) => {
  const response = await api.post(
    'api/book/author/',
    {
      name,
      image_url: image,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}
