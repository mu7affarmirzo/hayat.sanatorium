import { ApiSlice } from 'features/api/apiSlice';
import {
  DoctorOnDutyAppointmentTypes,
  GetDoctorOnDutyAppointmentTypes,
} from '../types';

const doctorOnDutyService = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getDoctorsOnDuty: build.query<GetDoctorOnDutyAppointmentTypes, number>({
      query: (id) => ({
        url: `/sanatorium/appointments/get-update-on-duty-doctor-appointment/${id}`,
        method: 'GET',
      }),
    }),
    postDoctorsOnDuty: build.mutation<
      GetDoctorOnDutyAppointmentTypes,
      DoctorOnDutyAppointmentTypes
    >({
      query: (body) => ({
        url: '/sanatorium/appointments/on-duty-doctor-appointment',
        method: 'POST',
        body,
      }),
    }),
    patchDoctorsOnDuty: build.mutation<
      GetDoctorOnDutyAppointmentTypes,
      { id: number; body: DoctorOnDutyAppointmentTypes }
    >({
      query: ({ id, body }) => ({
        url: `/sanatorium/appointments/get-update-on-duty-doctor-appointment/${id}`,
        method: 'PATCH',
        body,
      }),
    }),
  }),
});

export const {
  usePostDoctorsOnDutyMutation,
  useGetDoctorsOnDutyQuery,
  usePatchDoctorsOnDutyMutation,
} = doctorOnDutyService;
