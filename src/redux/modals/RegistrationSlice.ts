import {createSlice} from '@reduxjs/toolkit'

export interface RegistrationState {
    isOpenModal: boolean
}

const initialState: RegistrationState = {
	isOpenModal: false
}

export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		turnOnRegistration: (state) => {
			state.isOpenModal = true
		},
		turnOffRegistration: (state) => {
			state.isOpenModal = false
		},
		toggleShowRegistration: (state) => {
			state.isOpenModal = !state.isOpenModal
		}
	}
})

export const {turnOnRegistration, turnOffRegistration, toggleShowRegistration} = registrationSlice.actions