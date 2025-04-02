import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice } from './Redux-Toolkit/Auth/AuthSlice'

export const store = configureStore({
  reducer: {
  auth:AuthSlice.reducer
  },
})