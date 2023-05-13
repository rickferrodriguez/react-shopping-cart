import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handlePriceFilterChange = (event) => {
    const newPrice = event.target.value
    setFilters(prevState => ({
      ...prevState,
      minPrice: newPrice
    }))
  }

  const handleCategoryFilterChange = (event) => {
    const newCategory = event.target.value
    setFilters(prevState => ({
      ...prevState,
      category: newCategory
    }))
  }

  return (
    <section className='flex justify-between'>
      <div className='grid gap-2'>
        <label htmlFor={minPriceFilterId}>Min. Price:</label>
        <div className='flex gap-2 items-center'>
          <input
            type='range'
            min='0'
            max='1000'
            id={minPriceFilterId}
            value={filters.minPrice}
            onChange={handlePriceFilterChange}
          />
          <span className='w-[50px]'>{filters.minPrice}</span>
        </div>
      </div>

      <div className='grid gap-2'>
        <label htmlFor={categoryFilterId}>Categories:</label>
        <select
          onChange={handleCategoryFilterChange}
          className='rounded-2xl text-gray-900 px-2'
          name={categoryFilterId}
          id={categoryFilterId}
        >
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
