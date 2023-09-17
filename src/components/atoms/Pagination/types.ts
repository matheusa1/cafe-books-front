export type IPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems?: number
  handlePageChange: (page: number) => void
  setItemsPerPage: (itemsPerPage: number) => void
}
