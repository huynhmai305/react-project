import {applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from "next-redux-wrapper"
import { composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './reducers/rootReducer'
import rootSaga from "./sagas";

export const makeStore = () => {
  //create a middleware using the factory function createSagaMiddleware exported by the redux-saga library
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

// connect middleware to store with applyMiddleware
  const store = createStore(
    combineReducers(rootReducer),
    composeWithDevTools(applyMiddleware(...middleware))
  )

  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

const wrapper = createWrapper(makeStore, {debug: true})

export default wrapper
