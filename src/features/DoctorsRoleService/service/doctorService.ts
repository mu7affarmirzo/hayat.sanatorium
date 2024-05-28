import { ApiSlice } from 'features/api/apiSlice';
import { GetMyPatients, GetPatientIbTypes } from '../types';

export const doctorService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDocPatients: builder.query<GetMyPatients[], any>({
      query: ({ full_name, ib, word, card_type }) => ({
        url: `/sanatorium/get-my-patients`,
        method: 'GET',
        params: { full_name, ib, word, card_type },
      }),
    }),
    getPatientById: builder.query<GetPatientIbTypes, number>({
      query: (id) => ({
        url: `/sanatorium/get-ib/${id}`,
        method: 'GET',
      }),
    }),
    getAppointmentsListById: builder.query<any, any>({
      query: (id) => ({
        url: `/sanatorium/appointments/list-of-appointments/${id}`,
        method: 'GET',
      }),
    }),
    removeIllnessHistory: builder.mutation<any, number>({
      query: (id) => ({
        url: `/sanatorium/del-illness-history/${id}`,
        method: 'DELETE',
      }),
    }),
    closeIllnessHistory: builder.mutation<any, number>({
      query: (id) => ({
        url: `/sanatorium/close-illness-history/${id}`,
        method: 'PATCH',
      }),
    }),
  }),
});

export const {
  useGetAllDocPatientsQuery,
  useGetPatientByIdQuery,
  useGetAppointmentsListByIdQuery,
  useRemoveIllnessHistoryMutation,
  useCloseIllnessHistoryMutation,
} = doctorService;
