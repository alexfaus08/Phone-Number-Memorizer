import { createSlice } from '@reduxjs/toolkit'

export const validDigitsSlice = createSlice({
  name: 'counter',
  initialState: {
    // TODO: change variable name
    value: []
  },
  reducers: {
    addDigit: (state, action) => {
      state.value.push(action.payload)
    },
    resetValidDigits: (state) => {
      return {
        ...state,
        value: []
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { addDigit } = validDigitsSlice.actions

export default validDigitsSlice.reducer
