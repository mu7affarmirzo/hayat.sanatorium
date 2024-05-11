import { ApiSlice } from 'features/api/apiSlice';
import { GetNeuroligstAppointmentTypes, NeuroligstAppointment } from '../types';

export const neurologistService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNeurologistAppointment: builder.query<
      GetNeuroligstAppointmentTypes,
      number
    >({
      query: (id) => ({
        url: `/sanatorium/appointments/get-update-neurologist-appointment/${id}`,
        method: 'GET',
      }),
    }),
    postNeurologistAppointment: builder.mutation<
      GetNeuroligstAppointmentTypes,
      NeuroligstAppointment
    >({
      query: (body) => ({
        url: '/sanatorium/appointments/neurologist-appointment',
        method: 'POST',
        body: body,
      }),
    }),
    patchNeurologistAppointment: builder.mutation<
      GetNeuroligstAppointmentTypes,
      {
        id: number;
        body: NeuroligstAppointment;
      }
    >({
      query: ({ body, id }) => ({
        url: `/sanatorium/doctors/update-neurologist-appointment/${id}`,
        method: 'PATCH',
        body: body,
      }),
    }),
  }),
});

export const { usePostNeurologistAppointmentMutation } = neurologistService;
