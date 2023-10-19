import { IUserType } from '@/types/user'

export type contextType = {
  user?: IUserType
  signIn: (email: string, password: string) => Promise<boolean>
  signOut: () => void
  getToken: () => string | undefined
}
