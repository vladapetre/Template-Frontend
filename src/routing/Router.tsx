import { useAppSelector } from 'store'
import { authorizationSelectors } from 'store/authorization'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import AuthorizationRouter from './AuthorizationRouter'

const Router = (): JSX.Element => {
  const { authStateSelector } = authorizationSelectors

  const authStatus = useAppSelector(authStateSelector)

  return (
    <BrowserRouter>
      {authStatus ? <AppRouter /> : <AuthorizationRouter />}
    </BrowserRouter>
  )
}

export default Router
