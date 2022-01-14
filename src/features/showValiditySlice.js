import { createSlice } from '@reduxjs/toolkit'

export const showValiditySlice = createSlice({
  name: 'showValidity',
  initialState: {
    value: false
  },
  reducers: {
    showValidity: (state) => {
      return {
        ...state,
        value: true
      }
    },
    hideValidity: (state) => {
      return {
        ...state,
        value: false
      }
    }
  }
})

export const { showValidity, hideValidity } = showValiditySlice.actions

export default showValiditySlice.reducer
