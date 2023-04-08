import { IAppContainerProps } from './types'

const AppContainer = (props: IAppContainerProps): JSX.Element => {
  const { children } = props
  return <>{{ children }}</> 
}

export default AppContainer
