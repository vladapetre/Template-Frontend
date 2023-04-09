import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppContainer from 'components/app-container'

const AppRouter = (): JSX.Element => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsReady(true)
    })()
  }, [])

  if (!isReady) {
    return null
  }

  return (
    <AppContainer>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppContainer>
  )
}

export default AppRouter
