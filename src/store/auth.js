import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: true,
    },
    reducers: {
        signup(state){
            state.isLoggedIn = true;
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice;