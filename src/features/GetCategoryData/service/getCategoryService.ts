import { ApiSlice } from 'features/api/apiSlice';

export const getCategoryService = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.mutation<any, { category: string }>({
      query: (body) => ({
        url: `/sanatorium/get-diagnosis-with-caterggory`,
        method: 'GET',
        body: body,
      }),
    }),
  }),
});

export const { useGetCategoryMutation } = getCategoryService;
