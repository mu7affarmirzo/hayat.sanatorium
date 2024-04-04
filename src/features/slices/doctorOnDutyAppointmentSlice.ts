import { createSlice } from '@reduxjs/toolkit';
import { AppointmentStatus } from './initAppoinmentStatusSlice';
import { DoctorOnDutyAppointmentTypes } from 'types/doctorOnDutyAppointment';

interface DoctorOnDutyAppointmentSliceTypes {
  doctorOnDutyAppointment: Partial<DoctorOnDutyAppointmentTypes>;
  status: AppointmentStatus;
}

const initialState: DoctorOnDutyAppointmentSliceTypes = {
  doctorOnDutyAppointment: {},
  status: { status: 'notCompleted' },
};

export const doctorOnDutyAppointmentSlice = createSlice({
  name: 'doctorOnDutyAppointment',
  initialState,
  reducers: {
    setDoctorOnDutyAppointment: (state, action) => {
      state.doctorOnDutyAppointment = {
        ...state.doctorOnDutyAppointment,
        ...action.payload,
      };
    },
    setDoctorOnDutyAppointmentStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setDoctorOnDutyAppointment, setDoctorOnDutyAppointmentStatus } =
  doctorOnDutyAppointmentSlice.actions;
