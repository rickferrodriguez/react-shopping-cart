import { useContext } from 'react'
import { FilterContext } from '../context/cart'

export function useFilters () {
  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.minPrice && (
        filters.category === 'all' ||
        filters.category === product.category
      )
    })
  }

  return { filters, setFilters, filterProducts }
}
