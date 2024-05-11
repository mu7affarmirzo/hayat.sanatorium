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
    setInitAppointment: (
      state,
      action: PayloadAction<GetInitAppointmentTypes[]>,
    ) => {
      state.appointments.initial = action.payload;
    },
    setNeurologistAppointment: (
      state,
      action: PayloadAction<GetNeuroligstAppointmentTypes[]>,
    ) => {
      state.appointments.neurologist = action.payload;
    },

    setCardiologistAppointment: (
      state,
      action: PayloadAction<GetCardiologistAppointmentTypes[]>,
    ) => {
      state.appointments.cardiologist = action.payload;
    },

    setOnDutyDoctorAppointment: (
      state,
      action: PayloadAction<GetDoctorOnDutyAppointmentTypes[]>,
    ) => {
      state.appointments.on_duty_doctor = action.payload;
    },

    setOnDutyDoctorOnArrivalAppointment: (
      state,
      action: PayloadAction<GetExaminatorAppointment[]>,
    ) => {
      state.appointments.on_duty_doctor_on_arrival = action.payload;
    },

    setRepeatedAppointment: (
      state,
      action: PayloadAction<GetRepeatedAppointment[]>,
    ) => {
      state.appointments.repeated_appointment = action.payload;
    },

    setEkgAppointment: (
      state,
      action: PayloadAction<GetEkgAppointmentTypes[]>,
    ) => {
      state.appointments.ekg_appointment = action.payload;
    },

    setFinalAppointment: (
      state,
      action: PayloadAction<GetFinalAppointmentPostData[]>,
    ) => {
      state.appointments.final_appointment = action.payload;
    },
  },
});

export const {
  setAppointments,
  setInitAppointment,
  setNeurologistAppointment,
  setCardiologistAppointment,
  setOnDutyDoctorAppointment,
  setOnDutyDoctorOnArrivalAppointment,
  setRepeatedAppointment,
  setEkgAppointment,
  setFinalAppointment,
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
