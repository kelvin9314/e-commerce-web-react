import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root.reducer'

// define a array is more scalable to add or remove other middleware in the future
const middleware = [logger]

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store
