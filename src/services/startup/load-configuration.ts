import { configurationService } from 'services/configuration'
import { IConfiguration } from 'types/configuration'
import { ConfigNotFoundException } from 'exceptions'

const getConfig = async (): Promise<IConfiguration> => {
  let jsonConfig: IConfiguration = null

  try {
    const response = await fetch('/config.json')
    jsonConfig = await response.json()
  } catch (err) {
    throw new ConfigNotFoundException('Please provide a valid config file')
  }

  return jsonConfig
}

const loadConfiguration = async (): Promise<void> => {
  const configJson = await getConfig()
  configurationService.setConfig(configJson)
}

export default loadConfiguration
