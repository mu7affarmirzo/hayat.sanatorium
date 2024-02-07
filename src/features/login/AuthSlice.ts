import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    role: any | null;
}

const initialState: AuthState = {
    token: null,
    isAuthenticated: false,
    role: null,
};

const authSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
