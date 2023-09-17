export type ResponseCategoryType = {
  name: string
  image_url: string
}

export type ResponseCategoriesType = ResponseCategoryType[]

export type TratedCategoryType =
  | {
      value: string
      label: string
    }
  | undefined

export type TratedCategoriesType = TratedCategoryType[] | undefined
