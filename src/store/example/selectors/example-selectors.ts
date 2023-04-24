import { RootState } from 'store'
import { IExample } from 'types/example'

export const exampleSelector = (state: RootState): IExample =>
  state.example.data
