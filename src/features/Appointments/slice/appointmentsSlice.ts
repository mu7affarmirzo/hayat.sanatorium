import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GetInitAppointmentTypes } from '../InitAppointment/types';
import { GetNeuroligstAppointmentTypes } from '../NeuroligstAppointment/types';
import { GetCardiologistAppointmentTypes } from '../CardiologistAppoinemnt/types';
import { GetExaminatorAppointment } from '../ExaminationDoctor/types';
import { GetFinalAppointmentPostData } from '../FinalAppointment/types';
import { GetRepeatedAppointment } from '../RepeatedAppointmnet/types';
import { GetEkgAppointmentTypes } from '../Electrocardiogramma/types';
import { GetDoctorOnDutyAppointmentTypes } from '../DoctorOnDutyAppointment/types';

export interface AppointmentsTypes {
  initial: GetInitAppointmentTypes[];
  neurologist: GetNeuroligstAppointmentTypes[];
  cardiologist: GetCardiologistAppointmentTypes[];
  on_duty_doctor_on_arrival: GetExaminatorAppointment[];
  on_duty_doctor: GetDoctorOnDutyAppointmentTypes[];
  repeated_appointment: GetRepeatedAppointment[];
  ekg_appointment: GetEkgAppointmentTypes[];
  final_appointment: GetFinalAppointmentPostData[];
  current_appointment: {};
}

const initialState = {
  appointments: {} as AppointmentsTypes,
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    setAppointments: (state, action: PayloadAction<AppointmentsTypes>) => {
      state.appointments = action.payload;
    },
    addAppointment: (
      state,
      action: PayloadAction<{
        type: keyof AppointmentsTypes;
        appointment: any;
      }>,
    ) => {
      const { type, appointment } = action.payload;
      if (Array.isArray(state.appointments[type])) {
        (state.appointments[type] as any[]).push(appointment);
      }
    },
    setCurrentAppointment: (
      state,
      action: PayloadAction<{ key: string; appointment: any }>,
    ) => {
      state.appointments.current_appointment = action.payload.appointment;
    },
    clearCurrentAppointment: (state) => {
      state.appointments.current_appointment = {};
    },
  },
});

export const {
  setAppointments,
  addAppointment,
  setCurrentAppointment,
  clearCurrentAppointment,
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
