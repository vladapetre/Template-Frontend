import { IAppContainerProps } from './types'

const AppContainer = (props: IAppContainerProps): JSX.Element => {
  const { children } = props
  return <div>{children}</div>
}

export default AppContainer
