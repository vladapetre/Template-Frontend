import { createReducer } from '@reduxjs/toolkit'
import { ITemplateState } from 'types/template'
import { setTemplateNameAction } from '../actions/template-actions'

const initialState: ITemplateState = {
  data: { Name: null },
}

const templateReducer = createReducer(initialState, (builder) =>
  builder.addCase(setTemplateNameAction, (state, action) => ({
    ...state,
    data: { ...state.data, Name: action.payload },
  }))
)

export default templateReducer
