

import conterSlice from './conterSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    alchemy: conterSlice
  }
})

export default store;