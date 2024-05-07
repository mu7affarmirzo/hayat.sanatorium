import { ApiSlice } from 'features/api/apiSlice';
import { PostEkgAppointmentTypes } from '../types';

export const electrocardiogrammaService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postElectrocardiogramma: builder.mutation<any, PostEkgAppointmentTypes>({
      query: (body) => ({
        url: '/sanatorium/appointments/ekg-appointment',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { usePostElectrocardiogrammaMutation } =
  electrocardiogrammaService;
