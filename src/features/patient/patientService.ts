import { ApiSlice } from 'features/api/apiSlice';
import { GetMyPatients, InitAppointmentTypes } from 'types/patientTypes';

export const patientService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMyPatients: builder.query<GetMyPatients[], any>({
      query: ({ full_name, ib, word, card_type }) => ({
        url: `/sanatorium/get-my-patients`,
        method: 'GET',
        params: { full_name, ib, word, card_type },
      }),
    }),
    postInitAppointment: builder.mutation<any, InitAppointmentTypes>({
      query: (body) => ({
        url: '/sanatorium/doctors/init-appointment',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useGetAllMyPatientsQuery, usePostInitAppointmentMutation } =
  patientService;
