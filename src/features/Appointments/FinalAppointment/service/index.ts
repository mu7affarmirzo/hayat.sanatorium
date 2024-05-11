import { ApiSlice } from 'features/api/apiSlice';
import { FinalAppointment, GetFinalAppointmentPostData } from '../types';

export const finalAppointmentService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFinalAppointment: builder.query<GetFinalAppointmentPostData, number>({
      query: (id) => ({
        url: `/sanatorium/appointments/get-update-final-appointment/${id}`,
        method: 'GET',
      }),
    }),
    postFinalAppointment: builder.mutation<
      GetFinalAppointmentPostData,
      FinalAppointment
    >({
      query: (body) => ({
        url: '/sanatorium/appointments/final-appointment',
        method: 'POST',
        body: body,
      }),
    }),
    patchFinalAppointment: builder.mutation<
      GetFinalAppointmentPostData,
      { id: number; data: FinalAppointment }
    >({
      query: ({ id, data }) => ({
        url: `/sanatorium/appointments/get-update-final-appointment/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {
  usePostFinalAppointmentMutation,
  useGetFinalAppointmentQuery,
  usePatchFinalAppointmentMutation,
} = finalAppointmentService;
