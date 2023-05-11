import { configureStore } from '@reduxjs/toolkit'
import modals from './modals/slice'
import user from './user/slice'
import { AuthApi } from './auth'

export const store = configureStore({
  reducer: {
    modals, 
    [AuthApi.reducerPath]: AuthApi.reducer,
    user
  },
  middleware: (getDefaulMiddleware) => getDefaulMiddleware().concat([AuthApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch