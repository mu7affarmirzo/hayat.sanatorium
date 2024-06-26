import { combineReducers } from '@reduxjs/toolkit';
import appointmentsSlice from 'features/Appointments/slice/appointmentsSlice';
import consultingAndResearchReducer from 'features/ConsultingAndResearch/model/slice/consultingAndResearchSlice';
import dispatchingSlice from 'features/Dispatching/dispatchingSlice';
import patientIllnesHistorySlice from 'features/DoctorsRoleService/model/slices/patientIllnesHistorySlice';
import selectedPatientsSlice from 'features/DoctorsRoleService/model/slices/selectedPatientsSlice';
import { measuredParametersSlice } from 'features/MeasuredParams/slice/measuredParamsSlice';
import { medicationSlice } from 'features/Medicals/model/slice/medicationSlice';
import { nutritionSlice } from 'features/Nutrition/model/slice/nutritionSlice';
import { proceduresSlice } from 'features/Prodcedures/model/slice/proceduresSlice';
import { ApiSlice } from 'features/api/apiSlice';
import { bookedSlice } from 'features/booked/bookedSlice';
import { eventsSlice } from 'features/events/eventsSlice';
import { authSlice } from 'features/login/AuthSlice';
import { getIbWithPatientIdSlice } from 'features/patient/slice';
import { doctorOnDutyAppointmentSlice } from 'features/slices/doctorOnDutyAppointmentSlice';
import { doctorsPatientSidebarSlice } from 'features/slices/doctorsPatientSidebarSlice';
import appointmentStatus from 'features/slices/initAppoinmentStatusSlice';
import { repeatedAppointmentSlice } from 'features/slices/repeatedAppointmentSlice';

export const reducers = combineReducers({
  [ApiSlice.reducerPath]: ApiSlice.reducer,
  booked: bookedSlice.reducer,
  auth: authSlice.reducer,
  events: eventsSlice.reducer,
  dispatching: dispatchingSlice,
  patients: getIbWithPatientIdSlice.reducer,
  appointmentStatus: appointmentStatus,
  consultingAndResearch: consultingAndResearchReducer,
  procedures: proceduresSlice.reducer,
  medication: medicationSlice.reducer,
  nutrition: nutritionSlice.reducer,
  repeatedAppointment: repeatedAppointmentSlice.reducer,
  doctorOnDutyAppointment: doctorOnDutyAppointmentSlice.reducer,
  dynamicSidebarItems: doctorsPatientSidebarSlice.reducer,
  measuredParametersSlice: measuredParametersSlice.reducer,
  //doctors service slice here
  selectedPatients: selectedPatientsSlice,
  patientIllnesHistory: patientIllnesHistorySlice,
  appointments: appointmentsSlice,
});

export type RootState = ReturnType<typeof reducers>;
