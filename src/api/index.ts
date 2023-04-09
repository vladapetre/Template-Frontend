import axios, { Axios } from 'axios'
import { isEmpty } from 'lodash'
import { configurationService } from 'services/configuration'
import store from 'store'
import {
  authorizationSelectors,
  authorizationActions,
} from 'store/authorization'
import logError from 'utils/log-error'

let instance: Axios = null

export const initApi = (): void => {
  const { authStateSelector, authTokenSelector } = authorizationSelectors
  const { logoutAction } = authorizationActions

  instance = axios.create({
    baseURL: configurationService.getConfig('AUTH_SERVER_ENDPOINT'),
  })

  instance.interceptors.request.use((config) => {
    const newConfig = { ...config }
    if (authStateSelector(store.getState())) {
      const token = authTokenSelector(store.getState())
      newConfig.headers.Authorization = `Bearer ${token}`
    }
    return newConfig
  })

  instance.interceptors.response.use(
    (res) => {
      return res
    },
    (error) => {
      logError(error)
      if (error?.response?.status === 401) {
        store.dispatch(logoutAction())
      }
      return Promise.reject(error)
    }
  )
}

export const getApi = (): Axios => {
  if (isEmpty(instance)) {
    initApi()
  }
  return instance
}
