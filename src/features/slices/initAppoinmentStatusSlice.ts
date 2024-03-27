import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitAppointmentTypes } from 'types/patientTypes';

type AppointmentStatus = {
  status: 'notCompleted' | 'completed' | 'cancelled';
};

interface AppointmentSliceTypes {
  status: AppointmentStatus;
  currentAppointment: Partial<InitAppointmentTypes>;
}

const initialState: AppointmentSliceTypes = {
  status: { status: 'notCompleted' },
  currentAppointment: {},
};

const appointmentStatusSlice = createSlice({
  name: 'appointmentStatus',
  initialState,
  reducers: {
    setAppointmentStatus: (state, action: PayloadAction<AppointmentStatus>) => {
      state.status = action.payload;
    },
    setCurrentAppointment: (
      state,
      action: PayloadAction<Partial<InitAppointmentTypes>>,
    ) => {
      state.currentAppointment = action.payload;
    },
  },
});

export const { setAppointmentStatus, setCurrentAppointment } =
  appointmentStatusSlice.actions;

export default appointmentStatusSlice.reducer;
