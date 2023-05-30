import {createSlice} from '@reduxjs/toolkit'

export interface PartnersState {
    isOpenModal: boolean
}

const initialState: PartnersState = {
	isOpenModal: false
}

export const partnersSlice = createSlice({
	name: 'partners',
	initialState,
	reducers: {
		turnOnPartners: (state) => {
			state.isOpenModal = true
		},
		turnOffPartners: (state) => {
			state.isOpenModal = false
		}
	}
})

export const {turnOnPartners, turnOffPartners} = partnersSlice.actions