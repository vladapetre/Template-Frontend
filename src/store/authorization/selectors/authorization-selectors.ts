import { RootState } from 'store'

export const authStateSelector = (state: RootState): boolean =>
  !!state.authorization.token
export const authTokenSelector = (state: RootState): string =>
  state.authorization.token
export const authLoadingSelector = (state: RootState): boolean =>
  state.authorization.loading
