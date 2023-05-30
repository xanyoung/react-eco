import { configureStore } from '@reduxjs/toolkit'
import modals from './modals/slice'
import user from './user/slice'
import { AuthApi } from './auth'
import { loginSlice } from './modals/LoginSlice'
import { registrationSlice } from './modals/RegistrationSlice'
import { enterCodeSlice } from './modals/EnterCodeSlice'
import { partnersSlice } from './modals/PartnersSlice'
import { withCodeSlice } from './modals/WithCodeSlice'

export const store = configureStore({
  reducer: {
    [loginSlice.name]: loginSlice.reducer, 
    [registrationSlice.name]: registrationSlice.reducer, 
    [enterCodeSlice.name]: enterCodeSlice.reducer,
    [partnersSlice.name]: partnersSlice.reducer,
    [withCodeSlice.name]: withCodeSlice.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    user
  },
  middleware: (getDefaulMiddleware) => getDefaulMiddleware().concat([AuthApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch