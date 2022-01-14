import { configureStore } from '@reduxjs/toolkit'
import validDigitsReducer from '../features/validDigitsSlice'
import showValidityReducer from '../features/showValiditySlice'

export default configureStore({
  reducer: {
    validDigits: validDigitsReducer,
    showValidity: showValidityReducer
  }
})
