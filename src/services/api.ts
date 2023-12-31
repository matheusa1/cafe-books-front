import { TBestBook, TBestBooksResponse } from './../types/bestBooks'
import { ISignUpScheme } from '@/app/auth/sign-up/types'
import { ResponseCategoriesType } from './../types/categoriesType'
import { ResponseBookType, ResponseBooksType } from '@/types/booktype'

import axios from 'axios'
import { ICart } from '@/types/cart'
import { IPurchases } from '@/types/purcheses'
import { ResponseAuthorsType } from '@/types/authorTypes'
import { TMostDiscountResponse } from '@/types/bestDiscounts'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const getCategories = async () => {
  const response = await api.get<ResponseCategoriesType>('/category/')
  return response.data
}

export const getAuthor = async () => {
  const response = await api.get<ResponseAuthorsType>('/author/')
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

export const uploadImageToCloudnary = async (file: File, upload_preset?: string) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', upload_preset ? upload_preset : 'books')

  const res = await axios.post('https://api.cloudinary.com/v1_1/dkwt60tnl/image/upload', formData)

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

export const createCategory = async (name: string, image: string, token: string) => {
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

export const createAuthor = async (name: string, image: string, token: string) => {
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

export const getUserCart = async (token: string) => {
  const response = await api.get<ICart>('api/cart/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const apiHandleCart = async ({ token, add, book, quantity }: { token: string; add: boolean; book: string; quantity?: number }) => {
  const response = await api.post(
    'api/cart/',
    {
      add: add ? 'true' : 'false',
      book,
      quantity: quantity ? quantity : 1,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}

export const getUserPurchases = async (token: string) => {
  const response = await api.get<IPurchases>('api/user/purchase/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export const apiHandlePurchase = async ({ token, address }: { token: string; address: string }) => {
  const response = await api.post(
    'api/purchase/',
    {
      address,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}

export const apiHandlePurchaseWithoutCart = async ({
  token,
  address,
  quantity,
  isbn: book,
}: {
  token: string
  address: string
  quantity: number
  isbn: string
}) => {
  const response = await api.post(
    'api/purchase/withoutcart/',
    {
      address,
      quantity,
      book,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}

export const apiHotBooks = async ({ token, bestBook }: { token: string; bestBook: TBestBook }) => {
  const response = await api.post(
    'api/book/bestbooks/',
    {
      ...bestBook,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
  return response.data
}

export const apiGetHotBooks = async () => {
  const response = await api.get<TBestBooksResponse>('api/book/bestbooks/')
  return response.data
}

export const apiRemoveHotBooks = async ({ token, book }: { token: string; book: string }) => {
  const response = await api.delete('api/book/bestbooks/', {
    data: {
      book,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const apiGetMostDiscount = async () => {
  const res = await api.get<TMostDiscountResponse>('api/book/biggestpromotions/')
  return res.data
}

export const apiGetMostSelleds = async () => {
  const res = await api.get<ResponseBooksType>('api/book/bestsellers/')
  return res.data
}

export const apiMultiplePopulateCart = async ({ token, books }: { token: string; books: { isbn: string; quantity: number }[] }) => {
  const res = await api.post(
    'api/cart/multiple/',
    { books },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
  return res.data
}

export const apiUpdateUserInfo = async ({ token, name, phone, address }: { token: string; name?: string; phone?: string; address?: string }) => {
  const res = await api.put(
    'api/user/',
    { name, phone, address },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return res.data
}
