import { toString } from 'lodash'
import { ILoginResponse, IToken } from 'types/authorization'

export const fromLoginResponseToToken = (data: ILoginResponse): IToken => {
  return { token: toString(data?.token) }
}
