import { ApiSlice } from 'features/api/apiSlice';
import { PostExamitationByDoctor } from '../types';

export const examinationService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postExamination: builder.mutation<any, PostExamitationByDoctor>({
      query: (body) => ({
        // bu url uzgarishi kerak bo'ladi yangi api chiqazib berilganida
        url: '/sanatorium/appointments/on-duty-doctor-appointment',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});
