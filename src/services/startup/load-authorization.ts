import store from 'store'
import { localStorageService } from 'services/storage'

import { authorizationActions } from 'store/authorization'

const loadAuthorization = async (): Promise<void> => {
  const { setAuthTokenAction } = authorizationActions

  const token = localStorageService.getItem<string>('authorizationToken')
  if (token) {
    store.dispatch(setAuthTokenAction(token))
  }
}

export default loadAuthorization
