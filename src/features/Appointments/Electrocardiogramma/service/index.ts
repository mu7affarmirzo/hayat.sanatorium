import { ApiSlice } from 'features/api/apiSlice';
import { EkgAppointmentTypes, GetEkgAppointmentTypes } from '../types';

export const electrocardiogrammaService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getElectrocardiogramma: builder.query<GetEkgAppointmentTypes, number>({
      query: (id) => ({
        url: `/sanatorium/appointments/get-update-ekg-appointment/${id}`,
        method: 'GET',
      }),
    }),
    postElectrocardiogramma: builder.mutation<any, EkgAppointmentTypes>({
      query: (body) => ({
        url: '/sanatorium/appointments/ekg-appointment',
        method: 'POST',
        body: body,
      }),
    }),

    patchElectrocardiogramma: builder.mutation<
      GetEkgAppointmentTypes,
      { id: number; body: EkgAppointmentTypes }
    >({
      query: ({ id, body }) => ({
        url: `/sanatorium/appointments/get-update-ekg-appointment/${id}`,
        method: 'PATCH',
        body: body,
      }),
    }),
  }),
});

export const {
  usePostElectrocardiogrammaMutation,
  useGetElectrocardiogrammaQuery,
  usePatchElectrocardiogrammaMutation,
} = electrocardiogrammaService;
