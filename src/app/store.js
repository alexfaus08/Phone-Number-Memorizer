import { configureStore } from '@reduxjs/toolkit'
import validDigitsReducer from '../features/validDigitsSlice'

export default configureStore({
  reducer: {
    validDigits: validDigitsReducer
  }
})
