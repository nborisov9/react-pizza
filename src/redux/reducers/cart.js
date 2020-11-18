const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

const getTotalPrice = (arr) => arr.reduce((total, obj) => total + obj.price, 0)
const getTotalSum = (obj, path) => {
  if (path === 'totalCount') {
    return Object.keys(obj).reduce((total, id) => total + obj[id].items.length, 0)
  } else if (path === 'totalPrice') {
    return Object.keys(obj).reduce((total, id) => total + obj[id].totalPrice, 0)
  }
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload]

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      }

      const totalCount = getTotalSum(newItems, 'totalCount')
      const totalPrice = getTotalSum(newItems, 'totalPrice')

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      }
    }

    case 'REMOVE_CART_ITEM': {
      const newItems = { ...state.items }
      const currentTotalPrice = newItems[action.payload].totalPrice
      const currentTotalCount = newItems[action.payload].items.length
      delete newItems[action.payload]
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      }
    }
    case 'PLUS_CART_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ]

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      }

      const totalCount = getTotalSum(newItems, 'totalCount')
      const totalPrice = getTotalSum(newItems, 'totalPrice')

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      }
    }
    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      }

      const totalCount = getTotalSum(newItems, 'totalCount')
      const totalPrice = getTotalSum(newItems, 'totalPrice')

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      }
    }

    case 'CLEAR_CART':
      return { items: {}, totalPrice: 0, totalCount: 0 }

    default:
      return state
  }
}

export default cart
