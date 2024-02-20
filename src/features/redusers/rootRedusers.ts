import { authSlice } from 'features/login/AuthSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { bookedSlice } from 'features/booked/bookedSlice';
import { ApiSlice } from 'features/api/apiSlice';
import { patientDoctorsSlice } from 'features/doctorsPatient/patientDoctorsSlice';

export const reducers = combineReducers({
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    booked: bookedSlice.reducer,
    auth: authSlice.reducer,
    doctors: patientDoctorsSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
