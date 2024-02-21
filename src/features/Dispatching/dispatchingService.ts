import { ApiSlice } from 'features/api/apiSlice';
import { GetIBSTypes } from 'types/booked';
import { GetAllPatients } from 'types/dispatchingTypes';

export const dispatchingService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPatients: builder.query<GetAllPatients[], any>({
      query: ({ full_name, ib, word }) => ({
        url: '/sanatorium/dispatch/get-patients',
        method: 'GET',
        params: { full_name, ib, word },
      }),
    }),
    getPatientWithId: builder.query<GetIBSTypes, number>({
      query: (id: number) => ({
        url: `/sanatorium/dispatch/get-patients/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllPatientsQuery, useGetPatientWithIdQuery } =
  dispatchingService;
