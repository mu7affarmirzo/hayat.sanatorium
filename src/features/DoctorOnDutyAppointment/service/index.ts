import { ApiSlice } from 'features/api/apiSlice';
import { DoctorOnDutyAppointmentPostData } from '../types';

const doctorOnDutyService = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    postDoctorsOnDuty: build.mutation<any, DoctorOnDutyAppointmentPostData>({
      query: (body) => ({
        url: '/sanatorium/appointments/on-duty-doctor-appointment',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { usePostDoctorsOnDutyMutation } = doctorOnDutyService;
