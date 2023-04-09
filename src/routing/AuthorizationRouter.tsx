import { Navigate, Route, Routes } from 'react-router-dom'

const AuthorizationRouter = (): JSX.Element => {
  return (
    <Routes>
      {/* <Route path="/auth/login" element={<Auth />} />
      <Route path="/auth/register" element={<Register />} /> */}
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}

export default AuthorizationRouter
