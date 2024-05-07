import { ApiSlice } from 'features/api/apiSlice';
import { PostExamitationByDoctor } from '../types';

export const examinationService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postExamination: builder.mutation<any, PostExamitationByDoctor>({
      query: (body) => ({
        url: '/sanatorium/appointments/on-duty-on-arrival-doctor-appointment',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { usePostExaminationMutation } = examinationService;
