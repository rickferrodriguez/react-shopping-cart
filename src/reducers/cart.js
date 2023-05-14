
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  REDUCE_ITEM_FROM_CART: 'REDUCE_ITEM_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { id } = actionPayload
      const productId = state.findIndex(item => item.id === id)

      if (productId >= 0) {
        const newCart = structuredClone(state)
        newCart[productId].quantity += 1
        updateLocalStorage(newCart)
        return newCart
      }

      const newCart = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]

      updateLocalStorage(newCart)
      return newCart
    }

    case CART_ACTIONS.REDUCE_ITEM_FROM_CART:{
      const { id } = actionPayload
      const productId = state.findIndex(item => item.id === id)
      const newCart = structuredClone(state)
      if (newCart[productId].quantity <= 1) break

      newCart[productId].quantity -= 1

      updateLocalStorage(newCart)
      return newCart
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { id } = actionPayload
      const newCart = state.filter(item => item.id !== id)
      updateLocalStorage(newCart)
      return newCart
    }

    case CART_ACTIONS.CLEAR_CART: {
      updateLocalStorage([])
      return []
    }
  }

  return state
}
