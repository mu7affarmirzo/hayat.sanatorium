import { ApiSlice } from 'features/api/apiSlice';
import { GetMedicationTypes } from '../model/types/medicationTypes';

export const medicationService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMedications: builder.query<GetMedicationTypes[], any>({
      query: () => ({
        url: '/warehouse/items/',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetMedicationsQuery } = medicationService;
