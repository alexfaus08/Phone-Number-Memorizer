import { createSlice } from '@reduxjs/toolkit'

export const showValiditySlice = createSlice({
  name: 'showValidity',
  initialState: {
    value: false
  },
  reducers: {
    toggleValidity: (state) => {
      return {
        ...state,
        value: !state.value
      }
    }
  }
})

export const { toggleValidity } = showValiditySlice.actions

export default showValiditySlice.reducer
