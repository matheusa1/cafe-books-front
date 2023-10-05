export type IState = {
  id: number
  nome: string
  sigla: string
  região: {
    id: number
    nome: string
    sigla: string
  }
}

export type IStates = IState[]
