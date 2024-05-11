import { ApiSlice } from 'features/api/apiSlice';
import {
  AppointmentMedServiceTypes,
  GetProdcedures,
  LabResearchesType,
} from 'types/appointmentTypes';
import { PostDoctorOnDutyAppointmentTypes } from 'types/doctorOnDutyAppointment';
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
    postGetCategory: builder.mutation<any, { category: string }>({
      query: (body) => ({
        url: '/sanatorium/get-diagnosis-with-caterggory',
        method: 'POST',
        body: body,
      }),
    }),
    getLabsGroupByCategory: builder.query<LabResearchesType[], any>({
      query: () => ({
        url: '/lis/get_labs_group_by_category/',
        method: 'GET',
      }),
    }),
    getProceduresGroupByCategory: builder.query<GetProdcedures[], any>({
      query: () => ({
        url: '/sanatorium/get_procedures_group_by_category/',
        method: 'GET',
      }),
    }),
    getMedServiceGroup: builder.query<AppointmentMedServiceTypes[], any>({
      query: () => ({
        url: '/sanatorium/get_med_services_group_by_category/',
        method: 'GET',
      }),
    }),

    postNeurologistAppointment: builder.mutation<
      any,
      PostDoctorOnDutyAppointmentTypes
    >({
      query: (body) => ({
        url: '/sanatorium/appointments/neurologist-appointment',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useGetAllMyPatientsQuery,
  usePostInitAppointmentMutation,
  usePostGetCategoryMutation,
  useLazyGetLabsGroupByCategoryQuery,
  useGetProceduresGroupByCategoryQuery,
  useGetMedServiceGroupQuery,
  usePostNeurologistAppointmentMutation,
} = patientService;
