import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

// define a array is more scalable to add or remove other middleware in the future
const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistor }
