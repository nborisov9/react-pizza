const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const newItems = {
        ...state.items, // нужно сохранять prev items
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      }

      const allPizzas = [].concat.apply([], Object.values(newItems)) // добавит в массив все значения кликнутого товара
      const totalPrice = allPizzas.reduce((total, item) => total + item.price, 0) // сумма кликнутого товара

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      }

    default:
      return state
  }
}

export default cart
// import in reducers/index.jsd
