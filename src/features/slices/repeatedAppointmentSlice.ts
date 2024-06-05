import { createSlice } from '@reduxjs/toolkit';
import { AppointmentStatus } from './initAppoinmentStatusSlice';
import { RepeatedAppointment } from 'types/repeatedAppointment';

interface AppointmentSliceTypes {
  status: AppointmentStatus;
  currentAppointment: Partial<RepeatedAppointment>;
}

const initialState: AppointmentSliceTypes = {
  status: { status: 'notCompleted' },
  currentAppointment: {},
};

export const repeatedAppointmentSlice = createSlice({
  name: 'repeatedAppointment',
  initialState,
  reducers: {
    setAppointmentStatus: (state, action) => {
      state.status = action.payload;
    },
    setCurrentAppointment: (state, action) => {
      state.currentAppointment = {
        ...state.currentAppointment,
        ...action.payload,
      };
    },
  },
});

export const { setAppointmentStatus, setCurrentAppointment } =
  repeatedAppointmentSlice.actions;
