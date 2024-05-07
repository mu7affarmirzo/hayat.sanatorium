import { ApiSlice } from 'features/api/apiSlice';
import { FinalAppointmentPostData } from '../types';

export const finalAppointmentService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postFinalAppointment: builder.mutation<any, FinalAppointmentPostData>({
      query: (body) => ({
        url: '/sanatorium/appointments/final-appointment',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { usePostFinalAppointmentMutation } = finalAppointmentService;
