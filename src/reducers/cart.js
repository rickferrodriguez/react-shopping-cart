
export const cartInitialState = []

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART' : {
      const { id } = actionPayload
      const productId = state.findIndex(item => item.id === id)

      if (productId >= 0) {
        const newCart = structuredClone(state)
        newCart[productId].quantity += 1
        return newCart
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }

    case 'REDUCE_ITEM_FROM_CART' :{
      const { id } = actionPayload
      const productId = state.findIndex(item => item.id === id)
      const newCart = structuredClone(state)
      if (newCart[productId].quantity <= 1) break

      newCart[productId].quantity -= 1

      return newCart
    }

    case 'REMOVE_FROM_CART' : {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case 'CLEAR_CART' : {
      return []
    }
  }

  return state
}
