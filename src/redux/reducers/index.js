import { combineReducers } from 'redux'

import filters from './filters'
import pizzas from './pizzas'
import cart from './cart'

// объединяем все reducers
const rootReducer = combineReducers({
  filters,
  pizzas,
  cart,
})

export default rootReducer
