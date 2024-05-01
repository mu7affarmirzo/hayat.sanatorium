import { ApiSlice } from 'features/api/apiSlice';
import { RepeatedAppointmentPostData } from '../types';

export const repeatedAppointmentService = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getRepeatedAppointment: build.query({
      query: () => '/repeatedAppointment',
    }),
    postRepeatedAppointment: build.mutation<any, RepeatedAppointmentPostData>({
      query: (data) => ({
        url: '/sanatorium/appointments/repeated-appointment',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { usePostRepeatedAppointmentMutation } =
  repeatedAppointmentService;
