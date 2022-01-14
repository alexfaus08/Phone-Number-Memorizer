import { createSlice } from '@reduxjs/toolkit'

export const validDigitsSlice = createSlice({
  name: 'counter',
  initialState: {
    // TODO: change variable name
    value: new Array(10).fill(false)
  },
  reducers: {
    addDigit: (state, action) => {
      const { id, value } = action.payload
      console.log(id, value)
      if (!state.value[id]) {
        state.value[id] = false
      }
      state.value[id] = value
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
