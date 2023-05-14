import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart () {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('This context is not inside the CartProvider')
  }

  return context
}
