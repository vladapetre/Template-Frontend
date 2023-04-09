import { useEffect, useState } from 'react'
import Router from './routing'
import { startupService } from './services/startup'

const App = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    ;(async () => {
      await startupService.initialize()
      setIsReady(true)
    })()
  }, [])

  if (!isReady) {
    // Here you can also return a loading screen, while your app is bootstraping
    return <div>Not ready</div>
  }

  return (
    <div>
      <Router />
    </div>
  )
}
export default App
