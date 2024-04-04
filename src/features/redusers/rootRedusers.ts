import { authSlice } from 'features/login/AuthSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { bookedSlice } from 'features/booked/bookedSlice';
import { ApiSlice } from 'features/api/apiSlice';
import { eventsSlice } from 'features/events/eventsSlice';
import dispatchingSlice from 'features/Dispatching/dispatchingSlice';
import { patientSlice } from 'features/patient/patientSlice';
import appointmentStatus from 'features/slices/initAppoinmentStatusSlice';
import { consultingAndResearchSlice } from 'features/ConsultingAndResearch/model/slice/consultingAndResearchSlice';
import { proceduresSlice } from 'features/Prodcedures/model/slice/proceduresSlice';
import { medicationSlice } from 'features/Medicals/model/slice/medicationSlice';
import { repeatedAppointmentSlice } from 'features/slices/repeatedAppointmentSlice';
import { doctorOnDutyAppointmentSlice } from 'features/slices/doctorOnDutyAppointmentSlice';

export const reducers = combineReducers({
  [ApiSlice.reducerPath]: ApiSlice.reducer,
  booked: bookedSlice.reducer,
  auth: authSlice.reducer,
  events: eventsSlice.reducer,
  dispatching: dispatchingSlice,
  patients: patientSlice.reducer,
  appointmentStatus: appointmentStatus,
  consultingAndResearch: consultingAndResearchSlice.reducer,
  procedures: proceduresSlice.reducer,
  medication: medicationSlice.reducer,
  repeatedAppointment: repeatedAppointmentSlice.reducer,
  doctorOnDutyAppointment: doctorOnDutyAppointmentSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
