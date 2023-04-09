import loadAuthorization from './load-authorization'
import loadConfiguration from './load-configuration'

interface IStartupService {
  initialize: () => Promise<void>
}

const startupService: IStartupService = {
  initialize: async (): Promise<void> => {
    await loadConfiguration()
    await loadAuthorization()
  },
}

export default startupService
