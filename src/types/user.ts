export type IUserType = {
  id: number
}

export type IJWTDecode = {
  exp: number
  iat: number
  jti: string
  token_type: string
  user_id: number
}
