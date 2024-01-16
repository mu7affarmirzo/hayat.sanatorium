import { combineReducers } from "@reduxjs/toolkit";
import { bookedSlice } from "../booked/bookedSlice";
import { ApiSlice } from "features/api/apiSlice";
import authSlice from "features/login/AuthSlice";

export const reducers = combineReducers({
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    booked: bookedSlice.reducer,
    auth: authSlice,
});

export type RootState = ReturnType<typeof reducers>;
