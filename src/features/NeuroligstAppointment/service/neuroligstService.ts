import { ApiSlice } from 'features/api/apiSlice';
import { PostNeuroligstAppointment } from '../types/neuroligsAppointmentType';

export const neurologistService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postNeurologistAppointment: builder.mutation<
      any,
      PostNeuroligstAppointment
    >({
      query: (body) => ({
        url: '/sanatorium/appointments/neurologist-appointment',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { usePostNeurologistAppointmentMutation } = neurologistService;
