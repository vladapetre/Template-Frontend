import { IAppContainerProps } from './types'
import React from 'react'

const AppContainer = (props: IAppContainerProps): JSX.Element => {
  const { children } = props
  return <>{{ children }}</>
}

export default AppContainer
