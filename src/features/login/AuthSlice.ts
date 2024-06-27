import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    refresh: string | null
    isAuthenticated: boolean;
    role: any | null;
}

const initialState: AuthState = {
    token: null,
    isAuthenticated: false,
    refresh: null,
    role: null,
};

export const authSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{ access: string, refresh: string }>) => {
            state.token = action.payload.access;
            state.refresh = action.payload.refresh;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.token = null;
            state.refresh = null;
            state.isAuthenticated = false;
        },
        tokenRefresh: (state, action: PayloadAction<{ token: string }>) => {
            console.log({ token: action.payload }, 'token refresje')
            state.token = action.payload.token;
        },
    },
});

export const { loginSuccess, logout, tokenRefresh } = authSlice.actions;

export default authSlice.reducer;