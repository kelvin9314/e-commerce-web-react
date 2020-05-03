import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

import rootReducer from './root.reducer'

// define a array is more scalable to add or remove other middleware in the future
const middleware = []

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))

export const persistor = persistStore(store)

export default { store, persistor }
