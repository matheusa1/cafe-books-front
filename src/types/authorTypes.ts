export type ResponseAuthorType = {
  name: string
  image_url: string
}

export type ResponseAuthorsType = ResponseAuthorType[]

export type TratedAuthorType =
  | {
      value: string
      label: string
    }
  | undefined

export type TratedAuthorsType = TratedAuthorType[] | undefined
