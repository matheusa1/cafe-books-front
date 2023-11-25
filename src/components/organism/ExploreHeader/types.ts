import { ExploreFilterProps } from '../ExploreFilter/types'

export type IExploreHeader = {
  search: string
  setSearch: (search: string) => void
  filter: ExploreFilterProps
  setFilter: (filter: ExploreFilterProps) => void
}
