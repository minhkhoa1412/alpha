import {createStore,applyMiddleware} from 'redux'
import rootReducer from '../reducer'
import {createEpicMiddleware} from 'redux-observable'
import {fetchDataEpic} from '../epic'

const epicMiddleware = createEpicMiddleware()

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  )

  epicMiddleware.run(fetchDataEpic)

  return store
}