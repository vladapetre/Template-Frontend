import { combineReducers } from '@reduxjs/toolkit'
import exampleReducer from './example'
import authorizationReducer from './authorization'
/**
 * Register application wide reducers here
 * Reducers will be bind to the root state using the namespace given
 * in the object passed to the combineReducers function
 */
const rootReducer = combineReducers({
  example: exampleReducer,
  authorization: authorizationReducer,
})

export default rootReducer
