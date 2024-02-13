import { combineReducers } from "@reduxjs/toolkit";
import { bookedSlice } from "../Booked/bookedSlice";
import { ApiSlice } from "features/api/apiSlice";
import authSlice from "features/Login/AuthSlice";

export const reducers = combineReducers({
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    booked: bookedSlice.reducer,
    auth: authSlice,
});

export type RootState = ReturnType<typeof reducers>;
