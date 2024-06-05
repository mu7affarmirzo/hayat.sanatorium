import { ApiSlice } from 'features/api/apiSlice';
import { GetProdcedures } from 'types/appointmentTypes';

export const proceduresService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProcedures: builder.query<GetProdcedures[], any>({
      query: () => ({
        url: '/sanatorium/get_procedures_group_by_category/',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetProceduresQuery } = proceduresService;
