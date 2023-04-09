import { createReducer } from '@reduxjs/toolkit'
import { IAuthorizationState } from 'types/authorization'
import {
  setAuthLoadingAction,
  setAuthTokenAction,
} from '../actions/authorization-actions'

const initialState: IAuthorizationState = {
  token: null,
  loading: false,
}

const authReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setAuthTokenAction, (state, action) => ({
      ...state,
      token: action.payload,
    }))
    .addCase(setAuthLoadingAction, (state, action) => ({
      ...state,
      loading: action.payload,
    }))
)

export default authReducer
