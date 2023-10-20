import { IUserType } from '@/types/user'

export type contextType = {
  user?: IUserType
  token?: string
  signIn: (email: string, password: string) => Promise<boolean>
  signOut: () => void
}
