export type ExploreFilterProps = {
  categories: {
    value: string
    label: string
  }[]
  price: {
    min?: number
    max?: number
  }
}

export type selectProps = {
  value: string
  label: string
}[]

export type IExploreFilter = {
  filter: ExploreFilterProps
  setFilter: (filter: ExploreFilterProps) => void
}
