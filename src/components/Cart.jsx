import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { ClearCart, ShoppingBagIcon } from './Icons'

export function ItemCart ({ item, addToCart, reduceItemFromCart }) {
  const { title, price, thumbnail, quantity } = item
  return (
    <li className='flex gap-2 border-gray-300 pb-2 border-b-2'>
      <img className='w-[120px] aspect-video object-cover' src={thumbnail} alt={title} />
      <section className='flex flex-grow flex-col w-[150px]'>
        <strong>{title}</strong>
        <span className='font-amulya text-lg'>
          $ {price}
          <small>.00</small>
        </span>
      </section>
      <section className='flex gap-2 items-center'>
        <button
          onClick={reduceItemFromCart}
          className='px-2 bg-sky-900 rounded'
        >
          -
        </button>
        <span className='flex justify-center w-[20px]'>{quantity}</span>
        <button onClick={addToCart} className='px-2 bg-sky-900 rounded'>
          +
        </button>
      </section>
    </li>
  )
}

export function Cart () {
  const { cart, clearCart, addToCart, reduceItemFromCart } = useCart()
  const cartCheckboxId = useId()
  return (
    <section>
      <label
        className='absolute bg-sky-400 rounded-full p-2 top-3 right-4 z-10 hover:scale-110 hover:cursor-pointer'
        htmlFor={cartCheckboxId}
      >
        {' '}
        <ShoppingBagIcon />{' '}
      </label>
      <input className='peer' type='checkbox' id={cartCheckboxId} hidden />

      <aside className='peer-checked:flex flex-col gap-7 rounded-l-2xl hidden w-[320px] bg-sky-700 h-full px-2 absolute top-0 right-0 lg:w-[500px]'>
        <h2 className='font-amulya text-2xl mt-6'>Order Summary</h2>
        <ul className='grid gap-1'>
          {cart?.map((item) => (
            <ItemCart
              key={item.id}
              item={item}
              addToCart={() => addToCart(item)}
              reduceItemFromCart={() => reduceItemFromCart(item)}
            />
          ))}

        </ul>
        {cart?.length > 0
          ? (
            <footer className='self-center'>
              <button
                onClick={() => {
                  clearCart()
                }}
                className='flex justify-center gap-2 w-[150px] bg-red-700 font-amulya p-2 rounded-2xl'
              >
                <span>
                  <ClearCart />
                </span>{' '}
                Clear Cart{' '}
              </button>
            </footer>
            )
          : (
            <p className='text-center text-sky-950 font-bold'>
              There're no products in your cart
            </p>
            )}
      </aside>
    </section>
  )
}
