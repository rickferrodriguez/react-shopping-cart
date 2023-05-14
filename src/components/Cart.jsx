import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { ShoppingBagIcon } from './Icons'

export function ItemCart ({ item }) {
  const { title, price, thumbnail, quantity } = item
  return (
    <li className='flex gap-2 border-gray-300 pb-2 border-b-2'>
      <img
        className='w-[120px]'
        src={thumbnail}
        alt={title}
      />
      <section className='grid'>
        <strong>{title}</strong>
        <span>
          $ {price} <small>.00</small>
        </span>
      </section>
      <section className='flex gap-2 items-center'>
        <button className='px-2 bg-sky-900 rounded'>-</button>
        {quantity}
        <button className='px-2 bg-sky-900 rounded'>+</button>
      </section>
    </li>
  )
}

export function Cart () {
  const { cart } = useCart()
  const cartCheckboxId = useId()
  return (
    <section>
      <label className='absolute bg-sky-400 rounded-full p-2 top-3 right-4 z-10' htmlFor={cartCheckboxId}> <ShoppingBagIcon /> </label>
      <input className='peer' type='checkbox' id={cartCheckboxId} hidden />

      <aside className='peer-checked:flex flex-col gap-7 rounded-l-2xl hidden w-[320px] bg-sky-700 h-full px-2 absolute top-0 right-0'>
        <h2 className='font-amulya text-2xl mt-6'>Order Summary</h2>
        {
          cart.map(item => (
            <ItemCart key={item.id} item={item} />
          ))
        }
      </aside>
    </section>
  )
}
