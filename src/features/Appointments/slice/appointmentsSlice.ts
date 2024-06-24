import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GetCardiologistAppointmentTypes } from '../CardiologistAppoinemnt/types';
import { GetDoctorOnDutyAppointmentTypes } from '../DoctorOnDutyAppointment/types';
import { GetEkgAppointmentTypes } from '../Electrocardiogramma/types';
import { GetExaminatorAppointment } from '../ExaminationDoctor/types';
import { GetFinalAppointmentPostData } from '../FinalAppointment/types';
import { GetInitAppointmentTypes } from '../InitAppointment/types';
import { GetNeuroligstAppointmentTypes } from '../NeuroligstAppointment/types';
import { GetRepeatedAppointment } from '../RepeatedAppointmnet/types';

export interface AppointmentsTypes {
  initial: GetInitAppointmentTypes[];
  neurologist: GetNeuroligstAppointmentTypes[];
  cardiologist: GetCardiologistAppointmentTypes[];
  on_duty_doctor_on_arrival: GetExaminatorAppointment[];
  on_duty_doctor: GetDoctorOnDutyAppointmentTypes[];
  repeated_appointment: GetRepeatedAppointment[];
  ekg_appointment: GetEkgAppointmentTypes[];
  final_appointment: GetFinalAppointmentPostData[];
  current_appointment: {
    key: keyof AppointmentsTypes | null;
    appointmentID: number | null;
  };
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
    clearCurrentAppointment: (state) => {
      state.appointments.current_appointment = {
        key: null,
        appointmentID: null ,
      };
    },
    setCurrentAppointmentById: (
      state,
      action: PayloadAction<{ type: keyof AppointmentsTypes; id: number }>,
    ) => {
      const { type, id } = action.payload;
      const appointment = (state.appointments[type] as any[]).find(
        (appt) => appt.id === id,
      );
      if (appointment) {
        state.appointments.current_appointment = {
          key: type,
          appointmentID: id,
        };
      } else {
        state.appointments.current_appointment = {
          key: null,
          appointmentID: null,
        };
      }
    },
  },
});

export const {
  setAppointments,
  addAppointment,
  clearCurrentAppointment,
  setCurrentAppointmentById,
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;

// Selector to get the current appointment based on the key
export const selectCurrentAppointment = (state: any) =>
  state.appointments.current_appointment;
