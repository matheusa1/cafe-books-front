import axios from 'axios'

const api = axios.create({
  baseURL: 'http://hendrickfs.pythonanywhere.com/',
})

// const apiPost = axios.create({
//   baseURL: 'http://hendrickfs.pythonanywhere.com/api/',
// })

export const getCategories = async () => {
  const response = await api.get('/category/')
  return response.data
}

export const getBooks = async () => {
  const response = await api.get('/book/')
  return response.data
}
