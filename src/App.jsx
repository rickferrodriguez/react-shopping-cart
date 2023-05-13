import { Header } from './components/Header'
import { Products } from './components/Products'
import { useFilters } from './hooks/useFilters'
import { products as initialProducts } from './mocks/Products.json'

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
