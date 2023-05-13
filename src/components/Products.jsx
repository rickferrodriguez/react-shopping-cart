import { AddToCartIcon } from './Icons'

export function ItemProducts ({ product }) {
  const { price, title, thumbnail, description, brand } = product
  return (
    <li className='flex flex-col px-3 py-6 gap-3 bg-sky-900 rounded-3xl'>
      <strong className='font-amulya text-center text-xl'>{title}</strong>
      <img className='w-full aspect-[4/3] object-cover' src={thumbnail} alt={title} />
      <section>
        <div className='grid'>
          <small className='font-amulya text-lg text-gray-400'>{brand}</small>
          <strong className='font-amulya text-2xl'>{title}</strong>
        </div>
        <p className='line-clamp-3 text-gray-400 font-bold text-sm'>{description}</p>
      </section>
      <footer className='flex justify-between border-t-[1px] border-gray-400 pt-3'>
        <div className='grid'>
          <small className='text-sm font-amulya text-gray-400'>Price</small>
          <span className='text-2xl font-amulya'>$ {price}.<small>00</small> </span>
        </div>
        <button className='flex items-center gap-3 px-3 rounded-3xl bg-sky-400 font-amulya hover:bg-sky-600 hover:cursor-pointer'><span> <AddToCartIcon /> </span> Add to Cart </button>
      </footer>
    </li>
  )
}

export function Products ({ products }) {
  const hasProducts = products?.length > 0
  return (
    <main className='flex justify-center'>
      {
      hasProducts
        ? (
          <ul className='grid grid-cols-1 w-[300px] gap-8'>
            {
        products?.map(product => (
          <ItemProducts product={product} key={product.id} />
        ))
          }
          </ul>
          )
        : <p>There are not products</p>
    }
    </main>
  )
}
