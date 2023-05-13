import { AddToCartIcon } from './Icons'

export function ItemProducts ({ product }) {
  const { price, title, thumbnail, description, brand } = product
  return (
    <li className='flex flex-col px-3 py-5'>
      <strong className='font-amulya text-center text-xl'>{title}</strong>
      <img className='w-full aspect-[4/3] object-cover' src={thumbnail} alt={title} />
      <section>
        <div className='grid'>
          <small>{brand}</small>
          <strong className='font-amulya text-2xl'>{title}</strong>
        </div>
        <p>{description}</p>
      </section>
      <footer className='flex justify-between'>
        <div>
          <small>Price</small>
          <span>$ {price}.<small>00</small> </span>
        </div>
        <button>Add to Cart <span> <AddToCartIcon /> </span></button>
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
          <ul className='grid grid-cols-1 w-[300px]'>
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
