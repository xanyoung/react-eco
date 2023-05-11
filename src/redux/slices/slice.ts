import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface modalState {
    isVisible: boolean,
    currentModal?: string
}

const initialState: modalState = {
    isVisible: false 
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsVisible(state, action: PayloadAction<boolean>) {
            state.isVisible = action.payload
        },
        setCurrentModal(state, action: PayloadAction<string>) {
            state.currentModal = action.payload
        }
    }
})

export const {setIsVisible, setCurrentModal} = modalSlice.actions

export default modalSlice.reducer