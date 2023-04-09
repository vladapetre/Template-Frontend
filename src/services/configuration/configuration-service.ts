import { IConfiguration } from 'types/configuration'

interface IConfigurationService {
  setConfig: (configuration: IConfiguration) => void
  getConfig: (key: keyof IConfiguration) => string
}

let Configuration: IConfiguration = null

const configurationService: IConfigurationService = {
  setConfig: (configuration: IConfiguration): void => {
    Configuration = { ...configuration }
  },
  getConfig: (key: keyof IConfiguration): string => Configuration?.[key],
}

export default configurationService
