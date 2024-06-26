import { authSlice } from 'features/login/AuthSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { bookedSlice } from 'features/booked/bookedSlice';
import { ApiSlice } from 'features/api/apiSlice';
import { eventsSlice } from 'features/events/eventsSlice';
import dispatchingSlice from 'features/Dispatching/dispatchingSlice';
import { getIbWithPatientIdSlice } from 'features/patient/slice';
import appointmentStatus from 'features/slices/initAppoinmentStatusSlice';
import { consultingAndResearchSlice } from 'features/ConsultingAndResearch/model/slice/consultingAndResearchSlice';
import { proceduresSlice } from 'features/Prodcedures/model/slice/proceduresSlice';
import { medicationSlice } from 'features/Medicals/model/slice/medicationSlice';
import { repeatedAppointmentSlice } from 'features/slices/repeatedAppointmentSlice';
import { doctorOnDutyAppointmentSlice } from 'features/slices/doctorOnDutyAppointmentSlice';
import { doctorsPatientSidebarSlice } from 'features/slices/doctorsPatientSidebarSlice';
import dynamicTopTabsSlice from 'features/DoctorsRoleService/model/slices/selectedPatientsSlice';
import patientIllnesHistorySlice from 'features/DoctorsRoleService/model/slices/patientIllnesHistorySlice';
import appointmentsSlice from 'features/Appointments/slice/appointmentsSlice';
import { nutritionSlice } from 'features/Nutrition/model/slice/nutritionSlice';

export const reducers = combineReducers({
  [ApiSlice.reducerPath]: ApiSlice.reducer,
  booked: bookedSlice.reducer,
  auth: authSlice.reducer,
  events: eventsSlice.reducer,
  dispatching: dispatchingSlice,
  patients: getIbWithPatientIdSlice.reducer,
  appointmentStatus: appointmentStatus,
  consultingAndResearch: consultingAndResearchSlice.reducer,
  procedures: proceduresSlice.reducer,
  medication: medicationSlice.reducer,
  nutrition: nutritionSlice.reducer,
  repeatedAppointment: repeatedAppointmentSlice.reducer,
  doctorOnDutyAppointment: doctorOnDutyAppointmentSlice.reducer,
  dynamicSidebarItems: doctorsPatientSidebarSlice.reducer,
  //doctors service slice here
  dynamicTopTabs: dynamicTopTabsSlice,
  patientIllnesHistory: patientIllnesHistorySlice,
  appointments: appointmentsSlice,
});

export type RootState = ReturnType<typeof reducers>;
