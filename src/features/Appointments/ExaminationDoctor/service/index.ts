import { ApiSlice } from 'features/api/apiSlice';
import { ExaminationAppointment, GetExaminatorAppointment } from '../types';

export const examinationService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExamination: builder.query<GetExaminatorAppointment, number>({
      query: (id) => ({
        url: `/sanatorium/appointments/get-update-on-duty-on-arrival-doctor-appointment/${id}`,
        method: 'GET',
      }),
    }),
    postExamination: builder.mutation<
      GetExaminatorAppointment,
      ExaminationAppointment
    >({
      query: (body) => ({
        url: '/sanatorium/appointments/on-duty-on-arrival-doctor-appointment',
        method: 'POST',
        body: body,
      }),
    }),
    patchExamation: builder.mutation<
      GetExaminatorAppointment,
      { id: number; data: ExaminationAppointment }
    >({
      query: ({ id, data }) => ({
        url: `/sanatorium/appointments/get-update-on-duty-on-arrival-doctor-appointment/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {
  usePostExaminationMutation,
  useGetExaminationQuery,
  usePatchExamationMutation
} = examinationService;
