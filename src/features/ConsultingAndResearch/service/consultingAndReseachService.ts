import { ApiSlice } from 'features/api/apiSlice';
import {
  AppointmentMedServiceTypes,
  LabResearchesType,
} from 'types/appointmentTypes';

export const consultingAndResearchService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLabsGroupByCategory: builder.query<LabResearchesType[], any>({
      query: () => ({
        url: '/lis/get_labs_group_by_category/',
        method: 'GET',
      }),
    }),

    getMedServiceGroup: builder.query<AppointmentMedServiceTypes[], any>({
      query: () => ({
        url: '/sanatorium/get_med_services_group_by_category/',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetLabsGroupByCategoryQuery, useGetMedServiceGroupQuery } =
  consultingAndResearchService;
