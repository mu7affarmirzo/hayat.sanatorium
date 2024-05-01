import { ApiSlice } from 'features/api/apiSlice';

const cardiologistService = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    postCardiologistAppoinmnet: build.mutation({
      query: (data) => ({
        url: `/sanatorium/appointments/cardiologist-appointment`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { usePostCardiologistAppoinmnetMutation } = cardiologistService;
