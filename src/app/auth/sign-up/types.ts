import { z } from 'zod'

const messages = {
  email: 'Preencha com um e-mail válido',
  min: 'Mínimo de 6 caracteres',
  nonempty: 'Campo obrigatório',
}

export const SignUpScheme = z
  .object({
    email: z.string().email(messages.email).nonempty(messages.nonempty),
    password: z.string().min(6, messages.min).nonempty(messages.nonempty),
    username: z.string().nonempty(messages.nonempty),
    confirmPassword: z
      .string()
      .min(6, messages.min)
      .nonempty(messages.nonempty),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas precisam ser iguais',
    path: ['confirmPassword'],
  })

export type ISignUpScheme = z.infer<typeof SignUpScheme>
