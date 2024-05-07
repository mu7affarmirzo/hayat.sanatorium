import { ApiSlice } from 'features/api/apiSlice';
import { GetInitAppointmentTypes, PostInitAppointmentTypes } from '../types';

export const initAppointmentService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInitAppointment: builder.query<GetInitAppointmentTypes, any>({
      query: () => ({
        url: '/sanatorium/appointments/init-appointment',
        method: 'GET',
      }),
    }),

    postInitAppointment: builder.mutation<
      GetInitAppointmentTypes,
      PostInitAppointmentTypes
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
