import {applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from "next-redux-wrapper"
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import rootSaga from "./sagas/index";


const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore = (initialState) => {
  //create a middleware using the factory function createSagaMiddleware exported by the redux-saga library
  const sagaMiddleware = createSagaMiddleware();

// connect middleware to store with applyMiddleware
  const store = createStore(
    combineReducers(rootReducer),
    initialState,
    bindMiddleware([sagaMiddleware])
  )

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(makeStore, {debug: true})
