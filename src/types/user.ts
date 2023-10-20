export type IUserType = {
  id: number
  type: string
  name: string
  address: string
  phone: string
  sex: string
  favorites: string[]
}

export type IJWTDecode = {
  exp: number
  iat: number
  jti: string
  token_type: string
  user_id: number
}
