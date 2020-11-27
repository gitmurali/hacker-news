import * as reducers from '@reducers'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'

const rootReducer = (state, action) => {
  const allReducers = combineReducers(reducers)
  return allReducers(state, action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = async () => {
  const sagaMiddleware = createSagaMiddleware()
  const initialState = {}

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  return store
}

export default configureStore
