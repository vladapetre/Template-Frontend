import { createReducer } from '@reduxjs/toolkit'
import { IExampleState } from 'types/example'
import { setExampleNameAction } from '../actions/example-actions'

const initialState: IExampleState = {
  data: { Name: null },
}

const exampleReducer = createReducer(initialState, (builder) =>
  builder.addCase(setExampleNameAction, (state, action) => ({
    ...state,
    data: { ...state.data, Name: action.payload },
  }))
)

export default exampleReducer
