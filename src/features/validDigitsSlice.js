import { createSlice } from '@reduxjs/toolkit'

export const validDigitsSlice = createSlice({
  name: 'counter',
  initialState: {
    // TODO: change variable name
    value: new Array(10).fill(false)
  },
  reducers: {
    addDigit: (state, action) => {
      const { digitID, rowID, value } = action.payload
      let newDigitID = digitID
      if (rowID === 1) {
        newDigitID += 3
      }
      if (rowID === 2) {
        newDigitID += 6
      }
      if (!state.value[newDigitID]) {
        state.value[newDigitID] = false
      }
      state.value[newDigitID] = value
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
