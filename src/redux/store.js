import { createStore } from 'redux'

import rootReducer from './reducers'

// прокидываем в createStore главный reducer, который хранит все остальные reducers
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store