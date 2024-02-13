import { authSlice } from "features/login/AuthSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { bookedSlice } from "features/booked/bookedSlice";
import { ApiSlice } from "features/api/apiSlice";

export const reducers = combineReducers({
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    booked: bookedSlice.reducer,
    auth: authSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
