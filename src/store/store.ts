import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import { rootReducer } from './rootReducer'

// NOTE: there is really no need to install an additional package with extra typings for redux devtools compose, just as any the window
const composeEnhancers: typeof compose = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(reduxThunk)
  ),
)
