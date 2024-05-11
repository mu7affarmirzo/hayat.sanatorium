import { ApiSlice } from 'features/api/apiSlice';
import { GetRepeatedAppointment, RepeatedAppointment } from '../types';

export const repeatedAppointmentService = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getRepeatedAppointment: build.query<GetRepeatedAppointment, number>({
      query: (id) => ({
        url: `/sanatorium/appointments/get-update-repeated-appointment/${id}`,
        method: 'GET',
      }),
    }),
    postRepeatedAppointment: build.mutation<
      GetRepeatedAppointment,
      RepeatedAppointment
    >({
      query: (data) => ({
        url: '/sanatorium/appointments/repeated-appointment',
        method: 'POST',
        body: data,
      }),
    }),
    patchRepeatedAppointment: build.mutation<
      GetRepeatedAppointment,
      { id: number; data: RepeatedAppointment }
    >({
      query: ({ id, data }) => ({
        url: `/sanatorium/appointments/get-update-repeated-appointment/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const { usePostRepeatedAppointmentMutation } =
  repeatedAppointmentService;
