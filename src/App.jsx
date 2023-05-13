import { Products } from './components/Products'
import { products as initialProducts } from './mocks/Products.json'

function App () {
  return (
    <>
      <h1 className='font-amulya text-2xl'>Shopping Cart 🛒</h1>
      <Products products={initialProducts} />
    </>
  )
}

export default App
