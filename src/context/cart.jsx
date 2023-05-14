import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const findProductId = product => cart.findIndex(item => item.id === product.id)

  const addToCart = (product) => {
    const productId = findProductId(product)
    if (productId >= 0) {
      const newCart = structuredClone(cart)
      newCart[productId].quantity += 1
      return setCart(newCart)
    }

    return setCart(prevState => [
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  const removeFromCart = (product) => {
    return setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
