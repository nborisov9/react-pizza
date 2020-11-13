import { combineReducers } from 'redux'


import filtersReducer from './filters'
import pizzasReducer from './pizzas'



// объединяем все reducers
const rootReducer = combineReducers({
	filters: filtersReducer,
	pizzas: pizzasReducer
})

export default rootReducer