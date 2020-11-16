import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// thunk - позволит нам использовать асинхронные ф-ции (в dispatch теперь может принимать асинхронные ф-ции) / composeEnhancers - для redux-Devtools
// прокидываем в createStore главный reducer, который хранит все остальные reducers
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store