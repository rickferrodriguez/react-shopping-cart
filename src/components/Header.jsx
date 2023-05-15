import { Filters } from './Filters'

export function Header () {
  return (
    <header className='mb-8 flex flex-col gap-3 items-center w-full border-b-2 pb-3 border-gray-400'>
      <h1 className='font-amulya text-3xl text-center '>Shopping Cart 🛒</h1>
      <Filters />
    </header>
  )
}
