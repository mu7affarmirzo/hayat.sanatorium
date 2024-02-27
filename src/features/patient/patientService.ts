import { ApiSlice } from 'features/api/apiSlice';
import { GetMyPatients } from 'types/patientTypes';

export const patientService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMyPatients: builder.query<GetMyPatients[], any>({
      query: ({ full_name, ib, word, card_type }) => ({
        url: `/sanatorium/get-my-patients`,
        method: 'GET',
        params: { full_name, ib, word, card_type },
      }),
    }),
  }),
});

export const { useGetAllMyPatientsQuery } = patientService;
