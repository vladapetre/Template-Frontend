import { RootState } from 'store'
import { ITemplate } from 'types/template'

export const templateSelector = (state: RootState): ITemplate =>
  state.template.data
