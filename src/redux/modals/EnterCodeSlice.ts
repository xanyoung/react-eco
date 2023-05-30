import {createSlice} from '@reduxjs/toolkit'

export interface EnterCodeState {
    isOpenModal: boolean
}

const initialState: EnterCodeState = {
	isOpenModal: false
}

export const enterCodeSlice = createSlice({
	name: 'enterCode',
	initialState,
	reducers: {
		turnOnEnterCode: (state) => {
			state.isOpenModal = true
		},
		turnOffEnterCode: (state) => {
			state.isOpenModal = false
		}
	}
})

export const {turnOnEnterCode, turnOffEnterCode} = enterCodeSlice.actions