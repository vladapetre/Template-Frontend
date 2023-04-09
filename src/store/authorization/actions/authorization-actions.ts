import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { localStorageService } from 'services/storage'

import { loginRequest, logoutRequest } from 'api/authorization'
import { ILoginRequest } from 'types/authorization'
import {
  AUTH__SET_TOKEN,
  AUTH__SET_LOADING,
  AUTH__LOGIN,
  AUTH__LOGOUT,
} from '../constants'

export const setAuthTokenAction = createAction<string>(AUTH__SET_TOKEN)
export const setAuthLoadingAction = createAction<boolean>(AUTH__SET_LOADING)

export const loginAction = createAsyncThunk(
  AUTH__LOGIN,
  async (data: ILoginRequest, thunkApi) => {
    // Set the loading state to true - we can use this state to show a spinner or disable the button
    thunkApi.dispatch(setAuthLoadingAction(true))

    try {
      // Fire the request and wait for the response
      const response = await loginRequest(data)
      // Soft validation on the response, so we don't populate the store with invalid data
      if (response?.token) {
        // We set the token in the store (for easy access)
        thunkApi.dispatch(setAuthTokenAction(response.token))

        // We set the token in local storage for semi-permanent storage (so we can restore it from local storage and skip the login request)
        localStorageService.setItem({ authorizationToken: response.token })
      }
    } catch (err) {
      // Handle this error depending on your business requirments
    }

    // Set the loading state to false
    thunkApi.dispatch(setAuthLoadingAction(false))
  }
)

export const logoutAction = createAsyncThunk(
  AUTH__LOGOUT,
  async (__, thunkApi) => {
    try {
      await logoutRequest()
      thunkApi.dispatch(setAuthTokenAction(null))
      localStorageService.removeItem('authorizationToken')
      window.location.href = '/'
    } catch (err) {
      // swallow exception
    }
  }
)
