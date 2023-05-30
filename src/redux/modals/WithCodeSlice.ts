import {createSlice} from '@reduxjs/toolkit'

export interface WithCodeState {
    isOpenModal: boolean
}

const initialState: WithCodeState = {
	isOpenModal: false
}

export const withCodeSlice = createSlice({
	name: 'withCode',
	initialState,
	reducers: {
		turnOnWithCode: (state) => {
			state.isOpenModal = true
		},
		turnOffWithCode: (state) => {
			state.isOpenModal = false
		}
	}
})

export const {turnOnWithCode, turnOffWithCode} = withCodeSlice.actions