import { authSlice } from 'features/login/AuthSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { bookedSlice } from 'features/booked/bookedSlice';
import { ApiSlice } from 'features/api/apiSlice';
import { dispatchingSlice } from 'features/Dispatching/dispatchingSlice';
import { eventsSlice } from 'features/events/eventsSlice';

export const reducers = combineReducers({
  [ApiSlice.reducerPath]: ApiSlice.reducer,
  booked: bookedSlice.reducer,
  auth: authSlice.reducer,
  dispatching: dispatchingSlice.reducer,
  events: eventsSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
