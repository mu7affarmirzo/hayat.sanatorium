import { authSlice } from 'features/login/AuthSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { bookedSlice } from 'features/booked/bookedSlice';
import { ApiSlice } from 'features/api/apiSlice';
import { eventsSlice } from 'features/events/eventsSlice';
import { dispatchingSlice } from 'features/dispatching/dispatchingSlice';

export const reducers = combineReducers({
  [ApiSlice.reducerPath]: ApiSlice.reducer,
  booked: bookedSlice.reducer,
  auth: authSlice.reducer,
  events: eventsSlice.reducer,
  dispatching: dispatchingSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
