import { combineReducers } from '@reduxjs/toolkit'
import templateReducer from './template'
import authorizationReducer from './authorization'
/**
 * Register application wide reducers here
 * Reducers will be bind to the root state using the namespace given
 * in the object passed to the combineReducers function
 */
const rootReducer = combineReducers({
  template: templateReducer,
  authorization: authorizationReducer,
})

export default rootReducer
