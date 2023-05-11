import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
    username?: string
}

const initialState: userState = {
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload
        }
    }
})

export const {setUsername} = userSlice.actions

export default userSlice.reducer