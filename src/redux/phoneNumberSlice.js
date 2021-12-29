import { createSlice } from '@reduxjs/toolkit'

export const phoneNumberSlice = createSlice({
  name: 'phoneNumber',
  initialState: {
    value: '1234',
  },
  reducers: {
    setPhoneNumber: (state, action) => {
        state.value = {...state.value, ...action.payload};
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPhoneNumber } = phoneNumberSlice.actions

export default phoneNumberSlice.reducer