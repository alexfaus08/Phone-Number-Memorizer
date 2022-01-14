import { createSlice } from '@reduxjs/toolkit'

export const validDigitsSlice = createSlice({
  name: 'counter',
  initialState: {
    value: []
  },
  reducers: {
    addDigit: (state, action) => {
      state.value.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addDigit } = validDigitsSlice.actions

export default validDigitsSlice.reducer
