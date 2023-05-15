import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function ItemProducts ({ product, addToCart, isProductInCart, removeFromCart }) {
  const { price, title, thumbnail, description, brand } = product
  return (
    <li className='flex flex-col flex-grow pb-4 overflow-hidden bg-sky-900 rounded-3xl'>
      <img
        className='w-full aspect-[4/3] object-cover'
        src={thumbnail}
        alt={title}
      />
      <section className='flex-grow gap-1 px-3 pt-3 flex flex-col'>
        <div className='grid'>
          <small className='font-amulya text-lg text-gray-400'>{brand}</small>
          <strong className='font-amulya text-2xl'>{title}</strong>
        </div>
        <p className='line-clamp-3 text-gray-400 font-bold text-sm '>
          {description}
        </p>
        <footer className='flex flex-grow flex-col justify-end '>
          <div className='flex justify-between pt-2 border-t-[1px] border-gray-400'>
            <section className='grid'>
              <small className='text-sm font-amulya text-gray-400'>Price</small>
              <span className='text-2xl font-amulya'>
                $ {price}.<small>00</small>{' '}
              </span>
            </section>
            <button
              onClick={isProductInCart ? removeFromCart : addToCart}
              className={`flex items-center gap-3 px-3 rounded-3xl ${
            isProductInCart ? 'bg-red-700 hover:bg-red-800' : 'bg-sky-400 hover:bg-sky-600'
          } font-amulya  hover:cursor-pointer`}
            >
              <span>
                {isProductInCart
                  ? <RemoveFromCartIcon />
                  : <AddToCartIcon />}
              </span>
              {
            isProductInCart
              ? 'Remove'
              : 'Add to Cart'
          }
            </button>

          </div>
        </footer>
      </section>
    </li>
  )
}

export function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()
  const checkProductInCart = (product) => cart?.some(item => item.id === product.id)
  const hasProducts = products?.length > 0
  return (
    <main className='flex justify-center w-full'>
      {
      hasProducts
        ? (
          <ul className='grid grid-cols-1 w-[300px] gap-8 lg:grid-cols-4 lg:w-full'>
            {
        products?.map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            <ItemProducts
              product={product}
              key={product.id}
              addToCart={() => {
                addToCart(product)
              }}
              isProductInCart={isProductInCart}
              removeFromCart={() => { removeFromCart(product) }}
            />
          )
        })
          }
          </ul>
          )
        : <p>There are not products</p>
    }
    </main>
  )
}
