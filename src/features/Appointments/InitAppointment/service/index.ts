import { ApiSlice } from 'features/api/apiSlice';
import { GetInitAppointmentTypes } from '../types';

export const initAppointmentService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInitAppointment: builder.query<GetInitAppointmentTypes, any>({
      query: (id) => ({
        url: `/sanatorium/appointments/init-appointment/${id}`,
        method: 'GET',
      }),
    }),
    postInitAppointment: builder.mutation<
      GetInitAppointmentTypes,
      Omit<GetInitAppointmentTypes, 'id'>
    >({
      query: (body) => ({
        url: '/sanatorium/appointments/init-appointment',
        method: 'POST',
        body: body,
      }),
    }),
    patchInitAppointment: builder.mutation<GetInitAppointmentTypes, any>({
      query: ({ body, id }) => ({
        url: `/sanatorium/doctors/update-init-appointment/${id}`,
        method: 'PATCH',
        body: body,
      }),
    }),
  }),
});

export const {
  useGetInitAppointmentQuery,
  usePostInitAppointmentMutation,
  usePatchInitAppointmentMutation,
} = initAppointmentService;
