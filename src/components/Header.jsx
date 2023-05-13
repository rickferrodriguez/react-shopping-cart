import { Filters } from './Filters'

export function Header () {
  return (
    <header className='mb-8 grid gap-3'>
      <h1 className='font-amulya text-3xl text-center '>Shopping Cart 🛒</h1>
      <Filters />
    </header>
  )
}
