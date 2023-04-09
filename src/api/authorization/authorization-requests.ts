import { AxiosResponse } from 'axios'
import { getApi } from 'api'
import { fromLoginResponseToToken } from 'mappers/authorization'
import { IToken, ILoginResponse, ILoginRequest } from 'types/authorization'

export const loginRequest = async (data: ILoginRequest): Promise<IToken> => {
  const response: AxiosResponse<ILoginResponse> = await getApi().post(
    '/public/authentication/login',
    data
  )
  return fromLoginResponseToToken(response.data)
}

export const logoutRequest = async (): Promise<void> => {
  await getApi().post('/private/authentication/logout')
}
