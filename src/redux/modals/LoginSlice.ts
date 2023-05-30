import {createSlice} from '@reduxjs/toolkit'

export interface LoginState {
    isOpenModal: boolean
}

const initialState: LoginState = {
	isOpenModal: false
}

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		turnOnLogin: (state) => {
			state.isOpenModal = true
		},
		turnOffLogin: (state) => {
			state.isOpenModal = false
		}
	}
})

export const {turnOnLogin, turnOffLogin} = loginSlice.actions