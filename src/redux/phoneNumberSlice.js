import { createSlice } from '@reduxjs/toolkit'

export const phoneNumberSlice = createSlice({
  name: 'phoneNumber',
  initialState: {
    value: '269-567-0819'
  },
  reducers: {
    setPhoneNumber: (state, action) => {
      return { ...state, value: action.payload }
    }
  }
})

// Action creators are generated for each case reducer function
export const { setPhoneNumber } = phoneNumberSlice.actions

export default phoneNumberSlice.reducer
