import { ProcedureTypes } from 'features/Prodcedures/model/types';
import { ApiSlice } from 'features/api/apiSlice';

export const proceduresService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProcedures: builder.query<ProcedureTypes, any>({
      query: () => ({
        url: '/sanatorium/get_procedures_group_by_category/',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetProceduresQuery } = proceduresService;
